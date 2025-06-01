import { Sidebar } from "@/app/playground/components/sidebar";
import { SettingsPanel } from "@/app/playground/components/settings/settings-panel";
import MainInterface from "./MainInterface";
import { fetchModels, fetchVoices } from "../actions";
import { getMessagesByChatId } from "@/db/queries";
import ChatInterface from "../components/ChatInterface";
import MobileNavbar from "../components/mobile-navbar";
import AdBanner from "@/components/AdBanner";
import AdsterraNativeAd from "@/components/Ad";

export default async function Playground({
  params,
}: {
  params: { chatid: string };
}) {
  // const models = await fetchModels();
  // const voices = await fetchVoices();
  // Dummy data
  const models = [
    {
      id: "stable_diffusion",
      label: "Stable Diffusion",
    },
  ];
  const voices = [
    {
      voice_id: "en-US-JennyNeural",
      voice_name: "Jenny",
    },
    {
      voice_id: "en-US-AriaNeural",
      voice_name: "Aria",
    },
  ];
  const id = params.chatid;

  const messages = await getMessagesByChatId({ id });

  return (
    <div className="flex text-white">
      <div className="hidden md:block">
          <Sidebar />
      </div>
      <main className="flex-1 bg-[#121212]">
        <MobileNavbar models={models} voices={voices} />
        {messages.length > 0 ? (
          <div className="grid grid-cols-4">
            <AdsterraNativeAd /> 
            <div className="col-span-2">
              <ChatInterface initialMessage={messages} chatId={id} />
            </div>
            <AdBanner />
          </div>
        ) : (
          <MainInterface chatId={id} />
        )}
      </main>
      <div className="hidden md:block">
        <SettingsPanel models={models} voices={voices} />
      </div>
    </div>
  );
}
