"use client";

import {
  Facebook,
  Twitter,
  Copy,
  MessageCircle,
  Instagram,
  AtSign
} from "lucide-react";

type Props = {
  text: string;
  pageUrl: string;
};

export default function JokeShareBar({ text, pageUrl }: Props) {
  const shareText = `${text}\n\nRead more: ${pageUrl}`;

  // Encode once for URLs
  const encoded = encodeURIComponent(shareText);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareText);
    alert("Copied!");
  };

  return (
    <div className="flex gap-3 mt-4 text-gray-500">
      
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encoded}`}
        target="_blank"
        aria-label="Share on WhatsApp"
        className="hover:text-green-500 transition"
      >
        <MessageCircle size={20} />
      </a>

      {/* Instagram (opens share text — user pastes manually) */}
      <button
        onClick={copyToClipboard}
        aria-label="Copy for Instagram"
        className="hover:text-pink-500 transition"
      >
        <Instagram size={20} />
      </button>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encoded}`}
        target="_blank"
        aria-label="Share on Facebook"
        className="hover:text-blue-600 transition"
      >
        <Facebook size={20} />
      </a>

      {/* Threads (uses copy) */}
      <button
        onClick={copyToClipboard}
        aria-label="Copy for Threads"
        className="hover:text-gray-900 transition"
      >
        <AtSign size={20} />
      </button>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encoded}`}
        target="_blank"
        aria-label="Share on Twitter"
        className="hover:text-sky-500 transition"
      >
        <Twitter size={20} />
      </a>

      {/* Copy */}
      <button
        onClick={copyToClipboard}
        aria-label="Copy text"
        className="hover:text-gray-900 transition"
      >
        <Copy size={20} />
      </button>
    </div>
  );
}
