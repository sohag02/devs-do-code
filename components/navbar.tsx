'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Search, Menu, Bot, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="fixed top-0 w-full bg-[#1A1A1A] border-b border-[#2A2A2A] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">DDC</span>
              <span className="ml-2 text-sm text-gray-400">API Marketplace</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="search"
                placeholder="Search models, providers, or APIs..."
                className="w-full pl-10 bg-[#2A2A2A] border-0 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/playground" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Playground
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Documentation
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Contact
            </Link>
            <div className="h-4 w-px bg-[#2A2A2A]" /> {/* Divider */}
            <Link 
              href="/jarvis" 
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 transition-colors"
            >
              <Bot className="w-4 h-4 mr-1" />
              Jarvis
            </Link>
            <Link 
              href="/freelance" 
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 transition-colors"
            >
              <Briefcase className="w-4 h-4 mr-1" />
              Freelance
            </Link>
            {session ? (
              <Button variant="outline" className="bg-[#2A2A2A] border-0 text-white hover:bg-[#3A3A3A] transition-colors">
                Dashboard
              </Button>
            ) : (
              <Button variant="outline" className="bg-[#2A2A2A] border-0 text-white hover:bg-[#3A3A3A] transition-colors">
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/playground"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            Playground
          </Link>
          <Link 
            href="/docs"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            Documentation
          </Link>
          <Link 
            href="/pricing"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            Pricing
          </Link>
          <Link 
            href="/about"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            Contact
          </Link>
          <div className="border-t border-[#2A2A2A] my-2" />
          <Link 
            href="/jarvis"
            className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            <Bot className="w-4 h-4 mr-2" />
            Jarvis
          </Link>
          <Link 
            href="/freelance"
            className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md transition-colors"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Freelance
          </Link>
        </div>
      </div>
    </nav>
  )
}
