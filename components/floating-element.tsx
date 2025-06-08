"use client"
import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  amplitude?: number
  duration?: number
  delay?: number
}

export default function FloatingElement({
  children,
  className,
  amplitude = 10,
  duration = 4,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      className={cn(className)}
      animate={{
        y: [0, -amplitude, 0, amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
