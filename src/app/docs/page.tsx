'use client';

import { motion } from 'framer-motion';
import { Book, Code, Terminal, Zap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const docs = [
  {
    title: 'Getting Started',
    description: 'Learn the basics and get up and running with our AI platform.',
    icon: Terminal,
    href: '/docs/getting-started',
    categories: ['Installation', 'Configuration', 'First Steps']
  },
  {
    title: 'API Documentation',
    description: 'Comprehensive API reference and integration guides.',
    icon: Code,
    href: '/docs/api',
    categories: ['Authentication', 'Endpoints', 'Rate Limits']
  },
  {
    title: 'Model Capabilities',
    description: 'Explore the capabilities and limitations of our AI models.',
    icon: Zap,
    href: '/docs/models',
    categories: ['GPT-4', 'Claude-3', 'Gemini Pro']
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 dark:bg-zinc-100 mb-4">
            <Book className="w-6 h-6 text-white dark:text-zinc-900" />
          </div>
          <h1 className="text-4xl font-bold mb-4 font-space-grotesk">Documentation</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-outfit">
            Everything you need to build with our AI platform
          </p>
        </motion.div>

        {/* Documentation Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <Link href={doc.href}>
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                      <doc.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    </div>
                    <h2 className="text-xl font-semibold font-space-grotesk">{doc.title}</h2>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 font-outfit">{doc.description}</p>
                  <div className="space-y-2">
                    {doc.categories.map((category, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 font-outfit"
                      >
                        <ChevronRight className="w-4 h-4 mr-2" />
                        {category}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-zinc-300 dark:group-hover:ring-zinc-700" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="rounded-xl bg-zinc-900 dark:bg-zinc-100 p-6 text-white dark:text-zinc-900">
            <h3 className="text-lg font-semibold mb-4 font-space-grotesk">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'API Reference',
                'Examples',
                'Tutorials',
                'Best Practices',
                'FAQ',
                'Support'
              ].map((link, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-lg bg-zinc-800/50 dark:bg-zinc-200/50 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors text-sm font-outfit"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
