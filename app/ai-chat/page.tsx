"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MAX_FREE_CHATS = 7;

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState(MAX_FREE_CHATS);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load remaining count from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("galibazz_chat_remaining");
    if (saved) setRemaining(Number(saved));
  }, []);

  // Save remaining count
  useEffect(() => {
    localStorage.setItem("galibazz_chat_remaining", remaining.toString());
  }, [remaining]);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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

  return (
    <div className="h-screen flex flex-col bg-neutral-100">

      {/* Header */}
      <header className="h-14 bg-white shadow flex items-center justify-between px-4">
        <div className="font-bold text-lg">🤖 Galibazz AI</div>
        <div className="text-sm text-gray-500">
          Free chats left: {remaining}
        </div>
      </header>

      {/* Chat Area */}
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

      {/* Input Bar */}
      <div className="h-16 bg-white border-t flex items-center px-3 gap-2">
        <input
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            remaining > 0
              ? "Ask for a joke..."
              : "Free limit finished 🙂"
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
