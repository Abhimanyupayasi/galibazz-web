import Header from "@/components/Header";
import Link from "next/link";
import { Frown, Laugh, Flame, Sparkles } from "lucide-react";

export default function JokeNotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center px-6">

        <div className="max-w-4xl w-full text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Frown size={70} className="text-gray-400" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Oops! Joke Category Not Found
          </h1>

          <p className="text-gray-600 text-lg mb-10">
            The joke category you’re looking for doesn’t exist.  
            But don’t worry — we have plenty of laughs waiting for you 😄
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              href="/jokes"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Browse All Jokes
            </Link>

            <Link
              href="/"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Go Home
            </Link>
          </div>

          {/* Fun Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <Link href="/jokes" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
                <Laugh className="mx-auto text-yellow-500 mb-3" size={32} />
                <h3 className="font-semibold">Funny Jokes</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Light-hearted laughs
                </p>
              </div>
            </Link>

            <Link href="/jokes" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
                <Flame className="mx-auto text-red-500 mb-3" size={32} />
                <h3 className="font-semibold">Trending Jokes</h3>
                <p className="text-sm text-gray-500 mt-1">
                  What’s hot today
                </p>
              </div>
            </Link>

            <Link href="/" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
                <Sparkles className="mx-auto text-purple-500 mb-3" size={32} />
                <h3 className="font-semibold">Galibazz</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Fun beyond jokes
                </p>
              </div>
            </Link>

            <Link href="/news" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
                <Laugh className="mx-auto text-blue-500 mb-3" size={32} />
                <h3 className="font-semibold">Funny News</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Satire & humor
                </p>
              </div>
            </Link>

          </div>
        </div>
      </main>
    </>
  );
}
