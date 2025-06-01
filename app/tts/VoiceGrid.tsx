"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type Voice } from "../actions/tts";
import VoiceCard from "./VoiceCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function VoiceGrid({
  voices,
  favorites,
}: {
  voices: Voice[];
  favorites: Voice[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState<"all" | "Male" | "Female">(
    "all"
  );

  const filteredVoices = voices.filter(
    (voice) =>
      voice.voice_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (genderFilter === "all" || voice.gender === genderFilter)
  );

  if (filteredVoices.length === 0) {
    return <div>No voices found</div>;
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search voices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button
          variant={genderFilter === "all" ? "default" : "outline"}
          onClick={() => setGenderFilter("all")}
          className={` ${
            genderFilter === "all"
              ? "bg-white hover:bg-white/80 text-black"
              : "bg-transparent border-white hover:bg-white/10"
          }`}
        >
          All
        </Button>
        <Button
          variant={genderFilter === "Male" ? "default" : "outline"}
          onClick={() => setGenderFilter("Male")}
          className={` ${
            genderFilter === "Male"
              ? "bg-white hover:bg-white/80 text-black"
              : "bg-transparent border-white hover:bg-white/10"
          }`}
        >
          Male
        </Button>
        <Button
          variant={genderFilter === "Female" ? "default" : "outline"}
          onClick={() => setGenderFilter("Female")}
          className={` ${
            genderFilter === "Female"
              ? "bg-white hover:bg-white/80 text-black"
              : "bg-transparent border-white hover:bg-white/10"
          }`}
        >
          Female
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVoices.map((voice) => (
            <VoiceCard
              voice={voice}
              key={voice.id}
              is_favorite={favorites
                .map((voice) => voice.voice_id)
                .includes(voice.voice_id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
