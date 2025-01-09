"use client";

import { cn } from "@/lib/utils";
import { Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  ChevronRight,
  MessageSquare,
  Settings,
  Sparkles,
  User2,
} from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Model, Voice } from "../../actions";
import { AdvancedSection } from "./AdvancedSection";
import { BehaviorSection } from "./BehaviourSection";
import { ModelsSection } from "./ModelsSection";
import { VoiceSection } from "./VoiceSection";
import { ProfileSection } from "./ProfileSection";
import SmartPrompt from "./SmartPrompt";

export interface SettingsPanelProps {
  models: Model[];
  voices: Voice[];
}

export function SettingsPanel({ models, voices }: SettingsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "profiles",
      title: "Profiles",
      icon: User2,
      description: "Save and switch between your different settings profiles",
      content: <ProfileSection />,
    },
    {
      id: "model",
      title: "Model",
      icon: Brain,
      description:
        "Select between models from OpenAI, Anthropic, Google, and Mistral",
      content: <ModelsSection models={models} />,
    },
    {
      id: "voice",
      title: "Voice",
      icon: MessageSquare,
      description: "Select a voice for feynChat",
      content: <VoiceSection voices={voices} />,
    },
    {
      id: "behaviour",
      title: "Behaviour",
      icon: Briefcase,
      description: "Give feynChat a personality or set of instructions",
      content: <BehaviorSection />,
    },
    {
      id: "advanced",
      title: "Advanced",
      icon: Briefcase,
      description: "Advanced settings",
      content: <AdvancedSection />,
    },
  ];

  return (
    <div
      className="top-0 right-0 md:h-screen"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className="md:h-full bg-[#121212] border-[#2A2A2A] overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: isExpanded ? '100%' : 56 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col md:h-full w-[400px] md:w-[400px]">
          {/* Header */}
          <div className="p-6 space-y-6">
            <div className=" items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Settings className="w-6 h-6 text-white" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white"
                >
                  Chat Settings
                </motion.span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-full mx-auto"
            >
              <Tabs
                className="w-full mx-4"
                radius="full"
                size="lg"
                color="default"
                classNames={{
                  tab: "data-[selected=true]:bg-[#3A3A3A]",
                }}
              >
                <Tab
                  key="settings"
                  value="settings"
                  className="data-selected:bg-red-400"
                  title={
                    <div className="flex items-center font-semibold gap-2">
                      <Settings className="w-4 h-4 text-white" />
                      <span>Chat Settings</span>
                    </div>
                  }
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-screen space-y-4"
                  >
                    <ScrollArea className="flex-grow overflow-auto">
                      {sections.map((section) => (
                        <div key={section.id} className="space-y-2">
                          <button
                            onClick={() =>
                              setExpandedSection(
                                expandedSection === section.id
                                  ? null
                                  : section.id
                              )
                            }
                            className="w-full flex items-center justify-between hover:bg-[#2A2A2A] p-3 rounded-lg transition-colors"
                          >
                            <div className="space-y-1 text-left">
                              <div className="flex items-center gap-2">
                                <section.icon className="w-5 h-5 text-white" />
                                <h3 className="text-lg text-white font-medium">
                                  {section.title}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-400">
                                {section.description}
                              </p>
                            </div>
                            <ChevronRight
                              className={cn(
                                "w-5 h-5 text-gray-400 transition-transform",
                                expandedSection === section.id && "rotate-90"
                              )}
                            />
                          </button>
                          {expandedSection === section.id && (
                            <div className="border-t border-[#2A2A2A]">
                              {section.content}
                            </div>
                          )}
                        </div>
                      ))}
                    </ScrollArea>
                  </motion.div>
                </Tab>

                {/* Smart Prompt */}
                <Tab
                  key="smart-prompt"
                  value="smart-prompt"
                  title={
                    <div className="flex items-center font-semibold gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Smart Prompt</span>
                    </div>
                  }
                >
                  <SmartPrompt />
                </Tab>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
