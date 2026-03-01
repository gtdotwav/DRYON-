"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" aria-hidden="true">
      {/* Circle 1 - Top Left */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#23376D]/20 to-[#2563eb]/20 blur-3xl"
        style={{ top: "10%", left: "5%" }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Circle 2 - Top Right */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#F5EB06]/10 to-[#fef08a]/10 blur-3xl"
        style={{ top: "50%", right: "10%" }}
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Circle 3 - Bottom Left */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-[#2563eb]/15 to-[#3b82f6]/15 blur-3xl"
        style={{ bottom: "15%", left: "15%" }}
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Circle 4 - Center Right - New */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#23376D]/10 to-[#F5EB06]/10 blur-3xl"
        style={{ top: "30%", right: "5%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Circle 5 - Bottom Right - New */}
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-[#2563eb]/12 to-[#23376D]/12 blur-3xl"
        style={{ bottom: "5%", right: "20%" }}
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
