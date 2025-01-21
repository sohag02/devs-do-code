"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faArrowRight, faPlus, faWindowMaximize } from "@fortawesome/free-solid-svg-icons"
import { MouseGradient } from "@/components/mouse-gradient"
import { Navbar } from "@/components/navbar"
import { ScrollingLogos } from "@/components/landing/scrolling-logos"
import { ModelsSection } from "@/components/landing/models-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CTASection } from "@/components/landing/cta-section"
import { fadeIn, staggerContainer } from "@/utils/animations"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function Home() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

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

        <FeaturesSection />
        {/* <BentoFeatures /> */}

        <TestimonialsSection />

        <CTASection />

        <div className="pd-up-1"></div>

        {/* Footer */}
        <Footer />
      </MouseGradient>
    </div>
  )
}
