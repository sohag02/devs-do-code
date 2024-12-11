"use client";
import { ThemeProvider } from "./context/ThemeContext";
import { ModelProvider } from "./context/ModelContext";
import { VoiceProviderContext } from "./context/VoiceContext";
import { SettingsProvider } from "./context/SettingsContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ModelProvider>
        <VoiceProviderContext>
          <SettingsProvider>{children}</SettingsProvider>
        </VoiceProviderContext>
      </ModelProvider>
    </ThemeProvider>
  );
}
