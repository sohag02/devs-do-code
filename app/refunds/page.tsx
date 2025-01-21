"use client";

import { PolicyLayout } from "@/components/policy-layout";
import { motion } from "framer-motion";
import { CreditCard, Calendar, ArrowLeft, Clock } from "lucide-react";

export default function RefundsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const refundPolicies = [
    {
      title: "Subscription Cancellation",
      icon: Calendar,
      content:
        "Cancel your subscription at any time. You will continue to have access to the service until the end of your billing period.",
    },
    {
      title: "Refund Timeframe",
      icon: Clock,
      content:
        "Request a refund within 14 days of your subscription purchase for a full refund. No questions asked.",
    },
    {
      title: "Refund Process",
      icon: ArrowLeft,
      content:
        "Refunds are processed within 5-7 business days and will be credited back to your original payment method.",
    },
    {
      title: "Payment Methods",
      icon: CreditCard,
      content:
        "We accept all major credit cards and process refunds through our secure payment system.",
    },
  ];

  return (
    <PolicyLayout
      title="Refund Policy"
      description="Our policy regarding refunds and service cancellations"
    >
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
          {refundPolicies.map((policy, index) => (
            <motion.div
              key={policy.title}
              className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 md:p-6"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <policy.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {policy.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80">
                {policy.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.section
          className="space-y-4 md:space-y-6 px-4"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            How to Request a Refund
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 md:p-6">
              <h4 className="font-semibold text-white mb-2">Contact Support</h4>
              <p className="text-sm md:text-base text-white/80">
                Email our support team at support@devsdocode.com with your
                account details and reason for refund.
              </p>
            </div>
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 md:p-6">
              <h4 className="font-semibold text-white mb-2">Processing Time</h4>
              <p className="text-sm md:text-base text-white/80">
                Once approved, refunds typically process within 5-7 business
                days, depending on your payment provider.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 md:p-8 text-center mx-4"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.7 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Questions About Refunds?
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
            Our support team is here to help with any questions about our refund
            process or subscription cancellations.
          </p>
          <a
            href="mailto:support@devsdocode.com"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </motion.section>
      </div>
    </PolicyLayout>
  );
}
