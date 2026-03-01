import { type NextRequest, NextResponse } from "next/server"

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

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
  try {
    if (!OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY not configured. Env keys available:", Object.keys(process.env).filter(k => k.includes("OPENAI")).join(", ") || "none")
      return NextResponse.json(
        { message: "Serviço temporariamente indisponível." },
        { status: 503 },
      )
    }

    const body = await request.json()
    const { messages } = body

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { message: "Mensagem inválida." },
        { status: 400 },
      )
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

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          ...sanitizedMessages,
        ],
        temperature: 0.8,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error(`OpenAI API error ${response.status}: ${errorBody}`)

      if (response.status === 429) {
        return NextResponse.json(
          { message: "A Lia está temporariamente indisponível. Tente novamente em alguns minutos 💛" },
          { status: 503 },
        )
      }

      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const message = data.choices?.[0]?.message?.content

    return NextResponse.json({ message })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { message: "Acho que meu modo ON piscou por um segundo 😅 Pode repetir?" },
      { status: 500 },
    )
  }
}
