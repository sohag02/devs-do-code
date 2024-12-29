import { getChatsByUserId } from "@/db/queries";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

	if (!id) {
		return new Response("No id provided", { status: 400 });
	}

  const chats = await getChatsByUserId({ id });
  return new Response(JSON.stringify(chats), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
