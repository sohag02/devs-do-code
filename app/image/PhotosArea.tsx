"use client";
import { useState } from "react";
import { Textarea, Select, SelectItem } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Input } from "@nextui-org/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Loader2, ArrowUpRight, Info } from "lucide-react";
import { generateImageAction } from "@/app/actions/image";
import type { Suggestion } from "./suggestions";
import { cn } from "@/lib/utils";
import { ImageDisplay } from "./ImageDisplay";
import { Badge } from "@/components/ui/badge";
import useSWR from "swr";

interface ImageResponse {
  url: string;
  width?: number;
  height?: number;
  prompt?: string;
  model?: string;
}

interface Model {
  id: string;
  label: string;
}

interface PhotosAreaProps {
  images?: ImageResponse[];
  models: Model[];
  suggestions: Suggestion[];
}

interface ImageLimits {
  total: number;
  used: number;
}

const fetcher = (url: string): Promise<ImageLimits> =>
  fetch(url, { method: "GET", credentials: "include" }).then((res) =>
    res.json()
  );

export function PhotosArea({ images, models, suggestions }: PhotosAreaProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("flux");
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const {
    data: imageLimits,
    isLoading,
    mutate,
  } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/limits/image`, fetcher);

  const limitReached = imageLimits && imageLimits.used >= imageLimits.total;

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedImage(null);
    let size;
    if (!width || !height) {
      size = undefined;
    } else {
      size = `${width}x${height}` as `${number}x${number}`;
    }
    const imageUrl = await generateImageAction(prompt, selectedModel, size);
    setGeneratedImage(imageUrl);
    setIsGenerating(false);
    mutate();
  };

  return (
    <main className="text-white min-h-screen flex-1 flex flex-col transition-[margin] duration-300 ease-in-out p-6">
      <Card className="w-full max-w-4xl mx-auto mb-8 border-none">
        <CardHeader className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">Generate Images</h1>
          <Badge
            variant="destructive"
            className="px-3 py-1 text-sm cursor-help bg-[#2F2F2F]"
          >
            <Info className="w-4 h-4 mr-2" />
            {imageLimits?.used}/{imageLimits?.total} Images Generated
          </Badge>
        </CardHeader>
        <CardContent className="space-y-6 px-6">
          <div className="bg-[#2F2F2F] p-4 rounded-xl space-y-4">
            <Textarea
              variant="bordered"
              label="Prompt"
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-transparent border-none resize-none"
              classNames={{
                base: "bg-transparent",
                inputWrapper: "border-none bg-transparent shadow-none",
                input: "bg-transparent focus:outline-none focus:ring-0",
              }}
            />
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(suggestion.prompt)}
                  className={cn(
                    "flex items-center justify-between px-3 py-1.5 rounded-full bg-[#1E1E1E] text-sm hover:opacity-70 group transition-colors duration-200",
                    index > 2
                      ? "hidden md:flex"
                      : index > 1
                      ? "hidden sm:flex"
                      : ""
                  )}
                >
                  <span className="text-white text-xs sm:text-sm">
                    {suggestion.text.toLowerCase()}
                  </span>
                  <ArrowUpRight className="ml-1.5 h-3 w-3 text-zinc-400 group-hover:opacity-70" />
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select
              label="Model"
              placeholder="Select a model"
              selectedKeys={[selectedModel]}
              onSelectionChange={(keys) =>
                setSelectedModel(Array.from(keys)[0] as string)
              }
              className="w-full"
              defaultSelectedKeys={["flux"]}
            >
              {models.map((model) => (
                <SelectItem
                  key={model.id}
                  value={model.id}
                  className="text-white"
                >
                  {model.label}
                </SelectItem>
              ))}
            </Select>
            <Input
              label="Width"
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full"
              placeholder="1080"
            />
            <Input
              label="Height"
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full"
              placeholder="720"
            />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Button
              className="w-full sm:w-1/2 mx-auto"
              size={"lg"}
              onClick={handleGenerate}
              disabled={isGenerating || !prompt || isLoading || limitReached}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate"
              )}
            </Button>
            {limitReached && (
              <div className="text-red-500 text-sm flex items-center">
                <Info className="mr-2 h-4 w-4" />
                <span>
                  You have reached the limit of Image generation requests.
                  Upgrade to generate more images.
                </span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="px-6 py-4">
          <div className="w-full">
            <ImageDisplay imageData={generatedImage} isLoading={isGenerating} />
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
