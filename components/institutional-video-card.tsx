'use client'

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export function InstitutionalVideoCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Vídeo Institucional</CardTitle>
        <CardDescription>
          Conheça mais sobre a DryOn
        </CardDescription>
      </CardHeader>
      <div className="px-6 pb-6">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/KIrcRxDIdQU"
            title="DryOn Vídeo Institucional"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </Card>
  )
}
