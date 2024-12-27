"use client";

import dynamic from "next/dynamic";
import ChatInterface from "../components/ChatInterface";
import { useState } from "react";

// Import client components dynamically
const PreChatScreen = dynamic(
  () =>
    import("@/app/playground/components/PreChatScreen").then(
      (mod) => mod.PreChatScreen
    ),
  {
    ssr: false,
  }
);
const Sidebar = dynamic(
  () => import("@/components/sidebar").then((mod) => mod.Sidebar),
  {
    ssr: false,
  }
);
const SettingsPanel = dynamic(
  () => import("@/components/settings-panel").then((mod) => mod.SettingsPanel),
  {
    ssr: false,
  }
);

export default function Playground() {
  const [chatStarted, setChatStarted] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | null>(null);

  return (
    <div className="flex">
      <Sidebar />
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
      <SettingsPanel />
    </div>
  );
}
