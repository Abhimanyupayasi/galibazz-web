"use client";

import { useEffect, useState } from "react";
import randomJokes from "@/data/random-jokes.json";

export default function RandomJoke() {
  const [joke, setJoke] = useState<string | null>(null);

  useEffect(() => {
    const random =
      randomJokes[Math.floor(Math.random() * randomJokes.length)];
    setJoke(random.joke);
  }, []);

  return (
    <>
      {!joke ? (
        /* Skeleton */
        <div className="max-w-xl mx-auto mt-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
        </div>
      ) : (
        /* Joke Loaded */
        <div
          className="text-lg text-gray-800 mt-4 bg-white/5 border border-white/10 rounded-lg px-5 py-3"
          dangerouslySetInnerHTML={{ __html: joke }}
        />
      )}
    </>
  );
}
