import fs from "fs";
import path from "path";

const BASE_URL = "https://galibazz.lol";

const urls = [
  "/",
  "/en",
  "/hi",
  "/en/jokes/hindi-jokes",
  "/hi/jokes/hindi-jokes",
  "/en/jokes/Doho-ka-anand-le",
  "/hi/jokes/Doho-ka-anand-le",
  "/en/jokes/double-meaning-shayari",
  "/hi/jokes/double-meaning-shayari",
  "/en/jokes/teacher-student-jokes",
  "/hi/jokes/teacher-student-jokes",
  "/en/jokes/kallu-ke-jokes",
  "/hi/jokes/kallu-ke-jokes",
  "/en/jokes/Sante-Bante-nu-jokes",
  "/hi/jokes/Sante-Bante-nu-jokes",
  "/en/jokes/Hardcore-Dirty-Jokes",
  "/hi/jokes/Hardcore-Dirty-Jokes"
];

function generateSitemap() {
  const lastmod = new Date().toISOString();

  // IMPORTANT: XML declaration must be first character — no newline before it
  const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join("")}
</urlset>`;

  const publicDir = path.join(process.cwd(), "public");

  // Ensure public folder exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  const filePath = path.join(publicDir, "sitemap.xml");

  // Write without trim → prevents encoding issues
  fs.writeFileSync(filePath, xml);

  console.log("✅ sitemap.xml generated");
}

generateSitemap();
