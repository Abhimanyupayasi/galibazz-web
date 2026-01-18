const fs = require("fs");
const puppeteer = require("puppeteer");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function renderPage() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
  );

  await page.goto("https://www.lokhindi.com/xxx-jokes-hindi/", {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  // Wait 5 seconds for JS-rendered content
  await sleep(5000);

  // Save rendered HTML
  const html = await page.content();
  fs.writeFileSync("./scripts/lokhindi-rendered.html", html);

  console.log("✅ Rendered HTML saved at scripts/lokhindi-rendered.html");

  await browser.close();
}

renderPage();
