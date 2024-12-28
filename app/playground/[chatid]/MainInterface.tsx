"use client";
import { PreChatScreen } from "../components/PreChatScreen";
import ChatInterface from "../components/ChatInterface";
import { useState } from "react";

export default function MainInterface() {
  const [chatStarted, setChatStarted] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | null>(null);

  return (
    <main className="flex-1 bg-[#121212] px-20">
      {chatStarted ? (
        <ChatInterface initialMessage={initialMessage} />
      ) : (
        <PreChatScreen
          setChatStarted={setChatStarted}
          setInitialMessage={setInitialMessage}
        />
      )}
    </main>
  );
}
