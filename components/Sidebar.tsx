"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Load both joke sources
import enJokes from "@/app/en/jokes/jokes.json";
import hiJokes from "@/app/hi/jokes/jokes.json";

const quickTopics = [
  "Veg Jokes",
  "Shayari",
  "Double Meaning",
  "Kabir Dohe",
  "Funny Talks",
  "Desi Humor",
];

export default function Sidebar() {
  const pathname = usePathname();

  // Detect language from URL
  const isHindi = pathname.startsWith("/hi");

  // Select correct jokes data
  const jokes = isHindi ? hiJokes : enJokes;

  // Build correct base route
  const baseRoute = isHindi ? "/hi/jokes" : "/en/jokes";

  // Take latest 3 categories (or fewer if only 2 exist)
  const popularPosts = [...jokes].reverse().slice(0, 3);

  return (
    <div className="lg:col-span-4 flex flex-col gap-7 sm:gap-8">
      
      {/* ===== Popular Now ===== */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <h3 className="font-bold text-lg sm:text-xl text-text-dark">
            Popular Now
          </h3>
          <span className="material-symbols-outlined text-primary text-[22px] sm:text-[24px]">
            trending_up
          </span>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {popularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`${baseRoute}/${post.slug}`}
              className="flex gap-3 sm:gap-4 group hover:opacity-80 transition-opacity"
            >
              <div
                className="size-14 sm:size-16 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow"
                style={{
                  backgroundImage: `url('${post.image}')`,
                }}
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-xs sm:text-sm text-text-dark leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-text-muted mt-2 block">
                  New Jokes Added
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== Newsletter (unchanged) ===== */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-primary/20 relative overflow-hidden shadow-sm">
        <div className="absolute -top-6 -right-6 size-28 rounded-full bg-primary/15 blur-2xl"></div>
        <div className="size-11 sm:size-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-text-dark mb-4 sm:mb-5 shadow-md relative z-10">
          <span className="material-symbols-outlined text-[22px] sm:text-[24px]">mail</span>
        </div>
        <h3 className="font-bold text-lg sm:text-xl text-text-dark mb-2 relative z-10">
          Stay Updated
        </h3>
        <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-5 relative z-10 leading-relaxed">
          Get the best jokes delivered to your inbox.
        </p>
        <form className="flex flex-col gap-3 relative z-10">
          <input
            className="w-full rounded-lg sm:rounded-xl border-2 border-gray-200 bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary text-text-dark placeholder-text-muted/60 transition-all"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="w-full bg-primary hover:bg-yellow-500 text-text-dark font-bold py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            type="button"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-xs text-text-muted/60 mt-3 sm:mt-4 text-center relative z-10">
          We respect your privacy
        </p>
      </div>

      {/* ===== Quick Topics ===== */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg sm:text-xl text-text-dark mb-4 sm:mb-5">
          Quick Topics
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {quickTopics.map((topic) => (
            <span
              key={topic}
              className="bg-gray-50 text-text-dark px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold border border-gray-200"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
