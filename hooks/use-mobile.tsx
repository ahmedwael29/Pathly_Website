"use client"
import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

export function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    checkIfMobile()

    window.addEventListener("resize", checkIfMobile)
    mql.addEventListener("change", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
      mql.removeEventListener("change", checkIfMobile)
    }
  }, [])

  return !!isMobile
}
