import ExternalJokesList from "@/components/ExternalJokesList";
import Header from "@/components/Header";
import stories from "./stories.json";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

/* ===== SEO METADATA ===== */

export const metadata: Metadata = {
  title: "Galibazz Kahaniyan – Hindi Stories & Sahitya Collection",

  description:
    "Galibazz Kahaniyan – पढ़िए बेहतरीन हिंदी कहानियाँ, साहित्य और रोचक स्टोरी कलेक्शन. नई हिंदी कहानियाँ रोज़ Galibazz पर.",

  keywords: [
    "galibazz",
    "hindi stories",
    "kahaniyan",
    "sahitya",
    "hindi literature",
    "story collection",
    "hindi kahani"
  ],

  alternates: {
    canonical: "https://www.galibazz.lol/hi/sahitya/stories",
  },

  openGraph: {
    title: "Galibazz Kahaniyan – Hindi Stories & Sahitya",
    description:
      "पढ़िए Galibazz पर बेहतरीन हिंदी कहानियाँ और साहित्य संग्रह. नई रोचक कहानियाँ रोज़.",
    url: "https://www.galibazz.lol/hi/sahitya/stories",
    siteName: "GaliBazz",
    type: "website",
    images: [
      {
        url: "https://old.galibazz.lol/favicon/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "Galibazz Hindi Stories",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Galibazz Kahaniyan – Hindi Stories",
    description:
      "बेहतरीन हिंदी कहानियाँ और साहित्य संग्रह पढ़िए Galibazz पर.",
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
        कहानियाँ संग्रह
      </h1>

      <ExternalJokesList data={stories} page={currentPage} />
    </main>
  );
}
