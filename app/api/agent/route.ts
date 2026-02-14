import Groq from "groq-sdk";
import jokesData from "../../en/jokes/jokes.json";
import storiesData from "../../hi/sahitya/stories/stories.json";
import newsData from "../../en/news/news.json";
import { models } from "@/lib/models";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!
});

const MODEL_FALLBACK_ORDER = [
  "llama-3.1-8b-instant",
  "llama-3.3-70b-versatile",
  "groq/compound-mini",
  "openai/gpt-oss-20b"
];

// ---------- Joke Helpers ----------
function getRandomJoke() {
  const cat = jokesData[Math.floor(Math.random() * jokesData.length)];
  return cat.jokes[Math.floor(Math.random() * cat.jokes.length)];
}

function getCategoryJoke(userMsg: string) {
  const matched = jokesData.find(cat =>
    userMsg.includes(cat.slug.toLowerCase()) ||
    userMsg.includes(cat.title.toLowerCase())
  );
  if (!matched) return null;
  return matched.jokes[Math.floor(Math.random() * matched.jokes.length)];
}

// ---------- Story Helper ----------
function getRandomStory() {
  const story = storiesData[Math.floor(Math.random() * storiesData.length)];
  return story.text;
}

// ---------- News Helpers ----------
function getRandomNews() {
  return newsData[Math.floor(Math.random() * newsData.length)];
}

function getNewsByTag(userMsg: string) {
  return newsData.find(n =>
    n.tags.some(tag => userMsg.includes(tag.toLowerCase()))
  ) || null;
}

function getNewsByType(userMsg: string) {
  return newsData.find(n =>
    userMsg.includes(n.what.toLowerCase())
  ) || null;
}

// ---------- Intent Detection ----------
function wantsJoke(msg: string) {
  return (
    msg.includes("joke") ||
    msg.includes("मजाक") ||
    msg.includes("चुटकुला") ||
    msg.includes("hasao") ||
    msg.includes("funny") ||
    msg.includes("comedy") ||
    msg.includes("majak") ||
    msg.includes("mazak")
  );
}

function wantsStory(msg: string) {
  return (
    msg.includes("story") ||
    msg.includes("kahani") ||
    msg.includes("कहानी") ||
    msg.includes("kissa") ||
    msg.includes("sunao")
  );
}

function wantsNews(msg: string) {
  return (
    msg.includes("news") ||
    msg.includes("samachar") ||
    msg.includes("khabar") ||
    msg.includes("viral") ||
    msg.includes("trending") ||
    msg.includes("latest")
  );
}

// ---------- Format News as String ----------
function formatNews(newsItem: any) {
  return `
📰 ${newsItem.title}

${newsItem.description.join("\n")}
`.trim();
}

// ---------- API ----------
export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return Response.json({ error: "Message required" }, { status: 400 });
    }

    const userMsg = message.toLowerCase();

    // 😂 Joke Mode
    if (wantsJoke(userMsg)) {
      return Response.json({
        reply: getCategoryJoke(userMsg) || getRandomJoke()
      });
    }

    // 📖 Story Mode
    if (wantsStory(userMsg)) {
      return Response.json({
        reply: getRandomStory()
      });
    }

    // 📰 News Mode (returns STRING for frontend safety)
    if (wantsNews(userMsg)) {
      const newsItem =
        getNewsByTag(userMsg) ||
        getNewsByType(userMsg) ||
        getRandomNews();

      return Response.json({
        reply: formatNews(newsItem)
      });
    }

    // 💬 AI Chat Fallback
    const chosenModel =
      models.find(m => MODEL_FALLBACK_ORDER.includes(m.id))?.id ||
      models[0].id;

    const completion = await groq.chat.completions.create({
      model: chosenModel,
      messages: [
        {
          role: "system",
          content: "तुम Galibazz AI हो. Friendly Hindi में short chat करो."
        },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_completion_tokens: 200
    });

    return Response.json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
