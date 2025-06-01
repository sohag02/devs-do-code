"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { Textarea } from "@nextui-org/react";
import { Loader2 } from "lucide-react";

interface TextInputProps {
  onGenerate: (text: string) => void;
  isGenerating: boolean;
}

export default function TextInput({
  onGenerate,
  isGenerating,
}: TextInputProps) {
  const [text, setText] = useState("");
  const maxChars = 5000;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= maxChars) {
      setText(newText);
    }
  };

  const handleGenerate = () => {
    onGenerate(text); // In a real app, you'd pass the actual selected voice
  };

  return (
    <div className="flex flex-col rounded-lg bg-[#1A1A1A] p-4 h-full space-y-4 justify-between">
      <p className="w-full font-bold">Input Text</p>
      <div className="border-b-1 border-b-white/50 -mx-4"></div>
      <Textarea
        value={text}
        // onValueChange={(value) => setText(value)}
        onChange={(e) => setText(e.target.value)}
        // rows={50}
        // minRows={100}
        // isClearable={true}
        placeholder="Enter your text here"
        className="w-full h-full resize-none border-none p-0"
      />
      <div className="border-t-1 border-t-white/50 -mx-4"></div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {text.length} / {maxChars} characters
        </span>
        <Button
          onClick={handleGenerate}
          disabled={text.length === 0 || isGenerating}
          className="relative inline-block bg-white text-black hover:bg-white/80"
        >
          {isGenerating && (
            <span className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Loader2 className="h-6 w-6 animate-spin" />
            </span>
          )}
          <span>Generate</span>
        </Button>
      </div>
    </div>
  );
}
