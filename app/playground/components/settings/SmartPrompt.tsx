import { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { enhancePrompt } from "@/app/actions/smart-prompt";

export default function SmartPrompt() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const enhancedPrompt = await enhancePrompt({ prompt: prompt });
    setPrompt(enhancedPrompt);
    setIsLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).catch(() => {
      setCopied(false);
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-3">
      <p className="text-sm mb-4 text-gray-400">
        Improve your prompt using AI assistance. Enter a prompt and click
        “Enhance Prompt” to get an improved version of your current prompt.
      </p>
      <Textarea
        className={`my-2 transition-all duration-300 ${
          isLoading ? " animate-pulse " : "border-none"
        }`}
        label="Original Prompt"
        placeholder="Enter your prompt"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        disabled={isLoading}
      />
      <div className="mt-4 flex items-center justify-start gap-2">
        <Button
          className="flex items-center gap-2"
          onPress={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 text-white animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4 text-white" />
          )}
          Enhance Prompt
        </Button>
        <Button
          onPress={handleCopy}
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" /> Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
