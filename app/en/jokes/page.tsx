import ListingTemplate from "@/components/templates/ListingTemplate";
import jokes from "./jokes.json";
import JokesHero from "@/components/JokesHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galibazz Jokes – Dirty Jokes, Funny & Must-Read Jokes",
  
  description:
    "Explore Galibazz jokes – the best collection of funny jokes, dirty jokes, adult humor and must-read joke categories updated daily.",

  keywords: [
    "galibazz",
    "jokes",
    "dirty jokes",
    "adult jokes",
    "funny jokes",
    "must jokes",
    "hindi jokes",
    "english jokes"
  ],

  alternates: {
    canonical: "https://www.galibazz.lol/en/jokes",
  },

  openGraph: {
    title: "Galibazz Jokes – Dirty Jokes & Funny Joke Categories",
    description:
      "Laugh out loud every day with Galibazz jokes. Browse dirty jokes, adult humor, double meaning shayari and must-read joke collections.",
    url: "https://www.galibazz.lol/en/jokes",
    siteName: "GaliBazz",
    type: "website",
    images: [
      {
        url: "https://old.galibazz.lol/favicon/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "Galibazz Jokes Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Galibazz Jokes – Dirty Jokes & Must-Read Jokes",
    description:
      "Best Galibazz jokes collection. Funny, dirty and adult jokes updated daily.",
    images: ["https://old.galibazz.lol/favicon/favicon-32x32.png"],
  },
};

export default function Page(props: any) {
  return (
    <ListingTemplate
      {...props}
      data={jokes}
      basePath="/en/jokes"
      title="Joke Categories"
      hero={<JokesHero />}
    />
  );
}
