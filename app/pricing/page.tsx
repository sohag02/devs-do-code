'use client'

import { motion } from 'framer-motion'
import { Code2, Star, Shield, Check, Zap } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
      duration: 0.5
    }
  }
}

const plans = [
  {
    name: 'Hobby',
    icon: Code2,
    description: 'Perfect for side projects and learning',
    price: 'Free',
    period: '',
    features: [
      '1,000 API calls/month',
      'Basic code generation',
      'Community support',
      'Basic IDE integration',
      'Public repositories only'
    ],
    gradient: 'from-blue-500/20 to-purple-500/20',
    buttonText: 'Get Started',
    buttonVariant: 'outline' as const
  },
  {
    name: 'Pro',
    icon: Star,
    description: 'For professional developers and small teams',
    price: '$29',
    period: '/month',
    features: [
      '50,000 API calls/month',
      'Advanced code generation',
      'Priority support',
      'Full IDE integration',
      'Private repositories',
      'Team collaboration',
      'Custom models'
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    popular: true,
    buttonText: 'Start Free Trial',
    buttonVariant: 'default' as const
  },
  {
    name: 'Enterprise',
    icon: Shield,
    description: 'For large teams and organizations',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited API calls',
      'Custom model training',
      '24/7 dedicated support',
      'SSO & advanced security',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment'
    ],
    gradient: 'from-pink-500/20 to-orange-500/20',
    buttonText: 'Contact Sales',
    buttonVariant: 'outline' as const
  }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#1A1A1A] text-white py-24 px-4"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Choose the perfect plan for your needs. All plans include core features.
        </p>
        
        {/* Billing Toggle */}
        <div 
          className="flex items-center justify-center gap-6 bg-[#1E1E1E] p-2 rounded-full w-fit mx-auto cursor-pointer"
          onClick={() => setIsAnnual(!isAnnual)}
        >
          <span className={`text-sm px-3 py-1.5 rounded-full transition-colors duration-200 ${!isAnnual ? 'text-white bg-[#2A2A2A]' : 'text-gray-400'}`}>
            Monthly
          </span>
          <div className="flex items-center gap-2">
            <span className={`text-sm px-3 py-1.5 rounded-full transition-colors duration-200 ${isAnnual ? 'text-white bg-[#2A2A2A]' : 'text-gray-400'}`}>
              Annual
            </span>
            <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full whitespace-nowrap">
              Save 20%
            </span>
          </div>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={itemVariants}
            className={`relative rounded-2xl bg-[#2A2A2A] border border-[#3A3A3A] p-8 ${
              plan.popular ? 'md:scale-105' : ''
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
            )}

            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-2xl`} />

            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-xl">
                  <plan.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
                {isAnnual && plan.price !== 'Free' && plan.price !== 'Custom' && (
                  <p className="text-sm text-gray-400 mt-1">
                    Billed annually (save 20%)
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="rounded-full p-1 bg-blue-500/20">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                variant={plan.buttonVariant}
                size="lg"
                className="w-full"
              >
                {plan.buttonText}
                {plan.name === 'Pro' && (
                  <Zap className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <motion.div variants={itemVariants} className="max-w-3xl mx-auto mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400">
          Have more questions?{' '}
          <Link href="/contact" className="text-blue-400 hover:text-blue-300">
            Contact our team
          </Link>
        </p>
      </motion.div>
    </motion.div>
  )
}
