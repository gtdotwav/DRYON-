"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { useIsVisible } from "@/hooks/use-intersection-observer"

const BANNERS = [
  {
    src: "/images/modo-praia-mobile.png",
    alt: "Modo Praia ON - DryOn Natural Fresh com 72h de proteção intensiva",
  },
  {
    src: "/images/pinkpwsd.png",
    alt: "Livre, Leve, ON - DryOn Pink Powder com 72h de proteção intensiva",
  },
  {
    src: "/images/soc.png",
    alt: "Proteção e Hidratação o Dia Todo - DryOn Soft Care enriquecido com Vitamina E",
  },
  {
    src: "/images/modo-20trabalho.png",
    alt: "Modo Trabalho ON - DryOn Men Flow com 72h de proteção intensiva",
  },
  {
    src: "/images/modo-noitada-mobile.png",
    alt: "Modo Noitada ON - DryOn Invisible com 72h de proteção intensiva para festas e eventos",
  },
] as const

const CAROUSEL_INTERVAL = 5000

export default function MobileHeroBanner() {
  const bannerRef = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(bannerRef, { threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, CAROUSEL_INTERVAL)
    return () => clearInterval(timer)
  }, [nextSlide])

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-full -mb-1 block md:hidden"
      aria-label="Banner principal mobile"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden bg-gradient-to-br from-[#2B7A9A] to-[#1E5A7A]"
      >
        {/* Carousel Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={BANNERS[currentIndex].src || "/placeholder.svg"}
              alt={BANNERS[currentIndex].alt}
              fill
              priority={currentIndex === 0}
              className="object-cover object-top md:object-contain md:object-center"
              quality={100}
              sizes="100vw"
              loading={currentIndex === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2 py-0"
          role="tablist"
          aria-label="Navegação do carrossel"
        >
          {BANNERS.map((banner, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir para ${banner.alt}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-8 shadow-lg" : "bg-white/50 w-2 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Wave Divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-px z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mobileWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(248,250,252,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
            </linearGradient>

            <linearGradient id="mobileWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(248,250,252,0.6)" />
              <stop offset="50%" stopColor="rgba(241,245,249,0.8)" />
              <stop offset="100%" stopColor="rgba(248,250,252,0.6)" />
            </linearGradient>

            <filter id="mobileWaveShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Wave Layer 1 */}
          <motion.path
            d="M0,20 C200,70 400,70 600,45 C800,20 1000,20 1200,50 L1200,120 L0,120 Z"
            fill="url(#mobileWaveGradient1)"
            opacity="0.5"
            animate={isVisible ? { y: [0, -3, 0] } : { y: 0 }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Wave Layer 2 */}
          <motion.path
            d="M0,35 C250,80 450,80 650,60 C850,40 1050,40 1200,65 L1200,120 L0,120 Z"
            fill="url(#mobileWaveGradient2)"
            opacity="0.7"
            filter="url(#mobileWaveShadow)"
            animate={isVisible ? { y: [2, -2, 2] } : { y: 2 }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Wave Layer 3 */}
          <motion.path
            d="M0,50 C300,90 500,90 700,75 C900,60 1100,60 1200,75 L1200,120 L0,120 Z"
            fill="#F8FAFC"
            animate={isVisible ? { y: [1, -2, 1] } : { y: 1 }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
        </svg>
      </div>
    </section>
  )
}
