'use client';

import { motion } from 'framer-motion';
import { ChatInterface } from './components/ChatInterface';
import { useRouter } from 'next/navigation';

export default function PlaygroundPage() {
  const router = useRouter();

  return (
    <div className="flex-1 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_50%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          }}
        />
        {/* Animated Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Chat Interface */}
      <ChatInterface onSendMessage={(message) => {
        // Implement message sending logic here
        console.log('Sending message:', message);
      }} />
    </div>
  );
}
