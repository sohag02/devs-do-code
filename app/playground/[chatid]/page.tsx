import { Sidebar } from "@/app/playground/components/sidebar";
import { SettingsPanel } from "@/app/playground/components/settings/settings-panel";
import MainInterface from "./MainInterface";
import { fetchModels, fetchVoices } from "../actions";
import { getMessagesByChatId } from "@/db/queries";
import ChatInterface from "../components/ChatInterface";

export default async function Playground({
  params,
}: {
  params: { chatid: string };
}) {
  const models = await fetchModels();
  const voices = await fetchVoices();
  const id = params.chatid;

  const messages = await getMessagesByChatId({ id });

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-[#121212] px-20">
        {messages.length > 0 ? (
          <ChatInterface initialMessage={messages} chatId={id} />
        ) : (
          <MainInterface chatId={id} />
        )}
      </main>
      <SettingsPanel models={models} voices={voices} />
    </div>
  );
}
