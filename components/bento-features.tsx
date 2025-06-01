import { BentoGrid, BentoCard } from "./ui/bento-grid";
import { Clock } from "lucide-react";

export function BentoFeatures() {
  return (
    <BentoGrid className="dark container mx-auto">
      {items.map((item, i) => (
        <BentoCard
          key={i}
          name={item.title}
          description={item.description}
          // header={item.header}
          // icon={item.icon}
          Icon={item.icon}
          href="/docs"
          background={<img className="absolute -right-20 -top-20 opacity-60" />}
          cta="Learn More"
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "AI Playground",
    description: "Test all API models in the sandbox environment before you integrate. We provide more than 200 models to integrate into your app.",
    header: <Skeleton />,
    icon: Clock,
  },
  {
    title: "Infinite Scalability",
    description: "Experience low latency with our AI API, deploy instantly, and surpass rate limits without impact.",
    header: <Skeleton />,
    icon: Clock,
  },
  {
    title: "Simple Integration",
    description: "Simply change the endpoints in your existing setup, and you're ready to go.",
    header: <Skeleton />,
    icon: Clock,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and advanced security features to protect your data.",
    header: <Skeleton />,
    icon: Clock,
  },
]