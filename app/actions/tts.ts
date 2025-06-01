"use server";
import { cookies } from "next/headers";
import { FavoriteVoices } from "@/db/schema";
import { db } from "@/db/index";
import { eq, and } from "drizzle-orm";



export async function getFavoriteVoicesID(userId: string) {
  const favoriteVoices = await db.query.FavoriteVoices.findMany({
    where: eq(FavoriteVoices.userId, userId),
    columns : {
      voiceId: true,
    }
  });
  return favoriteVoices;
}

export async function addFavoriteVoice(userId: string, voiceId: string) {
  await db.insert(FavoriteVoices).values({
    userId,
    voiceId,
  });
}

export async function removeFavoriteVoice(userId: string, voiceId: string) {
  await db
    .delete(FavoriteVoices)
    .where(
      and(
        eq(FavoriteVoices.userId, userId),
        eq(FavoriteVoices.voiceId, voiceId)
      )
    );
}

export interface Voice {
  created_at: Date;
  description: string;
  gender: string;
  id: number;
  is_active: boolean;
  language: string;
  updated_at: Date;
  voice_id: string;
  voice_name: string;
  is_favorite: boolean; // Add the new property to the interface
}

export async function fetchVoices() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/voices`
  );
  const data = await response.json();

  // Add the is_favorite property to each voice
  const voicesWithFavorite = data.data.voices.map((voice: Voice) => ({
    ...voice,
    is_favorite: false,
  }));

  return voicesWithFavorite as Voice[];
}


export async function generateVoice(text: string, voiceId: string) {
  const cookieStore = cookies();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/audio/speech`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify({
        model: "DeepGram-v1",
        voice: voiceId,
        input: text,
      }),
      credentials: "include",
    }
  );
  const audioData = await response.json();
  return audioData.audio_content;
}
