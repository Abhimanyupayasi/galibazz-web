"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Import both JSONs once
import enJokes from "@/app/en/jokes/jokes.json";
import hiJokes from "@/app/hi/jokes/jokes.json";

export default function FreshContent() {
  const pathname = usePathname();

  // Detect language from URL
  const isHindi = pathname.startsWith("/hi");

  // Pick correct jokes source
  const jokes = isHindi ? hiJokes : enJokes;

  // Build correct base route
  const baseRoute = isHindi ? "/hi/jokes" : "/en/jokes";

  // Get latest 6 categories
  const latest = [...jokes].reverse().slice(0, 6);

  return (
    <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
      
      {/* Heading */}
      <div className="flex items-center gap-3 sm:gap-4">
        <h2 className="text-xl sm:text-2xl font-black text-text-dark whitespace-nowrap">
          Fresh Jokes
        </h2>
        <div className="h-1 flex-grow bg-gray-200 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 lg:gap-x-6 lg:gap-y-12">
        {latest.map((item) => (
          <Link
            key={item.slug}
            href={`${baseRoute}/${item.slug}`}
            className="group"
          >
            <article className="flex flex-col gap-3 sm:gap-4">

              {/* Image */}
              <div
                className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-video bg-gray-200 shadow-md group-hover:shadow-lg transition-shadow duration-200"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold text-text-dark uppercase tracking-widest shadow-md">
                  New
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <h2 className="text-base sm:text-lg md:text-xl font-bold leading-snug text-text-dark group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h2>
                <p className="text-text-muted text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
