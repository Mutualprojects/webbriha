"use client"

import { useEffect, useState } from "react"

/**
 * Hook to detect if the screen width is below a certain breakpoint (default 768px)
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < breakpoint)

    checkScreenSize() // Run on mount
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [breakpoint])

  return isMobile
}
