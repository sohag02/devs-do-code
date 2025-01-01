'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface CodeBlockProps {
  title?: string
  languages: {
    label: string
    code: string
  }[]
}

export function CodeBlock({ title, languages }: CodeBlockProps) {
  const [activeLanguage, setActiveLanguage] = useState(languages[0].label)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const activeCode = languages.find(lang => lang.label === activeLanguage)?.code || ''

  return (
    <div className="space-y-4">
      {title && (
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      )}
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex gap-2">
            {languages.map((lang) => (
              <button
                key={lang.label}
                onClick={() => setActiveLanguage(lang.label)}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  activeLanguage === lang.label
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => copyToClipboard(activeCode)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {copied ? (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Check className="w-4 h-4 text-green-400" />
              </motion.div>
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
        <div className="relative">
          <SyntaxHighlighter
            language={activeLanguage.toLowerCase()}
            style={atomDark}
            customStyle={{
              margin: 0,
              background: 'transparent',
              padding: '1.5rem',
            }}
          >
            {activeCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
