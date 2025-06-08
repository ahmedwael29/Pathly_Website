"use client"
import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const delayTimeout = setTimeout(() => {
      startTimeRef.current = Date.now()

      const animate = () => {
        const now = Date.now()
        const elapsed = now - (startTimeRef.current || now)
        const progress = Math.min(elapsed / duration, 1)

        const easeOutExpo = 1 - Math.pow(2, -10 * progress)
        const currentCount = Math.floor(easeOutExpo * end)

        setCount(currentCount)
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate)
        }
      }
      frameRef.current = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(delayTimeout)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [inView, end, duration, delay])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
