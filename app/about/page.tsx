'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Saunek Ghosh',
    role: 'Full Stack Developer',
    image: '/team/saunek.jpg',
    bio: 'Passionate about building scalable web applications and exploring new technologies. Experienced in React, Node.js, and cloud architecture.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Next.js'],
    social: {
      github: 'https://github.com/saunek',
      twitter: 'https://twitter.com/saunek',
      linkedin: 'https://linkedin.com/in/saunek'
    }
  },
  {
    name: 'Sreejan Anand',
    role: 'AI/ML Engineer',
    image: '/team/sreejan.jpg',
    bio: 'AI enthusiast with a focus on machine learning and natural language processing. Building intelligent systems that make a difference.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    social: {
      github: 'https://github.com/sreejan',
      twitter: 'https://twitter.com/sreejan',
      linkedin: 'https://linkedin.com/in/sreejan'
    }
  },
  {
    name: 'Sohag',
    role: 'UI/UX Designer & Developer',
    image: '/team/sohag.jpg',
    bio: 'Creative developer with an eye for design. Specializing in creating beautiful and intuitive user experiences.',
    skills: ['UI/UX', 'Figma', 'React', 'Tailwind CSS', 'Motion Design'],
    social: {
      github: 'https://github.com/sohag',
      twitter: 'https://twitter.com/sohag',
      linkedin: 'https://linkedin.com/in/sohag'
    }
  }
]

const achievements = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '20+', label: 'Technologies' },
  { number: '5+', label: 'Years Experience' }
]

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're a passionate team of developers and designers building the future of AI-powered development.
          </motion.p>
        </div>

        {/* Team Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-6 transition-all duration-300 hover:border-blue-500/40"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-black relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {member.role}
                </p>
                <p className="text-white/80 mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={member.social.github} className="text-white/60 hover:text-blue-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link href={member.social.twitter} className="text-white/60 hover:text-purple-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link href={member.social.linkedin} className="text-white/60 hover:text-pink-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  delay: index * 0.1 
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </h3>
                <p className="text-white/80">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-white/80">
            <p>
              At Devs Do Code, we're on a mission to revolutionize software development through AI-powered tools and solutions. 
              We believe in making development more accessible, efficient, and enjoyable for everyone.
            </p>
            <p>
              Our team combines expertise in full-stack development, AI/ML, and design to create tools that help developers work smarter, not harder. 
              We're committed to building a future where AI augments human creativity and productivity.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
