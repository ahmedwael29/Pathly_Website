"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface StaggeredChildrenProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  staggerDelay?: number
  childrenDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export default function StaggeredChildren({
  children,
  className,
  containerClassName,
  staggerDelay = 0.1,
  childrenDelay = 0,
  direction = "up",
  distance = 20,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: StaggeredChildrenProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      case "none":
        return {}
      default:
        return { y: distance }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childrenDelay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
      },
    },
  }

  const staggeredChildren = React.Children.map(children, (child) => {
    return (
      <motion.div variants={itemVariants} className={className}>
        {child}
      </motion.div>
    )
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={containerClassName}
    >
      {staggeredChildren}
    </motion.div>
  )
}
