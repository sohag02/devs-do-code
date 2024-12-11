"use client";
import React, { useState, useEffect } from "react";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { ChatArea } from "../components/ChatArea";
import { PhotosArea } from "../components/PhotosArea";
import { LoadingScreen } from "../components/LoadingScreen";

type ActiveSection = "chat" | "photos";

export default function Playground() {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [activeSection, setActiveSection] = useState<ActiveSection>("chat");
  const [chatKey, setChatKey] = useState(0); // Key to force re-render of ChatArea

  const handleNewChat = () => {
    setChatKey((prev) => prev + 1); // Force re-render of ChatArea with new key
    setActiveSection("chat");
  };

  const handleShowPhotos = () => {
    setActiveSection("photos");
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      //   <ThemeProvider>
      <LoadingScreen />
      //   {/* </ThemeProvider> */}
    );
  }

  return (
    <div className="h-screen w-screen flex">
      <LeftMenu
        isOpen={leftMenuOpen}
        onMouseEnter={() => setLeftMenuOpen(true)}
        onMouseLeave={() => setLeftMenuOpen(false)}
        onNewChat={handleNewChat}
        onShowPhotos={handleShowPhotos}
      />
      {activeSection === "chat" && (
        <ChatArea
          key={chatKey}
          leftMenuOpen={leftMenuOpen}
          rightMenuOpen={rightMenuOpen}
        />
      )}
      {activeSection === "photos" && (
        <PhotosArea leftMenuOpen={leftMenuOpen} rightMenuOpen={rightMenuOpen} />
      )}
      <RightMenu
        isOpen={rightMenuOpen}
        onMouseEnter={() => setRightMenuOpen(true)}
        onMouseLeave={() => setRightMenuOpen(false)}
      />
    </div>
  );
}
