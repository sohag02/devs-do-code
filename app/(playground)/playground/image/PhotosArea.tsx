/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Textarea, Select, SelectItem } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Input } from "@nextui-org/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Loader2, Download } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  images: ImageResponse[];
  models: Model[];
}

export function PhotosArea( { images, models }: PhotosAreaProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("flux");
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedImage(null);
    const url = new URL(`https://image.pollinations.ai/prompt/${prompt}`);
    url.searchParams.append('model', selectedModel);
    url.searchParams.append('nologo', 'true');
    if (width) url.searchParams.append('width', width.toString());
    if (height) url.searchParams.append('height', height.toString());
    const response = await fetch(url.toString());
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    setGeneratedImage(imageUrl);
    setIsLoading(false);
  };

  return (
    <main
      className={`flex-1 flex flex-col transition-[margin] duration-300 ease-in-out p-6`}
    >
      <Card className="w-full max-w-3xl mx-auto mb-8 border-none mt-40">
        <CardHeader>
          <h1 className="text-2xl font-bold">Generate Images</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            label="Prompt"
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full"
          />
          <div className="flex flex-row gap-4">
            <Select
              label="Model"
              placeholder="Select a model"
              selectedKeys={[selectedModel]}
              onSelectionChange={(keys) =>
                setSelectedModel(Array.from(keys)[0] as string)
              }
              className="w-full max-w-40"
              defaultSelectedKeys={["flux"]}
            >
              {models.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.label}
                </SelectItem>
              ))}
            </Select>
            <Input
              label="Width"
              onChange={(e) => setWidth(Number(e.target.value))}
              className="max-w-40"
              placeholder="1080"
            />
            <Input
              label="Height"
              onChange={(e) => setHeight(Number(e.target.value))}
              className="max-w-40"
              placeholder="720"
            />
          </div>
          <Button
            className="w-full sm:w-auto"
            onClick={handleGenerate}
            disabled={isLoading || !prompt}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate"
            )}
          </Button>
        </CardContent>
        {generatedImage && (
          <CardFooter>
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2">Generated Image</h2>
              <img
                src={generatedImage}
                alt="Generated image"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="flex w-full justify-between items-center mt-4">
                <Button
                  onClick={() => {
                    // Create a temporary anchor element
                    const link = document.createElement("a");
                    link.href = generatedImage;
                    link.download = `generated-image-${Date.now()}.png`; // Dynamic filename
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </div>
            </div>
          </CardFooter>
        )}
      </Card>

      <h2 className="text-2xl font-bold mb-4">Recent Generations</h2>
      <Masonry images={images} />
    </main>
  );
}

export function Masonry({ images }: { images: ImageResponse[] }) {
  return (
    <TooltipProvider>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-10 md:py-20 mx-4">
        {images.map((image, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className="mb-4 break-inside-avoid">
                <img
                  src={image.url}
                  alt={image.prompt || `Image ${index + 1}`}
                  className="w-full object-cover rounded-lg cursor-pointer"
                />
              </div>
            </TooltipTrigger>
            {image.prompt && (
              <TooltipContent side="top" align="center" className="max-w-xs">
                <p className="text-sm">
                  {image.model} - {image.prompt}
                </p>
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
