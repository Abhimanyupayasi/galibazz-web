import Header from "@/components/Header";
import jokes from "../jokes.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { langAlternates } from "@/lib/langAlternates";
type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ page?: string }>;
};

const JOKES_PER_PAGE = 10;

/* ===== SEO ===== */
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
      images: [joke.image],
    },
    twitter: {
      title: joke.seo.twitterTitle,
      description: joke.seo.twitterDescription,
    },
    ...langAlternates(`jokes/${slug}`),
  };
}

/* ===== PAGE ===== */
export default async function JokeSlugPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page } = (await searchParams) || {};

  /* Find category index */
  const currentIndex = jokes.findIndex((j) => j.slug === slug);
  if (currentIndex === -1) notFound();

  const jokeCategory = jokes[currentIndex];

  /* Prev / Next category looping */
  const prevCategory =
    currentIndex === 0 ? jokes[jokes.length - 1] : jokes[currentIndex - 1];

  const nextCategory =
    currentIndex === jokes.length - 1 ? jokes[0] : jokes[currentIndex + 1];

  /* Pagination inside category */
  const currentPage = Number(page) || 1;
  const startIndex = (currentPage - 1) * JOKES_PER_PAGE;
  const endIndex = startIndex + JOKES_PER_PAGE;

  const totalPages = Math.ceil(jokeCategory.jokes.length / JOKES_PER_PAGE);
  const paginatedJokes = jokeCategory.jokes.slice(startIndex, endIndex);

  return (
    <>
      {/* Header above arrows */}
      <div className="relative z-20">
        <Header />
      </div>

      <main className="bg-gray-50 text-gray-900 min-h-screen relative">

        {/* ===== FIXED CATEGORY ARROWS ===== */}
        <Link
          href={`/jokes/${prevCategory.slug}`}
          aria-label="Previous Category"
          className="
            fixed left-3 top-1/2 -translate-y-1/2 
            text-gray-300 hover:text-gray-700 
            transition z-10
          "
        >
          <ChevronLeft size={40} strokeWidth={2.2} />
        </Link>

        <Link
          href={`/jokes/${nextCategory.slug}`}
          aria-label="Next Category"
          className="
            fixed right-3 top-1/2 -translate-y-1/2 
            text-gray-300 hover:text-gray-700 
            transition z-10
          "
        >
          <ChevronRight size={40} strokeWidth={2.2} />
        </Link>

        {/* ===== PAGE CONTAINER (fixed width, no layout shift) ===== */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* ===== CATEGORY HEADER ===== */}
          <section className="pt-10 pb-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {jokeCategory.title}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              {jokeCategory.description}
            </p>

            <div className="flex justify-center">
              <img
                src={jokeCategory.image}
                alt={jokeCategory.title}
                className="w-52 h-52 object-cover rounded-xl shadow-md"
              />
            </div>
          </section>

          {/* ===== JOKES LIST ===== */}
          <section className="pb-10 space-y-6">
            {paginatedJokes.map((content, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-xl border border-gray-100 
                  p-6 text-lg text-gray-800 leading-relaxed 
                  shadow-sm overflow-hidden
                "
              >
                <div
                  className="
                    prose max-w-none
                    [&_pre]:whitespace-pre-wrap
                    [&_pre]:break-words
                    [&_pre]:bg-gray-100
                    [&_pre]:p-4
                    [&_pre]:rounded-lg
                    [&_pre]:overflow-x-auto
                  "
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            ))}
          </section>

          {/* ===== PAGINATION INSIDE CATEGORY ===== */}
          {totalPages > 1 && (
            <section className="pb-12 flex justify-center gap-3 flex-wrap">
              {currentPage > 1 && (
                <Link
                  href={`/jokes/${slug}?page=${currentPage - 1}`}
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
                    href={`/jokes/${slug}?page=${pageNum}`}
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
                  href={`/jokes/${slug}?page=${currentPage + 1}`}
                  className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  Next →
                </Link>
              )}
            </section>
          )}

          {/* ===== PREV / NEXT CATEGORY TITLES ===== */}
          <section className="pb-16 flex justify-between text-sm text-gray-600">
            <Link
              href={`/jokes/${prevCategory.slug}`}
              className="hover:text-gray-900"
            >
              ← {prevCategory.title}
            </Link>

            <Link
              href={`/jokes/${nextCategory.slug}`}
              className="hover:text-gray-900"
            >
              {nextCategory.title} →
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}
