"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  cursor?: boolean
  threshold?: number
  once?: boolean
}

export default function TypingText({
  text,
  className,
  speed = 50,
  delay = 0,
  cursor = true,
  threshold = 0.1,
  once = true,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  useEffect(() => {
    if (!inView) return

    // Delay before starting
    const delayTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(delayTimeout)
  }, [inView, delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
    }
  }, [currentIndex, isTyping, speed, text])

  return (
    <span ref={ref} className={cn(className)}>
      {displayedText}
      {cursor && isTyping && <span className="animate-blink">|</span>}
    </span>
  )
}
