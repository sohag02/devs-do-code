'use client'

import { PolicyLayout } from '@/components/policy-layout'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <PolicyLayout 
      title="Contact Us" 
      description="Get in touch with our team for any questions or support"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Contact Information */}
        <motion.div variants={fadeIn("up", 0.3)} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
            <Mail className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400">support@devsdocode.com</p>
            <p className="text-gray-400">business@devsdocode.com</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
            <MapPin className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Office</h3>
            <p className="text-gray-400">123 AI Street</p>
            <p className="text-gray-400">Silicon Valley, CA 94025</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
            <Phone className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400">Mon-Fri 9am-6pm PST</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeIn("up", 0.4)} className="max-w-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </PolicyLayout>
  )
}
