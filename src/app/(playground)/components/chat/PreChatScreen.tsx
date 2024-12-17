'use client';
import React, { useState } from 'react';
import { Bot, Image, Search, Code, Book, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { motion } from 'framer-motion';

interface PreChatScreenProps {
  onSendMessage: (message: string, attachments: File[]) => void;
  onFileUpload?: () => void;
}

const actionItems = [
  { icon: Image, label: 'Generate Image', id: 'generate-image' },
  { icon: Search, label: 'Web Search', id: 'web-search' },
  { icon: Book, label: 'Summarize', id: 'summarize' },
  { icon: Code, label: 'Explain Code', id: 'explain-code' },
];

export function PreChatScreen({ onSendMessage, onFileUpload }: PreChatScreenProps) {
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message, []);
      setMessage('');
    }
  };

  return (
    <div className="relative h-full flex flex-col items-center justify-center px-4 z-10">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* AI Assistant Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 relative z-10"
      >
        <motion.div 
          className="absolute inset-0 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative w-24 h-24 rounded-full border border-white/10 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center shadow-xl">
          <Sparkles className="w-12 h-12 text-white/80" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 font-geist-sans mb-4 tracking-tight leading-[1.1]">
          How can I assist you?
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-geist-sans font-light">
          Your creative AI companion
        </p>
      </motion.div>

      {/* Input Area */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-2xl mb-12 relative z-10"
      >
        <form onSubmit={handleSubmit} className="relative group">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full h-16 bg-zinc-900/50 border-white/5 text-white placeholder:text-zinc-500 py-6 px-6 rounded-2xl focus:ring-1 focus:ring-white/20 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:border-white/10 font-geist-sans"
          />
          <Button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-white/90 text-black rounded-xl px-6 h-10 transition-all duration-300 shadow-lg hover:shadow-white/10 font-geist-sans font-medium"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl relative z-10"
      >
        {actionItems.map((action) => (
          <motion.button
            key={action.id}
            onMouseEnter={() => setIsHovered(action.id)}
            onMouseLeave={() => setIsHovered('')}
            onClick={() => {
              const prefix = {
                'generate-image': 'Generate an image of ',
                'web-search': 'Search the web for ',
                'summarize': 'Summarize this: ',
                'explain-code': 'Explain this code: ',
              }[action.id];
              setMessage(prefix || '');
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative h-full p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300">
              <div className="flex flex-col items-center justify-center space-y-3">
                <action.icon className={`w-7 h-7 ${isHovered === action.id ? 'text-white' : 'text-zinc-400'} transition-colors duration-300`} />
                <span className={`text-sm ${isHovered === action.id ? 'text-white' : 'text-zinc-400'} font-medium font-geist-sans transition-colors duration-300`}>
                  {action.label}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-8 left-0 right-0 text-center text-zinc-600 text-sm font-geist-sans"
      >
        <p>Press <kbd className="px-2 py-1 bg-zinc-900/80 rounded-md text-xs border border-white/5 backdrop-blur-sm font-geist-mono">↵</kbd> to send</p>
      </motion.div>
    </div>
  );
}