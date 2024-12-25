import { motion } from "framer-motion"
import { fadeIn } from "@/utils/animations"
import { LucideIcon } from "lucide-react"

interface AnimatedCardProps {
  title: string
  description: string
  icon?: LucideIcon
  emoji?: string
  delay?: number
}

export const AnimatedCard = ({ title, description, icon: Icon, emoji, delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      className="group relative"
    >
      <div className="relative glass rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000" />
        <div className="relative z-10">
          {Icon && (
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-white">
              <Icon className="w-6 h-6" />
            </div>
          )}
          {emoji && (
            <div className="text-4xl mb-4">{emoji}</div>
          )}
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <div className="mt-6 flex items-center text-white font-medium group-hover:text-blue-400 transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
