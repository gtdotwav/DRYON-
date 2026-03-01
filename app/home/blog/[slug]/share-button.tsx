"use client"

import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareButtonProps {
  title: string
  subtitle: string
}

export function ShareButton({ title, subtitle }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: subtitle,
        url: window.location.href,
      })
    }
  }

  return (
    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent" onClick={handleShare}>
      <Share2 className="w-4 h-4 mr-2" />
      Compartilhar
    </Button>
  )
}
