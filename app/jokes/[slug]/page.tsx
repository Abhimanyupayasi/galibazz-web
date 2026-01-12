import Header from "@/components/Header";
import jokes from "../jokes.json";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ page?: string }>;
};

const JOKES_PER_PAGE = 10;

/* ✅ SEO unchanged */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const joke = jokes.find((j) => j.slug === slug);
  if (!joke) return {};

  return {
    title: joke.seo.title,
    description: joke.seo.description,
    openGraph: {
      title: joke.seo.ogTitle,
      description: joke.seo.ogDescription,
      images: [joke.image]
    },
    twitter: {
      title: joke.seo.twitterTitle,
      description: joke.seo.twitterDescription
    }
  };
}

/* ✅ PAGE */
export default async function JokeSlugPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page } = (await searchParams) || {};

  const jokeCategory = jokes.find((j) => j.slug === slug);
  if (!jokeCategory) notFound();

  const currentPage = Number(page) || 1;
  const startIndex = (currentPage - 1) * JOKES_PER_PAGE;
  const endIndex = startIndex + JOKES_PER_PAGE;

  const totalPages = Math.ceil(
    jokeCategory.jokes.length / JOKES_PER_PAGE
  );

  const paginatedJokes = jokeCategory.jokes.slice(
    startIndex,
    endIndex
  );

  return (
    <>
      <Header />

      <main className="bg-gray-50 text-gray-900 min-h-screen">

        {/* HEADER */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-8 flex gap-8 items-center">
          <img
            src={jokeCategory.image}
            alt={jokeCategory.title}
            className="w-48 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {jokeCategory.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {jokeCategory.description}
            </p>
          </div>
        </section>

        {/* JOKES */}
        <section className="max-w-6xl mx-auto px-6 pb-12 space-y-6">
          {paginatedJokes.map((content, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-lg text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ))}
        </section>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <section className="max-w-6xl mx-auto px-6 pb-16 flex justify-center gap-3">

            {/* Prev */}
            {currentPage > 1 && (
              <Link
                href={`/jokes/${slug}?page=${currentPage - 1}`}
                className="px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-100"
              >
                ← Prev
              </Link>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <Link
                  key={pageNum}
                  href={`/jokes/${slug}?page=${pageNum}`}
                  className={`px-4 py-2 rounded-lg border ${
                    pageNum === currentPage
                      ? "bg-gray-900 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </Link>
              );
            })}

            {/* Next */}
            {currentPage < totalPages && (
              <Link
                href={`/jokes/${slug}?page=${currentPage + 1}`}
                className="px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-100"
              >
                Next →
              </Link>
            )}
          </section>
        )}

      </main>
    </>
  );
}
