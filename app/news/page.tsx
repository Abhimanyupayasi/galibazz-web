import Link from "next/link";
import newsData from "./news.json";
import Header from "@/components/Header";

export default function NewsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-12">
      <Header/>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          🔥 Galibazz <span className="text-yellow-400">Viral News</span>
        </h1>
        <p className="text-zinc-400 mt-3 max-w-2xl">
          Jokes 😂 | Tagda Content 💪 | Internet Tod Moments 🚀  
          <br />Fast. Fun. Fearless.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <Link key={news.slug} href={`/news/${news.slug}`}>
            <article className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-yellow-400 transition-all duration-300">
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={news.poster}
                  alt={news.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                
                {/* Badge */}
                <span className="inline-block text-xs font-semibold bg-yellow-400 text-black px-3 py-1 rounded-full">
                  🚀 VIRAL
                </span>

                <h2 className="text-lg font-bold leading-snug group-hover:text-yellow-400 transition">
                  {news.title}
                </h2>

                <div className="text-sm text-zinc-400 flex flex-wrap gap-2">
                  <span>✍️ {news.author}</span>
                  <span>📅 {news.date}</span>
                  <span>⏰ {news.time}</span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-t from-yellow-400/10 via-transparent to-transparent" />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
