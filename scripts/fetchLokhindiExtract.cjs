const fs = require("fs");
const cheerio = require("cheerio");

function extractJokes() {
  const html = fs.readFileSync("./scripts/lokhindi-rendered.html", "utf-8");
  const $ = cheerio.load(html);

  const jokes = [];

  $("p").each((_, el) => {
    let text = $(el).text().replace(/\s+/g, " ").trim();

    // Skip junk / headers
    if (
      text.length < 80 ||
      text === "Contents" ||
      text.includes("XXX Jokes Hindi") ||
      text.includes("Home") ||
      text.includes("STORIES") ||
      text.includes("PRIVACY POLICY")
    ) {
      return;
    }

    jokes.push({
      id: jokes.length + 21,   // ✅ Start from 21
      text
    });
  });

  fs.writeFileSync(
    "./app/en/jokes/lokhindi-jokes.json",
    JSON.stringify(jokes, null, 2)
  );

  console.log("✅ Extracted", jokes.length, "jokes starting from ID 21");
}

extractJokes();
