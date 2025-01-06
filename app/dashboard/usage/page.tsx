import { getUsage } from "@/app/actions/usage";
import Usage from "./Usage";

export default async function UsagePage() {
  const usageData = await getUsage();

  return <Usage usageData={usageData} />;
}
