import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

type Props = {
  data: any[];
  basePath: string;
  title: string;
  hero?: React.ReactNode;
  searchParams?: Promise<{ page?: string }>;
};

const CARDS_PER_PAGE = 12;

export default async function ListingTemplate({
  data,
  basePath,
  title,
  hero,
  searchParams,
}: Props) {
  const { page } = (await searchParams) || {};
  const currentPage = Number(page) || 1;

  const start = (currentPage - 1) * CARDS_PER_PAGE;
  const end = start + CARDS_PER_PAGE;

  const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);
  const paginated = data.slice(start, end);

  return (
    <main>
      <Header />
      {hero}

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((item, index) => (
            <div
              key={item.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden
                         transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
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
                  href={`${basePath}/${item.slug}`}
                  className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {totalPages > 1 && (
        <section className="flex justify-center gap-3 pb-16">
          {currentPage > 1 && (
            <Link
              href={`${basePath}?page=${currentPage - 1}`}
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
                href={`${basePath}?page=${pageNum}`}
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
              href={`${basePath}?page=${currentPage + 1}`}
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
