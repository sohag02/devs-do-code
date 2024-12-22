'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Globe, ArrowRight } from 'lucide-react'
import Image from 'next/image'
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

const team = [
  {
    name: 'Saunak Ghosh',
    role: 'Full Stack Developer',
    image: '/team/saunak.jpg',
    bio: 'Passionate about building scalable web applications and exploring new technologies. Experienced in React, Node.js, and cloud architecture.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Next.js'],
    links: {
      github: 'https://github.com/saunak',
      linkedin: 'https://linkedin.com/in/saunak',
      twitter: 'https://twitter.com/saunak',
      portfolio: 'https://saunak.dev'
    }
  },
  {
    name: 'Sreejan Anand',
    role: 'AI/ML Engineer',
    image: '/team/sreejan.jpg',
    bio: 'AI enthusiast with a focus on machine learning and natural language processing. Building intelligent systems that make a difference.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    links: {
      github: 'https://github.com/sreejan',
      linkedin: 'https://linkedin.com/in/sreejan',
      twitter: 'https://twitter.com/sreejan',
      portfolio: 'https://sreejan.dev'
    }
  },
  {
    name: 'Sohag',
    role: 'UI/UX Designer & Developer',
    image: '/team/sohag.jpg',
    bio: 'Creative developer with an eye for design. Specializing in creating beautiful and intuitive user experiences.',
    skills: ['UI/UX', 'Figma', 'React', 'Tailwind CSS', 'Motion Design'],
    links: {
      github: 'https://github.com/sohag',
      linkedin: 'https://linkedin.com/in/sohag',
      twitter: 'https://twitter.com/sohag',
      portfolio: 'https://sohag.dev'
    }
  }
]

const achievements = [
  {
    title: 'Projects Delivered',
    count: '50+',
    description: 'Successful projects across various domains'
  },
  {
    title: 'Happy Clients',
    count: '30+',
    description: 'Satisfied clients worldwide'
  },
  {
    title: 'Technologies',
    count: '20+',
    description: 'Technologies mastered'
  },
  {
    title: 'Years Experience',
    count: '5+',
    description: 'Combined years of experience'
  }
]

interface FlipCardProps {
  member: typeof team[0]
}

const FlipCard = ({ member }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-full h-[400px] cursor-pointer perspective"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      variants={itemVariants}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-[#2A2A2A] rounded-2xl p-6 h-full border border-[#3A3A3A] overflow-hidden group">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
            <p className="text-blue-400 text-center mb-4">{member.role}</p>
            <p className="text-gray-400 text-center mb-4">{member.bio}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#3A3A3A] rounded-full text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-[#2A2A2A] rounded-2xl p-6 h-full border border-[#3A3A3A] flex flex-col justify-center items-center">
            <div className="space-y-6">
              <a
                href={member.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href={member.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a
                href={member.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span>Twitter</span>
              </a>
              <a
                href={member.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-6 h-6" />
                <span>Portfolio</span>
              </a>
              <a
                href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@example.com`}
                className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function AboutPage() {
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
          Meet Our Team
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're a passionate team of developers and designers building the future of AI-powered development.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-24">
        {team.map((member, index) => (
          <FlipCard key={index} member={member} />
        ))}
      </motion.div>

      {/* Achievements Section */}
      <motion.div variants={itemVariants} className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#2A2A2A] rounded-xl p-6 border border-[#3A3A3A]">
                <h3 className="text-4xl font-bold text-blue-500 mb-2">{achievement.count}</h3>
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div variants={itemVariants}>
        <div className="text-center bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-[#3A3A3A]">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for new opportunities to collaborate and create amazing projects.
            Whether you have a project in mind or just want to chat, we'd love to hear from you!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:team@devsdocode.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="/projects"
              className="px-6 py-3 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#3A3A3A] transition-colors inline-flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              View Projects
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
