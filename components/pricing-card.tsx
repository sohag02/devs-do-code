import { motion } from "framer-motion"
import { GradientButton } from "./gradient-button"
import { Check } from "lucide-react"

interface PricingCardProps {
  name: string
  price: string
  features: string[]
  popular?: boolean
  delay?: number
}

export const PricingCard = ({ name, price, features, popular, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative glass rounded-3xl p-8 ${
        popular ? "border-2 border-primary" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.2 }}
            className="bg-primary text-white px-4 py-1 rounded-full text-sm"
          >
            Most Popular
          </motion.span>
        </div>
      )}
      <div className="text-center">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="text-2xl font-bold mb-2"
        >
          {name}
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.4 }}
          className="text-4xl font-bold mb-6"
        >
          {price}
        </motion.div>
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
          className="space-y-4 mb-8"
        >
          {features.map((feature, index) => (
            <motion.li 
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.6 + (index * 0.1) }}
              className="flex items-center gap-2"
            >
              <Check className="w-5 h-5 text-green-500" />
              {feature}
            </motion.li>
          ))}
        </motion.ul>
        <GradientButton
          text="Get Started"
          variant={popular ? "primary" : "secondary"}
          className="w-full"
        />
      </div>
    </motion.div>
  )
}
