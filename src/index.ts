//
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

async function main(messages: string[]) {
  messages.forEach(async (message) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-4",
    });
    console.log(chatCompletion.choices[0].message);
  });
}

main(process.argv.slice(2));
