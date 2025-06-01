import { fetchVoices } from "../actions/tts";
import TextToSpeech from "./TextToSpeech";
import { Navbar } from "@/components/navbar";

export default async function Page() {
  const voices = await fetchVoices();

  return (
    <div className=" bg-black">
      {/* <Navbar /> */}
      <TextToSpeech voices={voices} />
    </div>
  );
}
