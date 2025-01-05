'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/animations'
import { CodeBlock } from '@/components/ui/code-block'
import Link from 'next/link'

const generateProseCode = `import OpenAI from "openai";
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

const analyzeImageCode = `import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {
            role: "user",
            content: [
                { type: "text", text: "What's in this image?" },
                {
                    type: "image_url",
                    image_url: {
                        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                    },
                }
            ],
        },
    ],
});

console.log(completion.choices[0].message);`

const generateJSONCode = `import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o-2024-08-06",
    messages: [
        { role: "developer", content: "You extract email addresses into JSON data." },
        {
            role: "user",
            content: "Feeling stuck? Send a message to help@mycompany.com.",
        },
    ],
    response_format: {
        type: "json_schema",
        json_schema: {
            name: "email_schema",
            schema: {
                type: "object",
                properties: {
                    email: {
                        description: "The email address that appears in the input",
                        type: "string"
                    }
                },
                additionalProperties: false
            }
        }
    }
});

console.log(completion.choices[0].message.content);`

const developerMessageCode = `const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      "role": "developer",
      "content": [
        {
          "type": "text",
          "text": \`
            You are a helpful assistant that answers programming 
            questions in the style of a southern belle from the 
            southeast United States.
          \`
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Are semicolons optional in JavaScript?"
        }
      ]
    }
  ]
});`

const conversationCode = `const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      "role": "user",
      "content": [{ "type": "text", "text": "knock knock." }]
    },
    {
      "role": "assistant",
      "content": [{ "type": "text", "text": "Who's there?" }]
    },
    {
      "role": "user",
      "content": [{ "type": "text", "text": "Orange." }]
    }
  ]
});`

export default function TextGenerationPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40rem] -left-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30 blur-3xl" />
        <div className="absolute -bottom-[40rem] -right-[40rem] w-[120rem] h-[120rem] opacity-30 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-blue-500/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-12"
        >
          <motion.div variants={fadeIn("up", 0.2)} className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Text Generation
            </h1>
            <p className="text-xl text-gray-400">
              Learn how to generate text from a prompt.
            </p>
          </motion.div>

          <motion.section variants={fadeIn("up", 0.3)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="text-gray-300">
              OpenAI provides simple APIs to use a large language model to generate text from a prompt, 
              as you might using ChatGPT. These models have been trained on vast quantities of data to 
              understand multimedia inputs and natural language instructions.
            </p>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.4)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Quickstart</h2>
            <p className="text-gray-300">
              To generate text, you can use the chat completions endpoint in the REST API. You can either use 
              the REST API from the HTTP client of your choice, or use one of OpenAI's official SDKs.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Generate Prose</h3>
                <CodeBlock
                  title="Create a human-like response to a prompt"
                  languages={[
                    { label: "JavaScript", code: generateProseCode }
                  ]}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyze an Image</h3>
                <CodeBlock
                  title="Describe the contents of an image"
                  languages={[
                    { label: "JavaScript", code: analyzeImageCode }
                  ]}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Generate JSON Data</h3>
                <CodeBlock
                  title="Generate JSON data based on a JSON Schema"
                  languages={[
                    { label: "JavaScript", code: generateJSONCode }
                  ]}
                />
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.5)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Choosing a Model</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Large Model</h3>
                <p className="text-gray-400">
                  GPT-4o offers high intelligence and strong performance, with higher cost per token.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Small Model</h3>
                <p className="text-gray-400">
                  GPT-4o-mini is faster and less expensive, with good intelligence for focused tasks.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Reasoning Model</h3>
                <p className="text-gray-400">
                  o1 models excel at complex reasoning and multi-step planning tasks.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.6)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Building Prompts</h2>
            <p className="text-gray-300">
              Prompt engineering is the process of crafting prompts to get the right output from a model. 
              The chat completions API uses different message roles to influence how the model interprets input.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Developer Messages</h3>
                <p className="text-gray-300 mb-4">
                  Messages with the developer role provide instructions that are prioritized ahead of user messages.
                </p>
                <CodeBlock
                  title="Example of a developer message"
                  languages={[
                    { label: "JavaScript", code: developerMessageCode }
                  ]}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Conversations</h3>
                <p className="text-gray-300 mb-4">
                  Implement multi-turn conversations by providing additional messages in your requests.
                </p>
                <CodeBlock
                  title="Example of a conversation"
                  languages={[
                    { label: "JavaScript", code: conversationCode }
                  ]}
                />
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.7)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Optimization</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Accuracy</h3>
                <p className="text-gray-400">
                  Ensure accurate responses through prompt engineering, RAG, and model fine-tuning.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Cost</h3>
                <p className="text-gray-400">
                  Reduce costs by optimizing token usage and using appropriate models.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Latency</h3>
                <p className="text-gray-400">
                  Decrease response time through prompt engineering and code optimization.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeIn("up", 0.8)} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Next Steps</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/docs/examples">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                  <h3 className="text-lg font-semibold text-white mb-3">Prompt Examples</h3>
                  <p className="text-gray-400">Get inspired by example prompts for various use cases.</p>
                </div>
              </Link>
              <Link href="/playground">
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
                  <h3 className="text-lg font-semibold text-white mb-3">Build in Playground</h3>
                  <p className="text-gray-400">Use the Playground to develop and iterate on prompts.</p>
                </div>
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
