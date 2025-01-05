import { createChat } from "@/app/playground/actions";
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai";
import {
  generateText,
  streamText,
  type CoreMessage,
  convertToCoreMessages,
} from "ai";
import { saveMessage, getChatById } from "@/db/queries";
import { type TextPart } from "ai";
import { cookies } from "next/headers";

function getMostRecentUserMessage(messages: Array<CoreMessage>) {
  const userMessages = messages.filter((message) => message.role === "user");
  return userMessages.at(-1);
}

let openaiInstance: OpenAIProvider | null = null;

const getOpenAIClient = () => {
  if (!openaiInstance) {
    openaiInstance = createOpenAI({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
      compatibility: "compatible",
      fetch: async (url: RequestInfo | URL, init?: RequestInit) => {
        const cookieStore = cookies();
        const headers = { ...init?.headers } as Record<string, string>;
        delete headers["Authorization"];

        return fetch(url, {
          ...init,
          headers: {
            ...headers,
            Cookie: cookieStore.toString(),
          },
        });
      },
    });
  }
  return openaiInstance;
};

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const openai = getOpenAIClient();

  const {
    messages,
    model,
    temperature,
    topP,
    customInstructions,
    chatId,
    userId,
  } = await req.json();

  const coreMessages = convertToCoreMessages(messages);
  const userMessage = getMostRecentUserMessage(coreMessages);

  if (!userMessage) {
    return new Response("No user message found", { status: 400 });
  }

  const chat = await getChatById({ id: chatId });

  if (!chat) {
    const { text: title } = await generateText({
      model: openai("claude-3-5-sonnet"),
      system: `\n
      - you will generate a short title based on the first message a user begins a conversation with
      - ensure it is not more than 80 characters long and 3 words
      - the title should be a summary of the user's message
      - do not use quotes or colons`,
      prompt: JSON.stringify(messages[0]),
    });
    await createChat(userId, title, chatId);
  }

  await saveMessage({
    role: userMessage.role,
    content: userMessage.content as string,
    chatId: chatId,
  });

  const result = streamText({
    model: openai(model),
    messages,
    temperature: temperature,
    topP: topP,
    system: customInstructions,
    onFinish: async (text) => {
      const content = text.response.messages[0].content[0] as TextPart;
      await saveMessage({
        role: "assistant",
        content: content.text,
        chatId: chatId,
      });
    },
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
