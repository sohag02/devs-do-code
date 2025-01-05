import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/20 bg-black/50 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex w-full items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Devs Do Code
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/docs" className="text-white hover:text-blue-400 transition-colors">
                Documentation
              </Link>
              <Link href="/pricing" className="text-white hover:text-purple-400 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-white hover:text-pink-400 transition-colors">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="hidden md:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
