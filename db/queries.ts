import { db } from "./index";
import { eq } from "drizzle-orm";
import { Chats, Messages } from "./schema";
import { asc, desc } from "drizzle-orm/expressions";
import { InferSelectModel } from "drizzle-orm";

export type Chat = InferSelectModel<typeof Chats>;
export type Message = InferSelectModel<typeof Messages>;

export async function getChatsByUserId({ id }: { id: string }) {
  try {
    return await db
      .select()
      .from(Chats)
      .where(eq(Chats.userId, id))
      .orderBy(desc(Chats.createdAt));
  } catch (error) {
    console.error("Failed to get chats by user from database");
    throw error;
  }
}

export async function saveMessage({
  role,
  content,
  chatId,
}: {
  role: "user" | "assistant" | "system" | "data";
  content: string;
  chatId: string;
}) {
  try {
    await db.insert(Messages).values({
      role: role,
      content: content,
      chatId: chatId,
    });
  } catch (error) {
    console.error("Failed to save message to database");
    throw error;
  }
}

export async function getChatById({ id }: { id: string }) {
  try {
    const [selectedChat] = await db.select().from(Chats).where(eq(Chats.id, id));
    return selectedChat;
  } catch (error) {
    console.error('Failed to get chat by id from database');
    throw error;
  }
}

export async function getMessagesByChatId({ id }: { id: string }) {
  try {
    return await db
      .select()
      .from(Messages)
      .where(eq(Messages.chatId, id))
      .orderBy(asc(Messages.createdAt));
  } catch (error) {
    console.error('Failed to get messages by chat id from database', error);
    throw error;
  }
}

export async function deleteChatById({ id }: { id: string }) {
  try {
    await db.delete(Messages).where(eq(Messages.chatId, id));

    return await db.delete(Chats).where(eq(Chats.id, id));
  } catch (error) {
    console.error('Failed to delete chat by id from database');
    throw error;
  }
}

export async function renameChatById({ id, newTitle }: { id: string; newTitle: string }) {
  try {
    await db.update(Chats).set({ title: newTitle }).where(eq(Chats.id, id));
  } catch (error) {
    console.error('Failed to rename chat by id from database');
    throw error;
  }
}