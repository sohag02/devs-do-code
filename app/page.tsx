"use client"

import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { MessageSquare, Music, Image, Code, PenTool, BarChart3 } from "lucide-react"
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
        <motion.div
          style={{
            scale,
            opacity,
            y,
          }}
          className="relative min-h-screen flex items-center justify-center px-4"
        >
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={fadeIn("up", 0.2)}>
                <AnimatedText
                  title="Chat with Multiple"
                  textStyles="text-6xl md:text-7xl font-bold mb-2"
                />
                <AnimatedText
                  title="AI Models"
                  textStyles="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                />
              </motion.div>

              <motion.p
                variants={fadeIn("up", 0.4)}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              >
                Access GPT-4, Claude, and Gemini Pro all in one place. Compare responses and choose the best AI for your needs.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.6)}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href='/playground' >
                  <GradientButton
                    text="Start Chatting Free"
                    icon={faRocket}
                    variant="primary"
                  />
                </Link>
                <GradientButton
                  text="View Pricing"
                  icon={faArrowRight}
                  variant="outline"
                />
              </motion.div>

              {/* Trust Badge */}
              <ModelBadges />

              
            </motion.div>
          </div>
        </motion.div>

        {/* Scrolling Logos */}
        <ScrollingLogos />
        
        <ModelsSection />
        
        <FeaturesSection />
        
        <TestimonialsSection />
        
        <CTASection />

        <div className="pd-up-1"></div>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  {["Features", "Pricing", "API"].map((item, index) => (
                    <motion.li
                      key={item}
                      variants={fadeIn("up", 0.3 + index * 0.1)}
                    >
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

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
                  {["About", "Blog", "Careers"].map((item, index) => (
                    <motion.li
                      key={item}
                      variants={fadeIn("up", 0.3 + index * 0.1)}
                    >
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

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
                  {["Privacy", "Terms", "Security"].map((item, index) => (
                    <motion.li
                      key={item}
                      variants={fadeIn("up", 0.3 + index * 0.1)}
                    >
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
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
