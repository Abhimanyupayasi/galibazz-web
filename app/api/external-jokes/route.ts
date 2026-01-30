import { load } from "cheerio";

export async function GET() {
  const url = "https://hindijokesadda.com/100-dirty-jokes-in-hindi/";

  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  const html = await res.text();
  const $ = load(html);

  const jokes: { id: number; text: string }[] = [];

  $("article p").each((_, el) => {
    const text = $(el).text().trim();

    // ✅ Keep only lines starting with number:
    if (/^\d+\s*:/.test(text)) {
      jokes.push({
        id: jokes.length + 1,
        text,
      });
    }
  });

  return Response.json(jokes);
}
