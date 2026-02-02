import Groq from "groq-sdk";
import jokesData from "../../en/jokes/jokes.json";
import storiesData from "../../hi/sahitya/stories/stories.json";
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

// ---------- Random Helpers ----------
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

  return matched.jokes[
    Math.floor(Math.random() * matched.jokes.length)
  ];
}

function getRandomStory() {
  const story = storiesData[Math.floor(Math.random() * storiesData.length)];
  return story.text;
}

// ---------- Intent Detection ----------
function wantsJoke(msg: string) {
  return (
    msg.includes("joke") ||
    msg.includes("मजाक") ||
    msg.includes("चुटकुला") ||
    msg.includes("suna") ||
    msg.includes("ek aur")
  );
}

function wantsStory(msg: string) {
  return (
    msg.includes("story") ||
    msg.includes("kahani") ||
    msg.includes("कहानी") ||
    msg.includes("kissa")
  );
}

// ---------- API ----------
export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return Response.json({ error: "Message required" }, { status: 400 });
    }

    const userMsg = message.toLowerCase();

    // 😂 Joke Mode → JSON
    if (wantsJoke(userMsg)) {
      const catJoke = getCategoryJoke(userMsg);
      return Response.json({ reply: catJoke || getRandomJoke() });
    }

    // 📖 Story Mode → JSON
    if (wantsStory(userMsg)) {
      return Response.json({ reply: getRandomStory() });
    }

    // 💬 Normal Chat → AI
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
