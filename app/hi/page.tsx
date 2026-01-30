import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExploreHero from "@/components/ExploreHero";
import CategoryGrid from "@/components/CategoryGrid";
import FreshContent from "@/components/FreshContent";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
     absolute: "Galibazz Hindi – Funny Jokes, Dirty Jokes & Entertainment",
  },

  description:
    "Welcome to Galibazz Hindi – explore funny jokes, dirty jokes, viral news, sahitya and entertainment in Hindi. Laugh every day with Galibazz.",

  keywords: [
    "galibazz",
    "hindi jokes",
    "dirty jokes",
    "funny jokes",
    "adult jokes",
    "viral news",
    "sahitya",
    "hindi entertainment"
  ],

  alternates: {
    canonical: "https://www.galibazz.lol/hi",
  },

  openGraph: {
    title: "Galibazz Hindi – Funny Jokes & Dirty Jokes",
    description:
      "Laugh out loud with Galibazz Hindi. Explore funny jokes, dirty jokes, sahitya and entertainment content in Hindi.",
    url: "https://www.galibazz.lol/hi",
    siteName: "GaliBazz",
    type: "website",
    images: [
      {
        url: "https://old.galibazz.lol/favicon/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "Galibazz Hindi",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Galibazz Hindi – Funny & Dirty Jokes",
    description:
      "Best Hindi jokes collection on Galibazz. Funny, dirty and adult Hindi jokes updated daily.",
    images: ["https://old.galibazz.lol/favicon/favicon-32x32.png"],
  },
};


export default function Page() {
  const isHindi = true; // because this route = /hi

  const text = {
    exploreTitle: isHindi ? "श्रेणियाँ खोजें" : "Explore Categories",
  };

  return (
    <>
      <Header />

      <main className="grow w-full bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

          <ExploreHero />

          <h2 className="text-3xl font-bold text-center mb-10">
            {text.exploreTitle}
          </h2>

          <CategoryGrid />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            <FreshContent />
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
