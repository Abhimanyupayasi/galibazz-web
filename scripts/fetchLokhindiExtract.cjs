async function extractJokes() {
  const [{ readFileSync, writeFileSync }, { load }] = await Promise.all([
    import("node:fs"),
    import("cheerio"),
  ]);
  const html = readFileSync("./scripts/lokhindi-rendered.html", "utf-8");
  const $ = load(html);

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

  writeFileSync(
    "./app/en/jokes/lokhindi-jokes.json",
    JSON.stringify(jokes, null, 2)
  );

  console.log("✅ Extracted", jokes.length, "jokes starting from ID 21");
}

void extractJokes();
