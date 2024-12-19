'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

const footerLinks = {
  Product: [
    { name: 'Playground', href: '/playground' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press Kit', href: '/press' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
    { name: 'Refund Policy', href: '/legal/refund' },
  ],
  Social: [
    { name: 'Twitter', href: 'https://twitter.com/devsdocode' },
    { name: 'GitHub', href: 'https://github.com/devsdocode' },
    { name: 'Discord', href: 'https://discord.gg/devsdocode' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/devsdocode' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#2A2A2A]">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-white font-bold">DEVS DO CODE</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Devs Do Code. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
