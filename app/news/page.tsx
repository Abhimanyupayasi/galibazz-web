import Header from "@/components/Header";
import NewsGrid from "@/components/NewsGrid";
import newsData from "./news.json";
import { getUniqueNews } from "@/utils/uniqueNews";
import { NewsItem } from "@/types/news";

const uniqueNews = getUniqueNews(newsData as NewsItem[]);

export default function NewsPage() {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#FCFBF9] text-zinc-900 px-6 py-12">
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            🔥 Galibazz <span className="text-yellow-500">Viral News</span>
          </h1>
          <p className="text-zinc-600 mt-3 max-w-2xl">
            Jokes 😂 | Tagda Content 💪 | Internet Tod Moments 🚀
          </p>
        </div>

        <NewsGrid news={uniqueNews} />
      </section>
    </>
  );
}
