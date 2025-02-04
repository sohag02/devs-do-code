import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Stopwatch } from "@/components/stopwatch";
import { Button } from "@/components/ui/button";
import { Download, Maximize } from "lucide-react";

interface ImageDisplayProps {
  imageData: string | null | undefined;
  isLoading?: boolean;
  failed?: boolean;
}

const LoadingState = ({ failed }: { failed?: boolean }) => (
  <div className="w-full md:w-3/4 h-auto bg-white/95 bg-gray-400 flex flex-col items-center justify-center object-cover rounded-lg aspect-square mx-auto">
    <Stopwatch startTime={Date.now()} />
    {failed && <div className="text-red-500 text-sm">Failed to load image</div>}
  </div>
);

const ImageActions = ({ imageData }: { imageData: string }) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${imageData}`;
    link.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-between items-center mt-4 mx-auto">
      <Button onClick={downloadImage}>
        <Download className="mr-2 h-4 w-4" /> Download
      </Button>
    </div>
  );
};

export function ImageDisplay({
  imageData,
  isLoading,
  failed,
}: ImageDisplayProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isZoomed) {
      window.history.pushState({ zoomed: true }, "");
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isZoomed) {
        setIsZoomed(false);
      }
    };

    const handlePopState = () => {
      if (isZoomed) {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      document.addEventListener("keydown", handleEscape);
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isZoomed]);

  const handleImageClick = (e: React.MouseEvent) => {
    if (imageData) {
      e.stopPropagation();
      setIsZoomed(true);
    }
  };

  if (isLoading) return <LoadingState failed={failed} />;
  if (!imageData || failed) return null;

  return (
    <div className="relative h-full flex flex-col justify-center">
      <div className="relative w-full md:w-3/4 mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${imageData}`}
          alt="Generated image"
          className="w-full h-auto object-cover rounded-lg mx-auto"
        />
        <button
          className="absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
          onClick={handleImageClick}
        >
          <Maximize size={20} />
        </button>
      </div>
      <ImageActions imageData={imageData} />

      {isZoomed &&
        imageData &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer min-h-[100dvh] w-screen"
            onClick={() => setIsZoomed(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/png;base64,${imageData}`}
              alt={`Generated image`}
              className="max-h-[90dvh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </div>
  );
}
