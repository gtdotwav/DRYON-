"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedToggleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function AnimatedToggleButton({ children, onClick, className = "" }: AnimatedToggleButtonProps) {
  const [isOn, setIsOn] = useState(true)

  const handleClick = () => {
    setIsOn(!isOn)
    onClick?.()
  }

  return (
    <button onClick={handleClick} className={`relative inline-flex items-center gap-3 ${className}`}>
      {/* Toggle Switch Animation */}
      <motion.div className="relative inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256" className="w-12 h-6">
          <defs>
            <path
              id="donut-toggle"
              d="M352,128 m-84,0 a84,84 0 1,0 168,0 a84,84 0 1,0 -168,0 M352,128 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
              fillRule="evenodd"
            />
          </defs>

          {/* Track */}
          <motion.rect
            x="8"
            y="8"
            width="496"
            height="240"
            rx="120"
            ry="120"
            fill="none"
            stroke="#23376D"
            strokeWidth="16"
            animate={{
              fill: isOn ? "rgba(35, 55, 109, 0.1)" : "rgba(35, 55, 109, 0.05)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Toggle Circle (Donut) */}
          <motion.g
            animate={{
              x: isOn ? 0 : -192,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <use href="#donut-toggle" fill="#23376D" />
          </motion.g>
        </svg>
      </motion.div>

      {children}
    </button>
  )
}
