import Groq from "groq-sdk";

import jokesData from "../../en/jokes/jokes.json";
import storiesData from "../../hi/sahitya/stories/stories.json";
import newsData from "../../en/news/news.json";

import { models } from "@/lib/models";

type NewsContent = {
  title: string;
  description: string[];
  tags?: string[];
  what?: string;
};

const groqApiKey = process.env.GROQ_API_KEY;

const groq = groqApiKey
  ? new Groq({
      apiKey: groqApiKey,
    })
  : null;

const MODEL_FALLBACK_ORDER = [
  "llama-3.1-8b-instant",
  "llama-3.3-70b-versatile",
  "groq/compound-mini",
  "openai/gpt-oss-20b",
];

// ---------- Joke Helpers ----------

function getRandomJoke() {
  const category =
    jokesData[Math.floor(Math.random() * jokesData.length)];

  return category.jokes[
    Math.floor(Math.random() * category.jokes.length)
  ];
}

function getCategoryJoke(userMsg: string) {
  const matched = jokesData.find((category) => {
    return (
      userMsg.includes(category.slug.toLowerCase()) ||
      userMsg.includes(category.title.toLowerCase())
    );
  });

  if (!matched) {
    return null;
  }

  return matched.jokes[
    Math.floor(Math.random() * matched.jokes.length)
  ];
}

// ---------- Story Helper ----------

function getRandomStory() {
  const story =
    storiesData[Math.floor(Math.random() * storiesData.length)];

  return story.text;
}

// ---------- News Helpers ----------

function getRandomNews() {
  return newsData[Math.floor(Math.random() * newsData.length)];
}

function getNewsByTag(userMsg: string) {
  return (
    newsData.find((newsItem) => {
      return newsItem.tags?.some((tag) =>
        userMsg.includes(tag.toLowerCase())
      );
    }) || null
  );
}

function getNewsByType(userMsg: string) {
  return (
    newsData.find((newsItem) => {
      return newsItem.what
        ? userMsg.includes(newsItem.what.toLowerCase())
        : false;
    }) || null
  );
}

// ---------- Intent Detection ----------

function wantsJoke(message: string) {
  return (
    message.includes("joke") ||
    message.includes("मजाक") ||
    message.includes("चुटकुला") ||
    message.includes("hasao") ||
    message.includes("funny") ||
    message.includes("comedy") ||
    message.includes("majak") ||
    message.includes("mazak")
  );
}

function wantsStory(message: string) {
  return (
    message.includes("story") ||
    message.includes("kahani") ||
    message.includes("कहानी") ||
    message.includes("kissa") ||
    message.includes("sunao")
  );
}

function wantsNews(message: string) {
  return (
    message.includes("news") ||
    message.includes("samachar") ||
    message.includes("khabar") ||
    message.includes("viral") ||
    message.includes("trending") ||
    message.includes("latest")
  );
}

// ---------- Format News as String ----------

function formatNews(newsItem: NewsContent) {
  return `
📰 ${newsItem.title}

${newsItem.description.join("\n")}
`.trim();
}

// ---------- API ----------

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message required" },
        { status: 400 }
      );
    }

    const userMsg = message.toLowerCase();

    // 😂 Joke Mode

    if (wantsJoke(userMsg)) {
      return Response.json({
        reply: getCategoryJoke(userMsg) || getRandomJoke(),
      });
    }

    // 📖 Story Mode

    if (wantsStory(userMsg)) {
      return Response.json({
        reply: getRandomStory(),
      });
    }

    // 📰 News Mode

    if (wantsNews(userMsg)) {
      const newsItem =
        getNewsByTag(userMsg) ||
        getNewsByType(userMsg) ||
        getRandomNews();

      return Response.json({
        reply: formatNews(newsItem),
      });
    }

    // 💬 AI Chat Fallback

    if (!groq) {
      return Response.json(
        {
          error:
            "AI service is not configured. Please add GROQ_API_KEY.",
        },
        { status: 503 }
      );
    }

    const chosenModel =
      models.find((model) =>
        MODEL_FALLBACK_ORDER.includes(model.id)
      )?.id || models[0]?.id;

    if (!chosenModel) {
      return Response.json(
        { error: "No AI model is configured." },
        { status: 500 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: chosenModel,
      messages: [
        {
          role: "system",
          content:
            "तुम Galibazz AI हो. Friendly Hindi में short chat करो.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_completion_tokens: 200,
    });

    return Response.json({
      reply:
        completion.choices[0]?.message?.content ||
        "Sorry, अभी response नहीं मिल पाया।",
    });
  } catch (error) {
    console.error("Agent API Error:", error);

    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}