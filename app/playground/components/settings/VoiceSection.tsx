import { Tabs, Tab } from "@nextui-org/react";
import useVoiceStore from "@/context/useVoiceStore";
import { Voice } from "../../actions";
import { Play, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceSectionProps {
  voices: Voice[];
}

export function VoiceSection({ voices }: VoiceSectionProps) {
  const { voiceId, setVoiceID } = useVoiceStore();

  const handlePlaySample = async (voiceId: string, text: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/audio/speech`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "DeepGram-v1",
          voice: voiceId,
          input: text,
        }),
        credentials: "include",
      }
    );
    const audioData = await res.json(); // Assuming the response is plain text with base64 data
    const audio = new Audio(`data:audio/wav;base64,${audioData.audio_content}`);
    audio.play();
  };

  return (
    <div className="flex flex-col w-full mt-2">
      <Tabs
        aria-label="Voice options"
        isVertical={true}
        color="primary"
        classNames={{
          tabList: "bg-[#3E3E3E] p-2",
          tab: "max-w-full",
          tabContent: "group-data-[selected=true]:text-white",
        }}
        defaultSelectedKey={voiceId}
        onSelectionChange={(value) => {
          setVoiceID(value as string);
        }}
      >
        {voices.map((voice) => (
          <Tab
            key={voice.voice_id}
            value={voice.voice_id}
            title={
              <div className="flex text-sm items-center justify-start space-x-2">
                <span className="font-medium">{voice.voice_name}</span>
              </div>
            }
          >
            <div className="text-white p-4 bg-[#2D2D2D] rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{voice.voice_name}</h3>
              <p className="text-sm text-gray-300 mb-4">{voice.description}</p>
              <div className="flex flex-col space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <User size={18} className="text-gray-400" />
                  <span className="text-xs text-gray-400">Gender:</span>
                  <span className="text-sm capitalize">{voice.gender}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe size={18} className="text-gray-400" />
                  <span className="text-xs text-gray-400">Language:</span>
                  <span className="text-sm">{voice.language}</span>
                </div>
              </div>
              <Button
                className="flex gap-2"
                onClick={() =>
                  handlePlaySample(
                    voice.voice_id,
                    `Hello, My name is ${voice.voice_name}`
                  )
                }
              >
                <Play size={18} fill="white" />
                Play Sample
              </Button>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
