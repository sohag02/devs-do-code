import { fetchImages } from "./actions";
import { PhotosArea } from "./PhotosArea";

async function fetchModels() {
  try {
    const response = await fetch("https://image.pollinations.ai/models");
    const data = await response.json();
    const models = data.map((model: string) => ({
      id: model,
      label: model.charAt(0).toUpperCase() + model.slice(1),
    }));
    return models;
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
}

export default async function ImagePage() {

  const models = await fetchModels()
  const images = await fetchImages()

  return (
    <>
      <PhotosArea images={images} models={models} />
    </>
  )
}