import { Tabs, Tab } from "@nextui-org/react";
import VoiceGrid from "./VoiceGrid";
import { type Voice, getFavoriteVoicesID } from "../actions/tts";
import { useState, useEffect } from "react";
import { useSession } from "@/context/SessionContext";

export default function VoiceTabs({ voices }: { voices: Voice[] }) {
  const [favorites, setFavorites] = useState<Voice[]>([]);
  const { user } = useSession();

  useEffect(() => {
    const favoriteVoicesID = async () => {
      if (!user) return;
      const favoriteVoices = await getFavoriteVoicesID(user?.userid);
      setFavorites(
        voices.filter((voice) =>
          favoriteVoices.map((id) => id.voiceId).includes(voice.voice_id)
        )
      );
    };
    favoriteVoicesID();
  }, [voices, user]);

  return (
    <div className="w-full h-full flex flex-col bg-[#1A1A1A] rounded-lg overflow-hidden p-4">
      <Tabs
        fullWidth
        aria-label="Voice tabs"
        className="flex-none"
        // color="primary"
        classNames={{
          // tabList: "bg-blue-400/20",
          // tabContent: "group-data-[selected=true]:text-[#06b6d4]",
        }}
      >
        <Tab key={"deepgram"} title="DeepGram">
          <div className="h-full overflow-y-auto">
            <VoiceGrid voices={voices} favorites={favorites} />
          </div>
        </Tab>
        <Tab key={"tiktok"} title="TikTok">
          <div className="h-full overflow-y-auto">
            <VoiceGrid voices={voices} favorites={favorites} />
          </div>
        </Tab>
        <Tab key={"favorites"} title="Favorites">
          <div className="h-full overflow-y-auto">
            <VoiceGrid voices={favorites} favorites={favorites} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
