export async function GET() {
  const urls = [
    "https://galibazz.lol/",
    "https://galibazz.lol/en",
    "https://galibazz.lol/hi",
    "https://galibazz.lol/en/jokes/hindi-jokes",
    "https://galibazz.lol/hi/jokes/hindi-jokes",
    "https://galibazz.lol/en/jokes/kabir-ke-dohe-adult",
    "https://galibazz.lol/hi/jokes/kabir-ke-dohe-adult",
    "https://galibazz.lol/en/jokes/double-meaning-shayari",
    "https://galibazz.lol/hi/jokes/double-meaning-shayari",
    "https://galibazz.lol/en/jokes/teacher-student-jokes",
    "https://galibazz.lol/hi/jokes/teacher-student-jokes"
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
