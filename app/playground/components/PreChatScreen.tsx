"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ImageIcon,
  Search,
  FileText,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Settings,
  Code2,
  PenLine,
} from "lucide-react";
import { MessageInput } from "./ChatInput";
import { Attachment } from "ai";

interface suggestion {
  title: string;
  input: string;
  icon: React.ReactNode;
}

const suggestions: suggestion[] = [
  {
    title: "Generate image",
    input: "Generate an image of a ",
    icon: <ImageIcon className="w-4 h-4 mr-2 text-green-400" />,
  },
  {
    title: "Explain concept",
    input: "Explain the following concept: ",
    icon: <Lightbulb className="w-4 h-4 mr-2 text-purple-400" />,
  },
  {
    title: "Code",
    input: "Write code for ",
    icon: <Code2 className="w-4 h-4 mr-2 text-blue-400" />,
  },
  {
    title: "Summarize",
    input: "Summarize the following text: ",
    icon: <FileText className="w-4 h-4 mr-2 text-orange-400" />,
  },
  {
    title: "Brainstorm",
    input: "Brainstorm ideas for ",
    icon: <Lightbulb className="w-4 h-4 mr-2 text-orange-400" />,
  },
  {
    title: "Make a plan",
    input: "Make a plan to ",
    icon: <Lightbulb className="w-4 h-4 mr-2 text-blue-400" />,
  },
  {
    title: "Web search",
    input: "Search the web for ",
    icon: <Search className="w-4 h-4 mr-2 text-purple-400" />,
  },
  {
    title: "Help me write",
    input: "Help me write ",
    icon: <PenLine className="w-4 h-4 mr-2 text-green-400" />,
  },
];

interface PreChatScreenProps {
  setChatStarted: (value: boolean) => void;
  setInitialMessage: (value: string) => void;
}

export function PreChatScreen({
  setChatStarted,
  setInitialMessage,
}: PreChatScreenProps) {
  const [input, setInput] = useState("");
  const [showMore, setShowMore] = useState(false);

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
    <div className="flex flex-col h-screen p-6">
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

          <div className="flex flex-wrap gap-2 justify-center min-h-20">
            {suggestions
              .slice(0, showMore ? suggestions.length : 4)
              .map((suggestion, index) => (
                <Button
                  variant="outline"
                  className="bg-[#2A2A2A] border-0 rounded-full text-white hover:bg-[#3A3A3A]"
                  key={index}
                  onClick={() => {
                    setInput(suggestion.input);
                  }}
                >
                  {suggestion.icon}
                  {suggestion.title}
                </Button>
              ))}
            <Button
              variant="outline"
              className="bg-[#2A2A2A] border-0 rounded-full text-white hover:bg-[#3A3A3A]"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? (
                <>
                  <ChevronUp className="w-4 h-4" /> Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" /> More
                </>
              )}
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
