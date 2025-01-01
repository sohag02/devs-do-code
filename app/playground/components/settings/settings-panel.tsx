"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  ChevronRight,
  Brain,
  User2,
  Sparkles,
  MessageSquare,
  Plus,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BehaviorSection } from "./BehaviourSection";
import { AdvancedSection } from "./AdvancedSection";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { ModelsSection } from "./ModelsSection";
import { Model, Voice } from "../../actions";
import { VoiceSection } from "./VoiceSection";

interface SettingsPanelProps {
  models: Model[];
  voices: Voice[];
}

export function SettingsPanel({ models, voices }: SettingsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"model" | "smartprompt">("model");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "profiles",
      title: "Profiles",
      icon: User2,
      description: "Save and switch between your different settings profiles",
      content: (
        <div className="space-y-4 text-center text-sm text-gray-400 p-4">
          <p>
            No AI profiles available. Create a profile to save your current
            configuration, including selected models, personality settings,
            tools, and other preferences. Profiles help you quickly switch
            between different AI configurations for various tasks.
          </p>
          <Button className="w-full" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Create New Profile
          </Button>
        </div>
      ),
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
      className="top-0 right-0 h-screen"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className="h-full bg-[#121212] border-[#2A2A2A] overflow-hidden"
        initial={{ width: 48 }}
        animate={{ width: isExpanded ? 400 : 48 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col h-full w-[400px]">
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1 bg-[#2A2A2A] rounded-full p-1"
              >
                <Button
                  variant="ghost"
                  className={`rounded-full px-4 ${
                    activeTab === "model" ? "bg-[#3A3A3A]" : ""
                  }`}
                  onClick={() => setActiveTab("model")}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Model
                </Button>
                <Button
                  variant="ghost"
                  className={`rounded-full px-4 ${
                    activeTab === "smartprompt" ? "bg-[#3A3A3A]" : ""
                  }`}
                  onClick={() => setActiveTab("smartprompt")}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  SmartPrompt
                </Button>
              </motion.div>
            </div>

            {/* Sections */}
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
                          expandedSection === section.id ? null : section.id
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}
