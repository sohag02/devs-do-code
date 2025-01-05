'use client'

import { PolicyLayout } from '@/components/policy-layout'
import { motion } from 'framer-motion'
import { AlertTriangle, Book, Shield, Zap } from 'lucide-react'

export default function TermsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const sections = [
    {
      title: 'Terms of Service',
      icon: Book,
      content: [
        'Users must maintain secure credentials',
        'No unauthorized access attempts',
        'Compliance with applicable laws',
        'Responsible usage of services'
      ]
    },
    {
      title: 'Use License',
      icon: Shield,
      content: [
        'Personal, non-commercial use only',
        'No modification of materials',
        'No redistribution without permission',
        'License termination for violations'
      ]
    },
    {
      title: 'API Usage',
      icon: Zap,
      content: [
        'Rate limits must be respected',
        'API keys must be kept secure',
        'No automated scraping',
        'Usage monitoring in place'
      ]
    }
  ]

  return (
    <PolicyLayout title="Terms of Service">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4"
            {...fadeIn}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
          >
            Please read these terms carefully before using our services
          </motion.p>
        </div>

        {/* Important Notice */}
        <motion.div 
          className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 md:p-6 mx-4"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
            <h2 className="text-lg md:text-xl font-semibold text-white">Important Notice</h2>
          </div>
          <p className="text-sm md:text-base text-white/80">
            By using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, please do not use our services.
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-6 md:space-y-8 px-4">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 md:p-6"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                <h2 className="text-lg md:text-xl font-semibold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm md:text-base text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        {/* Updates Section */}
        <motion.section 
          className="rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 md:p-6 mx-4"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.6 }}
        >
          <h2 className="text-lg md:text-xl font-semibold text-white mb-3">Updates to Terms</h2>
          <p className="text-sm md:text-base text-white/80">
            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform. Your continued use of our services following such modifications constitutes your acceptance of the updated terms.
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 md:p-6 text-center mx-4"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.7 }}
        >
          <h2 className="text-lg md:text-xl font-semibold text-white mb-3">Questions About Terms?</h2>
          <p className="text-sm md:text-base text-white/80 mb-4">
            If you have any questions about these terms, please contact our legal team.
          </p>
          <a 
            href="mailto:legal@devsdocode.com"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Legal Team
          </a>
        </motion.section>
      </div>
    </PolicyLayout>
  )
}
