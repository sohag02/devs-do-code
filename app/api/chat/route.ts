import { createChat } from "@/app/playground/actions";
import { createOpenAI, OpenAIProvider } from "@ai-sdk/openai";
import {
  streamText,
  type CoreMessage,
  convertToCoreMessages,
  createDataStreamResponse,
  APICallError,
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
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1`,
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
  console.log('chat', chat)

  if (!chat) {
    let title = "New Chat";
    try {
      const cookieStore = cookies();
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat-title`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie : cookieStore.toString(),
        },
        body: JSON.stringify({
          message: messages[0].content,
        }),
      })
      const data = await res.json();
      console.log('data', data)
      title = data.title ?? title;
    } catch (error) {
      console.error("Error generating title", error);
    }
    await createChat(userId, title, chatId);
  }

  await saveMessage({
    role: userMessage.role,
    content: userMessage.content as string,
    chatId: chatId,
  });

  return createDataStreamResponse({
    execute: (dataStream) => {
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
        maxRetries: 0,
      });

      result.mergeIntoDataStream(dataStream);
    },
    onError: error => {
      console.error("Error streaming response:", error);
      if (error instanceof APICallError) {
        const body = error.responseBody as string;
        return JSON.parse(body).message;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    }
  })
}
