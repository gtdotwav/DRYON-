"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = "0px", freezeOnceVisible = false }: UseIntersectionObserverOptions = {},
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const frozen = useRef(false)

  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen.current || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry)

      if (entry.isIntersecting && freezeOnceVisible) {
        frozen.current = true
        observer.disconnect()
      }
    }, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible])

  return entry
}

export function useIsVisible(elementRef: RefObject<Element>, options?: UseIntersectionObserverOptions): boolean {
  const entry = useIntersectionObserver(elementRef, options)
  return entry?.isIntersecting ?? false
}
