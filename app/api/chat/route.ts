import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

const SYSTEM_PROMPT = `Você é a Lia, a assistente virtual inteligente da DryOn.

PERSONALIDADE E TOM:
- Tom humano, afetivo, próximo e otimista
- Linguagem natural, brasileira e autêntica
- Use frases curtas, diretas e acolhedoras
- Reforce os pilares da marca: Pertencimento, Cuidado e Performance
- Expressões típicas DryOn: "Tô ON 💛", "Feito pra render", "Proteção que acompanha seu ritmo"

PRODUTOS E LINHAS DRYON:
1. Hidratação Avançada → Com Vitamina E, cuidado diário e proteção suave
2. Proteção Intensiva → Longa duração de 72h, para quem precisa de performance
3. Sport Extreme → Performance máxima com 96h de proteção, para quem treina pesado
4. Invisible → Proteção discreta sem manchas, perfeito para qualquer roupa

TECNOLOGIA 96H:
- Fórmula exclusiva DryOn que garante proteção contínua por até 96 horas
- Combina ingredientes ativos que bloqueiam odor e controlam transpiração
- Testado dermatologicamente para máxima eficácia

SUAS FUNÇÕES:
1. Ajudar a escolher o DryOn ideal baseado no estilo de vida
2. Explicar produtos, tecnologia e benefícios
3. Responder dúvidas sobre a marca
4. Engajar com conteúdos (eBooks, quiz, etc)
5. Encaminhar para contato humano quando necessário

INFORMAÇÕES DE CONTATO DRYON:
- WhatsApp: 0800-0004580
- E-mail SAC: sac@axlfarma.com
- E-mail RH (Envio de Currículo): RH-DP@axlfarma.com

INSTRUÇÕES:
- Seja empática e genuína
- Use emojis com moderação (💛 💪 😊)
- Mantenha respostas concisas (2-4 frases)
- Se não souber algo, seja honesta e ofereça ajuda do time
- Após 2 tentativas sem solução, ofereça contato via WhatsApp: 0800-0004580 ou e-mail: sac@axlfarma.com
- Sempre forneça as informações de contato quando o usuário solicitar falar com atendimento humano
- Quando o assunto for sobre TRABALHE CONOSCO, ENVIO DE CURRÍCULO, VAGAS, OPORTUNIDADES DE EMPREGO ou CARREIRA, forneça o e-mail: RH-DP@axlfarma.com
- IMPORTANTE: Ao finalizar um atendimento completo, SEMPRE termine suas respostas com frases como "Foi um prazer te ajudar!" ou "Fico à disposição para qualquer dúvida!" para indicar o fim natural da conversa

FORMATAÇÃO:
- NUNCA use asteriscos (**) ou qualquer formatação markdown
- Escreva texto simples e limpo, sem símbolos de formatação
- Use apenas emojis e texto corrido`

const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 500

export async function POST(request: NextRequest) {
  // Strip any non-printable/invisible characters that may have been pasted into Vercel env
  const apiKey = (process.env.ANTHROPIC_API_KEY || "").replace(/[^a-zA-Z0-9\-_]/g, "")
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY not configured")
    return NextResponse.json(
      { message: "Serviço temporariamente indisponível." },
      { status: 503 },
    )
  }

  console.log("API key length:", apiKey.length)

  let body: { messages?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: "Mensagem inválida." }, { status: 400 })
  }

  const { messages } = body
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ message: "Mensagem inválida." }, { status: 400 })
  }

  if (messages.length > MAX_MESSAGES) {
    return NextResponse.json(
      { message: "Conversa muito longa. Por favor, inicie uma nova conversa." },
      { status: 400 },
    )
  }

  const sanitizedMessages = messages
    .filter((m: { role?: string; content?: string }) => m.role && m.content)
    .map((m: { role: string; content: string }) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: String(m.content).slice(0, MAX_MESSAGE_LENGTH),
    }))

  const requestBody = JSON.stringify({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    system: SYSTEM_PROMPT,
    messages: sanitizedMessages,
  })

  try {
    const response = await globalThis.fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      }),
      body: requestBody,
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error("Anthropic API error " + response.status + ": " + errorBody)

      if (response.status === 429) {
        return NextResponse.json(
          { message: "A Lia está temporariamente indisponível. Tente novamente em alguns minutos 💛" },
          { status: 503 },
        )
      }

      // Temporary debug info — remove after fixing
      return NextResponse.json(
        { message: "Acho que meu modo ON piscou por um segundo 😅 Pode repetir?", _debug: { status: response.status, error: errorBody.slice(0, 200), keyLen: apiKey.length } },
        { status: 500 },
      )
    }

    const data = await response.json()
    const message = data.content?.[0]?.text

    if (!message) {
      console.error("No text in response: " + JSON.stringify(data).slice(0, 300))
      return NextResponse.json(
        { message: "Acho que meu modo ON piscou por um segundo 😅 Pode repetir?" },
        { status: 500 },
      )
    }

    return NextResponse.json({ message })
  } catch (error) {
    const msg = error instanceof Error ? error.name + ": " + error.message : String(error)
    console.error("Chat fetch error: " + msg)
    return NextResponse.json(
      { message: "Acho que meu modo ON piscou por um segundo 😅 Pode repetir?", _debug: { caught: msg } },
      { status: 500 },
    )
  }
}
