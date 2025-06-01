"use client";
import { useState } from "react";
import { Play, Pause, Loader2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  type Voice,
  generateVoice,
  addFavoriteVoice,
  removeFavoriteVoice,
} from "../actions/tts";
import { Badge } from "@/components/ui/badge";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/navigation";
import useVoiceStore from "@/context/useVoiceStore";

export default function VoiceCard({
  voice,
  is_favorite,
}: {
  voice: Voice;
  is_favorite: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { user } = useSession();
  const [isFavorite, setIsFavorite] = useState(is_favorite);
  const router = useRouter();
  const { voiceId, setVoiceID } = useVoiceStore();

  const handleFavorite = async () => {
    setIsGenerating(true);
    if (!user) return;
    if (isFavorite) {
      await removeFavoriteVoice(user.userid, voice.voice_id);
      setIsFavorite(false);
      router.refresh();
    } else {
      await addFavoriteVoice(user.userid, voice.voice_id);
      setIsFavorite(true);
      router.refresh();
    }
    setIsGenerating(false);
  };

  const SampleText = `Hello, My name is ${voice.voice_name}`;

  const handleSamplePlay = async () => {
    setIsGenerating(true);
    setIsPlaying(false);
    const audioContent = await generateVoice(SampleText, voice.voice_id);
    const audio = new Audio(`data:audio/wav;base64,${audioContent}`);
    setIsGenerating(false);
    setIsPlaying(true);
    audio.play();
    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  return (
    <div
      className={`bg-white/5 text-card-foreground border-2 hover:cursor-pointer shadow rounded-lg ${
        voiceId === voice.voice_id ? " border-gray-400" : "border-transparent"
      }`}
      onClick={() => setVoiceID(voice.voice_id)}
    >
      <div className="flex items-center gap-2 p-4 justify-between">
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-semibold text-white">{voice.voice_name}</h3>
          <p className="text-xs text-gray-200 capitalize">
            {voice.description}
          </p>
          <Badge className="bg-white/30 text-black border border-gray-400">
            {voice.gender}
          </Badge>
        </div>
        <Button
          className="rounded-full"
          size="icon"
          disabled={isGenerating}
          onClick={handleSamplePlay}
        >
          <div hidden={isGenerating}>
            {isPlaying ? (
              <Pause className="w-6 h-6 m-2 text-white" />
            ) : (
              <Play className="w-6 h-6 m-2 text-white" />
            )}
          </div>
          <div hidden={!isGenerating}>
            <Loader2 className="w-6 h-6 m-2 text-white animate-spin" />
          </div>
        </Button>
      </div>

      {/* Buttons */}
      <div className="flex justify-around items-center border-t-2 border-gray-700">
        <button
          // variant={"ghost"}
          className="hover:bg-white/10 flex gap-2 items-center w-1/2 justify-center h-9 px-4 py-2 text-sm font-medium"
          onClick={handleSamplePlay}
          disabled={isGenerating}
        >
          <div hidden={isGenerating}>
            {isPlaying ? (
              <Pause className="w-4 h-4 m-2 text-white" />
            ) : (
              <Play className="w-4 h-4 m-2 text-white" />
            )}
          </div>
          <div hidden={!isGenerating}>
            <Loader2 className="w-6 h-6 m-2 text-white animate-spin" />
          </div>
          Sample
        </button>
        <div className="h-6 border-l border-gray-500" />
        <button
          onClick={handleFavorite}
          className="hover:bg-white/10 flex gap-2 items-center w-1/2 justify-center h-9 px-4 py-2 text-sm font-medium"
        >
          <Heart
            className={`w-4 h-4 m-2 text-white`}
            fill={isFavorite ? "white" : "none"}
          />{" "}
          Favorite
        </button>
      </div>
    </div>
  );
}
