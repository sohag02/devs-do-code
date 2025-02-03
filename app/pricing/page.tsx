"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
// import { createOrder, validateOrder } from "../actions/payments";
import { usePayment } from "@/hooks/usePayment";
import { monthlyPricing, yearlyPricing } from "@/config/plans";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const pricing = isAnnual ? yearlyPricing : monthlyPricing;
  const router = useRouter();
  const { user } = useSession();
  const { handlePayment, isProcessing } = usePayment(
    user?.name || "",
    user?.email || "",
    user?.id || "",
  );

  const processPayment = async (amount: number, planId: string) => {
    if (!user) {
      router.push("/auth/signin?next=/pricing");
    } else {
      await handlePayment(amount, isAnnual ? 'yearly' : 'monthly', planId);
    }
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-black text-white py-24 px-4"
    >
      {/* Header */}
      <motion.div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Unlock the Full Power of AI
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Access ChatGPT, Claude, Perplexity, Stable Diffusion, and
          more—all-in-one
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 bg-white/5 backdrop-blur-sm p-1.5 rounded-full w-fit mx-auto">
          <button
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              !isAnnual ? "bg-blue-500 text-white" : "text-gray-400"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              isAnnual ? "bg-blue-500 text-white" : "text-gray-400"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Yearly
          </button>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 px-4">
        {/* Free */}
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-2">Free</h3>
          <p className="text-gray-400 mb-6">
            Essential AI tools for everyday use
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹{pricing.free.price}</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <Button className="w-full mb-6" variant="outline">
            Get Started
          </Button>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.tokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.inputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.outputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.images}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.tts}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.ttsChars}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.rpm}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.rps}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.free.features.api}</span>
            </li>
          </ul>
        </div>

        {/* Pro */}
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-gray-400 mb-6">
            Perfect for power users and creators
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold">₹{pricing.pro.price}</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <Button
            className="w-full mb-6"
            variant="default"
            disabled={isProcessing}
            onClick={() => processPayment(Number(pricing.pro.price), 'pro')}
          >
            Upgrade to Pro
          </Button>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.tokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.inputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.outputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.images}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.tts}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.ttsChars}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.rpm}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.rps}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.pro.features.api}</span>
            </li>
          </ul>
        </div>

        {/* Advanced */}
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-2">Advanced</h3>
          <p className="text-gray-400 mb-6">
            Maximum AI power for professionals
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold">
              ₹{pricing.advanced.price}
            </span>
            <span className="text-gray-400">/mo</span>
          </div>
          <Button
            className="w-full mb-6"
            variant="outline"
            disabled={isProcessing}
            onClick={() => processPayment(Number(pricing.advanced.price), 'advanced')}
          >
            Upgrade to Advanced
          </Button>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.tokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.inputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.outputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.images}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.tts}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.ttsChars}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.rpm}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.rps}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.advanced.features.api}</span>
            </li>
          </ul>
        </div>

        {/* Ultimate */}
        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
          <p className="text-gray-400 mb-6">
            Maximum AI power for professionals
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold">
              ₹{pricing.ultimate.price}
            </span>
            <span className="text-gray-400">/mo</span>
          </div>
          <Button
            className="w-full mb-6"
            variant="outline"
            disabled={isProcessing}
            onClick={() => processPayment(Number(pricing.ultimate.price), 'ultimate')}
          >
            Upgrade to Ultimate
          </Button>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.tokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.inputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.outputTokens}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.images}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.tts}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.ttsChars}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.rpm}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.rps}</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{pricing.ultimate.features.api}</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl mx-auto text-center border-t border-gray-800 pt-16"
      >
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Status</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="text-gray-400 border-t border-gray-800 pt-8 pb-4">
          2025 DevsDo.Code. All rights reserved.
        </div>
      </motion.div>
    </motion.div>
  );
}
