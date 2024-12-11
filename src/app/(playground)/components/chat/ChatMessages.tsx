'use client';
import React, { useRef, useEffect } from 'react';
import {
  ThumbsUp,
  ThumbsDown,
  Volume2,
  User as UserIcon,
  Copy,
  Share2,
  MoreHorizontal,
  Check,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { providers } from '../../data/providers';
import { MarkdownRenderer } from './MarkdownRenderer';
import { FileMessage } from './FileMessage';
import { useModel } from '../../context/ModelContext';
import { Message } from '../ChatArea';
import { AIChatLoadingGlow } from './Thinking';

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const { theme } = useTheme();
  const { selectedModel } = useModel();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = React.useState(true);
  const [likedMessages, setLikedMessages] = React.useState<Set<string>>(new Set());
  const [dislikedMessages, setDislikedMessages] = React.useState<Set<string>>(new Set());
  const [copiedMessageId, setCopiedMessageId] = React.useState<string | null>(null);

  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const bgColorUser = theme === 'dark' ? 'bg-[#242424]' : 'bg-indigo-100';
  const bgColorAI = theme === 'dark' ? 'bg-[#272727]' : 'bg-white';
  const userName = 'You';

  useEffect(() => {
    if (shouldAutoScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, shouldAutoScroll]);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 50;
      setShouldAutoScroll(isAtBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = (messageId: string) => {
    setLikedMessages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
        setDislikedMessages((prev) => {
          const newDisliked = new Set(prev);
          newDisliked.delete(messageId);
          return newDisliked;
        });
      }
      return newSet;
    });
  };

  const handleDislike = (messageId: string) => {
    setDislikedMessages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
        setLikedMessages((prev) => {
          const newLiked = new Set(prev);
          newLiked.delete(messageId);
          return newLiked;
        });
      }
      return newSet;
    });
  };

  const handleCopy = async (messageId: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedMessageId(messageId);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  const handleShare = async (content: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: content,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      await navigator.clipboard.writeText(content);
    }
  };

  const getProviderById = (id: string) => {
    return providers.find((p) => p.id === id);
  };

  const MessageActions = ({ message }: { message: Message }) => (
    <div className="flex items-center justify-between mt-4">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleLike(message.id)}
          className={`p-1.5 rounded-full transition-all duration-200 ${
            likedMessages.has(message.id)
              ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
              : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300'
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleDislike(message.id)}
          className={`p-1.5 rounded-full transition-all duration-200 ${
            dislikedMessages.has(message.id)
              ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
              : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300'
          }`}
        >
          <ThumbsDown className="w-4 h-4" />
        </button>
      </div>
      {/* Right Section */}
      <div className="flex items-center gap-2">
        {message.sender !== 'user' && (
          <button
            className={`p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors
                      text-gray-600 dark:text-gray-300`}
          >
            <Volume2 className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={() => handleShare(message.content)}
          className={`p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors
                    text-gray-600 dark:text-gray-300`}
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleCopy(message.id, message.content)}
          className={`p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors
                    text-gray-600 dark:text-gray-300`}
        >
          {copiedMessageId === message.id ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
        {message.sender !== 'user' && (
          <button
            className={`p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors
                      text-gray-600 dark:text-gray-300`}
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="flex  overflow-y-auto p-4 space-y-6"
      ref={chatContainerRef}
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">
        {messages.map((message) => {
          const isUser = message.sender === 'user';
          return (
            <div
              key={message.id}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {message.file ? (
                // Render file message
                <FileMessage message={message} />
              ) : (
                // Render text message or thinking animation
                <div
                  className={`relative ${message.hasFile ? '-mt-5' : ''} ${
                    isUser ? 'mr-28 max-w-xl' : 'ml-28 max-w-2xl'
                  }`}
                >
                  <div
                    className={`rounded-2xl w-full ${message.hasFile ? 'rounded-tr-none' : ''} p-4 ${!message.content && 'bg-transparent shadow-none'} 
                    ${isUser ? bgColorUser : bgColorAI} ${textColor} shadow-lg break-words`}
                  >
                    {/* Message Header */}
                    <div className="flex items-center gap-2 mb-2">
                      {isUser ? (
                        <>
                          <div className="flex w-full justify-end gap-2">
                            <span className="text-sm font-medium">{userName}</span>
                            <UserIcon className="w-5 h-5" />
                          </div>
                        </>
                      ) : (
                        <>
                          <img
                            src={getProviderById(message.providerId!)?.logoUrl}
                            alt={getProviderById(message.providerId!)?.name}
                            className="w-6 h-6 object-contain"
                          />
                          <span className="text-sm font-medium">
                            {getProviderById(message.providerId!)?.name}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Message Content or Thinking Animation */}
                    {message.content ? (
                      <div className="max-w-full break-words">
                        <MarkdownRenderer content={message.content} />
                      </div>
                    ) : (
                      <AIChatLoadingGlow model={selectedModel.name} />
                    )}

                    {/* Message Actions */}
                    {message.content && <MessageActions message={message} />}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}