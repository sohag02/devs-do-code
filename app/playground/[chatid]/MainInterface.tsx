"use client";
import { PreChatScreen } from "../components/PreChatScreen";
import ChatInterface from "../components/ChatInterface";
import { useState } from "react";

export default function MainInterface({ chatId }: { chatId: string }) {
  const [chatStarted, setChatStarted] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | null>(null);

  return (
    <>
      {chatStarted ? (
        <ChatInterface
          firstMessage={initialMessage || undefined}
          chatId={chatId}
        />
      ) : (
        <PreChatScreen
          setChatStarted={setChatStarted}
          setInitialMessage={setInitialMessage}
        />
      )}
    </>
  );
}
