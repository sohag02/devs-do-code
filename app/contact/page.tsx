'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
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

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office',
    description: 'Kolkata, West Bengal, India',
    action: 'Get Directions',
    link: 'https://maps.google.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '+91 (XXX) XXX-XXXX',
    action: 'Call Us',
    link: 'tel:+91XXXXXXXXXX'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'team@devsdocode.com',
    action: 'Email Us',
    link: 'mailto:team@devsdocode.com'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Available 24/7',
    action: 'Start Chat',
    link: '#chat'
  }
]

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    link: 'https://github.com/devsdocode'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    link: 'https://linkedin.com/company/devsdocode'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    link: 'https://twitter.com/devsdocode'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

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
          Get in Touch
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </motion.div>

      {/* Contact Info Grid */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-8 mb-16">
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2A2A2A] rounded-2xl p-6 border border-[#3A3A3A] hover:border-blue-500/50 transition-colors group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-500/10 rounded-xl mb-4 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <span className="text-blue-500 text-sm font-medium group-hover:text-blue-400 transition-colors">
                {item.action} →
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A]">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="space-y-8">
          {/* FAQ Section */}
          <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A]">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What are your business hours?</h3>
                <p className="text-gray-400">We're available 24/7 through our live chat. Office hours are Monday to Friday, 9 AM to 6 PM IST.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly do you respond?</h3>
                <p className="text-gray-400">We aim to respond to all inquiries within 24 hours during business days.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer custom solutions?</h3>
                <p className="text-gray-400">Yes, we provide custom solutions tailored to your specific needs. Contact us to discuss your requirements.</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A]">
            <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-[#3A3A3A] transition-colors group"
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden h-[400px] border border-[#3A3A3A]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45446938823!2d88.26495864677887!3d22.535564537705366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1639913510135!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  )
}
