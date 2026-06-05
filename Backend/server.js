import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const response = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    {
      role: "user",
      content: "Difference between SQL & MongoDB"
    }
  ]
});

console.log(response.choices[0].message.content);