'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Settings, Sparkles, LayoutGrid, Key, Plus, Brush, MessageCircle, Folder, PlayCircle, FileText, DollarSign, Users, Mail } from 'lucide-react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  })
}

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { data: session } = useSession()

  const menuItems = [
    { icon: PlayCircle, label: 'Playground', className: 'text-green-400', href: '/playground' },
    { icon: FileText, label: 'Documentation', className: 'text-purple-400', href: '/docs' },
    { icon: DollarSign, label: 'Pricing', className: 'text-yellow-400', href: '/pricing' },
    { icon: Users, label: 'About Us', className: 'text-blue-400', href: '/about' },
    { icon: Mail, label: 'Contact', className: 'text-pink-400', href: '/contact' },
    { icon: Sparkles, label: 'Upgrade to pro', className: 'text-blue-400', href: '#' },
    { icon: LayoutGrid, label: 'Blog', className: 'text-gray-400', href: '#' },
    { icon: Key, label: 'docTalk', className: 'text-gray-400', badge: '🧪', href: '#' },
    { icon: Plus, label: 'Start a new chat', className: 'text-gray-400', href: '#' },
    { icon: Brush, label: 'Themes', className: 'text-gray-400', href: '#' },
    { icon: MessageCircle, label: 'Chat History', className: 'text-gray-400', href: '#' },
    { icon: Folder, label: 'Create a New Folder', className: 'text-gray-400', href: '#' },
  ]

  return (
    <div 
      className="relative h-screen"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className="fixed top-0 left-0 h-full bg-[#1A1A1A] border-r border-[#2A2A2A] z-10 overflow-hidden shadow-xl"
        initial={{ width: 72 }}
        animate={{ width: isExpanded ? 280 : 72 }}
        transition={{ duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }}
      >
        <div className="flex flex-col h-full p-4 w-[280px]">
          {/* Header */}
          <motion.div 
            className="flex items-center gap-4 mb-8 px-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-8 h-8 text-white shrink-0" />
            </motion.div>
            <motion.span
              className="text-white font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              DEVS DO CODE
            </motion.span>
          </motion.div>

          {/* Menu Items */}
          <div className="flex-1">
            <nav className="space-y-1">
              <AnimatePresence>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className={`w-6 h-6 shrink-0 ${item.className}`} />
                      </motion.div>
                      <motion.span
                        className="text-gray-300 text-sm whitespace-nowrap group-hover:text-white transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                        {item.badge && (
                          <motion.span 
                            className="ml-2 inline-block"
                            whileHover={{ scale: 1.2 }}
                          >
                            {item.badge}
                          </motion.span>
                        )}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </nav>
          </div>

          {/* Footer */}
          <motion.div 
            className="mt-auto pt-4 border-t border-[#2A2A2A]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 px-2">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Settings className="w-6 h-6 text-gray-400 shrink-0" />
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {session ? (
                  <>
                    <span className="text-gray-400 text-sm">{session.user?.name}</span>
                    <button
                      onClick={() => signOut()}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <Link 
                    href="/auth/signin" 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Sign in
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
