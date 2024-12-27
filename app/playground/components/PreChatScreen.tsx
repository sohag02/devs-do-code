"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ImageIcon,
  Search,
  FileText,
  Lightbulb,
  ChevronDown,
  Settings,
} from "lucide-react";
import { MessageInput } from "./ChatInput";
import { Attachment } from "ai";

interface PreChatScreenProps {
  setChatStarted: (value: boolean) => void;
  setInitialMessage: (value: string) => void;
}

export function PreChatScreen({
  setChatStarted,
  setInitialMessage,
}: PreChatScreenProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
    files: Attachment[]
  ) => {
    e.preventDefault();
    setChatStarted(true);
    setInitialMessage(input);
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-semibold mb-12 text-white">
          What can I help with?
        </h1>
        <div className="w-full space-y-6">

          <MessageInput
            input={input}
            handleInputChange={(e) => setInput(e.target.value)}
            handleSubmit={handleSubmit}
            isLoading={false}
            stop={() => {}}
          />

          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant="outline"
              className="bg-[#2A2A2A] border-0 text-white hover:bg-[#3A3A3A]"
            >
              <ImageIcon className="w-4 h-4 mr-2 text-green-400" />
              Generate image
            </Button>
            <Button
              variant="outline"
              className="bg-[#2A2A2A] border-0 text-white hover:bg-[#3A3A3A]"
            >
              <Search className="w-4 h-4 mr-2 text-blue-400" />
              Web search
            </Button>
            <Button
              variant="outline"
              className="bg-[#2A2A2A] border-0 text-white hover:bg-[#3A3A3A]"
            >
              <FileText className="w-4 h-4 mr-2 text-orange-400" />
              Summarize
            </Button>
            <Button
              variant="outline"
              className="bg-[#2A2A2A] border-0 text-white hover:bg-[#3A3A3A]"
            >
              <Lightbulb className="w-4 h-4 mr-2 text-purple-400" />
              Explain concept
            </Button>
            <Button
              variant="outline"
              className="bg-[#2A2A2A] border-0 text-white hover:bg-[#3A3A3A]"
            >
              <ChevronDown className="w-4 h-4 mr-2" />
              more
            </Button>
          </div>
        </div>
      </div>

      <footer className="text-center space-y-2 text-sm text-gray-500">
        <p>
          <span className="font-bold italic">DDC</span> could make mistakes.
          Please verify important information.
        </p>
        <p>
          press the <Settings className="w-4 h-4 inline mx-1" /> icon to
          customize your AI assistant
        </p>
        <p>
          press{" "}
          <kbd className="px-1 py-0.5 text-xs bg-[#2A2A2A] rounded">⌘</kbd> +{" "}
          <kbd className="px-1 py-0.5 text-xs bg-[#2A2A2A] rounded">↵</kbd> to
          send a message
        </p>
      </footer>
    </div>
  );
}
