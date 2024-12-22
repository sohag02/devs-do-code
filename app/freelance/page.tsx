'use client'

import { motion } from 'framer-motion'
import { Code2, Paintbrush, Globe, Server, Rocket, ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Full-stack development with modern technologies like React, Next.js, Node.js, and more.',
    features: [
      'Web Applications',
      'Mobile Apps',
      'Desktop Software',
      'API Development'
    ]
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Design Systems',
      'Prototyping'
    ]
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive websites that work flawlessly across all devices.',
    features: [
      'E-commerce Solutions',
      'CMS Development',
      'Landing Pages',
      'Web Optimization'
    ]
  },
  {
    icon: Server,
    title: 'Backend Solutions',
    description: 'Scalable server-side solutions that power your applications.',
    features: [
      'Database Design',
      'API Integration',
      'Cloud Services',
      'Security Implementation'
    ]
  }
]

const process = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your requirements, goals, and vision for the project.'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We create a detailed roadmap and timeline for your project.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our team brings your vision to life with quality code and design.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy your project and provide ongoing support as needed.'
  }
]

export default function FreelancePage() {
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
          Expert Development Services
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Transform your ideas into reality with our professional development team.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-[#2A2A2A] border-[#3A3A3A] hover:bg-[#3A3A3A]"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Schedule Call
          </Button>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A] hover:border-blue-500/50 transition-colors"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4">
              <service.icon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Process Section */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-blue-500 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        variants={itemVariants}
        className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-[#3A3A3A] text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your project requirements and create something amazing together.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Get Started
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-[#2A2A2A] border-[#3A3A3A] hover:bg-[#3A3A3A]"
          >
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
