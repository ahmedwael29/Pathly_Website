"use client"
import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonWithHoverProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "link"
  hoverScale?: number
  hoverClassName?: string
}

export default function ButtonWithHover({
  children,
  className,
  variant = "default",
  hoverScale = 1.05,
  hoverClassName,
  ...props
}: ButtonWithHoverProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={cn(className)} variant={variant} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
