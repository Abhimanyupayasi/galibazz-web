import Header from "@/components/Header";
import newsData from "../news.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">😢 News not found</h2>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-white ">
      <Header/>
      <div className="max-w-4xl mx-auto py-10 px-4" >
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
          {news.title}
        </h1>

        {/* Image */}
        <div className="rounded-3xl flex justify-center items-center w-full overflow-hidden mb-8 ">
          <img
            src={news.poster}
            alt={news.title}
            className="w-6/12 object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 mb-4">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
            🔥 TRENDING
          </span>
          <span>✍️ {news.author}</span>
          <span>📅 {news.date}</span>
          <span>⏰ {news.time}</span>
        </div>

        {/* Title */}
        

        {/* Content */}
        <div className="space-y-5 text-lg text-zinc-200 leading-relaxed">
          {news.description.map((line, index) => (
            <p key={index}>👉 {line}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-zinc-800 text-zinc-500 text-sm">
          🚀 Published by <span className="text-yellow-400 font-semibold">Galibazz Media Network</span>
        </div>
      </div>
    </article>
  );
}
