"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  hoverElevation?: boolean
}

export default function HoverCard({ children, className, hoverScale = 1.03, hoverElevation = true }: HoverCardProps) {
  return (
    <motion.div
      className={cn("transition-all duration-300", hoverElevation && "hover:shadow-lg", className)}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
