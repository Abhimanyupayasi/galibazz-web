import { load } from "cheerio";
import fs from "fs";

async function fetchJokes() {
  const url = "https://hindijokesadda.com/100-dirty-jokes-in-hindi/";

  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  const html = await res.text();
  const $ = load(html);

  const jokes = [];

  $("article p").each((_, el) => {
    const text = $(el).text().trim();
    if (/^\d+\s*:/.test(text)) {
      jokes.push({ id: jokes.length + 1, text });
    }
  });

  fs.writeFileSync(
    "./data/external-jokes.json",
    JSON.stringify(jokes, null, 2)
  );

  console.log("✅ external-jokes.json created");
}

fetchJokes();
