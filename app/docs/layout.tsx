'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronRight, Search } from 'lucide-react'

const sidebarSections = [
  {
    title: 'GET STARTED',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quickstart', href: '/docs/quickstart' },
      { title: 'Authentication', href: '/docs/authentication' },
      { title: 'Models', href: '/docs/models' },
    ]
  },
  {
    title: 'GUIDES',
    items: [
      { title: 'Text Generation', href: '/docs/text-generation' },
      { title: 'Code Generation', href: '/docs/code-generation' },
      { title: 'Best Practices', href: '/docs/best-practices' },
      { title: 'Rate Limits', href: '/docs/rate-limits' },
      { title: 'Error Handling', href: '/docs/error-handling' },
    ]
  },
  {
    title: 'API REFERENCE',
    items: [
      { title: 'Authentication', href: '/docs/api/authentication' },
      { title: 'Models', href: '/docs/api/models' },
      { title: 'Chat', href: '/docs/api/chat' },
      { title: 'Code', href: '/docs/api/code' },
      { title: 'Embeddings', href: '/docs/api/embeddings' },
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
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Fixed Sidebar */}
      <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] border-r border-[#2A2A2A] bg-[#1A1A1A] overflow-y-auto">
        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search docs..."
              className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] border-0 rounded-lg text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 pb-4">
          {sidebarSections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 mb-4 px-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-2 rounded-lg text-sm hover:bg-[#2A2A2A] transition-colors ${
                        pathname === item.href
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.title}
                      {pathname === item.href && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {children}
      </main>
    </div>
  )
}
