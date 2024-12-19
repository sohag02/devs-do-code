'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-invert max-w-none"
    >
      <h1>Terms of Service</h1>
      <p className="text-gray-400">Last updated: December 19, 2024</p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing or using Devs Do Code's services, you agree to be bound by these Terms of Service
        and all applicable laws and regulations.
      </p>

      <h2>2. Use License</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable license to use our services for your
        personal or business purposes, subject to these Terms.
      </p>

      <h2>3. Service Description</h2>
      <p>
        Devs Do Code provides AI-powered coding assistance, including but not limited to:
      </p>
      <ul>
        <li>Code generation and completion</li>
        <li>Code analysis and review</li>
        <li>Documentation generation</li>
        <li>API integration support</li>
      </ul>

      <h2>4. User Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate account information</li>
        <li>Maintain the security of your account</li>
        <li>Use the services in compliance with laws</li>
        <li>Not misuse or abuse the services</li>
      </ul>

      <h2>5. Payment Terms</h2>
      <ul>
        <li>Subscription fees are billed in advance</li>
        <li>All payments are non-refundable</li>
        <li>Prices may change with 30 days notice</li>
        <li>Failed payments may result in service suspension</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        You retain ownership of your code and content. We retain ownership of our services,
        technology, and intellectual property.
      </p>

      <h2>7. Service Availability</h2>
      <p>
        We strive for 99.9% uptime but do not guarantee uninterrupted service. Maintenance
        and updates may cause temporary service interruptions.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        We are not liable for any indirect, incidental, or consequential damages arising
        from your use of our services.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may terminate or suspend your account for violations of these Terms. You may
        terminate your account at any time.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use of our services constitutes
        acceptance of modified Terms.
      </p>

      <h2>11. Contact Information</h2>
      <p>
        For questions about these Terms, please contact us at: legal@devsdocode.com
      </p>
    </motion.div>
  )
}
