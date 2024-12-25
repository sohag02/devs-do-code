'use client'

import { useState } from 'react'
import { Brain } from 'lucide-react'
import { motion } from 'framer-motion'

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
      window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/googlelogin`
    } catch (error) {
      console.error('Google sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGitHubSignIn = async () => {
    try {
      setIsLoading(true)
      window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/githublogin`
    } catch (error) {
      console.error('GitHub sign in error:', error)
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
        
        <div className="space-y-4">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGitHubSignIn}
            className="w-full flex items-center justify-center gap-3 bg-[#24292F] text-white py-4 rounded-xl hover:bg-[#24292F]/90 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Continue with GitHub
          </motion.button>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </motion.button>
        </div>

        <motion.p 
          variants={itemVariants}
          className="mt-8 text-center text-sm text-gray-500"
        >
          By signing in, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </motion.div>
    </div>
  )
}