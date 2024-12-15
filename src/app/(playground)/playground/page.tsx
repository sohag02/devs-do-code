import { generateChatId } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function Playground() {
  const newChatId = generateChatId();
  redirect(`/playground/${newChatId}`);
}
