"use client";
import { Smile, Activity, Briefcase, Edit3 } from "lucide-react";
import useSettingsStore from "@/context/useSettingsStore";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

export function BehaviorSection() {
  const { customInstructions, updateSettings } = useSettingsStore();
  const [selectedPersonalityId, setSelectedPersonalityId] = useState("Happy");

  const personalities = [
    { id: "Happy", label: "Happy", icon: Smile },
    { id: "Funny", label: "Funny", icon: Activity },
    { id: "Professional", label: "Professional", icon: Briefcase },
    { id: "Custom", label: "Custom", icon: Edit3 },
  ];

  const instructions: { [key: string]: string } = {
    Happy: "Respond in a joyful and positive manner.",
    Funny: "Include humor and wit in your responses.",
    Professional: "Maintain a formal and professional tone.",
    Custom: customInstructions || "Enter your custom instructions here...",
  };

  const isCustom = selectedPersonalityId === "Custom";

  return (
    <div className="flex flex-col w-full mt-2">
      {/* Tabs */}
      <Tabs
        isVertical={true}
        color="primary"
        onSelectionChange={(value) => {
          updateSettings({ customInstructions: instructions[value as string] });
          setSelectedPersonalityId(value as string);
        }}
        classNames={{
          tabList: "bg-[#3E3E3E]",
        }}
      >
        {personalities.map((personality) => (
          <Tab
            key={personality.id}
            value={personality.id}
            title={
              <div className="flex text-xs items-center justify-start space-x-1">
                <personality.icon className="w-4 h-4" />
                <span>{personality.label}</span>
              </div>
            }
          >
            <Card className="bg-[#3E3E3E] text-white">
              <CardBody>
                <span className="font-bold text-sm">Instructions</span>
                {isCustom ? (
                  <div className="flex flex-row gap-2">
                    <textarea
                      // value={customInstructions}
                      onChange={(e) =>
                        updateSettings({ customInstructions: e.target.value })
                      }
                      placeholder="Enter your custom instructions..."
                      className={`w-full min-h-[3rem] max-h-[20rem] bg-transparent rounded-lg focus:outline-none resize-y overflow-auto`}
                      rows={3}
                    />
                  </div>
                ) : (
                  <div className="text-sm">
                    {instructions[selectedPersonalityId]}
                  </div>
                )}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
