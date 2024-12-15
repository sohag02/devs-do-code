"use client";
import { ThemeProvider } from "./context/ThemeContext";
import { ModelProvider } from "./context/ModelContext";
import { VoiceProviderContext } from "./context/VoiceContext";
import { SettingsProvider } from "./context/SettingsContext";

import { LeftMenu } from "./components/LeftMenu";
import { RightMenu } from "./components/RightMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ModelProvider>
        <VoiceProviderContext>
          <SettingsProvider>
            <main className="h-screen w-screen flex">
              <LeftMenu />
              <div className="flex-1 flex">
                {children}
              </div>
              <RightMenu />
            </main>
          </SettingsProvider>
        </VoiceProviderContext>
      </ModelProvider>
    </ThemeProvider>
  );
}
