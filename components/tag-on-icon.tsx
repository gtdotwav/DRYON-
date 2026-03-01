"use client"

import { motion } from "framer-motion"

interface TagOnIconProps {
  className?: string
  animated?: boolean
}

export function TagOnIcon({ className = "w-6 h-6", animated = false }: TagOnIconProps) {
  if (animated) {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 256"
        className={className}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <defs>
          <path
            id="donut"
            d="M352,128 m-84,0 a84,84 0 1,0 168,0 a84,84 0 1,0 -168,0 M352,128 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
            fill="#23376D"
            fillRule="evenodd"
          />
        </defs>
        <rect x="8" y="8" width="496" height="240" rx="120" ry="120" fill="none" stroke="#23376D" strokeWidth="16" />
        <motion.use
          href="#donut"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256" className={className}>
      <defs>
        <path
          id="donut-static"
          d="M352,128 m-84,0 a84,84 0 1,0 168,0 a84,84 0 1,0 -168,0 M352,128 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
          fill="#23376D"
          fillRule="evenodd"
        />
      </defs>
      <rect x="8" y="8" width="496" height="240" rx="120" ry="120" fill="none" stroke="#23376D" strokeWidth="16" />
      <use href="#donut-static" />
    </svg>
  )
}
