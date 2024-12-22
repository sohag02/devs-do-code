'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Shield, Clock, Users, Code2, Star } from 'lucide-react'
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

const plans = [
  {
    name: "Hobby",
    description: "Perfect for side projects and learning",
    price: "Free",
    features: [
      "1,000 API calls/month",
      "Basic code generation",
      "Community support",
      "Basic IDE integration",
      "Public repositories only"
    ],
    highlighted: false,
    icon: Code2
  },
  {
    name: "Pro",
    description: "For professional developers and small teams",
    price: "$29",
    period: "/month",
    features: [
      "50,000 API calls/month",
      "Advanced code generation",
      "Priority support",
      "Full IDE integration",
      "Private repositories",
      "Team collaboration",
      "Custom models"
    ],
    highlighted: true,
    icon: Star
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "Custom",
    features: [
      "Unlimited API calls",
      "Custom model training",
      "24/7 dedicated support",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment"
    ],
    highlighted: false,
    icon: Shield
  }
]

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Lightning-fast response times with global edge deployment"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption"
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Guaranteed availability with automatic failover"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in tools for seamless team workflows"
  }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Choose the perfect plan for your needs. All plans include core features.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2A2A2A]"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-blue-500 transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
            Annual
            <span className="ml-1 text-blue-500">(Save 20%)</span>
          </span>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative bg-[#2A2A2A] rounded-2xl p-8 border ${
              plan.highlighted 
                ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                : 'border-[#3A3A3A]'
            }`}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="flex items-center gap-3 mb-4">
              <plan.icon className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>
            
            <p className="text-gray-400 mb-6">{plan.description}</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.period && (
                <span className="text-gray-400">
                  {isAnnual ? '/year' : plan.period}
                </span>
              )}
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.highlighted
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-[#3A3A3A] text-white hover:bg-[#4A4A4A]'
              }`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-center mb-12">Enterprise-Grade Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500/10 text-blue-500 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div variants={itemVariants} className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-400 mb-8">
          Contact our sales team for custom pricing and more information.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
          <button className="px-6 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#3A3A3A] transition-colors">
            View FAQ
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
