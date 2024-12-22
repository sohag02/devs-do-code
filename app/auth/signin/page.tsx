'use client'

import { signIn } from 'next-auth/react'
import { Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      await signIn('google', { callbackUrl: '/playground' })
    } catch (error) {
      console.error('Sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] p-4">
      <motion.div
        className="bg-[#2A2A2A] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#3A3A3A]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex flex-col items-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-white text-3xl font-bold tracking-tight">DEVS DO CODE</h1>
          <p className="text-gray-400 text-center">Sign in to start coding and collaborating</p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={itemVariants}
        >
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </button>
        </motion.div>

        <motion.p 
          className="mt-8 text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          By signing in, you agree to our{' '}
          <a href="/legal/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
          {' '}and{' '}
          <a href="/legal/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
        </motion.p>
      </motion.div>
    </div>
  )
}
