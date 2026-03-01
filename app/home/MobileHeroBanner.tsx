"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, memo, useRef } from "react"

const BANNERS = [
  { type: "image" as const, src: "/images/futebol-banner-mobile.png", alt: "Futebol no Modo ON - DryOn Patrocinador Oficial do Campeonato Carioca e Mineiro 2026" },
  { type: "image" as const, src: "/images/pinkpwsd.png", alt: "Livre, Leve, ON - DryOn Pink Powder" },
  {
    type: "video" as const,
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/novo%20banner%20praia%20junior-8Mmfausx0JY3DROOL32lHS2QNkhbrB.mp4",
    src: "/images/modo-praia-mobile.png",
    alt: "Modo Praia ON - DryOn Natural Fresh",
  },
  { type: "image" as const, src: "/images/soc.png", alt: "Proteção e Hidratação - DryOn Soft Care" },
  { type: "image" as const, src: "/images/modotrabalho3.png", alt: "Modo Trabalho ON - DryOn Men Flow" },
  {
    type: "video" as const,
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/novo1%20%281%29-rtLNa8zyq14KLNfTf79Vd6j4exWHwC.mp4",
    src: "/images/modo-noitada-mobile.png",
    alt: "Modo Noitada ON - DryOn Invisible",
  },
  { type: "image" as const, src: "/images/sport-line-mobile.png", alt: "É Pra Viver? Tô On! - DryOn Sport" },
] as const

// Prevent hydration mismatches by only rendering after mount
const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

const IMAGE_INTERVAL = 3000

const Dot = memo(function Dot({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`h-2 rounded-full transition-[width,background] duration-300 ${
        active ? "bg-white w-8" : "bg-white/50 w-2"
      }`}
    />
  )
})

export default function MobileHeroBanner() {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map())
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const advanceSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % BANNERS.length)
  }, [])

  const scheduleNextSlide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    const currentBanner = BANNERS[current]

    if (currentBanner.type === "video") {
      return
    }

    // For images, schedule next slide after interval
    timeoutRef.current = setTimeout(advanceSlide, IMAGE_INTERVAL)
  }, [current, advanceSlide])

  useEffect(() => {
    if (document.hidden) return
    scheduleNextSlide()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, scheduleNextSlide])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === current) {
        video.currentTime = 0
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("[v0] Video autoplay prevented:", error)
          })
        }
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [current])

  const handleVideoEnded = useCallback(() => {
    advanceSlide()
  }, [advanceSlide])

  const setVideoRef = useCallback((index: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(index, el)
    } else {
      videoRefs.current.delete(index)
    }
  }, [])

  useEffect(() => {
    const next = (current + 1) % BANNERS.length
    const banner = BANNERS[next]
    if (banner.type === "image") {
      const img = new window.Image()
      img.src = banner.src
    }
  }, [current])

  const goTo = useCallback((i: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setCurrent(i)
  }, [])

  return (
    <section className="relative w-full -mb-1 md:hidden">
      <div className="relative w-full bg-gradient-to-br from-[#2B7A9A] to-[#1E5A7A]" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        {BANNERS.map((banner, i) => (
          <div
            key={banner.src}
            className={`${i === current ? "relative" : "absolute inset-0"} ${
              i === current ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
            }`}
            style={{ 
              transition: 'opacity 500ms ease-in-out',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              willChange: i === current ? 'opacity' : 'auto'
            }}
          >
            {banner.type === "video" ? (
              <video
                ref={(el) => setVideoRef(i, el)}
                src={banner.videoSrc}
                className="w-full h-auto object-cover"
                autoPlay
                muted
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                onEnded={handleVideoEnded}
                style={{
                  pointerEvents: "none",
                  width: "100%",
                  height: "auto",
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
            ) : (
              <Image
                src={banner.src || "/placeholder.svg"}
                alt={banner.alt}
                width={750}
                height={1200}
                priority={i === 0}
                loading={i < 2 ? "eager" : "lazy"}
                className="w-full h-auto"
                sizes="100vw"
                quality={80}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
            )}
          </div>
        ))}

        <nav className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {BANNERS.map((b, i) => (
            <Dot key={i} active={i === current} onClick={() => goTo(i)} label={b.alt} />
          ))}
        </nav>
      </div>

      {/* Wave Divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-px z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,20 C200,70 400,70 600,45 C800,20 1000,20 1200,50 L1200,120 L0,120 Z"
            fill="rgba(248,250,252,0.3)"
          />
          <path
            d="M0,35 C250,80 450,80 650,60 C850,40 1050,40 1200,65 L1200,120 L0,120 Z"
            fill="rgba(248,250,252,0.6)"
          />
          <path d="M0,50 C300,90 500,90 700,75 C900,60 1100,60 1200,75 L1200,120 L0,120 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
