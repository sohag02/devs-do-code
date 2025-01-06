'use server';
import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";


export async function enhancePrompt({
    prompt,
  }: {
    prompt: string;
  }) {
    const openai = createOpenAI({
        apiKey: process.env.API_KEY,
        baseURL: process.env.BASE_URL,
    });

    const { text } = await generateText({
      model: openai('claude-3-5-sonnet'),
      system: `\n
      - you will paraphrase the user's prompt
      - do not change the meaning
      - just return the paraphrased prompt wihtout any additional text
      - do not use quotes or colons`,
      prompt: JSON.stringify(prompt),
    });
  
    return text;
  }