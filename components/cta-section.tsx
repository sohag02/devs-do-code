"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeIn, staggerContainer } from '@/utils/animations'

export function CTASection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1 
            variants={fadeIn("up", 0)}
            className="text-3xl md:text-5xl font-semibold text-center mb-3 leading-tight"
          >
            <span className="text-purple-500 font-semibold tracking-tight">
              <img 
                src="" 
                alt="" 
                className="md:w-1 md:h-12 h-8 w-8 mr-1 inline-block"
              />
              ChatGPT
            </span>
            , {" "}
            <span className="text-blue-500 font-semibold tracking-tight">
              <img 
                src="" 
                alt="" 
                className="md:w-1 md:h-12 h-8 w-8 mr-1 inline-block"
              />
              Gemini
            </span>
            , and {" "}
            <span className="text-yellow-700 font-semibold tracking-tight">
              <img 
                src="" 
                alt="" 
                className="md:w-1 md:h-12 h-8 w-8 mr-1 inline-block"
              />
              Claude
            </span>
            <br />
            all in one amazing interface.
          </motion.h1>

          <motion.p 
            variants={fadeIn("up", 0.1)}
            className="text-lg md:text-2xl text-center text-gray-400 mb-4 md:mb-8"
          >
            Multiple AI powerhouses. Endless possibilities.
          </motion.p>

          <motion.div 
            variants={fadeIn("up", 0.2)}
            className="flex justify-center"
          >
            <Link href="./dashboard">
              <button className="bg-gradient-to-r from-[#467ef0] to-[#246dff] text-white px-8 py-3 group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md text-lg font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 hover:ring-[#246dff] hover:scale-105">
                Start Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
