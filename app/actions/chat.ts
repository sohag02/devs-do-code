"use server";
import { deleteChatById, renameChatById } from "@/db/queries";
// import { revalidatePath } from 'next/cache'

export async function renameChat(chatId: string, newTitle: string) {
  await renameChatById({ id: chatId, newTitle });
  //   revalidatePath('/playground')
  return { id: chatId, title: newTitle };
}

export async function deleteChat(chatId: string) {
  await deleteChatById({ id: chatId });
  //   revalidatePath('/playground')
  return { id: chatId };
}
