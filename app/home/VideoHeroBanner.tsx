"use client"

import { useState, useEffect, useCallback, useRef, memo } from "react"
import useSWR from "swr"

interface Video {
  url: string
  filename: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

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

export default function VideoHeroBanner() {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const { data } = useSWR<{ videos: Video[] }>("/api/videos/list", fetcher)

  const videos = data?.videos || []

  // Handle video end - go to next
  const handleVideoEnd = useCallback(() => {
    setCurrent((i) => (i + 1) % (videos.length || 1))
  }, [videos.length])

  // Play current video when it changes
  useEffect(() => {
    if (videos.length === 0) return

    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === current) {
          video.currentTime = 0
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    })
  }, [current, videos.length])

  const goTo = useCallback((i: number) => setCurrent(i), [])

  if (videos.length === 0) {
    return null
  }

  return (
    <section className="relative w-full -mb-1 md:hidden">
      <div className="relative w-full bg-gradient-to-br from-[#2B7A9A] to-[#1E5A7A]">
        {videos.map((video, i) => (
          <div
            key={video.url}
            className={`${i === current ? "relative" : "absolute inset-0"} transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el
              }}
              src={video.url}
              muted
              playsInline
              autoPlay={i === 0}
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              preload="auto"
              webkit-playsinline="true"
              x-webkit-airplay="deny"
              style={{
                pointerEvents: "none",
                width: "100%",
                height: "auto",
              }}
              className="w-full h-auto [&::-webkit-media-controls]:!hidden [&::-webkit-media-controls-panel]:!hidden [&::-webkit-media-controls-play-button]:!hidden [&::-webkit-media-controls-start-playback-button]:!hidden"
              onEnded={handleVideoEnd}
            />
          </div>
        ))}

        <nav className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {videos.map((v, i) => (
            <Dot key={i} active={i === current} onClick={() => goTo(i)} label={`Video ${i + 1}`} />
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
