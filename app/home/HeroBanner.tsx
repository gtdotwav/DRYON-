"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useIsVisible } from "@/hooks/use-intersection-observer"

const banners = [
  {
    id: 1,
    image: "/images/softcareban.png",
    alt: "Proteção e Hidratação o dia tôdo - DryOn Soft Care enriquecido com Vitamina E e 0% álcool",
  },
  {
    id: 2,
    image: "/images/pink-20powder.png",
    alt: "Livre, Leve, On - DryOn Pink Powder com 72h de proteção intensiva",
  },
  {
    id: 3,
    image: "/images/golden-banner.png",
    alt: "Você On no Modo - DryOn Pink Powder para estilo de vida ativo",
  },
  {
    id: 4,
    image: "/images/modo-trabalho.png",
    alt: "Modo On Rotina - DryOn Men Flow com 72h de proteção intensiva",
  },
  {
    id: 5,
    image: "/images/modo-noitada-desktop.png",
    alt: "Modo On Noitada - DryOn Invisible com 72h de proteção intensiva para festas e eventos",
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const bannerRef = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(bannerRef, { threshold: 0.1 })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 3000) // Increased from 5s to 6s for better performance

    return () => clearInterval(interval)
  }, [isAutoPlaying, isVisible])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section ref={bannerRef} className="relative w-full mt-20 -mb-1 hidden md:block">
      <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={banners[currentSlide].image || "/placeholder.svg"}
                alt={banners[currentSlide].alt}
                fill
                priority={currentSlide === 0}
                className="object-cover object-center"
                quality={100}
                sizes="100vw"
                loading={currentSlide === 0 ? "eager" : "lazy"}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 opacity-0"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-md" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 opacity-0"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-md" />
        </button>

        <div className="absolute bottom-8 md:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-10 shadow-lg"
                  : "bg-white/50 backdrop-blur-sm w-2.5 hover:bg-white/70"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-px z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] md:h-[90px] lg:h-[110px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="50%" stopColor="rgba(248,250,252,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
            </linearGradient>

            <linearGradient id="heroWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(248,250,252,0.55)" />
              <stop offset="50%" stopColor="rgba(241,245,249,0.75)" />
              <stop offset="100%" stopColor="rgba(248,250,252,0.55)" />
            </linearGradient>

            <filter id="heroWaveShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.12" />
            </filter>

            <linearGradient id="heroWaveGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="50%" stopColor="rgba(248,250,252,0.6)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
            </linearGradient>
          </defs>

          {isMobile ? (
            <motion.path
              d="M0,20 C200,70 400,70 600,45 C800,20 1000,20 1200,50 L1200,120 L0,120 Z"
              fill="url(#heroWaveGradientMobile)"
              opacity="0.5"
              animate={isVisible ? { y: [0, -3, 0] } : { y: 0 }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ) : (
            <motion.path
              d="M0,15 C180,75 380,75 580,50 C780,25 980,25 1200,55 L1200,120 L0,120 Z"
              fill="url(#heroWaveGradient1)"
              opacity="0.4"
              animate={isVisible ? { y: [5, 0, 5] } : { y: 5 }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          )}

          {isMobile ? (
            <motion.path
              d="M0,35 C250,80 450,80 650,60 C850,40 1050,40 1200,65 L1200,120 L0,120 Z"
              fill="url(#heroWaveGradient2)"
              opacity="0.7"
              filter="url(#heroWaveShadow)"
              animate={isVisible ? { y: [2, -2, 2] } : { y: 2 }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
          ) : (
            <motion.path
              d="M0,35 C250,90 450,90 650,65 C850,40 1050,40 1200,70 L1200,120 L0,120 Z"
              fill="url(#heroWaveGradient2)"
              opacity="0.65"
              filter="url(#heroWaveShadow)"
              animate={isVisible ? { y: [3, -2, 3] } : { y: 3 }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          )}

          {isMobile ? (
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
          ) : (
            <motion.path
              d="M0,55 C300,100 500,100 700,80 C900,60 1100,60 1200,80 L1200,120 L0,120 Z"
              fill="#F8FAFC"
              animate={isVisible ? { y: [2, -3, 2] } : { y: 2 }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          )}
        </svg>
      </div>
    </section>
  )
}
