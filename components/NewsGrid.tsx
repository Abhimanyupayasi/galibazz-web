"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NewsItem } from "@/types/news";

export default function NewsGrid({ news }: { news: NewsItem[] }) {
  return (
    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item, i) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <Link href={`/news/${item.slug}`} className="block h-full">
            <article className="group relative h-full rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all">

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">

                {/* Badge */}
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full
                  ${item.what === "viral" && "bg-red-500 text-white"}
                  ${item.what === "hot" && "bg-orange-500 text-white"}
                  ${item.what === "latest" && "bg-yellow-400 text-black"}`}
                >
                  🔥 {item.what.toUpperCase()}
                </span>

                <h2 className="text-lg font-bold group-hover:text-yellow-600">
                  {item.title}
                </h2>

                <div className="text-sm text-zinc-500 flex flex-wrap gap-3">
                  <span>✍️ {item.author}</span>
                  <span>📅 {item.date}</span>
                  <span>⏰ {item.time}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-100 px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
