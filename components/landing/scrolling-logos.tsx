"use client"

import { motion } from "framer-motion"

const MicrosoftLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="11" height="11" fill="currentColor"/>
    <rect x="17" y="4" width="11" height="11" fill="currentColor"/>
    <rect x="4" y="17" width="11" height="11" fill="currentColor"/>
    <rect x="17" y="17" width="11" height="11" fill="currentColor"/>
  </svg>
)

const OpenAILogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 9V23M9 16H23" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const MetaLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 9V23L16 28L26 23V9L16 4Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const AnthropicLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="9" height="9" fill="currentColor"/>
    <rect x="17" y="6" width="9" height="9" fill="currentColor"/>
    <rect x="6" y="17" width="9" height="9" fill="currentColor"/>
    <rect x="17" y="17" width="9" height="9" fill="currentColor"/>
  </svg>
)

const StabilityLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="6" fill="currentColor"/>
  </svg>
)

const DeepMindLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 9V23L16 28L26 23V9L16 4ZM16 7L23 11L16 15L9 11L16 7ZM8 20V12L15 16V24L8 20ZM17 24V16L24 12V20L17 24Z" fill="currentColor"/>
  </svg>
)

const GoogleLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="9" height="9" fill="currentColor"/>
    <rect x="17" y="6" width="9" height="9" fill="currentColor"/>
    <rect x="6" y="17" width="9" height="9" fill="currentColor"/>
    <rect x="17" y="17" width="9" height="9" fill="currentColor"/>
    <path d="M16 9L16 23M9 16L23 16" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const LaionLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const DeepSeekLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 9V23L16 28L26 23V9L16 4Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="4" fill="currentColor"/>
  </svg>
)

const DeepgramLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="9" height="9" fill="currentColor"/>
    <rect x="17" y="6" width="9" height="9" fill="currentColor"/>
    <rect x="6" y="17" width="9" height="9" fill="currentColor"/>
    <rect x="17" y="17" width="9" height="9" fill="currentColor"/>
    <circle cx="16" cy="16" r="3" fill="currentColor"/>
  </svg>
)

const EleutherLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 16H22M16 10V22" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const ZeroOneLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L6 9V23L16 28L26 23V9L16 4Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 16H21" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const logos = [
  { name: "Anthropic", Logo: AnthropicLogo },
  { name: "Stability AI", Logo: StabilityLogo },
  { name: "DeepMind", Logo: DeepMindLogo },
  { name: "Microsoft", Logo: MicrosoftLogo },
  { name: "OpenAI", Logo: OpenAILogo },
  { name: "Meta AI", Logo: MetaLogo }
]

const logos2 = [
  { name: "LAION", Logo: LaionLogo },
  { name: "DeepSeek", Logo: DeepSeekLogo },
  { name: "Deepgram", Logo: DeepgramLogo },
  { name: "Eleuther AI", Logo: EleutherLogo },
  { name: "Zero-one AI", Logo: ZeroOneLogo },
  { name: "Google AI", Logo: GoogleLogo }
]

export function ScrollingLogos() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* First row - scrolling right */}
      <div className="mb-20">
        <motion.div
          animate={{
            x: ["-25%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex gap-20 items-center"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <logo.Logo />
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - scrolling left */}
      <div>
        <motion.div
          animate={{
            x: ["0%", "-25%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex gap-20 items-center"
        >
          {[...logos2, ...logos2].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <logo.Logo />
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
