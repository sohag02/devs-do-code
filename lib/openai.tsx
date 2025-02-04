import { createOpenAI } from "@ai-sdk/openai";
import { cookies } from "next/headers";

export const openaiInstance = createOpenAI({
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