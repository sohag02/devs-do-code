'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Book, MessageSquare, Zap, Image as ImageIcon, Volume2, Mic, Box, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

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
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setIsOpen(window.innerWidth >= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="flex min-h-screen bg-black">
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-2 text-white bg-blue-500/10 rounded-lg md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      )}

      {/* Sidebar */}
      <motion.div 
        initial={false}
        animate={{ 
          x: isOpen ? 0 : -256,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-0 left-0 bottom-0 w-64 bg-[#0A0A0A] border-r border-gray-800",
          "z-40 overflow-y-auto",
          "transform transition-transform duration-200 ease-in-out"
        )}
      >
        <div className="border-b border-gray-800">
          <Link href="/docs" className="block px-6 py-4 text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Documentation
          </Link>
        </div>
        <nav className="py-2">
          {sidebarItems.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="px-4 py-2 text-sm font-medium text-gray-400">
                {section.label}
              </div>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm transition-colors",
                        isActive 
                          ? "bg-blue-500/10 text-blue-400" 
                          : "text-gray-300 hover:bg-blue-500/5 hover:text-blue-400"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </nav>
      </motion.div>

      {/* Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <main className={cn(
        "flex-1 transition-all duration-200 ease-in-out",
        isOpen ? "md:ml-64" : "ml-0"
      )}>
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  )
}
