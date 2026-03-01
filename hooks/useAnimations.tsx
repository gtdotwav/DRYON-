"use client"

import { useEffect, useState } from "react"

export function useAnimations() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) {
    return {
      shouldAnimate: false,
      fadeInUp: "",
      slideInLeft: "",
      slideInRight: "",
      scaleIn: "",
    }
  }

  return {
    shouldAnimate: true,
    fadeInUp: "animate-fade-in-up",
    slideInLeft: "animate-slide-in-left",
    slideInRight: "animate-slide-in-right",
    scaleIn: "animate-scale-in",
  }
}
