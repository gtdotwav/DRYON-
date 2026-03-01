"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface LiaOnToggleButtonProps {
  isOpen: boolean
  onToggle: (open: boolean) => void
  soundEffect?: boolean
}

export function LiaOnToggleButton({ isOpen, onToggle, soundEffect = false }: LiaOnToggleButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (soundEffect && !isOpen) {
      // Play "TSSS..." sound effect when opening
      const audio = new Audio("/sounds/tsss.mp3")
      audio.play().catch(() => {
        // Silently fail if audio doesn't load
      })
    }
    onToggle(!isOpen)
  }

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group touch-manipulation"
      aria-label="Chat com LIA - Assistente Virtual"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative flex items-center gap-2 sm:gap-3 bg-[#F5EB06] hover:bg-[#23376D] px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group min-h-[56px] sm:min-h-[60px]">
        <motion.div
          className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center ring-2 ring-white/30 shrink-0"
          animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="liaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5EB06" />
                <stop offset="100%" stopColor="#23376D" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#liaGradient)" />
            <circle cx="35" cy="42" r="4" fill="white" />
            <circle cx="65" cy="42" r="4" fill="white" />
            <path d="M 30 55 Q 50 70 70 55" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path
              d="M 20 35 Q 20 15 50 15 Q 80 15 80 35"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Online indicator with pulse animation */}
          <motion.div
            className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <div className="hidden xs:flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div className="flex flex-col min-w-0">
            <span className="text-[#23376D] group-hover:text-white font-bold text-sm sm:text-base leading-tight transition-colors whitespace-nowrap">
              LIA
            </span>
            <span className="text-[#23376D]/80 group-hover:text-white/90 text-[10px] sm:text-[11px] leading-tight transition-colors whitespace-nowrap">
              Assistente IA
            </span>
          </div>

          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 160 160"
            className="sm:w-[22px] sm:h-[22px] shrink-0"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <circle
              cx="80"
              cy="80"
              r="55"
              fill="none"
              stroke="currentColor"
              strokeWidth="26"
              className="text-[#23376D] group-hover:text-white transition-colors"
            />
            <circle
              cx="80"
              cy="80"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="26"
              className="text-[#23376D]/50 group-hover:text-white/50 transition-colors"
            />
          </motion.svg>
        </div>

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#23376D] group-hover:text-white sm:w-5 sm:h-5 transition-colors shrink-0"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      </div>
    </motion.button>
  )
}
