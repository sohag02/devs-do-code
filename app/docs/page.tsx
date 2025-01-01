'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeIn } from '@/utils/animations'
import { MessageSquare, Code, Zap, Settings, Image as ImageIcon, Volume2, Mic } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40rem] -left-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 blur-3xl" />
        <div className="absolute -bottom-[40rem] -right-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-blue-500/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeIn("up", 0.2)} className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Welcome to the DevsDo.Code documentation. Here you'll find comprehensive guides and 
              documentation to help you start working with our AI models as quickly as possible.
            </p>
          </motion.div>

          {/* Getting Started */}
          <motion.div variants={fadeIn("up", 0.3)} className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Getting Started
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <Link 
                href="/docs/quickstart"
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-3">Quickstart Guide</h3>
                  <p className="text-gray-400">Learn how to get started with our AI models, including model selection, building prompts, and managing conversations.</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </div>
          </motion.div>

          {/* Popular Guides */}
          <motion.div variants={fadeIn("up", 0.4)} className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-500 mb-8">Popular Guides</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Text Generation */}
                <Link href="/docs/text-generation" className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Text Generation</h3>
                  <p className="text-gray-400">
                    Learn how to generate human-like text responses and manage conversations.
                  </p>
                </Link>

                {/* Image Generation */}
                <Link href="/docs/image-generation" className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition group">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Image Generation</h3>
                  <p className="text-gray-400">
                    Generate and manipulate images using our powerful DALL·E models.
                  </p>
                </Link>

                {/* Text to Speech */}
                <Link href="/docs/text-to-speech" className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition group">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Volume2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Text to Speech</h3>
                  <p className="text-gray-400">
                    Convert text into natural-sounding speech with multiple voices and languages.
                  </p>
                </Link>

                {/* Speech to Text */}
                <Link href="/docs/speech-to-text" className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition group">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Speech to Text</h3>
                  <p className="text-gray-400">
                    Transcribe and translate audio into text with high accuracy.
                  </p>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
