import Link from "next/link";
import Image from "next/image";
import jokes from "./jokes.json";
import Header from "@/components/Header";
import JokesHero from "@/components/JokesHero";

type Props = {
  searchParams?: Promise<{ page?: string }>;
};

const CARDS_PER_PAGE = 12;

export default async function JokesPage({ searchParams }: Props) {
  const { page } = (await searchParams) || {};
  const currentPage = Number(page) || 1;

  const start = (currentPage - 1) * CARDS_PER_PAGE;
  const end = start + CARDS_PER_PAGE;

  const totalPages = Math.ceil(jokes.length / CARDS_PER_PAGE);
  const paginated = jokes.slice(start, end);

  return (
    <main>
      <Header />
      <JokesHero />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Joke Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden 
                         transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* ✅ Optimized Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3} 
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>

                <Link
                  href={`/en/jokes/${item.slug}`}
                  className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination unchanged */}
      {totalPages > 1 && (
        <section className="flex justify-center gap-3 pb-16">
          {currentPage > 1 && (
            <Link
              href={`/jokes?page=${currentPage - 1}`}
              className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100"
            >
              ← Prev
            </Link>
          )}

          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <Link
                key={pageNum}
                href={`/jokes?page=${pageNum}`}
                className={`px-4 py-2 rounded-md border ${
                  pageNum === currentPage
                    ? "bg-gray-900 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </Link>
            );
          })}

          {currentPage < totalPages && (
            <Link
              href={`/jokes?page=${currentPage + 1}`}
              className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100"
            >
              Next →
            </Link>
          )}
        </section>
      )}
    </main>
  );
}
