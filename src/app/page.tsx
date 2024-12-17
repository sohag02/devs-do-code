'use client';

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Bot, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function Page() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <PreBuiltAssistants />
    </div>
  );
}

export function FeaturesSection() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="w-full py-24 bg-background/50 backdrop-blur-xl"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-5xl font-bold font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Access Top LLMs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-outfit">
            Experience the power of advanced AI models in one place
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            variants={item}
            className="space-y-8 group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <Card className="w-full aspect-square relative overflow-hidden rounded-2xl border-2 border-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10" />
                <Image
                  src="/placeholder.svg?height=512&width=512"
                  alt="MultiChat AI Interface"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={item}
            className="space-y-12"
          >
            <div className="space-y-6">
              {[
                {
                  icon: <Sparkles className="h-6 w-6 text-purple-500" />,
                  title: "Premium models",
                  description: "Gain access to all Premium LLMs like GPT-4, Claude-3, Gemini 1.5 Pro, Command R+, Mistral Large, Perplexity."
                },
                {
                  icon: <Bot className="h-6 w-6 text-indigo-500" />,
                  title: "Open Source LLMs",
                  description: "Access open source LLMs like Llama-3, Mixtral-8×7b, Qwen 110b, WizardLM-2"
                },
                {
                  icon: <Shield className="h-6 w-6 text-emerald-500" />,
                  title: "Uncensored LLMs",
                  description: "Access uncensored LLMs like Dolphin mixtral, Nous Hermes for roleplay and nsfw ai chat."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex gap-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-muted/50 group-hover:bg-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground font-space-grotesk">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground font-outfit">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={item}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-outfit"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export function PreBuiltAssistants() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="relative min-h-screen w-full overflow-hidden py-24"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-50 via-purple-100 to-white dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 opacity-80 backdrop-blur-3xl" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative">
        <motion.div variants={item} className="text-center mb-16">
          <span className="text-sm font-medium text-purple-500 font-outfit">Pre-built Assistants</span>
          <h2 className="mt-4 text-5xl font-bold font-space-grotesk">
            Ready to Use AI Assistants
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-outfit">
            Get started instantly with our pre-configured AI assistants for various use cases
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Code Assistant",
              description: "Get help with coding, debugging, and code reviews",
              icon: <Zap className="h-5 w-5" />,
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              title: "Writing Assistant",
              description: "Improve your writing with AI-powered suggestions",
              icon: <Sparkles className="h-5 w-5" />,
              gradient: "from-purple-500 to-pink-500"
            },
            {
              title: "Research Assistant",
              description: "Analyze data and generate insights quickly",
              icon: <Bot className="h-5 w-5" />,
              gradient: "from-orange-500 to-red-500"
            }
          ].map((assistant, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-6 h-full bg-background/50 backdrop-blur-xl border-2 border-muted hover:border-purple-500/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${assistant.gradient} flex items-center justify-center text-white mb-4`}>
                  {assistant.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-space-grotesk group-hover:text-purple-500 transition-colors">
                  {assistant.title}
                </h3>
                <p className="text-muted-foreground font-outfit">
                  {assistant.description}
                </p>
                <Button variant="ghost" className="mt-4 group-hover:text-purple-500 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
