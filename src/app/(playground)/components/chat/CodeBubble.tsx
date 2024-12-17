'use client';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

interface CodeBubbleProps {
  code: string;
  language?: string;
}

export function CodeBubble({ code, language }: CodeBubbleProps) {
  const { theme } = useTheme();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className={`p-4 rounded-lg overflow-x-auto ${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-gray-100'}`}>
        <code className={`language-${language || 'plaintext'}`}>{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleCopy}
        className="absolute top-2 right-2"
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
