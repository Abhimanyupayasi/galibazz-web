"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bot from '../../imgs/icons8-bot-94.png'

const MAX_FREE_CHATS = 7;
const CHAT_STORAGE_KEY = "galibazz_chat_messages";
const CHAT_TIME_KEY = "galibazz_chat_timestamp";
const THREE_DAYS = 3 * 24 * 60 * 60 * 1000; // ms

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState(MAX_FREE_CHATS);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // ---------------------------
  // Load saved chat on startup
  // ---------------------------
  useEffect(() => {
    const savedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
    const savedTime = localStorage.getItem(CHAT_TIME_KEY);

    if (savedMessages && savedTime) {
      const timeDiff = Date.now() - Number(savedTime);

      // If older than 3 days → clear storage
      if (timeDiff > THREE_DAYS) {
        localStorage.removeItem(CHAT_STORAGE_KEY);
        localStorage.removeItem(CHAT_TIME_KEY);
      } else {
        setMessages(JSON.parse(savedMessages));
      }
    }
  }, []);

  // ---------------------------
  // Save chat whenever messages change
  // ---------------------------
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
      localStorage.setItem(CHAT_TIME_KEY, Date.now().toString());
    }
  }, [messages]);

  // ---------------------------
  // Daily quota reset (unchanged)
  // ---------------------------
  useEffect(() => {
    const savedRemaining = localStorage.getItem("galibazz_chat_remaining");
    const lastReset = localStorage.getItem("galibazz_chat_last_reset");

    const today = new Date().toDateString();

    if (lastReset !== today) {
      localStorage.setItem("galibazz_chat_remaining", MAX_FREE_CHATS.toString());
      localStorage.setItem("galibazz_chat_last_reset", today);
      setRemaining(MAX_FREE_CHATS);
    } else if (savedRemaining) {
      setRemaining(Number(savedRemaining));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("galibazz_chat_remaining", remaining.toString());
  }, [remaining]);

  // ---------------------------
  // Auto-scroll
  // ---------------------------
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // ---------------------------
  // Send message (same logic)
  // ---------------------------
  async function send() {
    if (!input.trim()) return;
    if (remaining <= 0) return;

    const userMessage = input;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);
    setRemaining((r) => r - 1);

    const res = await fetch("/api/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "ai", text: data.reply || "AI Error 😅" }
    ]);

    setLoading(false);
  }

  // ---------------------------
  // UI (unchanged)
  // ---------------------------
  return (
    <div className="h-screen flex flex-col bg-neutral-100">
      <header className="h-14 bg-white shadow  px-4">
        <div className="font-bold flex items-center h-full text-lg">
          <img src={bot.src} alt="Galibazz AI" className="inline h-10 w-10" />
          <span className="pt-2">Galibazz AI Chat</span>
        </div>
        <div className="text-sm text-gray-500">
          Free chats left: {remaining}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-white text-gray-800 shadow mr-auto"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {loading && (
          <div className="bg-white px-4 py-2 rounded-2xl shadow text-gray-500 text-sm w-fit">
            Galibazz AI is typing...
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="h-16 bg-white border-t flex items-center px-3 gap-2">
        <input
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            remaining > 0
              ? "Ask for a joke..."
              : "आपका आज का फ्री quota खत्म हो गया 😅 कल फिर मिलते हैं!"
          }
          disabled={remaining <= 0 || loading}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />

        <button
          onClick={send}
          disabled={remaining <= 0 || loading}
          className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
