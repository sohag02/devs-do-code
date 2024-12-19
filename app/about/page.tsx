'use client'

import { motion } from 'framer-motion'
import { Footer } from '@/components/footer'
import { Brain, Code, Users, Globe } from 'lucide-react'

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Co-founder',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  },
  {
    name: 'Jane Smith',
    role: 'CTO & Co-founder',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Engineering',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
  },
  {
    name: 'Sarah Wilson',
    role: 'Head of AI',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
  },
]

const values = [
  {
    icon: Brain,
    title: 'Innovation First',
    description: 'We push the boundaries of what is possible with AI and coding assistance.',
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description: 'Everything we build is crafted with developers needs in mind.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our community shapes our product and drives our innovation.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We are building tools that empower developers worldwide.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            Building the Future of Code
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're a team of developers, designers, and AI researchers working to make
            coding more accessible, efficient, and enjoyable for everyone.
          </p>
        </motion.div>

        {/* Values Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2A2A2A] rounded-xl p-6 text-center"
              >
                <div className="inline-block p-3 bg-[#3A3A3A] rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2A2A2A] rounded-xl p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#2A2A2A] rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">100K+</div>
              <div className="text-gray-400">Active Developers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#2A2A2A] rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-400">Code Snippets Generated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#2A2A2A] rounded-xl p-6"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">Countries Reached</div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
