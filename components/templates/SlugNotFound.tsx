import Header from "@/components/Header";
import Link from "next/link";
import { Frown } from "lucide-react";

export default function SlugNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <Frown size={70} className="mx-auto text-gray-400 mb-6"/>
          <h1 className="text-3xl font-bold mb-3">Content Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg"
          >
            Go Home
          </Link>
        </div>
      </main>
    </>
  );
}
