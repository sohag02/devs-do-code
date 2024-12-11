'use client';
import React, { useState } from 'react';
import { Settings, ChevronDown, ChevronUp, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ModelSelector } from './settings/ModelSelector';
import { VoiceSelector } from './settings/VoiceSelector';
import { BehaviorSection } from './settings/BehaviorSection';
import { AdvancedSection } from './settings/AdvancedSection';
import { useModel } from '../context/ModelContext';
import { useVoice } from '../context/VoiceContext';

interface RightMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function RightMenu({ isOpen, onMouseEnter, onMouseLeave }: RightMenuProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();

  const { selectedProvider, selectedModel } = useModel();
  const { selectedVoiceProvider, selectedVoice } = useVoice();

  const sections = [
    {
      title: 'Model Selection',
      component: <ModelSelector />,
      subtitle: `${selectedModel.name} by ${selectedProvider.name}`,
    },
    {
      title: 'Voice Selection',
      component: <VoiceSelector />,
      subtitle: `${selectedVoice.name} by ${selectedVoiceProvider.name}`,
    },
    {
      title: 'Behavior',
      component: <BehaviorSection />,
      subtitle: 'Customize AI behavior',
    },
    {
      title: 'Advanced',
      component: <AdvancedSection />,
      subtitle: 'Fine-tune settings',
    },
  ];

  const bgColor = theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const hoverBg = theme === 'dark' ? 'hover:bg-[#242424]' : 'hover:bg-gray-50';

  const expandedSectionBgColor = theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-gray-100';
  const expandedSectionTextColor = theme === 'dark' ? 'text-white' : 'text-gray-900';

  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-600';
  const chevronIconColor = theme === 'dark' ? 'text-white' : 'text-gray-500';

  return (
    <div
      className={`fixed right-0 top-0 h-full ${bgColor} z-10 transition-[width] duration-300 ease-in-out custom-scrollbar
            ${isOpen ? 'w-80' : 'w-14'} flex flex-col`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Settings Header */}
      <div className={`p-3 flex items-center gap-2 shrink-0`}>
        <Settings className={`w-7 h-7 ${iconColor} shrink-0`} />
        <span
          className={`font-semibold text-base ${textColor} transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Chat Settings
        </span>
        {isOpen && (
          <button
            onClick={toggleTheme}
            className={`ml-auto p-1.5 rounded-full ${
              theme === 'dark' ? 'hover:bg-[#242424]' : 'hover:bg-gray-100'
            } transition-colors`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        )}
      </div>

      {/* Sections */}
      {isOpen && (
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {sections.map((section, index) => (
            <div key={index} className="custom-scrollbar">
              <button
                className={`w-full p-3 text-left ${hoverBg} transition-colors`}
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className={`font-medium ${textColor}`}>{section.title}</h3>
                    <p className="text-sm text-gray-500">
                      {expandedSection === index ? '' : section.subtitle}
                    </p>
                  </div>
                  {expandedSection === index ? (
                    <ChevronUp className={`w-5 h-5 ${chevronIconColor}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${chevronIconColor}`} />
                  )}
                </div>
              </button>
              {expandedSection === index && (
                <div
                  className={`px-3 pb-3 ${expandedSectionBgColor} ${expandedSectionTextColor} custom-scrollbar`}
                >
                  {section.component}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}