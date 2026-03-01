import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato - DryOn",
  description: "Entre em contato com a DryOn. Estamos aqui para ajudar.",
}

export const dynamic = "force-static"

export default function ContatoPage() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-10 space-y-6">
      <h1
        className="text-4xl md:text-5xl font-black text-[#23376D] text-balance"
        style={{ fontFamily: "var(--font-bebas)" }}
      >
        Fale com a DryOn
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-pretty" style={{ fontFamily: "var(--font-lato)" }}>
        Lançamento em breve — deixe seu contato para falarmos com você.
      </p>
      <form className="grid md:grid-cols-2 gap-4 max-w-4xl">
        <input
          aria-label="Nome"
          name="nome"
          placeholder="Seu nome"
          className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#F5EB06] transition-all"
          style={{ fontFamily: "var(--font-lato)" }}
          required
        />
        <input
          aria-label="E-mail"
          name="email"
          type="email"
          placeholder="Seu e-mail"
          className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#F5EB06] transition-all"
          style={{ fontFamily: "var(--font-lato)" }}
          required
        />
        <input
          aria-label="WhatsApp"
          name="whatsapp"
          placeholder="(xx) xxxxx-xxxx"
          className="rounded-xl border border-gray-300 p-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#F5EB06] transition-all"
          style={{ fontFamily: "var(--font-lato)" }}
        />
        <button
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#23376D] text-white px-6 py-3 font-bold hover:opacity-90 transition-all md:col-span-2"
          style={{ fontFamily: "var(--font-lato)" }}
          type="submit"
        >
          Quero ser avisado
        </button>
      </form>
    </main>
  )
}
