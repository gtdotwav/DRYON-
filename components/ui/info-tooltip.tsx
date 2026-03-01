"use client"

import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface InfoTooltipProps {
  title: string
  description: string
  details?: string[]
}

export function InfoTooltip({ title, description, details }: InfoTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <button
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#23376D]/10 hover:bg-[#23376D]/20 transition-colors ml-2"
            aria-label={`Informações sobre ${title}`}
          >
            <Info className="w-3 h-3 text-[#23376D]" />
          </button>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          sideOffset={8}
          className="max-w-sm w-[320px] p-6 bg-white border-2 border-[#23376D] shadow-2xl z-[9999] rounded-2xl"
        >
          <div className="space-y-3">
            <h4 className="font-black text-[#23376D] text-base tracking-tight">{title}</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
            {details && details.length > 0 && (
              <ul className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                {details.map((detail, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#F5EB06] mt-0.5 font-bold">•</span>
                    <span className="flex-1">{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
