import { TextShimmer } from "@/components/ui/text-shimmer";
import useModelStore from "@/context/useModelStore";
import ProviderIcon from "./ProviderIcon";

export function ThinkingMessage() {
  const { modelName, provider } = useModelStore();

  return (
    <div className="flex items-center space-x-2 text-white mb-4">
      <ProviderIcon provider={provider} size={24} color="#9ca3af" />
      <TextShimmer className="" duration={1}>
        {`${modelName} is thinking...`}
      </TextShimmer>
    </div>
  );
}
