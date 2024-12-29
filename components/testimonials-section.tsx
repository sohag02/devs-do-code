'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "The AI models provided by DDC have transformed our development workflow. The code quality and speed are unmatched.",
    author: "Sarah Chen",
    role: "Senior Developer, TechCorp"
  },
  {
    content: "Integration was seamless, and the documentation is comprehensive. It's now an essential part of our tech stack.",
    author: "Michael Rodriguez",
    role: "CTO, StartupX"
  },
  {
    content: "The playground feature helped us prototype solutions rapidly. Excellent platform with great support.",
    author: "Emily Johnson",
    role: "Lead Engineer, InnovateLabs"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function TestimonialsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-24 bg-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Developers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what developers are saying about our AI platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 bg-[#2A2A2A] rounded-xl border border-[#3A3A3A] hover:border-[#4A4A4A] transition-colors">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <p className="text-gray-300 mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
