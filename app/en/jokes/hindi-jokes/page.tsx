import ExternalJokesList from "@/components/ExternalJokesList";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

/* ===== SEO METADATA ===== */

export const metadata: Metadata = {
  title: "Galibazz Hindi Jokes – Dirty Jokes & Funny Hindi Jokes",

  description:
    "Read Galibazz Hindi jokes – best collection of funny jokes, dirty jokes and adult Hindi jokes. Laugh out loud with daily updated joke content.",

  keywords: [
    "galibazz",
    "hindi jokes",
    "dirty jokes",
    "funny hindi jokes",
    "adult jokes",
    "must jokes",
    "jokes in hindi"
  ],

  alternates: {
    canonical: "https://www.galibazz.lol/en/jokes/hindi-jokes",
  },

  openGraph: {
    title: "Galibazz Hindi Jokes – Dirty & Funny Hindi Jokes",
    description:
      "Enjoy the best Galibazz Hindi jokes collection. Funny, dirty and adult Hindi jokes updated regularly.",
    url: "https://www.galibazz.lol/en/jokes/hindi-jokes",
    siteName: "GaliBazz",
    type: "website",
    images: [
      {
        url: "https://old.galibazz.lol/favicon/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "Galibazz Hindi Jokes",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Galibazz Hindi Jokes – Dirty & Funny Jokes",
    description:
      "Laugh daily with Galibazz Hindi jokes. Best dirty and funny Hindi joke collection.",
    images: ["https://old.galibazz.lol/favicon/favicon-32x32.png"],
  },
};

/* ===== PAGE ===== */

type Props = {
  searchParams?: Promise<{ page?: string }>;
};

export default async function ExternalJokesPage({ searchParams }: Props) {
  const { page } = (await searchParams) || {};
  const currentPage = Number(page) || 1;

  return (
    <main>
      <Header />

      <h1 className="text-3xl font-bold text-center my-8">
        Dirty Jokes In Hindi
      </h1>

      <ExternalJokesList page={currentPage} />
    </main>
  );
}
