'use server'
import { Chats } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export async function createChat(userId: string, title: string, chatId: string) {
  await db.insert(Chats).values({
    id: chatId,
    userId: userId,
    title: title,
  }).onConflictDoNothing();
}

export async function fetchChats(userId: string) {
  const chats = await db.query.Chats.findMany({
    where: eq(Chats.userId, userId),
  })
  return chats
}

export interface Model {
    category:   string;
    created_at: Date;
    id:         number;
    is_active:  boolean;
    model_id:   string;
    name:       string;
    updated_at: Date;
}

export interface Voice {
    created_at:  Date;
    description: string;
    gender:      string;
    id:          number;
    is_active:   boolean;
    language:    string;
    updated_at:  Date;
    voice_id:    string;
    voice_name:  string;
}

export async function fetchModels() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/models`)
  const data = await response.json()
  return data.data as Model[]
}

export async function fetchVoices() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/voices`)
  const data = await response.json()
  return data.data.voices as Voice[]
}