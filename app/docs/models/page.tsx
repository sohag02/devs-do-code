'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/animations'
import { CodeBlock } from '@/components/ui/code-block'
import Link from 'next/link'

const modelAliasCode = [
  {
    label: 'JavaScript',
    code: `import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        { role: "developer", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);`
  },
  {
    label: 'Python',
    code: `from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "developer", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": "Write a haiku about recursion in programming.",
        },
    ],
)

print(completion.choices[0].message)`
  }
]

export default function ModelsPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40rem] -left-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 blur-3xl" />
        <div className="absolute -bottom-[40rem] -right-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-blue-500/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto py-12 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeIn("up", 0.2)} className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Models
            </h1>
            <p className="text-xl text-gray-400">
              Explore our diverse set of models with different capabilities and price points.
            </p>
          </motion.div>

          {/* Flagship Models */}
          <motion.section variants={fadeIn("up", 0.3)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Flagship Models</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="#gpt-4o">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                  <h3 className="text-lg font-semibold text-white mb-3">GPT-4o</h3>
                  <p className="text-gray-400">Our versatile, high-intelligence flagship model</p>
                  <ul className="mt-3 text-sm text-gray-400 space-y-1">
                    <li>Text and image input, text output</li>
                    <li>128k context length</li>
                    <li>Smarter model, higher price per token</li>
                  </ul>
                </div>
              </Link>
              <Link href="#gpt-4o-mini">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                  <h3 className="text-lg font-semibold text-white mb-3">GPT-4o mini</h3>
                  <p className="text-gray-400">Our fast, affordable small model for focused tasks</p>
                  <ul className="mt-3 text-sm text-gray-400 space-y-1">
                    <li>Text and image input, text output</li>
                    <li>128k context length</li>
                    <li>Faster model, lower price per token</li>
                  </ul>
                </div>
              </Link>
              <Link href="#o1">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                  <h3 className="text-lg font-semibold text-white mb-3">o1 & o1-mini</h3>
                  <p className="text-gray-400">Reasoning models that excel at complex tasks</p>
                  <ul className="mt-3 text-sm text-gray-400 space-y-1">
                    <li>Text and image input, text output</li>
                    <li>128k context length</li>
                    <li>Uses additional tokens for reasoning</li>
                  </ul>
                </div>
              </Link>
            </div>
          </motion.section>

          {/* Code Example */}
          <motion.section variants={fadeIn("up", 0.4)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Quick Start</h2>
            <p className="text-gray-300">
              Get started with our models in just a few lines of code. Here's an example using our GPT-4o model:
            </p>
            <CodeBlock languages={modelAliasCode} />
          </motion.section>

          {/* Models Overview */}
          <motion.section variants={fadeIn("up", 0.5)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Models Overview</h2>
            <p className="text-gray-300">
              The OpenAI API is powered by a diverse set of models with different capabilities and price points. 
              You can also make customizations to our models for your specific use case with fine-tuning.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Model</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-300">GPT-4o</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Our versatile, high-intelligence flagship model</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-300">GPT-4o mini</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Fast, affordable model for focused tasks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-300">o1</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Advanced reasoning model for complex tasks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-300">o1-mini</td>
                    <td className="px-4 py-3 text-sm text-gray-300">Efficient reasoning model for simpler tasks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Model Aliases */}
          <motion.section variants={fadeIn("up", 0.6)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Model ID Aliases and Snapshots</h2>
            <p className="text-gray-300">
              Model IDs can be used in REST APIs to generate outputs. Some model IDs are aliases which point to specific dated snapshots.
              These aliases are periodically updated to newer snapshots a few months after a newer snapshot becomes available.
            </p>
          </motion.section>

          {/* Data Usage */}
          <motion.section variants={fadeIn("up", 0.7)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">How We Use Your Data</h2>
            <p className="text-gray-300">
              Your data is your data. Data sent to the OpenAI API will not be used to train or improve our models
              (unless you explicitly opt-in). API data may be retained for up to 30 days to help identify abuse,
              after which it will be deleted (unless otherwise required by law).
            </p>
            <p className="text-gray-300">
              For trusted customers with sensitive applications, zero data retention may be available. With zero data retention,
              request and response bodies are not persisted to any logging mechanism and exist only in memory to serve the request.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
