'use client'

import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { fadeIn } from '@/utils/animations'
import Link from 'next/link'
import { Copy } from 'lucide-react'

const codeExamples = {
  exportKey: `export OPENAI_API_KEY="your_api_key_here"`,
  install: `npm install openai`,
  example: `import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);`
}

export default function QuickstartPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40rem] -left-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 blur-3xl" />
        <div className="absolute -bottom-[40rem] -right-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-blue-500/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <motion.div variants={fadeIn("up", 0.2)} className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Developer quickstart
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Learn how to make your first API request.
              </p>
            </motion.div>
            <motion.button
              variants={fadeIn("up", 0.3)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>Copy page</span>
            </motion.button>
          </div>

          {/* Introduction */}
          <motion.section variants={fadeIn("up", 0.3)} className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              The DevsDo.Code API provides a simple interface to state-of-the-art AI models for natural language 
              processing, image generation, semantic search, and speech recognition. Follow this guide to learn 
              how to generate human-like responses to natural language prompts, create vector embeddings for 
              semantic search, and generate images from textual descriptions.
            </p>
          </motion.section>

          {/* API Key Section */}
          <motion.section variants={fadeIn("up", 0.4)} className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Create and export an API key
            </h2>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <p className="text-gray-300 text-lg">
                Create an API key in the dashboard <Link href="/dashboard" className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30">here</Link>, 
                which you'll use to securely access the API. Store the key in a safe location, like a .zshrc file 
                or another text file on your computer. Once you've generated an API key, export it as an environment 
                variable in your terminal.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-400">Export an environment variable on macOS or Linux systems</p>
                <div className="relative group">
                  <SyntaxHighlighter 
                    language="bash" 
                    style={atomDark}
                    className="rounded-xl !bg-black/50 !p-6 border border-white/10"
                  >
                    {codeExamples.exportKey}
                  </SyntaxHighlighter>
                  <button className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* First API Request */}
          <motion.section variants={fadeIn("up", 0.5)} className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Make your first API request
            </h2>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
              <p className="text-gray-300 text-lg">
                With your API key exported as an environment variable, you're ready to make your first API request. 
                You can either use the REST API directly with the HTTP client of your choice, or use our official SDKs 
                as shown below.
              </p>

              <div className="space-y-6">
                <p className="text-gray-300">
                  To use the API in server-side JavaScript environments like Node.js, Deno, or Bun, you can use our 
                  official SDK for TypeScript and JavaScript. Get started by installing the SDK:
                </p>
                <div className="relative group">
                  <SyntaxHighlighter 
                    language="bash" 
                    style={atomDark}
                    className="rounded-xl !bg-black/50 !p-6 border border-white/10"
                  >
                    {codeExamples.install}
                  </SyntaxHighlighter>
                  <button className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300">
                  With the SDK installed, create a file called example.mjs and copy the following example:
                </p>
                <div className="relative group">
                  <SyntaxHighlighter 
                    language="javascript" 
                    style={atomDark}
                    className="rounded-xl !bg-black/50 !p-6 border border-white/10"
                  >
                    {codeExamples.example}
                  </SyntaxHighlighter>
                  <button className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeIn("up", 0.6)} className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              Next steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Chat Completions',
                  description: 'Learn more about generating text responses to natural language prompts',
                  href: '/docs/text-generation',
                  gradient: 'from-blue-400 to-emerald-400'
                },
                {
                  title: 'Image Generation',
                  description: 'Generate images using our DALL·E model',
                  href: '/docs/image-generation',
                  gradient: 'from-purple-400 to-pink-400'
                },
                {
                  title: 'Embeddings',
                  description: 'Create vector representations of text, used for similarity search',
                  href: '/docs/embeddings',
                  gradient: 'from-rose-400 to-orange-400'
                },
                {
                  title: 'Text-to-speech',
                  description: 'Generate human-like voice recordings with our text-to-speech model',
                  href: '/docs/text-to-speech',
                  gradient: 'from-emerald-400 to-blue-400'
                }
              ].map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
