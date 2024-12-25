import { useRef, useEffect } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

interface MouseGradientProps {
  children: React.ReactNode
}

export const MouseGradient = ({ children }: MouseGradientProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    ref.current?.addEventListener("mousemove", handleMouseMove)
    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
  )

  return (
    <motion.div ref={ref} className="relative">
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background }}
      />
      {children}
    </motion.div>
  )
}
