'use client';
import React from 'react';
import { Copy } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface CodeBubbleProps {
  content: string;
  language: string;
  messageId: string;
}

export function CodeBubble({ content, language, messageId }: CodeBubbleProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const buttonBgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex mb-6 justify-start">
      <div className="flex">
        <div
          className={`relative max-w-lg w-fit rounded-2xl p-4 ${bgColor} ${textColor} shadow-lg break-words font-mono text-sm`}
        >
          <div className="flex justify-end items-center mb-2">
            <span className="text-xs font-medium mr-2">{language}</span>
            <button
              onClick={handleCopy}
              className={`p-1 rounded-md ${buttonBgColor} hover:bg-opacity-80 transition-colors`}
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <pre className="whitespace-pre-wrap break-words">{content}</pre>
        </div>
      </div>
    </div>
  );
}
