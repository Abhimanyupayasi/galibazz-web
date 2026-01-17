export async function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://galibazz.lol/sitemap.xml
Crawl-delay: 10
  `.trim();

  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
