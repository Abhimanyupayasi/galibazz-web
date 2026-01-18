export async function GET() {
  const urls = [
    "https://galibazz.lol/",
    "https://galibazz.lol/en",
    "https://galibazz.lol/hi"
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `<url><loc>${url}</loc></url>`).join("")}
</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=UTF-8"
    }
  });
}
