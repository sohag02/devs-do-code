"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { data: session } = useSession()

  const opacity = useTransform(scrollY, [0, 100], [0.8, 1])
  const blur = useTransform(scrollY, [0, 100], [0, 12])
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.8)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        opacity,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center justify-between px-4 transition-all duration-200 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Devs Do Code
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">
                Docs
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>
            {session ? (
              <Button variant="outline" className="bg-white/5 hover:bg-white/10 border-white/10">
                Dashboard
              </Button>
            ) : (
              <Button variant="outline" className="bg-white/5 hover:bg-white/10 border-white/10">
                Sign In
              </Button>
            )}
          </div>

          <button className="md:hidden text-gray-300 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
