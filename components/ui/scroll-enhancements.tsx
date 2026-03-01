"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const toggleVisibility = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsVisible(window.pageYOffset > 300)
      }, 100)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      clearTimeout(timeoutId)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-[#23376D] text-white p-4 rounded-full shadow-2xl hover:bg-[#23376D]/90 transition-all duration-300 hover:scale-110 hover:shadow-xl group"
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </>
  )
}

export function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let rafId: number
    let timeoutId: NodeJS.Timeout

    const updateScrollProgress = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        rafId = requestAnimationFrame(() => {
          const scrollPx = document.documentElement.scrollTop
          const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
          const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0
          setScrollProgress(scrolled)
        })
      }, 10)
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    updateScrollProgress()

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/50 z-50 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-[#23376D] via-[#2563EB] to-[#F5EB06] transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de rolagem da página"
      />
    </div>
  )
}
