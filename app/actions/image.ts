"use server";
import { openaiInstance as openai } from "@/lib/openai";
import { experimental_generateImage as generateImage } from "ai";

const DEFAULT_IMAGE_SIZE = "1024x1024" as `${number}x${number}`;

export async function generateImageAction(
  prompt: string,
  model: string,
  size?: `${number}x${number}`
) {
  const { image } = await generateImage({
    model: openai.image(model),
    prompt: prompt,
    size: size ?? DEFAULT_IMAGE_SIZE,
    maxRetries: 0,
  });
  return image.base64;
}