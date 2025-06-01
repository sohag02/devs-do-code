"use client";
import { type Voice } from "../actions/tts";
import { useState } from "react";
import TextInput from "./TextInput";
import AudioPlayer from "./AudioPlayer";
import VoiceTabs from "./VoiceTabs";
import { generateVoice } from "../actions/tts";
import useVoiceStore from "@/context/useVoiceStore";

export default function TextToSpeech({ voices }: { voices: Voice[] }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioBase64, setAudioBase64] = useState<string | null>(null);
  const { voiceId } = useVoiceStore();

  const handleGenerate = async (text: string) => {
    setIsGenerating(true);
    const audio = await generateVoice(text, voiceId || "aura-luna-en");
    setAudioBase64(audio);
    setIsGenerating(false);
  };

  return (
    <main className="flex flex-col h-screen text-white">
      <div className="flex flex-1 p-4 space-x-4 overflow-hidden">
        <div className="w-1/2 h-full overflow-auto">
          <TextInput onGenerate={handleGenerate} isGenerating={isGenerating} />
        </div>
        <div className="w-1/2 h-full overflow-hidden">
          <VoiceTabs voices={voices} />
        </div>
      </div>
      <div className="w-full">
        {audioBase64 && <AudioPlayer base64Audio={audioBase64} />}
      </div>
    </main>
  );
}
