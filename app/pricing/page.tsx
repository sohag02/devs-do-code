'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Footer } from '@/components/footer'

const plans = [
  {
    name: 'Hobby',
    price: 'Free',
    description: 'Perfect for side projects and learning',
    features: [
      '1,000 API calls per month',
      'Basic code generation',
      'Community support',
      'Basic documentation',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professional developers and small teams',
    features: [
      '50,000 API calls per month',
      'Advanced code generation',
      'Priority support',
      'Full documentation access',
      'Team collaboration',
      'Custom API endpoints',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams and organizations',
    features: [
      'Unlimited API calls',
      'Custom model fine-tuning',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment',
      'Advanced security features',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Choose the plan that's right for you
          </motion.p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${annual ? 'text-gray-400' : 'text-white'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2A2A2A]"
            >
              <span className="sr-only">Enable annual billing</span>
              <motion.span
                initial={false}
                animate={{ x: annual ? 20 : 2 }}
                className="inline-block h-4 w-4 transform rounded-full bg-white transition"
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-green-400">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: plans.indexOf(plan) * 0.1 }}
              className={`relative bg-[#2A2A2A] rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-purple-500 hover:bg-purple-600 text-white'
                    : 'bg-[#3A3A3A] hover:bg-[#4A4A4A] text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Enterprise Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need a custom solution? We offer enterprise-grade features including dedicated support,
            custom integrations, and advanced security. Contact our sales team to learn more.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
