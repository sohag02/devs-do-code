import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openai = createOpenAI({
  apiKey: process.env.API_KEY,
  baseURL: process.env.BASE_URL,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, model, temperature, topP, topK, customInstructions } =
    await req.json();

  const result = streamText({
    model: openai(model),
    messages,
    temperature: temperature,
    topP: topP,
    topK: topK,
    system: customInstructions,
  });

  return result.toDataStreamResponse({
    getErrorMessage: (error) => {
      if (error == null) {
        return "unknown error";
      }

      if (typeof error === "string") {
        return error;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    },
  });
}
