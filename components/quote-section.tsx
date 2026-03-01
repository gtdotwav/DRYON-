"use client"

import type React from "react"

interface QuoteSectionProps {
  subtitle?: string
  quotes?: Array<{
    text: string
    author: string
  }>
  icon?: React.ReactNode
}

export function QuoteSection({
  subtitle = "as lembranças do dia a dia devem nos manter ON",
  quotes = [
    {
      text: "Percebi que cuidar de mim é a forma mais bonita de agradecer por quem eu sou.",
      author: "Ana",
    },
    {
      text: "Nada brilha mais do que a tranquilidade de estar em paz.",
      author: "Renata",
    },
  ],
  icon,
}: QuoteSectionProps) {
  return (
    null
  )
}
