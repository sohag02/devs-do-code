'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Code2, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  }
}

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Assistant',
    description: 'Get instant help with coding, debugging, and technical questions.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time responses and code suggestions to keep you productive.',
  },
  {
    icon: Code2,
    title: 'Multi-Language Support',
    description: 'Works with all major programming languages and frameworks.',
  },
  {
    icon: Sparkles,
    title: 'Smart Suggestions',
    description: 'Contextual code completions and intelligent recommendations.',
  },
]

export default function JarvisPage() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Meet Jarvis
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Your AI-powered coding companion that helps you write better code, faster.
        </p>
        <Button 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Try Jarvis Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

      {/* Features Grid */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A] hover:border-blue-500/50 transition-colors"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4">
              <feature.icon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Demo Section */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A]">
          <h2 className="text-2xl font-bold mb-6">See Jarvis in Action</h2>
          <div className="aspect-video bg-[#1A1A1A] rounded-lg">
            {/* Add demo video or interactive demo here */}
          </div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8">
          Choose a plan that best fits your needs and start coding smarter with Jarvis.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline"
            size="lg"
            className="bg-[#2A2A2A] border-[#3A3A3A] hover:bg-[#3A3A3A]"
          >
            View Pricing
          </Button>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start Free Trial
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
