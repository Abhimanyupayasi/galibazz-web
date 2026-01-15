import Header from "@/components/Header";
import Link from "next/link";
import { Rocket } from "lucide-react";

export default function UpcomingPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full text-center bg-white/90 backdrop-blur border border-gray-200 rounded-3xl shadow-lg p-10">

          <div className="flex justify-center mb-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-full">
              <Rocket size={36} />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            This Page Is Coming Soon
            <br />
            <span className="text-lg font-semibold text-gray-700">
              यह पेज जल्द ही आ रहा है
            </span>
          </h1>

          <p className="text-gray-600 mt-3">
            We’re building something exciting here. Want this page prioritized?  
            <br />
            <span className="text-sm text-gray-600">
              हम यहाँ कुछ नया बना रहे हैं। क्या आप चाहते हैं कि इस पेज को प्राथमिकता दी जाए?
            </span>
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Tell us what you need — we’ll move it up the list.  
            <br />
            <span>
              हमें बताएं आपको क्या चाहिए — हम इसे प्राथमिकता सूची में ऊपर ले आएंगे।
            </span>
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-full shadow transition"
            >
              Contact Us / संपर्क करें
            </Link>

            <Link
              href="/"
              className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Back Home / होम पर जाएं
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
