"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"

// Removed unused imports from existing code:
// import { createPortal } from "react-dom"
// import {
//   Droplets,
//   Shield,
//   Leaf,
//   Sparkles,
//   X,
//   ArrowRight,
//   Copy,
//   Mail,
//   Facebook,
//   Instagram,
//   Twitter,
//   MessageCircle,
//   Music2,
// } from "lucide-react"

// Removed unused props and state from existing code:
// interface HorizontalScrollTipsProps {
//   onProductLineClick?: (productIndex: number) => void
// }

export function HorizontalScrollTips() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  // Removed unused state from existing code:
  // const [selectedTip, setSelectedTip] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  // Removed unused state from existing code:
  // const [showSharePopup, setShowSharePopup] = useState(false)
  // Removed unused ref from existing code:
  // const popupRef = useRef<HTMLDivElement>(null)
  // Removed unused state from existing code:
  // const [isMounted, setIsMounted] = useState(false)

  // Removed unused data from existing code:
  // const tips = [...]
  // const tipToProductLineMap = [...]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 320 : 420
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    updateScrollButtons()
    // Removed setIsMounted(true) from existing code
    window.addEventListener("resize", checkMobile)
    window.addEventListener("resize", updateScrollButtons)
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [])

  // Removed unused useEffect from existing code:
  // useEffect(() => {
  //   const handleEscape = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       setSelectedTip(null)
  //       setShowSharePopup(false)
  //     }
  //   }
  //   window.addEventListener("keydown", handleEscape)
  //   return () => window.removeEventListener("keydown", handleEscape)
  // }, [])

  // Removed unused useEffect from existing code:
  // useEffect(() => {
  //   if (selectedTip !== null) {
  //     // Simpler scroll lock
  //     document.body.style.overflow = "hidden"

  //     // Reset scroll position of modal
  //     setTimeout(() => {
  //       if (popupRef.current) {
  //         popupRef.current.scrollTop = 0
  //         const contentDiv = popupRef.current.querySelector(".popup-content-scroll")
  //         if (contentDiv) {
  //           (contentDiv as HTMLElement).scrollTop = 0
  //         }
  //       }
  //     }, 50)

  //     return () => {
  //       document.body.style.overflow = ""
  //     }
  //   }
  // }, [selectedTip])

  // Removed unused handleShare function from existing code
  // const handleShare = async () => { ... }

  // Removed unused renderTipModal function from existing code
  // const renderTipModal = () => { ... }

  // Removed unused renderSharePopup function from existing code
  // const renderSharePopup = () => { ... }

  return (
    <>
      <section
        className="relative sm:py-16 overflow-hidden rounded-3xl lg:py-6 py-12 pt-12 pb-0 mb-11"
        style={{
          background: "var(--color-white)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8 lg:py-10">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-sm" style={{ background: "var(--color-secondary)" }} />
                <div className="w-2 h-2 rounded-sm" style={{ background: "var(--color-secondary)" }} />
              </div>
              <p className="text-sm uppercase tracking-wider font-medium text-muted-foreground">DICAS E INFORMAÇÕES</p>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-bebas)] text-balance"
              style={{
                color: "var(--color-primary)",
              }}
            >
              Fique por dentro
            </h2>
          </div>

          <div className="relative">
            {canScrollLeft && !isMobile && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-3 sm:-translate-x-5 rounded-lg p-3 transition-all duration-300 hover:scale-110 shadow-xl focus:outline-none focus:ring-2"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-secondary-foreground)",
                }}
                aria-label="Dica anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {canScrollRight && !isMobile && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-3 sm:translate-x-5 rounded-lg p-3 transition-all duration-300 hover:scale-110 shadow-xl focus:outline-none focus:ring-2"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-secondary-foreground)",
                }}
                aria-label="Próxima dica"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              onScroll={updateScrollButtons}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-1 px-1"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {blogPosts.map((post, index) => {
                const Icon = post.icon
                return (
                  <Link
                    key={index}
                    href={`/home/blog/${post.slug}`}
                    className="group flex-shrink-0 w-[300px] sm:w-[340px] md:w-[400px] rounded-2xl overflow-hidden snap-start transition-all duration-300 hover:shadow-2xl relative block"
                    style={{
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={isMobile ? {} : { scale: 1.02 }}
                      className="h-full text-[rgba(34,55,109,1)] bg-primary"
                    >
                      <div
                        className="relative h-48 sm:h-52 md:h-56 overflow-hidden"
                        style={{
                          background:
                            index % 3 === 0
                              ? "linear-gradient(135deg, var(--color-neutral-light) 0%, var(--color-muted-light) 100%)"
                              : index % 3 === 1
                                ? "linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-accent) 100%)"
                                : "linear-gradient(135deg, var(--color-secondary-light) 0%, var(--color-secondary) 100%)",
                        }}
                      >
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="p-5 sm:p-6 md:p-8" style={{ background: "var(--color-primary)" }}>
                        <p className="text-sm mb-3 sm:mb-4 font-medium" style={{ color: "var(--color-muted-light)" }}>
                          {post.date}
                        </p>

                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight text-balance">
                          {post.title}
                        </h3>

                        <p className="text-sm sm:text-base text-slate-200 mb-4 sm:mb-6 line-clamp-2 leading-relaxed text-pretty">
                          {post.subtitle}
                        </p>

                        <div
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all duration-300 group-hover:gap-3"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          Saiba mais
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center px-4">
            <p className="text-xs text-muted-foreground sm:text-base">
              {isMobile
                ? `${blogPosts.length} artigos • Deslize para ver mais`
                : `Deslize para ver mais dicas • ${blogPosts.length} artigos disponíveis`}
            </p>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Tip Detail Modal - Portal to body */}
      {/* Removed portal for modals as they are no longer used */}
      {/* {isMounted && createPortal( ... )} */}

      {/* Share Popup - Portal to body */}
      {/* Removed portal for modals as they are no longer used */}
      {/* {isMounted && createPortal( ... )} */}
    </>
  )
}
