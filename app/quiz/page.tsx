import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiz - DryOn",
  description: "Descubra qual linha DryOn é perfeita para você.",
}

export const dynamic = "force-static"

export default function QuizPlaceholder() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-10 space-y-6">
      <h1 className="text-4xl md:text-5xl font-black text-[#23376D]" style={{ fontFamily: "var(--font-bebas)" }}>
        Quiz DryOn
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl" style={{ fontFamily: "var(--font-lato)" }}>
        Em breve, um quiz para indicar a melhor linha para você.
      </p>
      <div className="bg-gradient-to-br from-[#E8E5DC] to-[#B8B6A2]/30 rounded-3xl p-10 max-w-2xl">
        <p className="text-gray-600 mb-4" style={{ fontFamily: "var(--font-lato)" }}>
          Nosso quiz interativo está sendo desenvolvido para ajudar você a encontrar o produto DryOn perfeito para seu
          estilo de vida.
        </p>
        <a
          href="/home#quiz"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#23376D] text-white px-6 py-3 font-bold hover:opacity-90 transition-all"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          Voltar para Home
        </a>
      </div>
    </main>
  )
}
