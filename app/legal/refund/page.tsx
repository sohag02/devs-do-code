'use client'

import { motion } from 'framer-motion'

export default function RefundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-invert max-w-none"
    >
      <h1>Refund Policy</h1>
      <p className="text-gray-400">Last updated: December 19, 2024</p>

      <h2>1. Overview</h2>
      <p>
        This Refund Policy outlines our procedures and conditions for refunds at Devs Do Code.
        We want you to be satisfied with our services, and we're committed to fair and transparent
        refund practices.
      </p>

      <h2>2. Subscription Refunds</h2>
      <h3>2.1 Monthly Subscriptions</h3>
      <ul>
        <li>No partial refunds for unused portions of the current billing period</li>
        <li>Cancellations take effect at the end of the current billing period</li>
        <li>You retain access to services until the end of the paid period</li>
      </ul>

      <h3>2.2 Annual Subscriptions</h3>
      <ul>
        <li>Pro-rated refunds available within first 30 days</li>
        <li>No refunds after 30 days of purchase</li>
        <li>Special consideration for technical issues</li>
      </ul>

      <h2>3. Eligibility for Refunds</h2>
      <p>Refunds may be considered in the following cases:</p>
      <ul>
        <li>Technical issues preventing service use</li>
        <li>Billing errors or duplicate charges</li>
        <li>Service unavailability exceeding our SLA</li>
        <li>Cancellation within trial period</li>
      </ul>

      <h2>4. Non-Refundable Items</h2>
      <ul>
        <li>Setup or implementation fees</li>
        <li>Custom development work</li>
        <li>Training or consultation services</li>
        <li>Usage-based charges</li>
      </ul>

      <h2>5. Refund Process</h2>
      <p>To request a refund:</p>
      <ol>
        <li>Contact our support team</li>
        <li>Provide your account details</li>
        <li>Explain the reason for the refund</li>
        <li>Include relevant transaction information</li>
      </ol>

      <h2>6. Processing Time</h2>
      <p>
        Refunds are typically processed within 5-10 business days. The actual time to receive
        the refund depends on your payment method and financial institution.
      </p>

      <h2>7. Refund Methods</h2>
      <ul>
        <li>Credit/Debit Cards: Refunded to the original card</li>
        <li>PayPal: Refunded to your PayPal account</li>
        <li>Bank Transfer: May require additional processing time</li>
      </ul>

      <h2>8. Exceptions</h2>
      <p>
        We reserve the right to handle refund requests on a case-by-case basis and may make
        exceptions to this policy at our discretion.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For refund requests or questions about this policy, please contact us at:
        billing@devsdocode.com
      </p>
    </motion.div>
  )
}
