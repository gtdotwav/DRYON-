"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"

interface ChatbotPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatbotPopup({ isOpen, onClose }: ChatbotPopupProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [message, setMessage] = useState("")

  const menuOptions = [
    { id: 1, text: "Dúvidas sobre produtos", icon: "🛍️" },
    { id: 2, text: "Dar uma sugestão", icon: "💡" },
    { id: 3, text: "Fazer uma reclamação", icon: "📝" },
    { id: 4, text: "Quero ser um revendedor", icon: "🤝" },
    { id: 5, text: "Quero ser um fornecedor", icon: "📦" },
    { id: 6, text: "Outros assuntos", icon: "💬" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 right-4 left-4 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[420px] sm:max-w-[calc(100vw-3rem)] h-[calc(100vh-2rem)] sm:h-[640px] sm:max-h-[calc(100vh-8rem)] bg-white rounded-2xl sm:rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center ring-2 ring-white/50">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="liaGradientPopup" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-primary)" />
                        <stop offset="100%" stopColor="var(--color-accent)" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#liaGradientPopup)" />
                    <circle cx="35" cy="42" r="4" fill="white" />
                    <circle cx="65" cy="42" r="4" fill="white" />
                    <path d="M 30 55 Q 50 70 70 55" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path
                      d="M 20 35 Q 20 15 50 15 Q 80 15 80 35"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <motion.div
                    className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">LIA</h3>
                  <p className="text-white/90 text-[10px] sm:text-xs">Assistente Virtual IA</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-2 sm:p-2 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Fechar chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-gray-50">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none p-4 sm:p-5 shadow-sm mb-4 sm:mb-5"
              >
                <p className="text-gray-800 leading-relaxed text-sm text-pretty">
                  Que ótimo ter você conosco! 💙
                  <br />
                  <br />
                  Diz pra mim o que você precisa em poucas <strong>palavras</strong> ou escolha o{" "}
                  <strong>número</strong> de uma das opções:
                </p>
              </motion.div>

              <div className="space-y-2 sm:space-y-2.5">
                {menuOptions.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-200 flex items-center gap-2 sm:gap-3 min-h-[48px] ${
                      selectedOption === option.id
                        ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg scale-[1.02]"
                        : "bg-white hover:bg-gray-50 text-gray-800 shadow-sm hover:shadow-md active:scale-[0.98]"
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{option.icon}</span>
                    <span className="font-medium text-xs sm:text-sm">
                      {option.id}. {option.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && message.trim() && setMessage("")}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-sm"
                />
                <button
                  onClick={() => message.trim() && setMessage("")}
                  disabled={!message.trim()}
                  className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white p-2.5 sm:p-3 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Enviar mensagem"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
