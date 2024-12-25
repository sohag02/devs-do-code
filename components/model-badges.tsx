"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/utils/animations"

const GPT4Badge = () => (
  <div className="flex items-center gap-2 text-gray-400">
    <span className="text-sm font-medium">GPT-4</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 8V16L12 20L20 16V8L12 4Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
    </svg>
  </div>
)

const ClaudeBadge = () => (
  <div className="flex items-center gap-2 text-gray-400">
    <span className="text-sm font-medium">Claude</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="7" height="7" fill="currentColor"/>
      <rect x="13" y="4" width="7" height="7" fill="currentColor"/>
      <rect x="4" y="13" width="7" height="7" fill="currentColor"/>
      <rect x="13" y="13" width="7" height="7" fill="currentColor"/>
    </svg>
  </div>
)

const GeminiBadge = () => (
  <div className="flex items-center gap-2 text-gray-400">
    <span className="text-sm font-medium">Gemini Pro</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="7" height="7" fill="currentColor"/>
      <rect x="13" y="4" width="7" height="7" fill="currentColor"/>
      <rect x="4" y="13" width="7" height="7" fill="currentColor"/>
      <rect x="13" y="13" width="7" height="7" fill="currentColor"/>
      <path d="M12 5L12 19M5 12L19 12" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </div>
)

export function ModelBadges() {
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      className="flex flex-col items-center gap-6"
    >
      <motion.p
        className="text-sm text-gray-400"
      >
        Powered by leading AI models
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <GPT4Badge />
        <ClaudeBadge />
        <GeminiBadge />
      </div>
    </motion.div>
  )
}
