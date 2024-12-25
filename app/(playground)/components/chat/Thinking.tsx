'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ThinkingProps {
  model: string
}

export const AIChatLoadingGlow: React.FC<ThinkingProps> = ({ model } : ThinkingProps) => {
  return (
    <div className="flex space-x-3 text-white bg-transparent max-w-sm overflow-hidden">
      {/* <motion.div
        className="flex space-x-1"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white rounded-full"
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          />
        ))}
      </motion.div> */}
      <div className="">
        <motion.span
          className="font-medium text-sm sm:text-base relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          animate={{ 
            opacity: [0.5, 1],
            // background: ['linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.9), rgba(255,255,255,0.1))'],
            // x: ['-100%', '100%'],
           }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {model} is thinking
        </motion.span>
        {/* <motion.div
          className="absolute inset-0"
          animate={{
            background: ['linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.9), rgba(255,255,255,0.1))'],
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        /> */}
      </div>
      <AnimatePresence>
        <motion.div
          className="flex space-x-1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="text-white text-lg"
              animate={{ opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2,
              }}
            >
              .
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


