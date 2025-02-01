import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import * as jose from "jose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateChatId() {
  const newChatId = uuidv4();
  return newChatId;
}

export async function getUserIDFromToken(token: string) {
  const secret = jose.base64url.decode(process.env.JWT_SECRET!);
  try {
    const { payload } = await jose.jwtVerify(token, secret, {
      algorithms: [process.env.JWT_ALGORITHM!],
    });
    return payload;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null; // Return null if the token verification fails
  }
}

export function getAvatar(name: string) {
  return `https://ui-avatars.com/api/?name=${name}&background=random`
}
