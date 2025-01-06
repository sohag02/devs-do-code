"use server";
import { deleteChatById, renameChatById } from "@/db/queries";

export async function renameChat(chatId: string, newTitle: string) {
  await renameChatById({ id: chatId, newTitle });
  return { id: chatId, title: newTitle };
}

export async function deleteChat(chatId: string) {
  await deleteChatById({ id: chatId });
  return { id: chatId };
}
