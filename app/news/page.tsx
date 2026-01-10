import Link from "next/link";
import newsData from "./news.json";
import Header from "@/components/Header";

export default function NewsPage() {
  return (
    <>
      <Header />

      {/* Main Section */}
      <section className="min-h-screen bg-[#FCFBF9] text-zinc-900 px-6 py-12">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            🔥 Galibazz{" "}
            <span className="text-yellow-500">Viral News</span>
          </h1>

          <p className="text-zinc-600 mt-3 max-w-2xl leading-relaxed">
            Jokes 😂 | Tagda Content 💪 | Internet Tod Moments 🚀  
            <br />
            Fast. Fun. Fearless.
          </p>
        </div>

        {/* News Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <Link
              key={`${news.slug}-${index}`}
              href={`/news/${news.slug}`}
              className="block"
            >
              <article className="group relative h-full rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={news.poster}
                    alt={news.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold bg-yellow-400 text-black px-3 py-1 rounded-full">
                    🚀 VIRAL
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-bold leading-snug transition-colors group-hover:text-yellow-600">
                    {news.title}
                  </h2>

                  {/* Meta */}
                  <div className="text-sm text-zinc-500 flex flex-wrap gap-3">
                    <span>✍️ {news.author}</span>
                    <span>📅 {news.date}</span>
                    <span>⏰ {news.time}</span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent" />
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
