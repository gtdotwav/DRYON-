"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Youtube, Facebook, Music, Mail } from "lucide-react"
import Image from "next/image"
import { Typewriter } from "@/components/ui/typewriter"

const trackClick = (linkName: string, href: string) => {
  // Analytics tracking
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "click", {
      event_category: "links",
      event_label: linkName,
      value: href,
    })
  }
  console.log(`Link clicked: ${linkName} -> ${href}`)
}

const links = [
  {
    id: "website",
    title: "Site Oficial",
    description: "www.dryon.com.br",
    href: "https://www.dryon.com.br",
    icon: Globe,
  },
  {
    id: "youtube",
    title: "YouTube",
    description: "@dryon.br1",
    href: "https://www.youtube.com/@dryon.br1",
    icon: Youtube,
  },
  {
    id: "tiktok",
    title: "TikTok",
    description: "@dryon.com.br",
    href: "https://www.tiktok.com/@dryon.com.br",
    icon: Music,
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Siga nossa página",
    href: "https://www.facebook.com/dryon.com.br/",
    icon: Facebook,
  },
  {
    id: "sac",
    title: "SAC",
    description: "sac@axlfarma.com.br",
    href: "mailto:sac@axlfarma.com.br",
    icon: Mail,
  },
]

const sloganModes = [
  "compartilhamento",
  "trabalho",
  "aventura",
  "esporte",
  "família",
  "viagem",
  "festa",
  "estilo",
  "conforto",
  "proteção",
  "inovação",
  "segurança",
  "liberdade",
  "performance",
  "qualidade",
  "durabilidade",
  "tecnologia",
  "design",
  "sustentabilidade",
  "confiança",
]

export default function LinksPage() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 sm:py-20">
        <motion.div
          className="flex flex-col items-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-white/5 backdrop-blur-sm">
              <Image
                src="/images/design-mode/Captura_de_Tela_2025-11-07_a%CC%80s_12.44.54-removebg-preview%20%281%29(1).png"
                alt="DryOn Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain p-4 bg-primary-foreground"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            className="text-slate-300 text-lg sm:text-xl text-center font-sans mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Proteção descomplicada para quem faz o dia render!
          </motion.p>

          <motion.div
            className="relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="px-6 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
              <p className="text-2xl sm:text-3xl font-semibold text-white text-center font-sans">
                <span className="text-slate-300">Modo "</span>
                <Typewriter
                  text={sloganModes}
                  speed={70}
                  className="text-blue-400 font-bold font-sans"
                  waitTime={2500}
                  deleteSpeed={40}
                  cursorChar=""
                  loop={true}
                />
                <span className="text-slate-300">" ON!</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon
            const isPrimary = link.isPrimary

            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => trackClick(link.id, link.href)}
                >
                  <AnimatePresence>
                    {hoveredLink === link.id && (
                      <motion.div
                        className={`absolute -inset-0.5 rounded-2xl blur-md ${
                          isPrimary ? "bg-blue-500/30" : "bg-white/10"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.div
                    className={`relative flex items-center justify-between px-6 py-5 rounded-2xl transition-all duration-300 ${
                      isPrimary
                        ? "bg-blue-600 shadow-lg"
                        : "bg-white/10 backdrop-blur-sm border border-white/20 shadow-md"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: isPrimary ? "rgb(37 99 235)" : "rgba(255, 255, 255, 0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 ${
                          isPrimary ? "bg-white/20" : "bg-white/10"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`font-semibold font-sans ${isPrimary ? "text-white text-lg" : "text-white"} truncate`}
                        >
                          {link.title}
                        </div>
                        {link.description && (
                          <div
                            className={`text-sm font-sans ${isPrimary ? "text-blue-100" : "text-slate-300"} truncate mt-0.5`}
                          >
                            {link.description}
                          </div>
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="shrink-0 ml-3"
                      animate={{
                        x: hoveredLink === link.id ? 3 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <svg
                        className={`w-5 h-5 ${isPrimary ? "text-white" : "text-slate-300"}`}
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </a>
              </motion.div>
            )
          })}
        </div>

        <motion.footer
          className="mt-16 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-slate-400 text-sm mb-3 font-sans">© 2025 DryOn. Todos os direitos reservados.</p>
          <a
            href="/privacy"
            className="text-slate-400 hover:text-white transition-colors text-sm underline underline-offset-4 font-sans"
          >
            Política de Privacidade
          </a>
        </motion.footer>
      </div>
    </div>
  )
}
