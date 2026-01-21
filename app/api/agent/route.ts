import Groq from "groq-sdk";
import { models } from "@/lib/models";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!
});

// Ordered fallback preference (fast → powerful → backup)
const MODEL_FALLBACK_ORDER = [
  "llama-3.1-8b-instant",
  "llama-3.3-70b-versatile",
  "groq/compound-mini",
  "openai/gpt-oss-20b"
];

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json({ error: "Message required" }, { status: 400 });
    }

    // Pick first available model from your models list
    let chosenModel =
      models.find((m) => MODEL_FALLBACK_ORDER.includes(m.id))?.id ||
      models[0].id;

    // Call Groq
    const completion = await groq.chat.completions.create({
      model: chosenModel,
      messages: [
        {
  role: "system",
  content:
    "तुम Galibazz Joke AI हो। तुम हमेशा साफ, सरल और प्राकृतिक हिंदी में बात करोगे, जैसे कोई दोस्त आराम से बात करता है। अजीब शब्द, टूटी-फूटी हिंदी या English-mix मत इस्तेमाल करना। जब जोक सुनाओ, तो छोटी, मज़ेदार और समझने में आसान हिंदी में सुनाओ। अगर यूज़र अंग्रेज़ी में लिखे, तब भी जवाब सरल हिंदी में देना। किसी भी तरह का अश्लील या नाबालिगों से जुड़ा कंटेंट नहीं देना।"
},


        { role: "user", content: message }
      ],
      temperature: 0.9,
      max_completion_tokens: 1024
    });

    return Response.json({
      reply: completion.choices[0].message.content,
      modelUsed: chosenModel
    });

  } catch (error: any) {
    console.error("Groq Error:", error);

    // If rate-limited → fallback model retry once
    if (error.status === 429) {
      return Response.json(
        { error: "AI busy, please try again in a moment" },
        { status: 429 }
      );
    }

    return Response.json({ error: "Agent failed" }, { status: 500 });
  }
}
