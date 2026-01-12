import jokes from "@/app/jokes/jokes.json";

const SITE_URL = "https://galibazz.com";

export default async function sitemap() {
  const languages = ["en", "hi"];

  // Category pages
  const categoryUrls = languages.flatMap((lang) =>
    jokes.map((joke) => ({
      url: `${SITE_URL}/${lang}/jokes/${joke.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}/en/jokes/${joke.slug}`,
          hi: `${SITE_URL}/hi/jokes/${joke.slug}`,
        },
      },
    }))
  );

  // Static pages
  const staticUrls = languages.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...categoryUrls];
}
