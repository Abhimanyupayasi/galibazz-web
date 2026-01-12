"use client";

import { useEffect } from "react";
import RandomJoke from "./RandomJoke";

export default function JokesHero() {
  useEffect(() => {
    // simple floating emoji animation
    const emojis = document.querySelectorAll(".emoji-float");
    emojis.forEach((emoji, i) => {
      emoji.animate(
        [
          { transform: "translateY(0px)" },
          { transform: "translateY(-20px)" },
          { transform: "translateY(0px)" }
        ],
        {
          duration: 3000 + i * 500,
          iterations: Infinity
        }
      );
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[50vh] bg-gradient-to-br from-yellow-50 to-pink-50 overflow-hidden">
      
      {/* Floating Emojis */}
      <div className="absolute top-10 left-10 text-4xl emoji-float">😂</div>
      <div className="absolute top-20 right-16 text-4xl emoji-float">🤣</div>
      <div className="absolute bottom-16 left-20 text-4xl emoji-float">😆</div>
      <div className="absolute bottom-10 right-10 text-4xl emoji-float">😹</div>

      <h1 className="text-5xl font-bold mb-4">
        Laugh Out Loud Every Day
      </h1>
     <RandomJoke/>
    </section>
  );
}
