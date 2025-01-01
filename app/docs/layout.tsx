'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Book, MessageSquare, Zap, Image as ImageIcon, Volume2, Mic, Box } from 'lucide-react'

const sidebarItems = [
  {
    label: 'GETTING STARTED',
    items: [
      { label: 'Introduction', href: '/docs', icon: Book },
      { label: 'Quickstart', href: '/docs/quickstart', icon: Zap },
      { label: 'Models', href: '/docs/models', icon: Box },
    ]
  },
  {
    label: 'GUIDES',
    items: [
      { label: 'Text Generation', href: '/docs/text-generation', icon: MessageSquare },
      { label: 'Image Generation', href: '/docs/image-generation', icon: ImageIcon },
      { label: 'Text to Speech', href: '/docs/text-to-speech', icon: Volume2 },
      { label: 'Speech to Text', href: '/docs/speech-to-text', icon: Mic },
    ]
  }
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800"
      >
        <div className="p-6 border-b border-gray-800">
          <Link href="/docs" className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Documentation
          </Link>
        </div>
        <nav className="p-4">
          {sidebarItems.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-wider text-gray-400">
                {section.label}
              </h2>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * section.items.length + itemIndex) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-all hover:text-white',
                          isActive
                            ? 'bg-gray-800/80 text-white'
                            : 'text-gray-400 hover:bg-gray-800/50'
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </nav>
      </motion.div>

      {/* Main content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
