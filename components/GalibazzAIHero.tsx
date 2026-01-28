import Link from "next/link";

export default function GalibazzAIHero() {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-6 sm:p-8 text-white shadow-lg">

        {/* Decorative Emoji */}
        <div className="absolute right-4 top-4 text-5xl opacity-20 select-none">
          🤖🤣
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Galibazz AI
        </h2>

        <p className="text-sm sm:text-base opacity-90 mb-4 max-w-xl">
          बात करो हमारे मज़ेदार Joke AI से 😄  
          Funny, bad और cheeky जोक्स — सब हिंदी में!
        </p>

        <Link
          href="/ai-chat"
          className="inline-flex items-center gap-2 bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-pink-100 transition"
        >
          <span className="material-symbols-outlined text-lg">
            smart_toy
          </span>
          Chat with Galibazz AI
        </Link>
      </div>
    </div>
  );
}
