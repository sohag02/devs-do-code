'use client';
import React, { useState } from 'react';
import {
  Settings,
  Bot,
  Sparkles,
  Search,
  FileText,
  Code,
  ImageIcon,
  Brain,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ChatInput } from './ChatInput';

interface PreChatScreenProps {
  onSendMessage: (message: string, attachments: File[]) => void;
  onFileUpload?: (files: File[]) => void;
}

export function PreChatScreen({ onSendMessage, onFileUpload }: PreChatScreenProps) {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [chatInputValue, setChatInputValue] = useState('');

  // Define colors based on the theme for better visibility
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const mutedColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const buttonBgColor = theme === 'dark' ? 'bg-[#242424]' : 'bg-white';
  const buttonBorderColor =
    theme === 'dark' ? 'border-gray-600' : 'border-gray-200';
  const buttonHoverBgColor =
    theme === 'dark' ? 'hover:bg-[#545454]' : 'hover:bg-gray-100';
  const buttonHoverBorderColor =
    theme === 'dark' ? 'hover:border-indigo-400' : 'hover:border-indigo-300';
  const buttonTextColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const iconColor = theme === 'dark' ? 'text-indigo-400' : 'text-indigo-500';

  const quickActions = [
    { icon: ImageIcon, label: 'Generate Image' },
    { icon: Search, label: 'Web Search' },
    { icon: FileText, label: 'Summarize' },
    { icon: Brain, label: 'Explain Concept' },
    { icon: Sparkles, label: 'Solve Problem' },
    { icon: Code, label: 'Explain Code' },
    { icon: Bot, label: 'Analyze Image' },
  ];

  const actionTexts: { [key: string]: string } = {
    'Generate Image': 'Generate an image with the following description: ',
    'Web Search': 'Please search the web for the following query: ',
    'Summarize': 'Summarize the following text: ',
    'Explain Concept': 'Explain the following concept: ',
    'Solve Problem': 'Solve the following problem: ',
    'Explain Code': 'Explain the following code: ',
    'Analyze Image': 'Analyze the following image: ',
  };

  const handleQuickAction = (action: string) => {
    if (actionTexts[action]) {
      setChatInputValue(actionTexts[action]);
    } else {
      setChatInputValue(action);
    }
  };

  const handleMessage = (message: string, attachments: File[]) => {
    setIsTransitioning(true);
    setTimeout(() => {
      onSendMessage(message, attachments);
      setChatInputValue(''); // Clear the input after sending
      setIsTransitioning(false); // Reset the transition state
    }, 300);
  };

  return (
    <div
      className={`flex-1 flex flex-col px-3 transition-opacity duration-300
            ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Middle content container */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 mb-6 relative">
          <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 animate-ping" />
          <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-40 animate-pulse" />
          <div className="relative w-full h-full bg-indigo-600 rounded-full flex items-center justify-center">
            <Bot className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className={`text-2xl font-semibold mb-6 ${textColor} text-center`}>
          How can I assist you today?
        </h1>

        {/* Wrapped ChatInput in a container with set width */}
        <div className="w-full max-w-xl mb-6">
          <ChatInput
            onSendMessage={handleMessage}
            onFileUpload={onFileUpload}
            className="!p-0 !border-0"
            initialValue={chatInputValue}
            onChange={(text) => setChatInputValue(text)}
            inputWidthClass="w-full" // Increased input width to full
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-xl mb-8">
          {quickActions.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className={`px-3 py-2 rounded-xl border ${buttonBorderColor} ${buttonBgColor} ${buttonTextColor}
                    ${buttonHoverBgColor} ${buttonHoverBorderColor} hover:shadow-md hover:-translate-y-0.5
                    transition-all duration-200 flex flex-col items-center gap-1`}
              onClick={() => handleQuickAction(label)}
            >
              <Icon className={`w-4 h-4 ${iconColor}`} />
              <span className={`text-xs text-center ${buttonTextColor}`}>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className={`text-center ${mutedColor} space-y-1 mb-3 text-xs`}>
        <p className="font-semibold">
          <span className="text-indigo-500">DDC Providers</span> could make mistakes. Please verify important
          information.
        </p>
        <p className="flex items-center justify-center gap-1">
          <Settings className="w-4 h-4" />
          Customize your AI assistant in settings
        </p>
        <p>Press ⌃↵ to send a message</p>
      </div>
    </div>
  );
}