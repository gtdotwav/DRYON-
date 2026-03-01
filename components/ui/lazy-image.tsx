"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
}

export function LazyImage({
  src,
  alt,
  width = 500,
  height = 500,
  className = "",
  priority = false,
  quality = 100,
  sizes = "100vw",
  fill = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "200px",
      },
    )

    const element = document.getElementById(`lazy-${src}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [src, priority])

  return (
    <div id={`lazy-${src}`} className={`relative ${className}`}>
      {isInView && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-light/40 to-neutral/20 animate-pulse rounded" />
          )}
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            quality={quality}
            sizes={sizes}
            loading={priority ? "eager" : "lazy"}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  )
}
