import type { MetadataRoute } from "next";
import jokes from "./en/jokes/jokes.json";

const SITE_URL = "https://galibazz.lol";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["en", "hi"];
  const lastModified = new Date();

  // Home pages (/, /en, /hi)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          hi: `${SITE_URL}/hi`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
    },
    {
      url: `${SITE_URL}/hi`,
      lastModified,
    },
  ];

  // Joke category pages
  const jokePages: MetadataRoute.Sitemap = jokes.flatMap((joke) =>
    languages.map((lang) => ({
      url: `${SITE_URL}/${lang}/jokes/${joke.slug}`,
      lastModified,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/jokes/${joke.slug}`,
          hi: `${SITE_URL}/hi/jokes/${joke.slug}`,
        },
      },
    }))
  );

  return [...staticPages, ...jokePages];
}
