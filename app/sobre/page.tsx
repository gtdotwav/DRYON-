"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import AllPharmaFooter from "@/components/AllPharmaFooter"

export default function SobrePage() {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const emailRoutes: Record<string, string> = {
      support: "sac@axlfarma.com",
      partnerships: "loginmkt01@axlfarma.com",
      representative: "furibb@axlfarma.com",
      feedback: "sac@axlfarma.com",
      careers: "RH-DP@axlfarma.com",
      other: "sac@axlfarma.com",
    }

    const recipientEmail = emailRoutes[formData.subject] || "sac@axlfarma.com"

    try {
      console.log("[v0] Sending message to:", recipientEmail, formData)

      // Simulated submission
      setTimeout(() => {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
        setIsSubmitting(false)
        setFormData({ subject: "", name: "", email: "", message: "" })
      }, 2000)
    } catch (error) {
      alert("Erro ao enviar mensagem. Tente novamente.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Existing About Section */}
      <div className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-700">
              <div>
                <h1 className="mb-3">
                  <img
                    src="/images/design-mode/Logotipo%20Allpharma%20PNG(2).png"
                    alt="Allpharma"
                    className="h-16 md:h-20 lg:h-24 w-auto"
                  />
                </h1>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#6F9D39] to-[#7FAD4A] rounded-full" />
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#6F9D39]/10 text-[#552819] px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm border border-[#6F9D39]/20">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Quem Somos
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#552819] leading-tight text-balance">
                  Uma nova indústria,
                  <br />
                  <span className="bg-gradient-to-r from-[#6F9D39] to-[#7FAD4A] bg-clip-text text-transparent">
                    mas com raízes profundas
                  </span>
                </h2>
              </div>

              {/* Main Description */}
              <p className="text-xl text-gray-700 leading-relaxed font-light text-pretty">
                Por mais de três décadas, marcas líderes nasceram, histórias foram construídas e uma relação sólida de
                respeito com clientes e consumidores foi cultivada, sempre fazendo o simples de forma extraordinária.
                Esse é o legado da Carta Fabril. Agora, é tempo de escrever um novo capítulo, com o mesmo compromisso, a
                mesma paixão e uma visão ainda mais ousada sobre o futuro.
              </p>

              <div className="relative border-l-4 border-[#6F9D39] bg-gradient-to-r from-gray-50 to-white p-8 rounded-r-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-[#6F9D39] rounded-full" />
                <p className="text-lg text-gray-700 leading-relaxed text-pretty">
                  A ALLPHARMA é uma empresa movida pela inovação, pela simplicidade e pelo respeito às pessoas. Mais
                  preparada do que nunca para um novo desafio: competir em um mercado dinâmico, com novas formas de
                  pensar, comunicar e fazer negócios. Com um marketing moderno e execução voltada ao sell-out.
                </p>
              </div>

              {/* Nossos Valores */}
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-[#552819] mb-6 text-balance">Nossos Valores</h3>
                <div className="space-y-4">
                  {/* Foco na Satisfação do Cliente e Consumidores - Brown */}
                  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#552819]/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#552819] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#552819] mb-2 text-balance">
                          Foco na Satisfação do Cliente e Consumidores
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                          Trabalhamos incansavelmente para superar suas expectativas em todas as áreas do nosso
                          relacionamento.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pessoas são o nosso maior patrimônio - Green */}
                  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#6F9D39]/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6F9D39] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#552819] mb-2 text-balance">
                          Pessoas são o nosso maior patrimônio
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                          Valorizamos e desenvolvemos pessoas, porque elas são a essência e força que impulsiona o
                          sucesso da nossa empresa.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Simplicidade - Brown */}
                  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#552819]/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#552819] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#552819] mb-2 text-balance">Simplicidade</h4>
                        <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                          Simplicidade, Humildade, Comunicação e Cooperação, nos conduzem às soluções mais eficientes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Inovar para Transformar - Green */}
                  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#6F9D39]/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6F9D39] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#552819] mb-2 text-balance">Inovar para Transformar</h4>
                        <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                          Assumimos o firme propósito de entregar produtos de excelência, sustentados por inovação
                          constante em tecnologia, processos e gestão.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Excelência 360º - Brown */}
                  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#552819]/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#552819] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#552819] mb-2 text-balance">Excelência 360º</h4>
                        <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                          Trabalhamos buscando sempre a perfeição em cada detalhe, em cada etapa, em cada entrega.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Integridade, Diversidade e Sustentabilidade - Green */}
                  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#6F9D39]/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6F9D39] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#552819] mb-2 text-balance">
                          Integridade, Diversidade e Sustentabilidade
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                          Agimos com ética, transparência e respeito, promovendo diversidade e práticas sustentáveis em
                          todas as nossas operações.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-24 animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-gray-200 hover:shadow-3xl transition-shadow duration-300">
                <div className="relative aspect-video">
                  <Image
                    src="/images/design-mode/Foto%20f%C3%A1brica.jpg"
                    alt="Foto aérea da fábrica Allpharma"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">Nossa estrutura e compromisso com a excelência</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-[#6F9D39]/10 text-[#552819] px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm border border-[#6F9D39]/20 mb-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Fale Conosco
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#552819] leading-tight mb-4">
              Entre em Contato com a{" "}
              <span className="bg-gradient-to-r from-[#6F9D39] to-[#7FAD4A] bg-clip-text text-transparent">
                Equipe Allpharma
              </span>
            </h2>
            <p className="text-lg text-gray-600 mx-auto">
              Estamos prontos para ouvir você. Escolha o assunto e envie sua mensagem.
            </p>
          </div>

          <form
            className="relative rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md bg-gradient-to-br from-white/90 to-white/70 border border-gray-200/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-6">
              <label htmlFor="subject-select" className="block text-sm font-bold text-[#552819] mb-2">
                Assunto
              </label>
              <select
                id="subject-select"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#6F9D39] focus:ring-2 focus:ring-[#6F9D39]/20 focus:outline-none transition-all text-gray-900 font-medium shadow-sm"
              >
                <option value="support">💬 ATENDIMENTO AO CONSUMIDOR</option>
                      <option value="partnerships">🤝 QUERO COMPRAR</option>
                      <option value="representative">🏷️ QUERO VENDER</option>
                      <option value="feedback">⭐ TRABALHE CONOSCO</option>
                      <option value="careers">💼 CONTAS A PAGAR</option>
                      <option value="careers">💼 CONTAS A RECEBER</option>
                      <option value="careers">🤝 PARCERIAS E COLLABS</option>
                      <option value="careers">🗣️ ⁠FEEDBACKS E SUGESTÕES</option>
            </select>          
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name-input" className="block text-sm font-bold text-[#552819] mb-2">
                  Nome
                </label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#6F9D39] focus:ring-2 focus:ring-[#6F9D39]/20 focus:outline-none transition-all text-gray-900 placeholder:text-gray-500 font-medium shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email-input" className="block text-sm font-bold text-[#552819] mb-2">
                  E-mail
                </label>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#6F9D39] focus:ring-2 focus:ring-[#6F9D39]/20 focus:outline-none transition-all text-gray-900 placeholder:text-gray-500 font-medium shadow-sm"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message-input" className="block text-sm font-bold text-[#552819] mb-2">
                Mensagem
              </label>
              <textarea
                id="message-input"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Escreva sua mensagem aqui..."
                rows={6}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[#6F9D39] focus:ring-2 focus:ring-[#6F9D39]/20 focus:outline-none transition-all resize-none text-gray-900 placeholder:text-gray-500 font-medium shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#6F9D39] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#552819] transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : (
                "Enviar Mensagem"
              )}
            </button>
          </form>
        </div>
      </div>
      <AllPharmaFooter />
    </div>
  )
}
