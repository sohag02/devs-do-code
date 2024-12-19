'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const sections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Authentication', href: '/docs/authentication' },
      { title: 'Quickstart', href: '/docs/quickstart' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Chat Endpoints', href: '/docs/api/chat' },
      { title: 'Code Analysis', href: '/docs/api/code-analysis' },
      { title: 'Code Generation', href: '/docs/api/code-generation' },
    ]
  },
  {
    title: 'Guides',
    items: [
      { title: 'Best Practices', href: '/docs/guides/best-practices' },
      { title: 'Rate Limits', href: '/docs/guides/rate-limits' },
      { title: 'Error Handling', href: '/docs/guides/error-handling' },
    ]
  }
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen">
      {/* Left sidebar */}
      <div className="w-64 border-r border-[#2A2A2A] p-6 hidden md:block">
        <nav className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <button
                onClick={() => setOpenSection(openSection === section.title ? null : section.title)}
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-400 hover:text-white"
              >
                {section.title}
                <motion.div
                  animate={{ rotate: openSection === section.title ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openSection === section.title ? 'auto' : 0,
                  opacity: openSection === section.title ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pl-2 space-y-1 pt-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-1 text-sm transition-colors ${
                        pathname === item.href
                          ? 'text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>

      {/* Right sidebar for on-page navigation (optional) */}
      <div className="w-64 border-l border-[#2A2A2A] p-6 hidden lg:block">
        <div className="sticky top-6">
          <h4 className="font-medium text-sm mb-4 text-gray-400">On this page</h4>
          {/* Add on-page navigation here */}
        </div>
      </div>
    </div>
  )
}
