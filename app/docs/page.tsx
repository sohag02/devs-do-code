'use client'

import { GeistMono } from 'geist/font/mono'
import { motion } from 'framer-motion'
import { Code2, Terminal, Braces, Puzzle, MessageSquare, Users, Zap, Lock } from 'lucide-react'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  }
}

const features = [
  {
    icon: Code2,
    title: "Code Generation",
    description: "Generate high-quality code snippets and entire components with natural language prompts."
  },
  {
    icon: Terminal,
    title: "Code Analysis",
    description: "Get instant feedback and suggestions to improve your code quality and performance."
  },
  {
    icon: MessageSquare,
    title: "Interactive Chat",
    description: "Engage in natural conversations about your code with our AI assistant."
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work together with your team using shared contexts and conversations."
  },
  {
    icon: Braces,
    title: "Language Support",
    description: "Support for all major programming languages and frameworks."
  },
  {
    icon: Puzzle,
    title: "Easy Integration",
    description: "Simple SDK integration with comprehensive documentation."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Lightning-fast responses with low latency infrastructure."
  },
  {
    icon: Lock,
    title: "Security First",
    description: "Enterprise-grade security with data encryption and compliance."
  }
]

const codeExamples = {
  javascript: `import { DevsDoCode } from '@devs-do-code/sdk';

const ddc = new DevsDoCode({
  apiKey: process.env.DDC_API_KEY
});

// Generate code
const response = await ddc.generate({
  prompt: "Create a React button component",
  language: "typescript",
  framework: "react"
});`,
  python: `from devs_do_code import DevsDoCode

ddc = DevsDoCode(api_key=os.environ["DDC_API_KEY"])

# Generate code
response = ddc.generate(
    prompt="Create a FastAPI endpoint",
    language="python",
    framework="fastapi"
)`,
  java: `import com.devsdocode.sdk.DevsDoCode;

DevsDoCode ddc = new DevsDoCode(System.getenv("DDC_API_KEY"));

// Generate code
Response response = ddc.generate(
    GenerateRequest.builder()
        .prompt("Create a Spring Boot controller")
        .language("java")
        .framework("spring")
        .build()
);`
}

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>('javascript')

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Documentation
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Everything you need to integrate and build with our AI-powered coding platform.
        </p>
      </motion.div>

      {/* Quick Start */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-[#3A3A3A]">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="space-y-4">
            <div className="bg-[#1A1A1A] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Install the SDK</p>
                <div className="flex gap-2">
                  {Object.keys(codeExamples).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang as keyof typeof codeExamples)}
                      className={`px-3 py-1 rounded text-sm ${
                        activeTab === lang 
                          ? 'bg-blue-500 text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-[#2A2A2A]'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
              <pre className={`${GeistMono.className} text-sm overflow-x-auto`}>
                <code className="text-gray-300">
                  {codeExamples[activeTab]}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-[#2A2A2A] p-6 rounded-xl border border-[#3A3A3A] hover:border-[#4A4A4A] transition-colors">
                <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* API Reference Preview */}
      <motion.div variants={itemVariants} className="mb-16">
        <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A]">
          <h2 className="text-2xl font-bold mb-6">API Reference</h2>
          <p className="text-gray-400 mb-6">
            Explore our comprehensive API documentation to make the most of our platform's capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {['REST API', 'WebSocket API', 'SDK Reference'].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-xl hover:bg-[#252525] transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-2">{item}</h3>
                <p className="text-gray-400 text-sm">
                  View detailed documentation →
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Support Section */}
      <motion.div variants={itemVariants}>
        <div className="text-center bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-[#3A3A3A]">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-400 mb-6">
            Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#3A3A3A] transition-colors">
              Join Discord
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
