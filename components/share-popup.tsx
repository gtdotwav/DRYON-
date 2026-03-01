"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Copy, Mail, Facebook, Instagram, Twitter, MessageCircle, Music2 } from "lucide-react"
import { useEffect } from "react"

interface SharePopupProps {
  onClose: () => void
}

export function SharePopup({ onClose }: SharePopupProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100001] flex items-center justify-center p-4"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, type: "spring", damping: 25 }}
          className="relative w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden bg-card border border-border/50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full"
            aria-label="Fechar"
          >
            <X size={20} className="text-foreground" />
          </button>

          <div className="p-6 pb-4 border-b border-border/30">
            <h3 className="text-2xl font-bold text-primary mb-2">Compartilhar</h3>
            <p className="text-sm text-muted-foreground">Escolha onde deseja compartilhar</p>
          </div>

          <div className="p-6 grid grid-cols-3 gap-4">
            <button
              onClick={() => {
                const text = encodeURIComponent("Confira esta dica DryOn!")
                const url = encodeURIComponent(window.location.href)
                window.open(`https://wa.me/?text=${text}%20${url}`, "_blank")
                onClose()
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <span className="text-xs font-semibold text-foreground">WhatsApp</span>
            </button>

            <button
              onClick={() => {
                window.location.href = "/home"
                onClose()
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 flex items-center justify-center transition-colors">
                <Instagram className="w-7 h-7 text-pink-500" />
              </div>
              <span className="text-xs font-semibold text-foreground">Instagram</span>
            </button>

            <button
              onClick={() => {
                window.location.href = "/home"
                onClose()
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#1877F2]/10 group-hover:bg-[#1877F2]/20 flex items-center justify-center transition-colors">
                <Facebook className="w-7 h-7 text-[#1877F2]" />
              </div>
              <span className="text-xs font-semibold text-foreground">Facebook</span>
            </button>

            <button
              onClick={() => {
                window.location.href = "/home"
                onClose()
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                <Twitter className="w-7 h-7 text-black" />
              </div>
              <span className="text-xs font-semibold text-foreground">Twitter</span>
            </button>

            <button
              onClick={() => {
                window.open("https://tiktok.com/@dryon", "_blank")
                onClose()
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                <Music2 className="w-7 h-7 text-black" />
              </div>
              <span className="text-xs font-semibold text-foreground">TikTok</span>
            </button>

            <button
              onClick={() => {
                const subject = encodeURIComponent("Confira DryOn!")
                const body = encodeURIComponent(`Olá! Confira os produtos DryOn: ${window.location.href}`)
                window.open(`mailto:?subject=${subject}&body=${body}`, "_blank")
                onClose()
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#EA4335]/10 group-hover:bg-[#EA4335]/20 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-[#EA4335]" />
              </div>
              <span className="text-xs font-semibold text-foreground">Email</span>
            </button>
          </div>

          <div className="p-6 pt-4 border-t border-border/30">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                onClose()
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              <Copy className="w-5 h-5" />
              Copiar Link
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
