'use client'

import { motion } from 'framer-motion'

export default function CookiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-invert max-w-none"
    >
      <h1>Cookie Policy</h1>
      <p className="text-gray-400">Last updated: December 19, 2024</p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files that are stored on your computer or mobile device when you
        visit our website. They help us make your experience better by remembering your preferences
        and how you use our site.
      </p>

      <h2>2. How We Use Cookies</h2>
      <h3>2.1 Essential Cookies</h3>
      <ul>
        <li>Authentication and security</li>
        <li>Account preferences</li>
        <li>Session management</li>
        <li>Load balancing</li>
      </ul>

      <h3>2.2 Performance Cookies</h3>
      <ul>
        <li>Analytics and statistics</li>
        <li>Error monitoring</li>
        <li>Performance optimization</li>
        <li>Traffic analysis</li>
      </ul>

      <h3>2.3 Functionality Cookies</h3>
      <ul>
        <li>User preferences</li>
        <li>Language settings</li>
        <li>Theme preferences</li>
        <li>Personalization</li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>We use cookies from:</p>
      <ul>
        <li>Google Analytics (analytics)</li>
        <li>Stripe (payments)</li>
        <li>GitHub (authentication)</li>
        <li>Intercom (customer support)</li>
      </ul>

      <h2>4. Cookie Management</h2>
      <p>You can control cookies through:</p>
      <ul>
        <li>Browser settings</li>
        <li>Our cookie consent banner</li>
        <li>Third-party opt-out tools</li>
      </ul>

      <h2>5. Cookie Duration</h2>
      <h3>5.1 Session Cookies</h3>
      <p>
        These temporary cookies are erased when you close your browser. They're used to help
        navigate our site and use its features.
      </p>

      <h3>5.2 Persistent Cookies</h3>
      <p>
        These cookies remain on your device for a set period. They're used to remember your
        preferences and improve your experience.
      </p>

      <h2>6. Your Choices</h2>
      <p>You can:</p>
      <ul>
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Delete existing cookies</li>
        <li>Set browser preferences</li>
      </ul>

      <h2>7. Impact of Disabling Cookies</h2>
      <p>
        Disabling cookies may affect the functionality of our website. Some features may not
        work properly without essential cookies.
      </p>

      <h2>8. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy to reflect changes in our practices or for other
        operational, legal, or regulatory reasons.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For questions about our Cookie Policy, please contact us at: privacy@devsdocode.com
      </p>
    </motion.div>
  )
}
