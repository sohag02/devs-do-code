"use client"

import { motion } from "framer-motion"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const codeExample = `client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.xinhai.com",
)

response = client.chat.completions.create(
    model="xinhai-mistral-7b-instruct",
    messages=[
        {
            "role": "user",
            "content": "Tell me, why it is
             good to be AI first"
        }
    ],
)

message = response.choices[0].message.content
print("Assistant:", message)`

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Powerful Features for Modern AI Development
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Everything you need to build and scale your AI applications
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <img src="/icons/playground.svg" alt="AI Playground" className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Playground</h3>
                  <p className="text-gray-400">
                    Test all API models in the sandbox environment before you integrate. 
                    We provide more than 200 models to integrate into your app.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden bg-black/30 p-4">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="https://cdn.prod.website-files.com/65b8f36fa600366bc7cf9a67/667ae6e3785e90ce0f9136ba_pic-chat.webp"
                  alt="AI Playground interface"
                  className="w-full h-auto rounded-xl"
                />
                <motion.img 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src="https://cdn.prod.website-files.com/65b8f36fa600366bc7cf9a67/667ae79f8eae3e2f367e9b51_Pic%20Toolbar%202.webp"
                  alt="AI models list"
                  className="absolute top-4 right-4 w-1/3 rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <img src="/icons/scale.svg" alt="Infinite Scalability" className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Infinite Scalability</h3>
                  <p className="text-gray-400">
                    Experience low latency with our AI API, deploy instantly, and surpass rate limits without impact.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Response Time</span>
                      <span className="text-sm text-green-400">50ms</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Success Rate</span>
                      <span className="text-sm text-green-400">99.9%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "99.9%" }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-xl overflow-hidden bg-black/30 p-4"
                >
                  <img 
                    src="https://cdn.prod.website-files.com/65b8f36fa600366bc7cf9a67/66843f56ca9b074f34ccf364_pic--graph.svg"
                    alt="Scalability graph"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <img src="/icons/integration.svg" alt="Simple Integration" className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Simple Integration</h3>
                  <p className="text-gray-400">
                    Simply change the endpoints in your existing setup, and you're ready to go.
                  </p>
                </div>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus}
                  customStyle={{
                    background: 'transparent',
                    padding: '1rem',
                    margin: 0,
                    borderRadius: '0.75rem',
                    fontSize: '0.8rem',
                    maxHeight: '300px',
                    overflow: 'auto'
                  }}
                >
                  {codeExample}
                </SyntaxHighlighter>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <img src="/icons/security.svg" alt="Enterprise Security" className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise Security</h3>
                  <p className="text-gray-400">
                    Bank-grade encryption, SOC 2 compliance, and advanced security features to protect your data.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 rounded-xl p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">256-bit</div>
                  <div className="text-sm text-gray-400">End-to-End Encryption</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 rounded-xl p-4 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-3xl font-bold text-blue-400">SOC 2</div>
                  <div className="text-sm text-gray-400">Compliant</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
