"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Possibility {
  title: string
  description: string
  icon: string
  demo: {
    before: string
    after: string
  }
  color: string
}

const possibilities: Possibility[] = [
  {
    title: "Code Generation",
    description: "Transform natural language into production-ready code across multiple programming languages.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
      </svg>
    `,
    demo: {
      before: "Create a function to sort an array of numbers",
      after: `function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}`
    },
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Image Generation",
    description: "Create stunning visuals from text descriptions with advanced AI models.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    `,
    demo: {
      before: "A serene mountain landscape at sunset",
      after: "[Generated Image Placeholder]"
    },
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Text Generation",
    description: "Generate human-like text for various purposes, from creative writing to technical documentation.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="17" y1="10" x2="3" y2="10"/>
        <line x1="21" y1="6" x2="3" y2="6"/>
        <line x1="21" y1="14" x2="3" y2="14"/>
        <line x1="17" y1="18" x2="3" y2="18"/>
      </svg>
    `,
    demo: {
      before: "Write a product description for a smart coffee maker",
      after: "Introducing the SmartBrew Pro - your personal barista powered by AI. Wake up to perfectly crafted coffee, customized to your preferences."
    },
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Audio Generation",
    description: "Create music, sound effects, and voice content using AI-powered audio generation.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    `,
    demo: {
      before: "Create an upbeat electronic music track",
      after: "[Audio Player Placeholder]"
    },
    color: "from-red-500/20 to-red-600/20"
  }
]

export function PossibilitiesSection() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Endless Possibilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the boundless potential of AI with our comprehensive suite of tools and models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {possibilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-2xl p-8 bg-gradient-to-br ${item.color} backdrop-blur-xl border border-white/10 cursor-pointer`}
              onClick={() => setActiveDemo(activeDemo === index ? null : index)}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500" />
              
              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mr-4"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">{item.description}</p>

                {/* Interactive Demo */}
                <AnimatePresence>
                  {activeDemo === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-black/30 rounded-lg p-4 mb-4">
                        <div className="text-sm text-gray-400 mb-2">Input:</div>
                        <div className="text-white">{item.demo.before}</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-2">Output:</div>
                        <div className="text-white font-mono text-sm">
                          {item.demo.after}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Try It Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                >
                  {activeDemo === index ? "Hide Demo" : "Try It"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
