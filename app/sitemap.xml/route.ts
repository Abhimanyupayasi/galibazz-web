import jokes from "@/app/en/jokes/jokes.json";

const SITE_URL = "https://galibazz.lol";

function generateSiteMap() {
  const lastmod = new Date().toISOString();

  // ---- Static routes ----
  const staticUrls = [
    `${SITE_URL}`,
    `${SITE_URL}/en`,
    `${SITE_URL}/hi`,
    `${SITE_URL}/en/jokes/hindi-jokes`,
    `${SITE_URL}/hi/jokes/hindi-jokes`, // external jokes page
  ];

  // ---- Dynamic joke category routes ----
  const jokeUrls = jokes.flatMap((joke) => [
    `${SITE_URL}/en/jokes/${joke.slug}`,
    `${SITE_URL}/hi/jokes/${joke.slug}`,
  ]);

  const allUrls = [...staticUrls, ...jokeUrls];

  // ---- Build XML ----
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === SITE_URL ? "1.00" : "0.80"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
