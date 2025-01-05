"use client"

import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faArrowRight, faPlus, faWindowMaximize } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { MessageSquare, Music, Image, Code, PenTool, BarChart3, Clock, Shield } from "lucide-react"
import { MouseGradient } from "@/components/mouse-gradient"
import { AnimatedText } from "@/components/animated-text"
import { GradientButton } from "@/components/gradient-button"
import { AnimatedCard } from "@/components/animated-card"
import { PricingCard } from "@/components/pricing-card"
import { Navbar } from "@/components/navbar"
import { ScrollingLogos } from "@/components/scrolling-logos"
import { ModelsSection } from "@/components/models-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ModelBadges } from "@/components/model-badges"
import { fadeIn, staggerContainer, floatAnimation, glowAnimation } from "@/utils/animations"
import Link from "next/link"

export default function Home() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <MouseGradient>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              style={{
                scale,
                opacity,
                y,
              }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <motion.div variants={fadeIn("up", 0.2)} className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                      Chat with Multiple
                      <br />
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        AI Models
                      </span>
                    </h1>
                  </motion.div>

                  <motion.p
                    variants={fadeIn("up", 0.4)}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                  >
                    Access GPT-4, Claude, and Gemini Pro all in one place. Compare responses and choose the best AI for your needs.
                  </motion.p>

                  <motion.div
                    variants={fadeIn("up", 0.6)}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                  >
                    <Link href="/playground" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2">
                        <span>Start Chatting Free</span>
                        <FontAwesomeIcon icon={faRocket} className="w-4 h-4" />
                      </button>
                    </Link>
                    <Link href="/pricing" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2">
                        <span>View Pricing</span>
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                      </button>
                    </Link>
                  </motion.div>

                  {/* Model Badges */}
                  <motion.div
                    variants={fadeIn("up", 0.8)}
                    className="pt-8 space-y-4"
                  >
                    <p className="text-sm text-gray-400">Powered by leading AI models</p>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span>GPT-4</span>
                        <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span>Claude</span>
                        <FontAwesomeIcon icon={faWindowMaximize} className="w-3 h-3" />
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <span>Gemini Pro</span>
                        <FontAwesomeIcon icon={faWindowMaximize} className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scrolling Logos */}
        <ScrollingLogos />

        <ModelsSection />

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {/* Heading */}
              <div className="text-center space-y-4">
                <motion.h2 
                  variants={fadeIn("up", 0.2)}
                  className="text-4xl sm:text-5xl font-bold"
                >
                  Powerful Features for Modern AI Development
                </motion.h2>
                <motion.p 
                  variants={fadeIn("up", 0.3)}
                  className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  Everything you need to build and scale your AI applications
                </motion.p>
              </div>

              {/* Features Grid */}
              <motion.div 
                variants={fadeIn("up", 0.4)}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {/* AI Playground */}
                <div className="p-6 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Playground</h3>
                  <p className="text-gray-400 text-sm">
                    Test all API models in the sandbox environment before you integrate. We provide more than 200 models to integrate into your app.
                  </p>
                </div>

                {/* Simple Integration */}
                <div className="p-6 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                    <Code className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Simple Integration</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Simply change the endpoints in your existing setup, and you're ready to go.
                  </p>
                  <div className="rounded-lg bg-black/60 p-3 font-mono text-xs text-gray-400 overflow-x-auto">
                    <pre className="whitespace-pre">
                      <code>{`const response = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message })
});`}</code>
                    </pre>
                  </div>
                </div>

                {/* Infinite Scalability */}
                <div className="p-6 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Infinite Scalability</h3>
                  <p className="text-gray-400 text-sm">
                    Experience low latency with our AI API, deploy instantly, and surpass rate limits without worry.
                  </p>
                </div>

                {/* Enterprise Security */}
                <div className="p-6 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                  <p className="text-gray-400 text-sm">
                    Bank-grade security with SOC2 compliance and end-to-end encryption for your data.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <TestimonialsSection />

        <CTASection />

        <div className="pd-up-1"></div>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <motion.div
                  variants={fadeIn("up", 0)}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 mb-6"
                >
                  <span className="text-2xl font-bold">Devs Do Code</span>
                </motion.div>
                <motion.p
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="visible"
                  className="text-gray-400"
                >
                  The ultimate AI chat platform for developers and creators.
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-4 mt-6"
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>

              {/* Product Links */}
              <div>
                <motion.h3
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="visible"
                  className="font-bold mb-4"
                >
                  Product
                </motion.h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {[
                    { text: "Features", href: "/docs" },
                    { text: "Pricing", href: "/pricing" },
                    { text: "API", href: "/docs/api" }
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      variants={fadeIn("up", 0.3 + index * 0.1)}
                    >
                      <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.text}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Company Links */}
              <div>
                <motion.h3
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="visible"
                  className="font-bold mb-4"
                >
                  Company
                </motion.h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {[
                    { text: "About", href: "/about" },
                    { text: "Careers", href: "/careers" },
                    { text: "Contact", href: "/contact" }
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      variants={fadeIn("up", 0.3 + index * 0.1)}
                    >
                      <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.text}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Legal Links */}
              <div>
                <motion.h3
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  animate="visible"
                  className="font-bold mb-4"
                >
                  Legal
                </motion.h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {[
                    { text: "Terms & Conditions", href: "/terms" },
                    { text: "Refunds & Cancellations", href: "/refunds" },
                    { text: "Privacy Policy", href: "/privacy" }
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      variants={fadeIn("up", 0.3 + index * 0.1)}
                    >
                      <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.text}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="visible"
              className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
            >
              <p> 2024 Devs Do Code. All rights reserved.</p>
            </motion.div>
          </div>
        </footer>
      </MouseGradient>
    </div>
  )
}
