'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useState } from 'react'

const monthlyPricing = {
  starter: {
    price: '924',
    originalPrice: '2310',
    usd: '11',
    yearlyBilling: '₹11088 INR ($132 USD)'
  },
  pro: {
    price: '2016',
    originalPrice: '5040',
    usd: '24',
    yearlyBilling: '₹24192 INR ($288 USD)'
  },
  expert: {
    price: '3024',
    originalPrice: '7560',
    usd: '36',
    yearlyBilling: '₹36288 INR ($432 USD)'
  }
}

const yearlyPricing = {
  starter: {
    price: '756',
    originalPrice: '1848',
    usd: '9',
    yearlyBilling: '₹8484 INR ($101 USD)'
  },
  pro: {
    price: '1512',
    originalPrice: '3780',
    usd: '18',
    yearlyBilling: '₹17808 INR ($212 USD)'
  },
  expert: {
    price: '2100',
    originalPrice: '5208',
    usd: '25',
    yearlyBilling: '₹24696 INR ($294 USD)'
  }
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const pricing = isAnnual ? yearlyPricing : monthlyPricing

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-black text-white py-24 px-4"
    >
      {/* Header */}
      <motion.div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Unlock the Full Power of AI
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Access ChatGPT, Claude, Perplexity, Stable Diffusion, and more—all-in-one
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 bg-white/5 backdrop-blur-sm p-1.5 rounded-full w-fit mx-auto">
          <button
            className={`px-6 py-2 rounded-full text-sm transition-all ${!isAnnual ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm transition-all ${isAnnual ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
            onClick={() => setIsAnnual(true)}
          >
            Yearly
          </button>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {/* Starter */}
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-2">Starter</h3>
          <p className="text-gray-400 mb-6">Essential AI tools for everyday use</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹{pricing.starter.price}</span>
            <span className="text-gray-400">/mo</span>
            <span className="ml-2 text-gray-500 line-through">₹{pricing.starter.originalPrice}</span>
          </div>
          <div className="text-sm text-gray-400 mb-6">
            Billed yearly at {pricing.starter.yearlyBilling}
          </div>
          <Button className="w-full mb-6" variant="outline">
            Upgrade to Starter
          </Button>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>1,000 Premium AI Messages</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>30 HD Image Generations</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>5 AI Video Creations</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>All Premium AI Models</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>AI Mindmap Generator</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Writing Library Access</span>
            </li>
          </ul>
        </div>

        {/* Pro */}
        <div className="relative p-8 rounded-2xl bg-gradient-to-b from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-gray-400 mb-6">Perfect for power users and creators</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹{pricing.pro.price}</span>
            <span className="text-gray-400">/mo</span>
            <span className="ml-2 text-gray-500 line-through">₹{pricing.pro.originalPrice}</span>
          </div>
          <div className="text-sm text-gray-400 mb-6">
            Billed yearly at {pricing.pro.yearlyBilling}
          </div>
          <Button className="w-full mb-6" variant="default">
            Upgrade to Pro
          </Button>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>4,000 Premium AI Messages</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>100 HD Image Generations</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>15 AI Video Creations</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>All Premium AI Models</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>AI Mindmap Generator</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Writing Library Access</span>
            </li>
          </ul>
        </div>

        {/* Expert */}
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-2">Expert</h3>
          <p className="text-gray-400 mb-6">Maximum AI power for professionals</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹{pricing.expert.price}</span>
            <span className="text-gray-400">/mo</span>
            <span className="ml-2 text-gray-500 line-through">₹{pricing.expert.originalPrice}</span>
          </div>
          <div className="text-sm text-gray-400 mb-6">
            Billed yearly at {pricing.expert.yearlyBilling}
          </div>
          <Button className="w-full mb-6" variant="outline">
            Upgrade to Expert
          </Button>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>8,000 Premium AI Messages</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>300 HD Image Generations</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>30 AI Video Creations</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>All Premium AI Models</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>AI Mindmap Generator</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Writing Library Access</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl mx-auto text-center border-t border-gray-800 pt-16"
      >
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Status</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="text-gray-400 border-t border-gray-800 pt-8 pb-4">
          2025 DevsDo.Code. All rights reserved.
        </div>
      </motion.div>
    </motion.div>
  )
}
