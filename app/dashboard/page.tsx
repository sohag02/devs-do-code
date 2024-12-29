'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Image, Video, Settings, Plus, Crown, ArrowRight, BookOpen, FileText, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
}

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen p-8 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              Good evening, User
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-lg max-w-2xl"
            >
              Experience the next generation of AI-powered creativity and productivity tools, all in one seamless workspace.
            </motion.p>
          </div>
          <motion.div variants={itemVariants}>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Crown className="w-5 h-5 mr-2" />
              Upgrade to Premium
            </Button>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Quick Actions</h2>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-800 hover:bg-gray-800 gap-2 px-6 rounded-xl transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              New Chat
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Mindmaps', color: 'blue', href: '/tools/mindmaps' },
              { icon: FileText, title: 'PDF Chat', color: 'purple', href: '/tools/pdf-chat' },
              { icon: Code, title: 'Writing Library', color: 'pink', href: '/tools/writing' },
              { icon: Settings, title: 'Artifacts', color: 'orange', href: '/tools/artifacts' }
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative p-6 bg-[#141414] rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`p-3 bg-${item.color}-500/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                    </div>
                    <span className="font-medium text-lg text-white group-hover:text-white transition-colors duration-300">{item.title}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Creative Studios */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Creative Studios</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Image Studio',
                description: 'Create stunning AI-generated images',
                gradient: 'from-blue-500/20 to-purple-500/20',
                icon: Image,
                href: '/studio/image'
              },
              {
                title: 'Model Comparison',
                description: 'Compare how different AI models approach the same tasks',
                gradient: 'from-purple-500/20 to-pink-500/20',
                icon: MessageSquare,
                href: '/studio/compare'
              },
              {
                title: 'Video Studio',
                description: 'Create and edit videos with AI',
                gradient: 'from-pink-500/20 to-orange-500/20',
                icon: Video,
                href: '/studio/video'
              }
            ].map((studio, index) => (
              <Link key={index} href={studio.href}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative h-[280px] bg-[#141414] rounded-2xl border border-gray-800 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${studio.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div className={`p-4 bg-white/10 rounded-xl w-fit backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                      <studio.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors duration-300">
                        {studio.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {studio.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        <span>Explore Studio</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
