import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExploreHero from "@/components/ExploreHero";
import CategoryGrid from "@/components/CategoryGrid";
import FreshContent from "@/components/FreshContent";
import Sidebar from "@/components/Sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galibazz – Funny Jokes, Dirty Jokes & Entertainment",

  description:
    "Welcome to Galibazz – explore funny jokes, dirty jokes, viral news, entertainment and humor content. Laugh every day with Galibazz.",

  keywords: [
    "galibazz",
    "jokes",
    "dirty jokes",
    "funny jokes",
    "adult jokes",
    "viral news",
    "entertainment",
    "humor website"
  ],

  alternates: {
    canonical: "https://www.galibazz.lol/en",
  },

  openGraph: {
    title: "Galibazz – Funny Jokes & Dirty Jokes",
    description:
      "Laugh out loud with Galibazz. Funny jokes, dirty jokes, viral content and entertainment updated daily.",
    url: "https://www.galibazz.lol/en",
    siteName: "GaliBazz",
    type: "website",
    images: [
      {
        url: "https://old.galibazz.lol/favicon/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "Galibazz Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Galibazz – Funny & Dirty Jokes",
    description:
      "Best place for funny and dirty jokes. Updated daily on Galibazz.",
    images: ["https://old.galibazz.lol/favicon/favicon-32x32.png"],
  },
};


export default function Page() {
  return (
    <>
      <Header />
      <main className="grow w-full bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* <div className="flex items-center gap-2 text-sm mb-8 sm:mb-10 text-text-muted">
            <a className="hover:text-primary transition-colors" href="#">
              Home
            </a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-medium text-text-dark">
              Explore Categories
            </span>
          </div> */}

          <ExploreHero />
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
