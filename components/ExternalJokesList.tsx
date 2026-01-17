import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JokeShareBar from "@/components/JokeShareBar";

type Joke = {
  id: number;
  text: string;
};

const JOKES_PER_PAGE = 10;

async function getExternalJokes(): Promise<Joke[]> {
  const res = await fetch("http://localhost:3000/api/external-jokes", {
    cache: "no-store",
  });

  if (!res.ok) return [];
  return res.json();
}

// break on comma
function formatJoke(text: string) {
  return text.split(",").map((line, i) => (
    <p key={i} className="leading-relaxed">
      {line.trim()}
    </p>
  ));
}

export default async function ExternalJokesList({
  page,
}: {
  page: number;
}) {
  const jokes = await getExternalJokes();

  const totalPages = Math.ceil(jokes.length / JOKES_PER_PAGE);
  const start = (page - 1) * JOKES_PER_PAGE;
  const paginated = jokes.slice(start, start + JOKES_PER_PAGE);

  // current page url for sharing
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/en/jokes/external?page=${page}`;

  return (
    <section className="max-w-4xl mx-auto px-4 space-y-6">

      {paginated.map((joke) => (
        <div
          key={joke.id}
          className="bg-white border rounded-xl shadow-sm p-5 text-lg hover:shadow-md transition"
        >
          {formatJoke(joke.text)}

          {/* Copy + Share bar */}
          <div className="mt-4">
            <JokeShareBar text={joke.text} pageUrl={pageUrl} />
          </div>
        </div>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-8">

          {page > 1 && (
            <Link
              href={`?page=${page - 1}`}
              className="flex items-center gap-1 px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
              Prev
            </Link>
          )}

          <span className="px-4 py-2 rounded-lg bg-gray-900 text-white">
            Page {page} of {totalPages}
          </span>

          {page < totalPages && (
            <Link
              href={`?page=${page + 1}`}
              className="flex items-center gap-1 px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Next
              <ChevronRight size={18} />
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
