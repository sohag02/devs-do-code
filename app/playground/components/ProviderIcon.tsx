import {
  SiOpenai,
  SiAnthropic,
  SiGoogle,
  SiMeta,
} from "@icons-pack/react-simple-icons";

export default function ProviderIcon({
  provider,
  size = 24,
  color = "currentColor",
}: {
  provider: string;
  size?: number;
  color?: string;
}) {
  if (provider === "OpenAI") {
    return <SiOpenai size={size} color={color} />;
  } else if (provider === "Anthropic") {
    return <SiAnthropic size={size} color={color} />;
  } else if (provider === "Google") {
    return <SiGoogle size={size} color={color} />;
  } else if (provider === "Meta") {
    return <SiMeta size={size} color={color} />;
  } else {
    return <SiOpenai size={size} color={color} />;
  }
}