import Header from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JokeShareBar from "@/components/JokeShareBar";

type Props = {
  data: any[];
  basePath: string;
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ page?: string }>;
};

const PER_PAGE = 10;

export default async function SlugTemplate({
  data,
  basePath,
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { page } = (await searchParams) || {};

  const index = data.findIndex((j) => j.slug === slug);
  if (index === -1) notFound();

  const current = data[index];
  const prev = index === 0 ? data[data.length - 1] : data[index - 1];
  const next = index === data.length - 1 ? data[0] : data[index + 1];

  const currentPage = Number(page) || 1;
  const start = (currentPage - 1) * PER_PAGE;
  const totalPages = Math.ceil(current.jokes.length / PER_PAGE);
  const paginated = current.jokes.slice(start, start + PER_PAGE);

  return (
    <>
      <div className="z-20 fixed top-0 left-0 w-full">
        <Header />
      </div>

      <main className="bg-gray-50 text-gray-900 min-h-screen relative pt-12">

        <Link
          href={`${basePath}/${prev.slug}`}
          className="fixed left-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-700 z-10"
        >
          <ChevronLeft size={40} strokeWidth={2.2} />
        </Link>

        <Link
          href={`${basePath}/${next.slug}`}
          className="fixed right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-700 z-10"
        >
          <ChevronRight size={40} strokeWidth={2.2} />
        </Link>

        <div className="max-w-5xl mx-auto px-6 md:px-10">

          <section className="pt-6 pb-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {current.title}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              {current.description}
            </p>

            <div className="flex justify-center">
              <img
                src={current.image}
                alt={current.title}
                className="h-52 object-cover rounded-xl shadow-md"
              />
            </div>
          </section>

          <section className="pb-10 space-y-6">
            {paginated.map((content: string, i: number) => {
              const formatted = content.replace(/\n/g, "<br/>");
              const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${basePath}/${slug}`;

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200
                             p-6 md:p-7 text-lg leading-relaxed shadow-sm"
                >
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatted }}
                  />
                  <JokeShareBar text={content} pageUrl={pageUrl} />
                </div>
              );
            })}
          </section>

          {totalPages > 1 && (
            <section className="pb-12 flex justify-center gap-3 flex-wrap">
              {currentPage > 1 && (
                <Link
                  href={`${basePath}/${slug}?page=${currentPage - 1}`}
                  className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  ← Prev
                </Link>
              )}

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <Link
                    key={p}
                    href={`${basePath}/${slug}?page=${p}`}
                    className={`px-4 py-2 rounded-md border ${
                      p === currentPage
                        ? "bg-gray-900 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}

              {currentPage < totalPages && (
                <Link
                  href={`${basePath}/${slug}?page=${currentPage + 1}`}
                  className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  Next →
                </Link>
              )}
            </section>
          )}

          <section className="pb-16 flex justify-between text-sm text-gray-600">
            <Link href={`${basePath}/${prev.slug}`} className="hover:text-gray-900">
              ← {prev.title}
            </Link>
            <Link href={`${basePath}/${next.slug}`} className="hover:text-gray-900">
              {next.title} →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
