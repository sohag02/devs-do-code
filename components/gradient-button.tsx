import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface GradientButtonProps {
  text: string
  onClick?: () => void
  icon?: IconDefinition
  className?: string
  variant?: "primary" | "secondary" | "outline"
}

export const GradientButton = ({ text, onClick, icon, className = "", variant = "primary" }: GradientButtonProps) => {
  const baseStyles = "relative px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden"
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-blue-500/20",
    secondary: "bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/20",
    outline: "border-2 border-transparent bg-clip-padding text-white hover:border-white/50",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
        {text}
      </span>
      {variant === "outline" && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10" />
      )}
    </motion.button>
  )
}
