'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, PlayCircle, FileText, DollarSign, Users, Mail, Settings, Github, Twitter, Instagram, Send } from 'lucide-react'
import Link from 'next/link'
import { useSession } from '@/context/SessionContext'

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

const socialLinks = [
  { icon: Github, href: 'https://github.com/devsdocode', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/devsdocode', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/devsdocode', label: 'Instagram' },
  { icon: Send, href: 'https://t.me/devsdocode', label: 'Telegram' },
]

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { user } = useSession()

  const menuItems = [
    { icon: PlayCircle, label: 'Playground', className: 'text-green-400', href: '/playground' },
    { icon: FileText, label: 'Documentation', className: 'text-purple-400', href: '/docs' },
    { icon: DollarSign, label: 'Pricing', className: 'text-yellow-400', href: '/pricing' },
    { icon: Users, label: 'About Us', className: 'text-blue-400', href: '/about' },
    { icon: Mail, label: 'Contact', className: 'text-pink-400', href: '/contact' },
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
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-[#2A2A2A] space-y-4">
            {/* Settings */}
            {user && (
              <Link
                href="/settings"
                className="flex items-center gap-4 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Settings className="w-6 h-6 shrink-0 text-gray-400" />
                </motion.div>
                <motion.span
                  className="text-gray-300 text-sm whitespace-nowrap group-hover:text-white transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Settings
                </motion.span>
              </Link>
            )}

            {/* Social Links */}
            <div className={`grid ${isExpanded ? 'grid-cols-4' : 'grid-cols-1'} gap-2 px-2`}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 rounded-lg hover:bg-white/5 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={menuItemVariants}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  {isExpanded && (
                    <motion.span
                      className="sr-only"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.label}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
