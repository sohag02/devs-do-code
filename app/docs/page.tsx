'use client'

import { motion } from 'framer-motion'
import { Search, Rocket, Code2, Shield, ChevronRight, Terminal, Zap, Book } from 'lucide-react'

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
      duration: 0.5
    }
  }
}

export default function DocsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#1A1A1A] text-white pt-16 pb-24"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Learn how to integrate and build with our AI platform
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Comprehensive guides and API references to help you build amazing AI-powered applications
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div variants={itemVariants} className="max-w-2xl mx-auto px-4 mb-16">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search documentation..."
            className="w-full pl-12 pr-4 py-3 bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Get Started Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">GET STARTED</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket className="h-6 w-6 text-blue-500" />,
                title: 'Quickstart',
                description: 'Learn the basics and get up and running in minutes',
                href: '/docs/quickstart'
              },
              {
                icon: <Terminal className="h-6 w-6 text-purple-500" />,
                title: 'Models',
                description: 'Explore our AI models and their capabilities',
                href: '/docs/models'
              },
              {
                icon: <Book className="h-6 w-6 text-pink-500" />,
                title: 'API Reference',
                description: 'Detailed API documentation and examples',
                href: '/docs/api'
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="group relative p-6 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A] hover:border-[#4A4A4A] transition-all"
                whileHover={{ y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  {item.icon}
                  <h3 className="text-lg font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center text-blue-500 group-hover:text-blue-400">
                    Learn more
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Capabilities Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">CAPABILITIES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="h-6 w-6 text-blue-500" />,
                title: 'Text Generation',
                description: 'Generate human-like text for various applications',
                href: '/docs/text-generation'
              },
              {
                icon: <Zap className="h-6 w-6 text-purple-500" />,
                title: 'Code Generation',
                description: 'AI-powered code completion and suggestions',
                href: '/docs/code-generation'
              },
              {
                icon: <Shield className="h-6 w-6 text-pink-500" />,
                title: 'Security & Compliance',
                description: 'Learn about our security measures and compliance',
                href: '/docs/security'
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="group relative p-6 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A] hover:border-[#4A4A4A] transition-all"
                whileHover={{ y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  {item.icon}
                  <h3 className="text-lg font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center text-blue-500 group-hover:text-blue-400">
                    Learn more
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Popular Guides */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-8">POPULAR GUIDES</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Authentication & Authorization',
              'Rate Limits & Quotas',
              'Error Handling',
              'Best Practices',
              'Model Selection Guide',
              'Performance Optimization'
            ].map((guide, index) => (
              <motion.a
                key={index}
                href={`/docs/guides/${guide.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="group flex items-center justify-between p-4 bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] hover:border-[#4A4A4A] transition-all"
                whileHover={{ x: 4 }}
              >
                <span>{guide}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
