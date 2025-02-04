import { PhotosArea } from "./PhotosArea";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getRandomSuggestions } from "./suggestions";

async function fetchModels() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/models?category=image_generation`
    );
    const res = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const models = res.data.map((model: any) => ({
      id: model.id,
      label: model.id.charAt(0).toUpperCase() + model.id.slice(1),
    }));
    return models;
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
}

export default async function ImagePage() {
  // const models = await fetchModels();
  const models = [
    {
      id: "flux",
      label: "Flux"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <PhotosArea models={models} suggestions={getRandomSuggestions()} />
      <Footer />
    </div>
  );
}
