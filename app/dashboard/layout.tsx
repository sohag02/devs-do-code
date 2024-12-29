'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  MessageSquare,
  Image as ImageIcon,
  Music,
  Video,
  Settings,
  BookOpen,
  FileText,
  Code,
  ChevronDown,
  Plus,
  Crown
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SubMenuItem {
  label: string
  href: string
  icon: LucideIcon
}

interface SidebarItem {
  icon: LucideIcon
  label: string
  href?: string
  submenu?: boolean
  items?: SubMenuItem[]
}

const sidebarItems: SidebarItem[] = [
  {
    icon: Home,
    label: 'Dashboard',
    href: '/dashboard'
  },
  {
    icon: MessageSquare,
    label: 'Chat',
    submenu: true,
    items: [
      { label: 'New Chat', href: '/chat/new', icon: Plus },
      { label: 'All Chats', href: '/chat', icon: MessageSquare }
    ]
  },
  {
    icon: ImageIcon,
    label: 'Create',
    submenu: true,
    items: [
      { label: 'Images', href: '/create/images', icon: ImageIcon },
      { label: 'Music', href: '/create/music', icon: Music },
      { label: 'Video', href: '/create/video', icon: Video }
    ]
  },
  {
    icon: Settings,
    label: 'Tools',
    submenu: true,
    items: [
      { label: 'Mindmaps', href: '/tools/mindmaps', icon: BookOpen },
      { label: 'PDF Chat', href: '/tools/pdf-chat', icon: FileText },
      { label: 'Writing Library', href: '/tools/writing', icon: Code },
      { label: 'Artifacts', href: '/tools/artifacts', icon: Settings }
    ]
  }
]

const menuItemVariants = {
  closed: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  }
}

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleSubmenu = (label: string) => {
    setExpandedItems(current =>
      current.includes(label)
        ? current.filter(item => item !== label)
        : [...current, label]
    )
  }

  return (
    <div className="flex h-screen bg-[#0A0A0A]">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-[#141414] border-r border-gray-800 flex flex-col"
      >
        {/* Logo */}
        <Link href="/" className="p-6 flex items-center gap-3 border-b border-gray-800 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">devsdocode</span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          {sidebarItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={cn(
                      'flex items-center justify-between w-full p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300',
                      expandedItems.includes(item.label) && 'bg-white/5 text-white'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedItems.includes(item.label) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedItems.includes(item.label) && item.items && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                          open: {
                            opacity: 1,
                            height: 'auto',
                            transition: {
                              staggerChildren: 0.1,
                              height: {
                                duration: 0.3
                              }
                            }
                          },
                          closed: {
                            opacity: 0,
                            height: 0,
                            transition: {
                              staggerChildren: 0.05,
                              staggerDirection: -1,
                              height: {
                                duration: 0.3
                              }
                            }
                          }
                        }}
                        className="mt-1 ml-4 pl-4 border-l border-gray-800 space-y-1 overflow-hidden"
                      >
                        {item.items.map((subItem, subIndex) => (
                          <motion.div
                            key={subIndex}
                            variants={menuItemVariants}
                          >
                            <Link
                              href={subItem.href}
                              className={cn(
                                'flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300',
                                pathname === subItem.href && 'bg-white/5 text-white'
                              )}
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span>{subItem.label}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                item.href && (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300',
                      pathname === item.href && 'bg-white/5 text-white'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              )}
            </motion.div>
          ))}
        </nav>

        {/* Premium Button */}
        <div className="p-4 border-t border-gray-800">
          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Crown className="w-5 h-5" />
              <span>Get Premium</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
