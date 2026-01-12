"use client";

import { useEffect, useState } from "react";
import randomJokes from "@/app/jokes/random-jokes.json";

export default function RandomJoke() {
  const [joke, setJoke] = useState<string | null>(null);

  useEffect(() => {
    const random =
      randomJokes[Math.floor(Math.random() * randomJokes.length)];
    setJoke(random.joke);
  }, []);

  if (!joke) return null; // prevents SSR mismatch

  return (
    <div
      className="text-lg text-gray-800 mt-4 bg-white/5 border border-white/10 rounded-lg px-5 py-3"
      dangerouslySetInnerHTML={{ __html: joke }}
    />
  );
}
