'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Command, Sparkles, Terminal } from 'lucide-react';
import { Button } from './ui/button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <div className="w-full transition-colors duration-300 bg-gradient-to-b from-background via-background/95 to-background/90">
      <motion.div 
        className="w-full max-w-6xl mx-auto py-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" variants={item}>
              {/* Command Badge */}
              <motion.div 
                className="relative inline-flex h-10 bg-zinc-900/10 dark:bg-zinc-100/10 rounded-full px-4 items-center gap-2 border border-zinc-200/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Command className="w-5 h-5" />
                <span className="font-medium text-sm">
                  Modern AI Development
                </span>
              </motion.div>

              <motion.div variants={item}>
                <h1 className="text-6xl font-bold leading-tight mb-6 font-space-grotesk tracking-tight">
                  Build with
                  <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                    {" "}Next-Gen AI{" "}
                  </span>
                  Tools
                </h1>
                <p className="text-lg text-muted-foreground font-outfit">
                  Experience the future of AI development with our cutting-edge platform. Access GPT-4, Claude-3, and Gemini 1.5 Pro in one place.
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={item}
              >
                <Button 
                  size="lg"
                  className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 dark:text-black font-outfit group"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-outfit border-zinc-200 dark:border-zinc-800"
                >
                  View Documentation
                </Button>
              </motion.div>

              <motion.div 
                className="grid grid-cols-3 gap-6 pt-8"
                variants={item}
              >
                {[
                  { label: "AI Models", value: "20+", icon: <Bot className="w-5 h-5" /> },
                  { label: "Commands", value: "100+", icon: <Terminal className="w-5 h-5" /> },
                  { label: "Tools", value: "50+", icon: <Sparkles className="w-5 h-5" /> },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200/20 backdrop-blur-sm"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="font-bold text-2xl font-space-grotesk">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-outfit">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={item}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-zinc-500/20 to-zinc-700/20 dark:from-zinc-300/20 dark:to-zinc-500/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="relative aspect-square bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 rounded-3xl p-[1px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-full h-full bg-background rounded-[22px] p-6 border border-zinc-200/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-white dark:text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-space-grotesk">AI Terminal</h3>
                      <p className="text-sm text-muted-foreground font-outfit">Powerful command interface</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "> Initialize AI development environment",
                      "Loading models and tools...",
                      "Ready for development. Type 'help' to start.",
                    ].map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="p-3 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/50 text-sm font-mono border border-zinc-200/20"
                      >
                        {message}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
