"use client"

import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    // Check if we're in v0 preview environment
    const isV0Preview =
      window.location.hostname.includes("v0-") ||
      window.location.hostname.includes("v0.run") ||
      window.location.hostname.includes("v0.app")

    if (isV0Preview) {
      // In preview, go to /home
      window.location.href = "/home"
    } else {
      window.location.href = "/home"
    }
  }, [])

  return null
}
