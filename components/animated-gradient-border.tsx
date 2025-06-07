"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  duration?: number
  delay?: number
}

export default function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  duration = 3,
  delay = 0,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative p-[1px] rounded-xl overflow-hidden", containerClassName)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
        style={{
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          delay,
        }}
      />
      <div className={cn("relative z-10 rounded-[calc(0.75rem-1px)]", className)}>{children}</div>
    </div>
  )
}
