"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useModelStore from "@/context/useModelStore";
import useSettingsStore from "@/context/useSettingsStore";
import useVoiceStore from "@/context/useVoiceStore";
import { Attachment } from "ai";
import { useChat } from "ai/react";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, Loader2, RotateCcw, Volume2, StopCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MessageInput } from "./ChatInput";
import MarkdownRenderer from "./MarkdownRenderer";
import { PreviewAttachment } from "./PreviewAttachment";
import { useSession } from "@/context/SessionContext";
import { useSWRConfig } from "swr";
import { type Message } from "@/db/queries";

interface ChatInterfaceProps {
  firstMessage?: string;
  initialMessage?: Message[];
  chatId: string;
}

export default function Chat({
  firstMessage,
  initialMessage,
  chatId,
}: ChatInterfaceProps) {
  const { modelId } = useModelStore();
  const { temperature, topP, topK, customInstructions } = useSettingsStore();
  const { voiceId } = useVoiceStore();
  const [isGeneratingVoice, setIsGeneratingVoice] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { user } = useSession();
  const { mutate } = useSWRConfig();

  const handlePlay = async (text: string) => {
    setIsGeneratingVoice(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/audio/speech`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "DeepGram-v1",
          voice: voiceId,
          input: text,
        }),
        credentials: "include",
      }
    );
    const audioData = await res.json();
    const newAudio = new Audio(
      `data:audio/wav;base64,${audioData.audio_content}`
    );
    setAudio(newAudio);
    setIsGeneratingVoice(false);
    setIsPlaying(true);
    newAudio.play();
    newAudio.onended = () => {
      setIsPlaying(false);
    };
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    append,
    error,
    reload,
  } = useChat({
    onFinish: () => {
      mutate(`/api/history?id=${user?.userid}`);
    },
    initialMessages: initialMessage?.map((msg) => ({
      ...msg,
      id: String(msg.id),
      createdAt: new Date(msg.createdAt),
    })),
  });

  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Send the initial message when the component mounts
    if (messages.length === 0 && firstMessage) {
      append(
        {
          role: "user",
          content: firstMessage,
        },
        {
          body: {
            model: modelId,
            temperature: temperature,
            topP: topP,
            topK: topK,
            customInstructions: customInstructions,
            chatId: chatId,
            userId: user?.userid,
          },
        }
      );
    }
  }, [
    append,
    chatId,
    customInstructions,
    initialMessage,
    messages.length,
    modelId,
    temperature,
    topK,
    topP,
    user?.userid,
  ]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!isMounted) {
    return null;
  }

  const handleMsgSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
    files: Attachment[]
  ) => {
    e.preventDefault();
    const newFiles = files.map((file) => {
      file.contentType = "text/plain";
      return file;
    });
    handleSubmit(e, {
      experimental_attachments: newFiles,
      body: {
        model: modelId,
        temperature: temperature,
        topP: topP,
        topK: topK,
        customInstructions: customInstructions,
        chatId: chatId,
        userId: user?.userid,
      },
    });
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4 0">
      <ScrollArea className="flex-grow mb-4 rounded-lg">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start space-x-2 mb-4 ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {m.role !== "user" && (
                <Avatar>
                  <AvatarImage src="/ai-avatar.png" alt="AI" />
                  <AvatarFallback className="text-white rounded-full border-2 border-white">
                    AI
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`flex flex-col gap-2 ${
                  m.role === "user" ? "items-end" : "items-start"
                }`}
              >
                {m.experimental_attachments && (
                  <div className="flex flex-col gap-2">
                    {m.experimental_attachments?.map((attachment, index) => (
                      <PreviewAttachment key={index} attachment={attachment} />
                    ))}
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    m.role === "user"
                      ? "bg-[#303030] text-white"
                      : "bg-[#212121] text-gray-100"
                  }`}
                >
                  {m.role === "user" ? (
                    m.content
                  ) : (
                    <>
                      <MarkdownRenderer content={m.content} />
                      {/* actions */}
                      <div className="flex flex-row gap-2">
                        <Button
                          size="icon"
                          variant={"ghost"}
                          className="hover:bg-[#2A2A2A]"
                          onClick={() =>
                            navigator.clipboard.writeText(m.content)
                          }
                        >
                          <Copy className="w-4 h-4 text-white" />
                        </Button>
                        {!isPlaying ? (
                          <Button
                            size="icon"
                            variant={"ghost"}
                            className="hover:bg-[#2A2A2A]"
                            disabled={isGeneratingVoice}
                            onClick={() => handlePlay(m.content)}
                          >
                            {isGeneratingVoice ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-white" />
                            )}
                          </Button>
                        ) : (
                          <Button
                            size="icon"
                            variant={"ghost"}
                            className="hover:bg-[#2A2A2A]"
                            onClick={stopAudio}
                          >
                            <StopCircle className="w-4 h-4 text-red-400" />
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {error && (
            <div className="flex items-center justify-center space-x-2 text-red-400 mb-4">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div>An error occurred : {error.message}</div>
                <Button
                  type="button"
                  variant={"destructive"}
                  className="bg-red-400 text-white"
                  onClick={() => reload()}
                >
                  <RotateCcw className="w-4 h-4 mr-2" /> Retry
                </Button>
              </div>
            </div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </ScrollArea>

      {isLoading && (
        <div className="flex items-center justify-center space-x-2 text-white mb-4">
          <Loader2 className="animate-spin" />
          <span>AI is thinking...</span>
        </div>
      )}

      <MessageInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleMsgSubmit}
        isLoading={isLoading}
        stop={stop}
      />

      <footer className="mt-2 w-full mx-auto text-center">
        <p className="text-[#B4B4B4] text-sm font-thin">
          DDC can make mistakes. Please verify important information.
        </p>
      </footer>
    </div>
  );
}
