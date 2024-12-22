'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Code2, Zap, Brain, ArrowRight, Sparkles, FileCode, GitBranch } from 'lucide-react'
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
    icon: MessageSquare,
    title: 'Interactive Chat',
    description: 'Engage in natural conversations with our AI to solve coding challenges and debug issues.',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10'
  },
  {
    icon: Code2,
    title: 'Code Editor',
    description: 'Built-in code editor with syntax highlighting and real-time execution capabilities.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10'
  },
  {
    icon: FileCode,
    title: 'Multiple Languages',
    description: 'Support for all major programming languages with intelligent code completion.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Track changes and manage different versions of your code seamlessly.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10'
  }
]

const stats = [
  { label: 'Active Users', value: '10K+' },
  { label: 'Code Executions', value: '1M+' },
  { label: 'Languages Supported', value: '20+' },
  { label: 'Response Time', value: '<1s' },
]

export default function Home() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <motion.div
            className="p-3 bg-blue-500/10 rounded-xl"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-12 h-12 text-blue-500" />
          </motion.div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Code Smarter with AI
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Experience the future of coding with our AI-powered playground. Write, debug, and optimize code faster than ever.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Try Playground
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-[#2A2A2A] border-[#3A3A3A] hover:bg-[#3A3A3A]"
          >
            View Documentation
          </Button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
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
            <div className={`p-3 ${feature.bgColor} rounded-xl w-fit mb-4`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Demo Section */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Interactive Playground</h2>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="aspect-video bg-[#1A1A1A] rounded-lg">
            {/* Add interactive demo or video here */}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Start Coding?</h2>
        <p className="text-gray-400 mb-8">
          Join thousands of developers who are already coding smarter with our AI-powered playground.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Get Started Free
            <Zap className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-[#2A2A2A] border-[#3A3A3A] hover:bg-[#3A3A3A]"
          >
            View Pricing
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
