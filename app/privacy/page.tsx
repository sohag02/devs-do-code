'use client'

import { PolicyLayout } from '@/components/policy-layout'
import { motion } from 'framer-motion'
import { Shield, Lock, Database, Bell } from 'lucide-react'

export default function PrivacyPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const privacyPoints = [
    {
      title: 'Data Collection',
      icon: Database,
      content: [
        'Account information (name, email)',
        'Usage data and analytics',
        'API usage statistics',
        'Payment information',
        'Communication preferences'
      ]
    },
    {
      title: 'Data Protection',
      icon: Shield,
      content: [
        'Industry-standard encryption',
        'Regular security audits',
        'Secure data storage',
        'Access controls',
        'Data backup protocols'
      ]
    },
    {
      title: 'Your Rights',
      icon: Lock,
      content: [
        'Access your personal data',
        'Request data deletion',
        'Opt-out of communications',
        'Data portability',
        'Update your preferences'
      ]
    },
    {
      title: 'Updates & Notifications',
      icon: Bell,
      content: [
        'Policy change notifications',
        'Service updates',
        'Security alerts',
        'Feature announcements',
        'Account notifications'
      ]
    }
  ]

  return (
    <PolicyLayout title="Privacy Policy">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
          >
            Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
          </motion.p>
        </div>

        {/* Last Updated */}
        <motion.div 
          className="text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <span className="text-white/60 text-sm">Last Updated: January 5, 2025</span>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <motion.section 
            className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <div className="space-y-4 text-white/80">
              <p>
                At Devs Do Code, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our services.
              </p>
              <p>
                By using our services, you consent to the data practices described in this privacy policy. 
                We may update this policy periodically, and we'll notify you of any material changes.
              </p>
            </div>
          </motion.section>

          {/* Privacy Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <point.icon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                </div>
                <ul className="space-y-2">
                  {point.content.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Data Usage */}
          <motion.section 
            className="space-y-6"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              How We Use Your Data
            </h2>
            <div className="grid gap-4">
              {[
                {
                  title: 'Service Improvement',
                  desc: 'We analyze usage patterns to enhance our services and user experience'
                },
                {
                  title: 'Communication',
                  desc: 'We send important updates, security alerts, and promotional materials (with your consent)'
                },
                {
                  title: 'Support',
                  desc: 'We use your information to provide technical support and assist with inquiries'
                },
                {
                  title: 'Legal Compliance',
                  desc: 'We may use your data to comply with applicable laws and regulations'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4"
                >
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            className="rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-white/80 mb-6">
              If you have any questions about our privacy practices or would like to exercise your privacy rights, 
              please contact our privacy team.
            </p>
            <a 
              href="mailto:privacy@devsdocode.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Privacy Team
            </a>
          </motion.section>
        </div>
      </div>
    </PolicyLayout>
  )
}
