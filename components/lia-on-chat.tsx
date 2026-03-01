"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import { LiaOnToggleButton } from "./lia-on-toggle-button"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function LiaOnChat() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Oi 👋, tudo bem?\n\nEu sou a Lia, a assistente inteligente da DryOn 💛\n\nPosso te ajudar a encontrar seu desodorante ideal, tirar dúvidas ou mostrar novidades.\n\nPor onde quer começar?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showRestartOptions, setShowRestartOptions] = useState(false)
  const [showFollowUpQuestion, setShowFollowUpQuestion] = useState(false)
  const [showInitialOptions, setShowInitialOptions] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [waitingForResponse, setWaitingForResponse] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isChatOpen])

  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (waitingForResponse && retryCount < 2) {
      retryTimeoutRef.current = setTimeout(() => {
        console.log("[v0] Retry attempt:", retryCount + 1)
        setRetryCount((prev) => prev + 1)

        const reminderMessage =
          retryCount === 0
            ? "Ainda está aí? 😊 Estou aqui para te ajudar!"
            : "Oi! Percebo que você pode estar ocupado. Quando puder, estou à disposição! 💛"

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: reminderMessage,
          },
        ])
      }, 8000)
    }

    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [waitingForResponse, retryCount])

  const resetConversation = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Oi 👋, tudo bem?\n\nEu sou a Lia, a assistente inteligente da DryOn 💛\n\nPosso te ajudar a encontrar seu desodorante ideal, tirar dúvidas ou mostrar novidades.\n\nPor onde quer começar?",
      },
    ])
    setInputValue("")
    setShowRestartOptions(false)
    setShowFollowUpQuestion(false)
    setShowInitialOptions(false)
    setRetryCount(0)
    setWaitingForResponse(false)
  }

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = { role: "user", content }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)
    setShowRestartOptions(false)
    setShowFollowUpQuestion(false)
    setShowInitialOptions(false)
    setWaitingForResponse(false)
    setRetryCount(0)

    if (inputRef.current) {
      inputRef.current.blur()
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) throw new Error("Failed to send message")

      const data = await response.json()
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      }
      setMessages((prev) => [...prev, assistantMessage])

      const completionKeywords = [
        "foi um prazer",
        "conte comigo",
        "estou aqui",
        "precisar de mim",
        "qualquer dúvida",
        "até logo",
        "até mais",
        "tchau",
        "obrigad",
        "fico à disposição",
        "disponível",
        "pode contar",
        "espero ter ajudado",
        "ajudei",
      ]

      const messageContent = data.message.toLowerCase()
      const hasCompletionIndicator = completionKeywords.some((keyword) => messageContent.includes(keyword))

      if (hasCompletionIndicator && messages.length > 2) {
        setTimeout(() => {
          setShowFollowUpQuestion(true)
          setWaitingForResponse(true)
        }, 1500)
      }
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Acho que meu modo ON piscou por um segundo 😅 Pode repetir?",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickAction = (action: string) => {
    sendMessage(action)
  }

  const handleFollowUpYes = () => {
    setShowFollowUpQuestion(false)
    setShowInitialOptions(true)
    setWaitingForResponse(false)
    setRetryCount(0)
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Ótimo! Como posso te ajudar agora? 💛",
      },
    ])
  }

  const handleFollowUpNo = () => {
    setShowFollowUpQuestion(false)
    setWaitingForResponse(false)
    setRetryCount(0)
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Que bom ter te ajudado! Até a próxima! 👋💛",
      },
    ])
    setTimeout(() => {
      setIsChatOpen(false)
    }, 2000)
  }

  return (
    <>
      <LiaOnToggleButton isOpen={isChatOpen} onToggle={setIsChatOpen} soundEffect={true} />

      <AnimatePresence>
        {isChatOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChatOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed bottom-0 left-0 right-0 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[440px] sm:max-w-[calc(100vw-3rem)] h-[100dvh] sm:h-[680px] sm:max-h-[calc(100vh-8rem)] bg-white sm:rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              <div className="bg-[#23376D] p-4 sm:p-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F5EB06] flex items-center justify-center ring-2 ring-white/50 shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="liaGradientPopup" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F5EB06" />
                          <stop offset="100%" stopColor="#23376D" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="48" fill="url(#liaGradientPopup)" />
                      <circle cx="35" cy="42" r="4" fill="white" />
                      <circle cx="65" cy="42" r="4" fill="white" />
                      <path
                        d="M 30 55 Q 50 70 70 55"
                        stroke="white"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
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
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-lg sm:text-xl text-balance">LIA ON</h3>
                    <p className="text-white/90 text-xs sm:text-sm">Assistente DryOn</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2.5 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation active:scale-95"
                  aria-label="Fechar chat"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-[#E8E5DC]/20 overscroll-contain">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`${
                        message.role === "assistant"
                          ? "bg-[#23376D] text-white rounded-2xl rounded-tl-none"
                          : "bg-[#E8E5DC] text-[#23376D] rounded-2xl rounded-tr-none"
                      } px-4 py-3 max-w-[85%] shadow-sm`}
                    >
                      <p className="text-[15px] sm:text-sm whitespace-pre-line leading-relaxed text-pretty">
                        {message.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {(messages.length === 1 || showInitialOptions) && !showFollowUpQuestion && (
                  <div className="space-y-2.5 mt-4">
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      onClick={() => handleQuickAction("Qual DryOn combina comigo?")}
                      className="w-full bg-[#F5EB06] text-[#23376D] px-4 py-3.5 rounded-xl font-medium text-[15px] sm:text-sm text-left hover:bg-[#F5EB06]/90 transition-all shadow-sm hover:shadow-md active:scale-[0.98] min-h-[52px] touch-manipulation"
                    >
                      💛 Qual DryOn combina comigo?
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={() => handleQuickAction("Falar com o time DryOn")}
                      className="w-full bg-[#F5EB06] text-[#23376D] px-4 py-3.5 rounded-xl font-medium text-[15px] sm:text-sm text-left hover:bg-[#F5EB06]/90 transition-all shadow-sm hover:shadow-md active:scale-[0.98] min-h-[52px] touch-manipulation"
                    >
                      💬 Falar com o time DryOn
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => handleQuickAction("Dúvidas sobre produtos")}
                      className="w-full bg-[#F5EB06] text-[#23376D] px-4 py-3.5 rounded-xl font-medium text-[15px] sm:text-sm text-left hover:bg-[#F5EB06]/90 transition-all shadow-sm hover:shadow-md active:scale-[0.98] min-h-[52px] touch-manipulation"
                    >
                      ❓ Dúvidas sobre produtos
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => handleQuickAction("Enviar uma sugestão")}
                      className="w-full bg-[#F5EB06] text-[#23376D] px-4 py-3.5 rounded-xl font-medium text-[15px] sm:text-sm text-left hover:bg-[#F5EB06]/90 transition-all shadow-sm hover:shadow-md active:scale-[0.98] min-h-[52px] touch-manipulation"
                    >
                      💡 Enviar uma sugestão
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      onClick={() => handleQuickAction("Registrar uma reclamação")}
                      className="w-full bg-[#F5EB06] text-[#23376D] px-4 py-3.5 rounded-xl font-medium text-[15px] sm:text-sm text-left hover:bg-[#F5EB06]/90 transition-all shadow-sm hover:shadow-md active:scale-[0.98] min-h-[52px] touch-manipulation"
                    >
                      ⚠️ Registrar uma reclamação
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      onClick={() => handleQuickAction("Informações para fornecedores")}
                      className="w-full bg-[#F5EB06] text-[#23376D] px-4 py-3.5 rounded-xl font-medium text-[15px] sm:text-sm text-left hover:bg-[#F5EB06]/90 transition-all shadow-sm hover:shadow-md active:scale-[0.98] min-h-[52px] touch-manipulation"
                    >
                      🏷️ Informações para fornecedores
                    </motion.button>
                  </div>
                )}

                {showFollowUpQuestion && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 space-y-3"
                  >
                    <div className="bg-gradient-to-r from-[#F5EB06] to-yellow-300 text-[#23376D] px-5 py-4 rounded-2xl shadow-md border border-[#23376D]/10">
                      <p className="font-bold text-base mb-2 text-balance">Posso te ajudar com mais alguma coisa?</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleFollowUpYes}
                        className="bg-[#23376D] text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-[#23376D]/90 transition-all shadow-md hover:shadow-lg active:scale-95 min-h-[60px] touch-manipulation flex items-center justify-center"
                      >
                        <span>Sim</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleFollowUpNo}
                        className="bg-[#E8E5DC] text-[#23376D] px-6 py-4 rounded-xl font-bold text-base hover:bg-[#E8E5DC]/80 transition-all shadow-md hover:shadow-lg active:scale-95 min-h-[60px] touch-manipulation flex items-center justify-center"
                      >
                        <span>Não</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {isLoading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start mb-4">
                    <div className="bg-[#23376D] text-white rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 sm:p-5 bg-white border-t border-gray-100 shrink-0 safe-area-bottom">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage(inputValue)
                  }}
                  className="flex gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-3.5 rounded-full border-2 border-[#23376D]/20 focus:border-[#F5EB06] focus:outline-none text-base disabled:opacity-50 transition-colors touch-manipulation"
                    style={{ fontSize: "16px" }}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-[#F5EB06] text-[#23376D] p-3.5 rounded-full hover:bg-[#F5EB06]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[52px] min-h-[52px] flex items-center justify-center shadow-sm hover:shadow-md active:scale-95 touch-manipulation shrink-0"
                    aria-label="Enviar mensagem"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
