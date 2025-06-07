"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  threshold?: number
  once?: boolean
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
  threshold = 0.1,
  once = true,
  element: Element = "h2",
}: TextRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerChildren, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(className)}
      as={Element}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline-block", marginRight: "0.25em" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
