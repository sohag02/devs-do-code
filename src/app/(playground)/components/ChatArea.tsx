'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { PreChatScreen } from './chat/PreChatScreen';
import { ChatMessages } from './chat/ChatMessages';
import { ChatInput } from './chat/ChatInput';
import { useModel } from '../context/ModelContext';
import { useSettings } from '../context/SettingsContext';

interface ChatAreaProps {
  leftMenuOpen: boolean;
  rightMenuOpen: boolean;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  providerId?: string;
  modelId?: string;
  file?: {
    name: string;
    type: string;
    url: string;
  };
  hasFile?: boolean;
}

export function ChatArea({ leftMenuOpen, rightMenuOpen }: ChatAreaProps) {
  const { theme } = useTheme();
  const { selectedProviderId, selectedModelId } = useModel();
  const { temperature } = useSettings();
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const bgColor = theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-gray-100';
  const controllerRef = useRef<AbortController | null>(null);

  const handleSendMessage = async (content: string, attachments: File[]) => {
    attachments = attachments || [];
    if (!content.trim() && attachments.length === 0) return;

    setIsAnimating(true);
    
    // Handle attachments (if needed)
    if (attachments.length > 0) {
      const attachmentMessages: Message[] = attachments.map((file) => ({
        id: (Date.now() + Math.random()).toString(),
        content: '',
        sender: 'user',
        timestamp: new Date(),
        file: {
          name: file.name,
          type: file.type,
          url: URL.createObjectURL(file),
        },
      }));

      setMessages((prev) => [...prev, ...attachmentMessages]);
    }

    // Add user message
    if (content.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content,
        sender: 'user',
        timestamp: new Date(),
        hasFile: attachments.length > 0,
      };
      setMessages((prev) => [...prev, userMessage]);
    }

    if (!chatStarted) setChatStarted(true);

    // Prepare payload for API request
    const payload = {
      model: 'mistralai/Mixtral-8x22B-Instruct-v0.1',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content },
      ],
      temperature: temperature,
      max_tokens: 4096,
      stream: true,
    };

    const endpoint = 'https://api-handler-deepinfra.hf.space/chat/completions';

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const controller = new AbortController();
      controllerRef.current = controller;
      const signal = controller.signal;

      const aiMessageId = Date.now() + 1;
      const aiMessage: Message = {
        id: aiMessageId.toString(),
        content: '',
        sender: 'ai',
        timestamp: new Date(),
        providerId: selectedProviderId,
        modelId: selectedModelId,
      };

      setMessages((prev) => [...prev, aiMessage]);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: signal,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('ReadableStream not supported in this browser.');
      }

      let fullContent = '';
      const decoder = new TextDecoder('utf-8');
      const updateInterval = 50; // Update every 50ms
      let lastUpdate = Date.now();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine === '') continue;
          if (trimmedLine.startsWith('data: ')) {
            const jsonStr = trimmedLine.replace('data: ', '');
            if (jsonStr === '[DONE]') {
              continue;
            }
            try {
              const json = JSON.parse(jsonStr);
              const contentDelta =
                json.choices?.[0]?.delta?.content || '';
              if (contentDelta) {
                fullContent += contentDelta;

                const now = Date.now();
                if (now - lastUpdate > updateInterval) {
                  setMessages((prevMessages) =>
                    prevMessages.map((msg) =>
                      msg.id === aiMessageId.toString()
                        ? { ...msg, content: fullContent }
                        : msg
                    )
                  );
                  lastUpdate = now;
                }
              }
            } catch (err) {
              console.error('Error parsing JSON:', err);
            }
          }
        }
      }

      // Final update
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === aiMessageId.toString()
            ? { ...msg, content: fullContent }
            : msg
        )
      );

      setIsAnimating(false);
    } catch (error) {
      console.error('Error during streaming:', error);
      // Only update with error message if it's not an abort error
      if (error.name !== 'AbortError') {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === aiMessageId.toString()
              ? { ...msg, content: 'An error occurred while fetching the response.' }
              : msg
          )
        );
      }
      setIsAnimating(false);
    } finally {
      controllerRef.current = null;
    }
  };
  
  const handleStopGeneration = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      // Remove the last AI message if it's empty
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.sender === 'ai' && !lastMessage.content.trim()) {
          return prevMessages.slice(0, -1);
        }
        return prevMessages;
      });
      setIsAnimating(false);
      controllerRef.current = null;
    }
  };

  // Cleanup function to abort the controller when component unmounts
  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      messages.forEach((message) => {
        if (message.file?.url) {
          URL.revokeObjectURL(message.file.url);
        }
      });
    };
    // Empty dependency array ensures this runs only on unmount
  }, []);

  return (
    <main
      className={`flex-1 ${bgColor} flex flex-col overflow-hidden transition-[margin] duration-300 ease-in-out
            ${leftMenuOpen ? 'ml-56' : 'ml-14'}
            ${rightMenuOpen ? 'mr-80' : 'mr-14'}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col">
        {!chatStarted ? (
          <PreChatScreen
            onSendMessage={handleSendMessage}
            onFileUpload={() => {}}
          />
        ) : (
          <>
            <ChatMessages messages={messages} />
            <div className="mb-16"></div>
            <ChatInput
              onSendMessage={handleSendMessage}
              onFileUpload={() => {}}
              inputWidthClass="w-8/12"
              isDisabled={false}
              isGenerating={isAnimating}
              onStopGeneration={handleStopGeneration}
              className={`fixed mt-auto bottom-0 left-0 right-0 ${bgColor}`}
            />
          </>
        )}
      </div>
    </main>
  );
}