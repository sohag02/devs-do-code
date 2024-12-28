import { Sidebar } from "@/components/sidebar";
import { SettingsPanel } from "@/app/playground/components/settings/settings-panel";
import MainInterface from "./MainInterface";
import { fetchModels, fetchVoices } from "../actions";

export default async function Playground() {
  const models = await fetchModels();
  const voices = await fetchVoices();

  return (
    <div className="flex">
      <Sidebar />
      <MainInterface />
      <SettingsPanel models={models} voices={voices} />
    </div>
  );
}
