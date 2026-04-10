import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lato, Bebas_Neue } from "next/font/google"
import "./globals.css"

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dryon.com.br"),
  title: "DryOn — Você no modo ON",
  description:
    "Desodorantes DryOn: proteção descomplicada para brasileiros excelentes. Pertencimento, Cuidado e Performance.",
  keywords: ["DryOn", "desodorante", "antitranspirante", "96h", "vitamina E", "Brasil"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dryon.com.br",
    siteName: "DryOn",
    title: "DryOn — Você no modo ON",
    description: "Proteção, cuidado e performance no seu dia.",
    images: [
      {
        url: "/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "DryOn — Você no modo ON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DryOn — Você no modo ON",
    description: "Proteção, cuidado e performance.",
    images: ["/og/og-cover.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#23376D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${lato.variable} ${bebasNeue.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preload" as="image" href="/og/og-cover.jpg" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          html { visibility: visible; opacity: 1; }
          body { visibility: visible; opacity: 1; }
        `,
          }}
        />
      </head>
      <body className="font-lato bg-white text-slate-900 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
