'use client'

import Link from "next/link"
import { MessageSquare } from 'lucide-react'
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: 'Try API', href: '/api' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Documentation', href: '/documentation' },
]

export default function Navbar() {
  return (
    <header className="w-full bg-[#0c0a09] dark:bg-[#0c0a09]">
      <div className="container max-w-6xl mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-white" />
          <span className="text-xl font-semibold text-white">MultiChat AI</span>
        </Link>
        
        <nav className="flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

