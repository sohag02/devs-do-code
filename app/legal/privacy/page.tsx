'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-invert max-w-none"
    >
      <h1>Privacy Policy</h1>
      <p className="text-gray-400">Last updated: December 19, 2024</p>

      <h2>1. Introduction</h2>
      <p>
        At Devs Do Code ("we", "our", or "us"), we take your privacy seriously. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our website and services.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Personal Information</h3>
      <ul>
        <li>Name and email address</li>
        <li>Billing information</li>
        <li>GitHub account information</li>
        <li>Usage data and preferences</li>
      </ul>

      <h3>2.2 Technical Information</h3>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device information</li>
        <li>Usage statistics</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain our services</li>
        <li>To process your payments</li>
        <li>To send you important updates</li>
        <li>To improve our services</li>
        <li>To respond to your requests</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information. However,
        no method of transmission over the internet is 100% secure.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        We may use third-party services that collect, monitor, and analyze data. These services
        are bound by their own privacy policies.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to data processing</li>
        <li>Data portability</li>
      </ul>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
        privacy@devsdocode.com
      </p>
    </motion.div>
  )
}
