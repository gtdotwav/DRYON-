"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState, useEffect, memo, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Droplets, Shield, Leaf, Sparkles, ArrowRight, Clock, Calendar, Menu } from "lucide-react"
import { useAnimations } from "@/hooks/useAnimations"
import { useNotifications } from "@/components/ui/notifications"
import { ScrollToTop, ProgressBar } from "@/components/ui/scroll-enhancements"
import { TagOnIcon } from "@/components/tag-on-icon"
import { LiaOnChat } from "@/components/lia-on-chat"
import { Button } from "@/components/ui/button"

// Import new components from updates
import { WaveDivider } from "@/components/ui/wave-divider"
import { FloatingShapes } from "@/components/ui/floating-shapes"
import { HorizontalScrollTips } from "@/components/ui/horizontal-scroll-tips"
import MobileHeroBanner from "./MobileHeroBanner"

const ConditionalMotion = ({
  children,
  shouldAnimate,
  ...props
}: {
  children: React.ReactNode
  shouldAnimate: boolean
  [key: string]: any
}) => {
  if (!shouldAnimate) {
    return <div className={props.className}>{children}</div>
  }
  return <motion.div {...props}>{children}</motion.div>
}

const InfoPopup = ({
  isOpen,
  setIsOpen,
  shouldAnimate,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  shouldAnimate: boolean
}) => {
  if (!isOpen) return null

  const CheckIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 flex-shrink-0"
    >
      <rect x="4" y="18" width="56" height="28" rx="14" stroke="var(--color-primary)" strokeWidth="4" fill="none" />
      <circle cx="44" cy="32" r="10" fill="var(--color-primary)" />
      <circle cx="44" cy="32" r="3.5" fill="white" />
    </svg>
  )

  const contentClass = shouldAnimate
    ? "bg-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative pointer-events-auto animate-in fade-in zoom-in-95 duration-300"
    : "bg-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative pointer-events-auto"

  const backdropClass = shouldAnimate
    ? "fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-300"
    : "fixed inset-0 bg-black/50 z-50"

  return (
    <>
      <div className={backdropClass} onClick={() => setIsOpen(false)} />

      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
        <div onClick={(e) => e.stopPropagation()} className={contentClass}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2 text-balance">
                Definição de Branding
              </h3>
              <p className="text-muted-foreground text-pretty">
                Branding é o processo de criar e gerenciar a identidade de uma marca, incluindo nome, logo, design,
                mensagem e experiência do cliente.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-3 text-balance">
                Elementos Principais:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <strong className="text-foreground">Identidade Visual:</strong>
                    <span className="text-muted-foreground"> Logo, cores, tipografia e elementos gráficos</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <strong className="text-foreground">Posicionamento:</strong>
                    <span className="text-muted-foreground"> Como a marca se diferencia no mercado</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <strong className="text-foreground">Personalidade:</strong>
                    <span className="text-muted-foreground"> Tom de voz, valores e características únicas</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <strong className="text-foreground">Experiência:</strong>
                    <span className="text-muted-foreground"> Todas as interações do cliente com a marca</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import HeroBanner from "./HeroBanner"
import Footer from "@/components/Footer"
import { OrgSchema } from "@/components/schema-org"
import { ProductBackground } from "@/components/product-background"
import { QuoteSection } from "@/components/quote-section"

const ProductCard = memo(
  ({
    product,
    index,
    lineCarousels,
    handleLineCarouselChange,
    onProductClick,
    shouldAnimate,
  }: {
    product: any
    index: number
    lineCarousels: { [key: number]: number }
    handleLineCarouselChange: (lineIndex: number, imageIndex: number) => void
    onProductClick: () => void
    shouldAnimate: boolean
  }) => {
    const Wrapper = shouldAnimate ? motion.div : "div"
    const animationProps = shouldAnimate
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "100px" },
          transition: { delay: index * 0.03, duration: 0.3 },
        }
      : {}

    const hasValidImage = (img: string | undefined | null): boolean => Boolean(img && img.trim() !== "")

    const imageClasses = "h-auto object-contain p-4 w-32 sm:w-36 lg:max-w-[180px] lg:w-32"
    const currentImageIndex = lineCarousels[index] || 0

    return (
      <Wrapper {...animationProps} className="group cursor-pointer h-full w-full" onClick={onProductClick}>
        <div className="bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-3 h-full flex flex-col">
          {/* IMAGEM */}
          <div className="relative aspect-[3/4] overflow-hidden flex items-center justify-center">
            {hasValidImage(product.protectionBadge) && (
              <div className="absolute top-4 right-4 z-20">
                <Image
                  src={product.protectionBadge || "/placeholder.svg"}
                  alt={`${product.protection} de proteção`}
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl bg-transparent rounded-sm"
                  priority
                />
              </div>
            )}

            {product.images.length > 1 ? (
              <div className="relative w-full h-full">
                {product.images.map(
                  (img: string, imgIndex: number) =>
                    hasValidImage(img) && (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                          currentImageIndex === imgIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${product.name} - Imagem ${imgIndex + 1}`}
                          width={600}
                          height={600}
                          className={imageClasses}
                          quality={100}
                          priority={index < 4}
                        />
                      </div>
                    ),
                )}
              </div>
            ) : (
              hasValidImage(product.images[0]) && (
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className={imageClasses}
                  quality={100}
                  priority={index < 4}
                />
              )
            )}

            {/* Indicadores do carrossel */}
            <div className="absolute bottom-1 left-0 right-0 flex justify-center z-20 gap-2.5">
              {product.images.map((_: any, imgIndex: number) => (
                <button
                  key={imgIndex}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleLineCarouselChange(index, imgIndex)
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-in-out md:hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 ${
                    currentImageIndex === imgIndex
                      ? "bg-[var(--color-primary)] w-10 shadow-lg"
                      : "bg-gray-300/60 w-2.5 md:hover:bg-gray-400/80"
                  }`}
                  aria-label={`Ver imagem ${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="p-6 lg:p-8 flex flex-col flex-1">
            {/* Header Section - Altura fixa no desktop */}
            <div className="lg:min-h-[140px] flex flex-col justify-start mb-0">
              <h3 className="text-4xl lg:text-2xl xl:text-2xl font-black text-[var(--color-primary)] font-heading leading-tight mb-3 text-center lg:line-clamp-2 tracking-wide text-balance">
                {product.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center lg:line-clamp-3 text-lg mt-0 font-normal text-pretty">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 border-b border-border/50 pb-6 mb-0">
              {product.claimings.slice(0, 2).map((claiming: any, idx: number) => (
                <div
                  key={idx}
                  className="flex-1 min-w-[calc(50%-0.375rem)] flex items-center justify-center rounded-xl p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                  title={claiming.alt}
                >
                  {hasValidImage(claiming.image) && (
                    <div className="relative w-24 h-24 sm:w-24 sm:h-24 flex items-center justify-center">
                      <Image
                        src={claiming.image || "/placeholder.svg"}
                        alt={claiming.alt}
                        width={96}
                        height={96}
                        quality={100}
                        priority
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - MT-AUTO empurra para baixo no desktop */}
            <div className="mt-auto pt-6 border-t border-border/30">
              <button
                className="relative w-full py-4 lg:py-5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent active:scale-[0.98] overflow-hidden group bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:bg-white/20 hover:shadow-[0_12px_40px_rgba(31,38,135,0.5)] hover:-translate-y-0.5 text-primary-light"
                aria-label={`Saiba mais sobre ${product.name}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Saiba Mais
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>

                {/* Efeito de hover animado */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  },
)

ProductCard.displayName = "ProductCard"

const CustomCheckbox = ({ id, checked, onChange }: { id: string; checked: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    className="relative w-20 h-11 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 rounded-full"
    aria-label={checked ? "Desmarcar" : "Marcar"}
    id={id}
  >
    <svg
      width="80"
      height="45"
      viewBox="0 0 80 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <rect
        x="2"
        y="2"
        width="76"
        height="41"
        rx="20.5"
        stroke="#23376D"
        strokeWidth="4"
        fill="none"
        className="transition-all duration-300"
      />
      <circle
        cx="55"
        cy="22.5"
        r="10"
        fill="none"
        stroke="#23376D"
        strokeWidth="6"
        className="transition-all duration-500 ease-out text-primary"
        style={{
          transform: checked ? "scale(1)" : "scale(0.9)",
          transformOrigin: "center",
        }}
      />
      {checked && (
        <circle
          cx="55"
          cy="22.5"
          r="4"
          fill="#23376D"
          className="animate-in fade-in zoom-in duration-300"
          style={{
            animation: "pulse 0.5s ease-out",
          }}
        />
      )}
    </svg>
  </button>
)

export default function BrandingPage() {
  const [isOn, setIsOn] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContatoDropdownOpen, setIsContatoDropdownOpen] = useState(false)
  const [productFilter, setProductFilter] = useState<"todos" | "masculino" | "feminino">("todos")
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])
  const [showPromoPopup, setShowPromoPopup] = useState(false)
  const [lineCarousels, setLineCarousels] = useState<{ [key: number]: number }>({})
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [popupImageIndex, setPopupImageIndex] = useState(0)
  const [selectedArticle, setSelectedArticle] = useState<{ setIndex: number; postIndex: number } | null>(null)
  const [showQuiz, setShowQuiz] = useState(true)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null)
  const [showCookiesBanner, setShowCookiesBanner] = useState(false)
  const [expandedClaimings, setExpandedClaimings] = useState<{ [key: number]: boolean }>({})
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [pillarsExpanded, setPillarsExpanded] = useState(false)
  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0)
  const [checkedProofs, setCheckedProofs] = useState<{ [key: string]: boolean[] }>({
    "0": [false, false, false],
    "1": [false, false, false],
    "2": [false, false, false],
    "3": [false, false, false],
  })
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const heroBanners = [
    {
      image: "/images/softcare150ml.png",
      alt: "DryOn Soft Care Hidratação Avançada com Vitamina E",
    },
    {
      image: "/images/pinkpowder150ml.png",
      alt: "DryOn Pink Powder - Livre, Leve, ON com 72h de proteção",
    },
    {
      image: "/images/dryon150ml.png",
      alt: "DryOn Soft Care - Feita no Brasil para brasileiros",
    },
    {
      image: "/images/tenis150ml.png",
      alt: "DryOn Men e SportFit - Pra Fazer o Jogo Render",
    },
    {
      image: "/images/rotinaon150ml.png",
      alt: "DryOn Men Invisible - Modo Rotina, ON",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.storage.com/golden2-T7r80zX1PpwAIKT6Iz8ST02GQLJFSd.png",
      alt: "DryOn Soft Care - Feita no Brasil, para brasileiros que fazem render",
    },
    {
      image: "/images/rotinaon150ml.png",
      alt: "DryOn Men Invisible - Modo Rotina, ON",
    },
  ]

  // Add shouldAnimate for useAnimations call
  const { shouldAnimate, fadeInUp, slideInLeft, slideInRight, scaleIn } = useAnimations()
  const { addNotification, NotificationContainer } = useNotifications()

  const blogPosts = [
    [
      {
        id: 1,
        title: "Entenda mais sobre a transpiração: por que suamos e como controlar o suor",
        category: "Dicas DryON",
        date: "15 Nov 2024",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
        excerpt:
          "Descubra por que suamos, o que causa o mau cheiro e como o desodorante DRYON oferece proteção e frescor duradouros.",
        content: {
          intro:
            "A transpiração é um mecanismo natural do corpo humano que tem uma função essencial: regular a temperatura corporal. Quando estamos expostos ao calor, praticamos atividades físicas ou vivemos situações de estresse, o corpo produz suor para se resfriar. Esse suor é formado por água e sais minerais, e é liberado pelas glândulas sudoríparas. Ao evaporar, ele ajuda o corpo a manter o equilíbrio térmico e a funcionar corretamente.",
          points: [
            {
              title: "Suor e mau cheiro: entenda a diferença",
              content:
                "Ao contrário do que muitos pensam, o suor não tem cheiro. O odor aparece quando ele entra em contato com bactérias presentes na pele, principalmente nas axilas. Essas bactérias decompõem substâncias do suor, gerando o cheiro característico que tanto incomoda. Por isso, o segredo para se manter fresco está em controlar a proliferação bacteriana — e é aqui que o DRYON Desodorante Aerossol se destaca. DRYON combina tecnologia antitranspirante e ação antibacteriana, oferecendo proteção duradoura contra o suor e o mau odor, sem agredir a pele.",
            },
            {
              title: "Por que algumas pessoas suam mais do que outras?",
              content:
                "A quantidade de suor pode variar bastante de pessoa para pessoa. Fatores como genética, metabolismo, alimentação, clima e até emoções influenciam diretamente. Em alguns casos, a transpiração pode ser excessiva — uma condição conhecida como hiperidrose. Nesses casos, é importante procurar orientação médica para identificar o tratamento adequado.",
            },
            {
              title: "Como controlar a transpiração no dia a dia",
              content:
                "Hidrate-se bem: Beber água ajuda o corpo a regular a temperatura. Use roupas leves e de algodão: Elas permitem que a pele respire melhor. Higiene é essencial: Banhos diários removem o suor e as bactérias. Escolha um bom desodorante: Prefira produtos com tecnologia antitranspirante e ação prolongada, como DRYON. DRYON foi desenvolvido com alta performance e toque seco, garantindo proteção por até 48 horas e uma sensação de frescor que acompanha você em todos os momentos.",
            },
          ],
          conclusion:
            "Transpirar é natural — mas o desconforto não precisa ser. Transpirar é sinal de que seu corpo está funcionando bem. Com o desodorante certo, você pode viver sua rotina com mais liberdade, confiança e bem-estar. Experimente DRYON e sinta na pele a diferença!",
        },
      },
    ],
    [],
  ]

  const quizQuestions = [
    {
      question: "Qual seu estilo de vida?",
      options: ["Ativo/Esportivo", "Profissional", "Casual", "Intenso"],
    },
    {
      question: "Qual sua principal preocupação?",
      options: ["Suor excessivo", "Odor", "Manchas na roupa", "Irritação na pele"],
    },
    {
      question: "Quando você mais precisa de proteção?",
      options: ["Durante exercícios", "No trabalho", "Em eventos sociais", "O dia todo"],
    },
    {
      question: "Qual tipo de aplicação você prefere?",
      options: ["Aerosol (secagem rápida)", "Stick (praticidade)", "Qualquer um"],
    },
    {
      question: "Qual sua prioridade em um desodorante?",
      options: ["Máxima proteção", "Cuidado com a pele", "Invisibilidade", "Performance esportiva"],
    },
    {
      question: "Com que frequência você pratica atividades físicas?",
      options: ["Diariamente", "3-4 vezes por semana", "Ocasionalmente", "Raramente"],
    },
  ]

  const pillarsData = [
    {
      icon: Droplets,
      title: "Cuidado Essencial",
      description:
        "Fórmulas com Vitamina E e toque seco que respeitam a pele. Testadas dermatologicamente para o cuidado diário.",
      proofs: ["Testado dermatologicamente", "Fórmula com Vitamina E", "Toque seco e não pegajoso"],
      delay: 0.1,
      detailedInfo: {
        intro:
          "Nossa linha de cuidado essencial foi desenvolvida pensando na saúde e bem-estar da sua pele, combinando ingredientes naturais com tecnologia avançada.",
        benefits: [
          "Hidratação profunda sem deixar resíduos",
          "Vitamina E antioxidante que protege contra radicais livres",
          "Textura leve que absorve rapidamente",
          "Adequado para todos os tipos de pele",
        ],
        howItWorks:
          "A fórmula exclusiva com Vitamina E penetra nas camadas da pele, proporcionando hidratação duradoura enquanto cria uma barreira protetora invisível. O toque seco garante conforto imediato após a aplicação.",
        certification:
          "Todos os produtos são testados dermatologicamente e aprovados pela ANVISA, garantindo segurança e eficácia comprovadas.",
      },
    },
    {
      icon: Shield,
      title: "Proteção Inteligente",
      description: "Tecnologia avançada que oferece proteção de longa duração sem comprometer o conforto da sua pele.",
      proofs: ["Proteção de até 96h", "Tecnologia anti-manchas", "Eficácia comprovada"],
      delay: 0.2,
      detailedInfo: {
        intro:
          "Nossa tecnologia de proteção inteligente adapta-se às necessidades da sua pele ao longo do dia, oferecendo defesa contínua contra odores e manchas.",
        benefits: [
          "Proteção prolongada de até 96 horas",
          "Sistema anti-manchas que preserva suas roupas",
          "Fórmula que se adapta ao pH da pele",
          "Controle eficaz sem bloquear os poros",
        ],
        howItWorks:
          "Micropartículas inteligentes criam uma camada protetora que neutraliza bactérias causadoras de odor, enquanto agentes anti-manchas previnem marks amareladas nas roupas. A fórmula respira com sua pele.",
        certification:
          "Eficácia comprovada em testes clínicos com mais de 500 voluntários, demonstrando proteção superior e conforto duradouro.",
      },
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Compromisso com práticas sustentáveis e embalagens recicláveis para um futuro melhor.",
      proofs: ["Embalagens 100% recicláveis", "Produção sustentável", "Compromisso ambiental"],
      delay: 0.3,
      detailedInfo: {
        intro:
          "Acreditamos que cuidar de você e do planeta andam juntos. Por isso, cada etapa da nossa produção é pensada para minimizar o impacto ambiental.",
        benefits: [
          "Redução de 40% no uso de plástico virgem",
          "Embalagens feitas com materiais reciclados",
          "Processo produtivo com energia renovável",
          "Programa de logística reversa ativo",
        ],
        howItWorks:
          "Utilizamos materiais reciclados pós-consumo em nossas embalagens e otimizamos o design para reduzir desperdício. Nossa fábrica opera com energia solar e eólica, reduzindo significativamente a pegada de carbono.",
        certification:
          "Certificados ISO 14001 e Selo Eu Reciclo, além de parceria com cooperativas de reciclagem em todo o Brasil.",
      },
    },
    {
      icon: Sparkles,
      title: "Inovação Constante",
      description:
        "Pesquisa contínua para desenvolver fórmulas cada vez mais eficazes e adaptadas às suas necessidades.",
      proofs: ["Pesquisa e desenvolvimento contínuo", "Fórmulas exclusivas", "Tecnologia de ponta"],
      delay: 0.4,
      detailedInfo: {
        intro:
          "Investimos continuamente em pesquisa e desenvolvimento para trazer as mais recentes inovações em cuidados pessoais, sempre ouvindo as necessidades dos nossos consumidores.",
        benefits: [
          "Centro de P&D com mais de 50 pesquisadores",
          "Parcerias com universidades brasileiras",
          "Lançamento de 3-5 inovações por ano",
          "Testes rigorosos de eficácia e segurança",
        ],
        howItWorks:
          "Nossa equipe de cientistas trabalha com tecnologias de ponta, desde nanotecnologia até biotecnologia, para criar fórmulas exclusivas. Cada produto passa por múltiplas fases de testes antes do lançamento.",
        certification:
          "Reconhecidos com prêmios de inovação no setor de cosméticos e higiene pessoal, incluindo o Prêmio ABIHPEC de Inovação 2023.",
      },
    },
  ]

  const valoresData = [
    {
      image: "/images/claimings/seguranca.png",
      title: "Segurança",
      description: "Fórmulas testadas dermatologicamente, que protegem sem causar irritações ou danos à pele.",
    },
    {
      image: "/images/claimings/qualidade.png",
      title: "Qualidade",
      description: "Desde a pesquisa ao desenvolvimento de produto e comunicação, colocamos excelência no que fazemos.",
    },
    {
      image: "/images/claimings/inovacao.png",
      title: "Inovação",
      description: "Buscamos ir além da concorrência, oferecendo multibenefícios em todos os produtos.",
    },
    {
      image: "/images/claimings/acessibilidade.png",
      title: "Acessibilidade",
      description:
        "Preços justos para que o consumidor não desembolse mais para ter eficácia e atributos adicionais de cuidado.",
    },
  ]

  const productLines = useMemo(
    () => [
      {
        name: "Hidratação Avançada",
        description: "O cuidado e proteção que a sua pele merece.",
        protection: "72h",
        protectionBadge: "/images/chatgpt-image-6-de-nov.png",
        category: "feminino" as const,
        claimings: [
          { image: "/images/claimings/vitamina-e.png", alt: "Vitamina E" },
          { image: "/images/claimings/nao-escurece-axila.svg", alt: "Não Escurece Axila" },
          { image: "/images/claimings/dermato.png", alt: "Dermatologicamente Testado" },
          { image: "/images/claimings/parabens-free.png", alt: "Paraben Free" },
        ],
        features: [
          "Axilas hidratadas, macias, cuidadas e protegidas o dia todo",
          "Fragrâncias delicadas",
          "Bloqueia suor e odor por até 72h",
          "Enriquecido com Vitamina E",
          "Embalagem + econômica (250ml)",
        ],
        detailedInfo:
          "A linha Hidratação Avançada foi desenvolvida especialmente para quem busca proteção eficaz sem abrir mão do cuidado com a pele. Com fórmula livre de álcool e enriquecida com ingredientes hidratantes, oferece 72h de proteção contínua mantendo a pele macia e saudável.",
        specifications: {
          Tipo: "Aerosol",
          Volume: "250ml",
          Duração: "72 horas",
          "Ingredientes ativos": "Complexo hidratante, Vitamina E",
          Testado: "Dermatologicamente",
          Indicação: "Todos os tipos de pele",
        },
        benefits: [
          "Proteção de longa duração sem ressecamento",
          "Fórmula enriquecida com vitaminas",
          "Não deixa a pele oleosa ou pegajosa",
          "Ideal para uso diário",
          "Fragrância suave e duradoura",
        ],
        reviews: [],
        images: ["/images/dryon-sensitive.png", "/images/dryon-mkp-softcare.png", "/images/dryon-mkp-mistyrose.png"],
      },
      {
        name: "Proteção Intensiva",
        description: "Sensação de frescor e fragrâncias marcantes.",
        protection: "72h",
        protectionBadge: "/images/chatgpt-image-6-de-nov.png",
        category: "masculino" as const,
        claimings: [
          { image: "/images/claimings/dermato.png", alt: "Dermatologicamente Testado" },
          { image: "/images/claimings/parabens-free.png", alt: "Paraben Free" },
          { image: "/images/claimings/zero-alcool.png", alt: "Zero Álcool Etílico" },
          { image: "/images/claimings/nao-mancha-roupas.png", alt: "Não Mancha Roupas" },
        ],
        features: [
          "Axilas protegidas, perfumadas e sensação de frescor",
          "Bloqueia suor e odor por até 72h",
          "Fragrâncias marcantes",
          "Embalagem + econômica (250ml)",
        ],
        detailedInfo:
          "Para quem não pode correr riscos, a linha Proteção Intensiva oferece a máxima segurança contra suor e odor. Desenvolvida com tecnologia avançada, garante 72h de proteção extrema, mesmo nas situações mais desafiadoras do dia a dia.",
        specifications: {
          Tipo: "Aerosol",
          Volume: "250ml",
          Duração: "72 horas",
          "Ingredientes ativos": "Complexo anti-transpirante avançado",
          Testado: "Dermatologicamente",
          Indicação: "Suor intenso",
        },
        benefits: [
          "Máxima proteção contra suor e odor",
          "Resistente a atividades intensas",
          "Secagem rápida",
          "Não mancha roupas claras",
          "Eficácia comprovada clinicamente",
        ],
        reviews: [],
        images: [
          "/images/dryon-mkp-natural.png",
          "/images/mkp-men-icefresh.png",
          "/images/dryon-mkp-lavanda.png",
          "/images/dryon-mkp-berry.png",
          "/images/dryon-mkp-pink.png",
          "/images/mkp-men-flow-20-281-29.png",
        ],
      },
      {
        name: "Invisible",
        description: "Não marca sua pele, nem suas roupas! Marca o seu estilo.",
        protection: "72h",
        protectionBadge: "/images/chatgpt-image-6-de-nov.png",
        category: "masculino" as const,
        claimings: [
          { image: "/images/claimings/zero-alcool.png", alt: "Zero Álcool Etílico" },
          { image: "/images/claimings/nao-mancha-roupas.png", alt: "Não Mancha Roupas" },
          { image: "/images/claimings/dermato.png", alt: "Dermatologicamente Testado" },
          { image: "/images/claimings/parabens-free.png", alt: "Paraben Free" },
        ],
        features: [
          "Axilas protegidas e roupas livres de manchas",
          "Bloqueia suor e odor por até 72h",
          "Fragrâncias suaves",
          "Embalagem + econômica (250ml)",
        ],
        detailedInfo:
          "A linha Invisible é perfeita para quem busca proteção discreta e eficaz. Com fórmula de secagem rápida e aplicação invisível, não deixa manchas nas roupas e oferece 72h de proteção sem comprometer seu visual.",
        specifications: {
          Tipo: "Aerosol",
          Volume: "250ml",
          Duração: "72 horas",
          "Ingredientes ativos": "Fórmula invisible avançada",
          Testado: "Dermatologicamente",
          Indicação: "Uso discreto",
        },
        benefits: [
          "Aplicação completamente invisível",
          "Não deixa resíduos nas roupas",
          "Secagem ultra rápida",
          "Proteção eficaz e discreta",
          "Ideal para roupas escuras e claras",
        ],
        reviews: [],
        images: ["/images/mkp-men-invisible.png", "/images/dryon-mkp-invisible.png"],
      },
      {
        name: "Sport",
        description: "Proteção que acompanha seu ritimo, na corrida, na bike, na academia...",
        protection: "96h",
        protectionBadge: "/images/claimings/96h.png",
        category: "masculino" as const,
        claimings: [
          { image: "/images/claimings/dermato.png", alt: "Dermatologicamente Testado" },
          { image: "/images/claimings/parabens-free.png", alt: "Paraben Free" },
          { image: "/images/claimings/zero-alcool.png", alt: "Zero Álcool Etílico" },
          { image: "/images/claimings/nao-mancha-roupas.png", alt: "Não Mancha Roupas" },
        ],
        features: [
          "Proteção extrema e segurança pra qualquer atividade",
          "Bloqueia suor e odor por até 96h",
          "Fragrâncias energizantes",
          "Embalagem + econômica (250ml)",
        ],
        detailedInfo:
          "A linha Sport foi criada para atletas e pessoas ativas que precisam de proteção superior durante atividades físicas intensas. Com tecnologia exclusiva, oferece até 96h de proteção, resistindo ao suor mais intenso sem ressecar a pele.",
        specifications: {
          Tipo: "Aerosol",
          Volume: "250ml",
          Duração: "96 horas",
          "Ingredientes ativos": "Complexo esportivo avançado",
          Testado: "Dermatologicamente",
          Indicação: "Atividades físicas intensas",
        },
        benefits: [
          "Proteção extra longa de 96 horas",
          "Resistente ao suor intenso",
          "Não resseca a pele durante exercícios",
          "Fragrância energizante",
          "Aprovado por atletas profissionais",
        ],
        reviews: [],
        images: ["/images/dryon-mkp-sportfit.png", "/images/mkp-men-4sport.png"],
      },
    ],
    [],
  )

  const productsSection = {
    title: {
      main: "Nossos",
      highlight: "Produtos",
    },
    description:
      "Cada linha desenvolvida cientificamente para atender suas necessidades específicas de proteção e cuidado",
  }

  const filteredProducts = useMemo(() => {
    if (productFilter === "todos") {
      return productLines
    }

    if (productFilter === "masculino") {
      return productLines
        .map((product) => {
          if (product.name === "Proteção Intensiva") {
            return {
              ...product,
              images: [product.images[1], product.images[5], product.images[1]],
            }
          }
          if (product.name === "Invisible") {
            return {
              ...product,
              images: [product.images[0]],
            }
          }
          if (product.name === "Sport") {
            return {
              ...product,
              images: [product.images[1]],
            }
          }
          return null
        })
        .filter((product): product is NonNullable<typeof product> => product !== null)
    }

    if (productFilter === "feminino") {
      return productLines.map((product) => {
        if (product.name === "Proteção Intensiva") {
          return {
            ...product,
            images: product.images.filter((_, idx) => idx !== 1 && idx !== 5),
          }
        }
        if (product.name === "Invisible") {
          return {
            ...product,
            images: product.images.filter((_, idx) => idx !== 0),
          }
        }
        if (product.name === "Sport") {
          return {
            ...product,
            images: product.images.filter((_, idx) => idx !== 1),
          }
        }
        return product
      })
    }

    return productLines
  }, [productFilter])

  useEffect(() => {
    setLineCarousels((prev) => {
      const newCarousels = { ...prev }
      productLines.forEach((product, index) => {
        const currentIndex = prev[index] || 0
        if (currentIndex >= product.images.length) {
          newCarousels[index] = 0
        }
      })
      return newCarousels
    })
  }, [productFilter])

  useEffect(() => {
    setMounted(true)
    const cookiesAccepted = localStorage.getItem("dryon-cookies-consent")
    if (!cookiesAccepted) {
      setShowCookiesBanner(true)
    }
  }, [])

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(interval)
  }, []) */

  useEffect(() => {
    const interval = setInterval(() => {
      setLineCarousels((prev) => {
        const newCarousels = { ...prev }
        productLines.forEach((line, lineIndex) => {
          if (line.images.length > 1) {
            newCarousels[lineIndex] = ((prev[lineIndex] || 0) + 1) % line.images.length
          }
        })
        return newCarousels
      })
    }, 5000) // Changed from 4000 to 5000ms for smoother transitions

    return () => clearInterval(interval)
  }, [productLines])

  useEffect(() => {
    if (selectedProduct !== null) {
      const interval = setInterval(() => {
        const product = productLines[selectedProduct]
        if (product.images.length > 1) {
          const maxImages = product.images.length
          setPopupImageIndex((prev) => (prev + 1) % maxImages)
        }
      }, 4500) // Changed from 3500 to 4500ms for smoother transitions
      return () => clearInterval(interval)
    }
  }, [selectedProduct])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length)
    }, 7000) // Changed from 6000 to 7000ms for smoother transitions

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!pillarsExpanded) return

      if (e.key === "ArrowLeft") {
        navigatePillar("prev")
      } else if (e.key === "ArrowRight") {
        navigatePillar("next")
      } else if (e.key === "Escape") {
        setPillarsExpanded(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [pillarsExpanded])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const nextHeroBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % heroBanners.length)
  }

  const prevHeroBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)
  }

  const getQuizResult = () => {
    const answers = quizAnswers.join("-")

    const scores = {
      "Hidratação Avançada": 0,
      "Proteção Intensiva": 0,
      Invisible: 0,
      Sport: 0,
    }

    if (answers.includes("Ativo") || answers.includes("Esportivo")) scores["Sport"] += 3
    if (answers.includes("Profissional")) scores["Invisible"] += 2
    if (answers.includes("Intenso")) scores["Proteção Intensiva"] += 3
    if (answers.includes("Casual")) scores["Hidratação Avançada"] += 2

    if (answers.includes("Suor excessivo")) scores["Proteção Intensiva"] += 3
    if (answers.includes("Irritação na pele")) scores["Hidratação Avançada"] += 3
    if (answers.includes("Manchas na roupa")) scores["Invisible"] += 3
    if (answers.includes("Odor")) scores["Sport"] += 2

    if (answers.includes("Diariamente")) scores["Sport"] += 3
    if (answers.includes("3-4 vezes")) scores["Sport"] += 2
    if (answers.includes("Raramente")) scores["Hidratação Avançada"] += 2

    if (answers.includes("Máxima proteção")) scores["Proteção Intensiva"] += 3
    if (answers.includes("Cuidado com a pele")) scores["Hidratação Avançada"] += 3
    if (answers.includes("Invisibilidade")) scores["Invisible"] += 3
    if (answers.includes("Performance esportiva")) scores["Sport"] += 3

    return Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b))
  }

  const handleToONClick = () => {
    addNotification({
      type: "promo",
      title: "Tô ON! 🚀",
      message: "Você ativou o modo Dry On! Proteção máxima ativada.",
      duration: 3000,
    })
  }

  // (Function removed - now using integrated chat)

  const handleContactSupport = (productName: string) => {
    addNotification({
      type: "success",
      title: "Falar com Atendente 💬",
      message: "Redirecionando para o WhatsApp...",
      duration: 2000,
    })
    setTimeout(() => {
      window.open(
        `https://wa.me/5521999036887?text=Olá! Gostaria de falar com um atendente sobre o produto ${productName}.`,
        "_blank",
      )
    }, 500)
  }

  const nextImage = (lineIndex: number) => {
    const line = productLines[lineIndex]
    if (line.images.length > 1) {
      setLineCarousels((prev) => ({
        ...prev,
        [lineIndex]: ((prev[lineIndex] || 0) + 1) % line.images.length,
      }))
    }
  }

  const prevImage = (lineIndex: number) => {
    const line = productLines[lineIndex]
    if (line.images.length > 1) {
      setLineCarousels((prev) => ({
        ...prev,
        [lineIndex]: ((prev[lineIndex] || 0) - 1 + line.images.length) % line.images.length,
      }))
    }
  }

  const nextPopupImage = () => {
    if (selectedProduct !== null) {
      const product = productLines[selectedProduct]
      const maxImages = product.images.length
      setPopupImageIndex((prev) => (prev + 1) % maxImages)
    }
  }

  const prevPopupImage = () => {
    if (selectedProduct !== null) {
      const product = productLines[selectedProduct]
      const maxImages = product.images.length
      setPopupImageIndex((prev) => (prev - 1 + maxImages) % maxImages)
    }
  }

  const handleAcceptCookies = () => {
    localStorage.setItem("dryon-cookies-consent", "accepted")
    setShowCookiesBanner(false)
  }

  const handleDeclineCookies = () => {
    localStorage.setItem("dryon-cookies-consent", "declined")
    setShowCookiesBanner(false)
  }

  const handleLineCarouselChange = (lineIndex: number, imageIndex: number) => {
    setLineCarousels((prev) => ({ ...prev, [lineIndex]: imageIndex }))
  }

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
      support: "sac@axlfarma.com", // ATENDIMENTO AO CONSUMIDOR
      partnerships: "querocomprar@axlfarma.com", // QUERO COMPRAR
      representative: "querovender@axlfarma.com", // QUERO VENDER
      careers: "trabalheconosco@axlfarma.com", // TRABALHE CONOSCO
      "accounts-payable": "elemos@axlfarma.com", // CONTAS A PAGAR
      "accounts-receivable": "aseixas@axlfarma.com", // CONTAS A RECEBER
      collabs: "loginmkt01@axlfarma.com", // PARCERIAS E COLLABS
      feedback: "sac@axlfarma.com", // FEEDBACKS E SUGESTÕES
    }

    // Default to sac@axlfarma.com if subject is not found or is 'other'
    const recipientEmail = emailRoutes[formData.subject] || "sac@axlfarma.com"

    // Send form data to appropriate email
    try {
      console.log("[v0] Sending message to:", recipientEmail, formData)

      const subject = encodeURIComponent(`Contato DryOn: ${formData.subject}`)
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`,
      )
      const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      // Show success notification
      setTimeout(() => {
        addNotification({
          type: "success",
          title: "Cliente de email aberto! ✓",
          message: "Envie o email pelo seu cliente de email.",
          duration: 4000,
        })

        setIsSubmitting(false)
        setFormData({ subject: "", name: "", email: "", message: "" })
      }, 1000)
    } catch (error) {
      addNotification({
        type: "error",
        title: "Erro ao enviar",
        message: "Tente novamente mais tarde.",
        duration: 4000,
      })
      setIsSubmitting(false)
    }
  }

  const toggleProof = (pillarIndex: number, proofIndex: number) => {
    setCheckedProofs((prev) => ({
      ...prev,
      [pillarIndex]: prev[pillarIndex].map((checked, i) => (i === proofIndex ? !checked : checked)),
    }))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      navigatePillar("next")
    }
    if (isRightSwipe) {
      navigatePillar("prev")
    }
  }

  const getCompletionPercentage = (pillarIndex: number) => {
    const checked = checkedProofs[pillarIndex].filter(Boolean).length
    return Math.round((checked / 3) * 100)
  }

  const navigatePillar = (direction: "next" | "prev") => {
    if (direction === "next") {
      setSelectedPillarIndex((prevIndex) => (prevIndex + 1) % pillarsData.length)
    } else {
      setSelectedPillarIndex((prevIndex) => (prevIndex - 1 + pillarsData.length) % pillarsData.length)
    }
  }

  // Constant for base card styles
  const CARD_BASE_CLASS =
    "relative flex flex-col justify-between items-center p-6 sm:p-8 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 transform hover:shadow-xl hover:scale-105 border-[3px] h-full"

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <OrgSchema />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Notifications */}
      <NotificationContainer />

      {/* Header/Navbar - Sticky com efeito profissional */}
      <header className="relative md:fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b shadow-sm transition-all duration-300 border-[rgba(255,255,255,1)] bg-[rgba(255,255,255,1)]">
        <div className="container mx-auto px-6 max-w-7xl bg-[rgba(255,255,255,1)]">
          <div className="flex items-center justify-between h-20 bg-[rgba(255,255,255,1)]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors z-50"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="text-primary-foreground bg-card-foreground rounded-sm" size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

            <Link href="/" className="flex items-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <Image
                src="/images/design-mode/Captura_de_Tela_2025-11-07_a%CC%80s_12.44.54-removebg-preview%20%281%29(6).png"
                alt="DryOn Logo"
                width={180}
                height={40}
                className="w-auto h-10"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center text-center gap-8 ml-24" aria-label="Navegação principal">
              <Link
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors font-semibold tracking-wide text-lg"
              >
                Produtos
              </Link>
              <Link
                href="#quiz"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors font-semibold tracking-wide text-lg"
              >
                Quiz
              </Link>
              <Link
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors font-semibold tracking-wide text-lg"
              >
                Contato
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="hidden lg:flex items-center gap-2">
              <Image
                src="/images/voce-no-modo-logo.png"
                alt="Você no Modo"
                width={120}
                height={40}
                className="h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer my-0"
              />
              {[
                { href: "https://www.instagram.com/dryon.br", icon: "instagram", color: "#E4405F" }, // redirecting to /home
                { href: "https://www.facebook.com/dryon.com.br/", icon: "facebook", color: "#1877F2" }, // redirecting to /home
                { href: "https://www.youtube.com/@dryon.br1", icon: "youtube", color: "#FF0000" }, // redirecting to /home
                { href: "https://www.tiktok.com/@dryon.br", icon: "tiktok-filled", color: "#000000" }
              ].map((social) => (
                <Link
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-accent/10 transition-all duration-200 text-[var(--color-primary)] hover:scale-110"
                  aria-label={`Siga-nos no ${social.icon}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-colors">
                    {social.icon === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"></path>
                    )}
                    {social.icon === "facebook" && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    )}
                    {social.icon === "youtube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    )}
                    {(social.icon === "tiktok" || social.icon === "tiktok-filled") && (
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu - AnimatePresence aqui */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 backdrop-blur-md z-40 lg:hidden bg-primary-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu Content */}
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed top-20 left-0 right-0 bg-background/98 backdrop-blur-xl shadow-2xl z-40 lg:hidden border-b border-border"
                aria-label="Menu Mobile"
              >
                <div className="container mx-auto px-6 py-8 space-y-6 bg-white">
                  <Image
                    src="/images/voce-no-modo-logo.png"
                    alt="Você no Modo"
                    width={120}
                    height={40}
                    className="h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer my-0 mx-auto"
                  />

                  <Link
                    href="#produtos"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="block text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors py-3 border-b border-border/50 text-center"
                  >
                    Produtos
                  </Link>

                  <Link
                    href="#quiz"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="block text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors py-3 border-b border-border/50 text-center"
                  >
                    Quiz
                  </Link>

                  <Link
                    href="#contato"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="block text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors py-3 text-center"
                  >
                    Contato
                  </Link>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>

      <main>
        <MobileHeroBanner />
        <HeroBanner />

        <section
          id="produtos"
          className="pb-16 sm:pb-24 md:pb-32 relative z-10 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF]"
        >
          {/* <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div> */}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
            <div className="flex flex-col text-center items-center sm:mb-16 md:mb-20 mb-0 py-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[var(--color-primary)] sm:mb-6 font-heading px-4 mb-0 text-5xl tracking-wide text-balance"
                style={{
                  fontFamily: "var(--font-bebas)",
                  textShadow: "3px 3px 6px rgba(0,0,0,0.1)",
                }}
              >
                Nossos <span className="text-primary">Produtos</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3 mt-8 mb-3 text-2xl font-bold"
              >
                <button
                  onClick={() => {
                    setProductFilter("todos")
                  }}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-bold ${
                    productFilter === "todos"
                      ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                      : "bg-card text-muted-foreground hover:bg-accent/10 border border-border"
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => {
                    setProductFilter("masculino")
                  }}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-bold ${
                    productFilter === "masculino"
                      ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                      : "bg-card text-muted-foreground hover:bg-accent/10 border border-border"
                  }`}
                >
                  Masculino
                </button>
                <button
                  onClick={() => {
                    setProductFilter("feminino")
                  }}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-bold ${
                    productFilter === "feminino"
                      ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                      : "bg-card text-muted-foreground hover:bg-accent/10 border border-border"
                  }`}
                >
                  Feminino
                </button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 justify-items-center items-stretch">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={`${product.name}-${index}`}
                  product={product}
                  index={index}
                  lineCarousels={lineCarousels}
                  handleLineCarouselChange={handleLineCarouselChange}
                  onProductClick={() => {
                    const originalIndex = productLines.findIndex((p) => p.name === product.name)
                    setSelectedProduct(originalIndex)
                  }}
                  shouldAnimate={shouldAnimate}
                />
              ))}
            </div>
          </div>
          <WaveDivider variant="gradient" position="bottom" targetColor="var(--color-primary)" />
        </section>

        {/* Nossos Valores Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-[var(--color-primary)] text-primary">
          <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-2 sm:mb-4 tracking-wide text-balance font-black"
              >
                NOSSOS VALORES
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto font-lato text-primary-foreground text-2xl font-bold text-pretty"
              >
                Os pilares que guiam nossa marca
              </motion.p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {valoresData.map((valor, index) => (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="bg-white backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-[var(--color-primary)]/10 hover:border-[var(--color-accent)]/30 h-full flex flex-col">
                    <div className="aspect-[4/3] sm:aspect-square relative flex items-center justify-center bg-white p-2 sm:p-6 md:p-8">
                      <div className="w-3/4 h-3/4 sm:w-full sm:h-full relative flex items-center justify-center">
                        <Image
                          src={valor.image || "/placeholder.svg"}
                          alt={valor.title}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 20vw"
                          quality={100}
                        />
                      </div>
                    </div>

                    {/* Conteúdo otimizado */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col sm:py-6 sm:pt-0">
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-balance text-center"
                        style={{ fontFamily: "var(--font-bebas)" }}
                      >
                        {valor.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed text-pretty text-center">
                        {valor.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quiz Section - now appears after Nossos Valores */}
        <section id="quiz" className="pb-24 bg-[var(--color-primary)] text-white relative z-10 -mt-1">
          <FloatingShapes />
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`${fadeInUp} text-center mb-20`}>
              <h2
                className="text-5xl md:text-6xl font-black py-14 mb-0 tracking-wide pb-3.5 text-balance"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                Qual <span className="text-white">DryOn</span> é ideal pra você?
              </h2>
              <p
                className="opacity-80 max-w-5xl mx-auto leading-relaxed text-pretty font-bold text-xl text-[rgba(255,255,255,1)]"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Responda nosso quiz completo e descubra a linha perfeita para seu estilo de vida
              </p>
            </div>

            <motion.div
              className="max-w-6xl bg-card rounded-3xl p-8 md:p-12 text-[var(--color-primary)] shadow-2xl py-8 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {quizStep < quizQuestions.length ? (
                <div className={fadeInUp}>
                  <div className="mb-10">
                    <div className="mb-8">
                      <span
                        className="text-sm font-bold text-[var(--color-muted)] tracking-wide"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        PERGUNTA {quizStep + 1} DE {quizQuestions.length}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-black mb-10 leading-tight tracking-wide lg:text-5xl text-balance"
                      style={{ fontFamily: "Bebas Neue, sans-serif" }}
                    >
                      {quizQuestions[quizStep].question}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 w-full">
                    {quizQuestions[quizStep].options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          const newAnswers = [...quizAnswers]
                          newAnswers[quizStep] = option
                          setQuizAnswers(newAnswers)
                          setTimeout(() => setQuizStep(quizStep + 1), 800)
                        }}
                        className="relative p-4 md:p-6 border-2 border-[var(--color-muted)] rounded-2xl hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-all duration-300 hover:shadow-lg w-full overflow-hidden"
                        style={{ fontFamily: "Lato, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <AnimatePresence mode="wait">
                          {quizAnswers[quizStep] === option ? (
                            <motion.div
                              key="toggle"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256" className="w-64 h-32">
                                <defs>
                                  <path
                                    id={`donut-selected-${index}`}
                                    d="M352,128 m-84,0 a84,84 0 1,0 168,0 a84,84 0 1,0 -168,0 M352,128 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
                                    fill="var(--color-secondary)"
                                    fillRule="evenodd"
                                  />
                                </defs>
                                <rect
                                  x="8"
                                  y="8"
                                  width="496"
                                  height="240"
                                  rx="120"
                                  ry="120"
                                  fill="none"
                                  stroke="var(--color-secondary)"
                                  strokeWidth="16"
                                />
                                <motion.use
                                  href={`#donut-selected-${index}`}
                                  initial={{ x: -160 }}
                                  animate={{ x: 0 }}
                                  transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 150 }}
                                />
                              </svg>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="text"
                              initial={{ opacity: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3 }}
                              className="flex items-center justify-between w-full gap-3"
                            >
                              <span className="font-semibold text-sm text-left md:text-xl">{option}</span>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256" className="h-32 w-12">
                                  <defs>
                                    <path
                                      id={`donut-option-${index}`}
                                      d="M352,128 m-84,0 a84,84 0 1,0 168,0 a84,84 0 1,0 -168,0 M352,128 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0"
                                      fill="var(--color-secondary)"
                                      fillRule="evenodd"
                                    />
                                  </defs>
                                  <rect
                                    x="8"
                                    y="8"
                                    width="496"
                                    height="240"
                                    rx="120"
                                    ry="120"
                                    fill="none"
                                    stroke="var(--color-secondary)"
                                    strokeWidth="16"
                                  />
                                  <use href={`#donut-option-${index}`} />
                                </svg>
                                <ArrowRight className="text-[var(--color-secondary)]" size={20} />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>

                  {quizStep > 0 && (
                    <div className="mt-8 text-center w-full">
                      <button
                        onClick={() => {
                          setQuizStep(quizStep - 1)
                          const newAnswers = [...quizAnswers]
                          newAnswers.pop()
                          setQuizAnswers(newAnswers)
                        }}
                        className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors font-semibold"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        ← Voltar
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className={fadeInUp}>
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-8 text-[var(--color-secondary)]" size={64} />
                    <h3
                      className="text-3xl md:text-4xl font-black mb-8 tracking-tight text-balance"
                      style={{ fontFamily: "Bebas Neue, sans-serif" }}
                    >
                      Você está <span className="text-primary">ON!</span> Seu DryOn ideal é:
                    </h3>
                    <div
                      className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-10 tracking-tight"
                      style={{ fontFamily: "Bebas Neue, sans-serif" }}
                    >
                      {getQuizResult()}
                    </div>

                    <div className="bg-[var(--color-muted)] rounded-2xl p-6 md:p-8 mb-10 bg-secondary">
                      <p
                        className="mb-6 text-lg leading-relaxed text-primary text-pretty"
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        {productLines.find((p) => p.name === getQuizResult())?.description}
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {productLines
                          .find((p) => p.name === getQuizResult())
                          ?.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <TagOnIcon className="w-5 h-5 flex-shrink-0" />
                              <span className="text-sm text-primary" style={{ fontFamily: "Lato, sans-serif" }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => {
                          setShowQuiz(false)
                          const productIndex = productLines.findIndex((p) => p.name === getQuizResult())
                          if (productIndex !== -1) {
                            setSelectedProduct(productIndex)
                          }
                        }}
                        className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-8 md:px-12 py-4 rounded-2xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:shadow-lg"
                      >
                        <span style={{ fontFamily: "Bebas Neue, sans-serif" }} className="text-xl">
                          Ver Produto Completo
                        </span>
                      </Button>

                      <button
                        className="border-2 border-[var(--color-muted)] text-[var(--color-primary)] px-8 md:px-12 py-4 rounded-2xl font-bold hover:bg-[var(--color-muted)] transition-all duration-300"
                        onClick={() => {
                          setQuizStep(0)
                          setQuizAnswers([])
                        }}
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        Refazer Quiz
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <WaveDivider variant="blue" position="bottom" targetColor="#23376d" />
        </section>

        {/* Dicas DryOn Section */}
        <section id="dicas" className="relative z-10 overflow-hidden bg-[#23376d] -mt-1">
          {/* Background decorativo */}
          <div
            className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #3b5998 0%, transparent 70%)",
            }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#23376d 1px, transparent 1px),
                        linear-gradient(90deg, #23376d 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* CHANGE: Ajustado padding para ficar alinhado e coeso em todas as telas */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 tracking-wide sm:mb-3.5 text-white"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  DICAS{" "}
                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #23376d 0%, #4f6baf 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "white",
                      backgroundClip: "text",
                    }}
                  >
                    DRYON
                    <motion.span
                      className="absolute -bottom-3 left-0 w-full h-1.5 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #23376d 0%, rgba(35, 55, 109, 0.5) 50%, transparent 100%)",
                        boxShadow: "0 0 20px #23376d",
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    />
                  </span>
                </h2>
                <p className="mx-auto leading-relaxed text-primary-foreground font-bold text-pretty text-xl">
                  Informações essenciais para sua proteção e bem-estar
                </p>
              </motion.div>
            </div>

            {/* Horizontal Scroll Tips Section */}
            <HorizontalScrollTips
              onProductLineClick={(index) =>
                setSelectedProduct(productLines.findIndex((p) => p.name === productLines[index].name))
              }
            />
          </div>

          <WaveDivider variant="blue" position="bottom" targetColor="var(--color-primary)" />
        </section>

        <section>
          <QuoteSection />
        </section>

        <section
          id="contato"
          className={`bg-[var(--color-primary)] text-color-primary relative py-10 z-10 transition-opacity duration-300 pb-10 ${
            selectedProduct !== null || selectedArticle !== null ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <FloatingShapes />
          <div className="mx-auto max-w-7xl px-2.5 my-11">
            <div className={`${fadeInUp} text-center mb-20`}>
              <h2
                className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-balance"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                <span className="text-white tracking-wide text-7xl">CONTATO</span>
              </h2>
              <p className="text-gray-200 mx-auto leading-relaxed text-center font-bold text-pretty text-xl leading-9">
                {"Estamos sempre prontos para ouvir você:"}
              </p>
              <p className="text-gray-200 mx-auto leading-relaxed text-center font-bold text-pretty text-xl leading-9">
                {"Dúvidas sugestões ou informações sobre nossos produtos."}
              </p>
            </div>

            <div className="flex justify-center">
              <motion.div
                className="w-full max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form
                  className="relative rounded-3xl p-10 md:p-12 shadow-2xl backdrop-blur-md bg-gradient-to-br from-white/80 to-white/60 border border-white/40 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/50 before:to-transparent before:-z-10 after:absolute after:inset-0 after:rounded-3xl after:shadow-[inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,0,0,0.05)] after:pointer-events-none"
                  onSubmit={handleFormSubmit}
                >
                  <div className="mb-6 relative z-10">
                    <label
                      htmlFor="subject-select"
                      className="block font-bold text-[var(--color-primary)] mb-2 font-heading tracking-wider text-xl"
                    >
                      Assunto *
                    </label>
                    <select
                      id="subject-select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-white/50 bg-white/70 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 focus:outline-none focus:bg-white/90 transition-all text-gray-900 font-medium shadow-sm"
                    >
                      <option value="">Selecione um assunto...</option>
                      <option value="support">💬 ATENDIMENTO AO CONSUMIDOR</option>
                      <option value="partnerships">🤝 QUERO COMPRAR</option>
                      <option value="representative">🏷️ QUERO VENDER</option>
                      <option value="careers">💼 TRABALHE CONOSCO</option>
                      <option value="accounts-payable">💼 CONTAS A PAGAR</option>
                      <option value="accounts-receivable">💼 CONTAS A RECEBER</option>
                      <option value="collabs">🤝 PARCERIAS E COLLABS</option>
                      <option value="feedback">🗣️ ⁠FEEDBACKS E SUGESTÕES</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6 relative z-10">
                    <div>
                      <label
                        htmlFor="name-input"
                        className="block font-bold text-[var(--color-primary)] mb-2 font-heading text-xl tracking-wider"
                      >
                        Nome *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Seu nome completo"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-white/50 bg-white/70 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 focus:outline-none focus:bg-white/90 transition-all text-gray-900 placeholder:text-gray-500 font-medium shadow-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email-input"
                        className="block font-bold text-[var(--color-primary)] mb-2 font-heading text-xl tracking-wider"
                      >
                        E-mail *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="seu@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-white/50 bg-white/70 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 focus:outline-none focus:bg-white/90 transition-all text-gray-900 placeholder:text-gray-500 font-medium shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-6 relative z-10">
                    <label
                      htmlFor="message-input"
                      className="block font-bold text-[var(--color-primary)] mb-2 font-heading text-xl tracking-wider"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Escreva sua mensagem aqui..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-white/50 bg-white/70 focus:border-[var(--color-secondary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 focus:outline-none focus:bg-white/90 transition-all resize-none text-gray-900 placeholder:text-gray-500 font-medium shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative z-10 w-full bg-[var(--color-secondary)] text-[var(--color-primary)] py-4 rounded-xl font-bold font-heading flex items-center justify-center gap-2 tracking-wider text-2xl"
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
              </motion.div>
            </div>
          </div>
          <WaveDivider variant="blue" position="bottom" targetColor="var(--color-primary)" />
        </section>
      </main>

      <Footer />

      <ScrollToTop />

      {/* Replace WhatsAppToggleButton with LiaOnChat at line 2281 */}
      <LiaOnChat />

      <AnimatePresence>
        {showCookiesBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t-4 border-[var(--color-secondary)] shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold text-[var(--color-primary)] mb-2"
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    ESTE SITE USA COOKIES
                  </h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: "Lato, sans-serif" }}>
                    Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e analisar
                    nosso tráfego. Ao clicar em "Aceitar", você concorda com o uso de cookies.{" "}
                    <Link
                      href="/privacidade"
                      className="text-[var(--color-primary)] underline hover:text-[var(--color-secondary)]"
                    >
                      Saiba mais
                    </Link>
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={handleDeclineCookies}
                    variant="outline"
                    className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all bg-transparent"
                  >
                    Recusar
                  </Button>
                  <Button
                    onClick={handleAcceptCookies}
                    className="bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-bold transition-all"
                  >
                    Aceitar Cookies
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedProduct(null)
              setPopupImageIndex(0)
            }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative w-full max-w-6xl max-h-[92vh] rounded-3xl shadow-2xl overflow-hidden bg-card border border-border/50"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const originalProduct = productLines[selectedProduct]
                let product = originalProduct

                // Apply filter to get the correct product images in popup
                if (productFilter === "masculino") {
                  if (originalProduct.name === "Proteção Intensiva") {
                    product = {
                      ...originalProduct,
                      images: [originalProduct.images[1], originalProduct.images[5], originalProduct.images[1]],
                    }
                  } else if (originalProduct.name === "Invisible") {
                    product = {
                      ...originalProduct,
                      images: [originalProduct.images[0]],
                    }
                  } else if (originalProduct.name === "Sport") {
                    product = {
                      ...originalProduct,
                      images: [originalProduct.images[1]],
                    }
                  }
                } else if (productFilter === "feminino") {
                  if (originalProduct.name === "Proteção Intensiva") {
                    product = {
                      ...originalProduct,
                      images: originalProduct.images.filter((_, idx) => idx !== 1 && idx !== 5),
                    }
                  } else if (originalProduct.name === "Invisible") {
                    product = {
                      ...originalProduct,
                      images: originalProduct.images.filter((_, idx) => idx !== 0),
                    }
                  } else if (originalProduct.name === "Sport") {
                    product = {
                      ...originalProduct,
                      images: originalProduct.images.filter((_, idx) => idx !== 1),
                    }
                  }
                }

                return (
                  <>
                    {/* Close Button */}
                    <button
                      onClick={() => {
                        setSelectedProduct(null)
                        setPopupImageIndex(0)
                      }}
                      className="absolute top-4 right-4 z-30 w-11 h-11 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
                      aria-label=" Fechar"
                      autoFocus
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 p-6 sm:p-8 lg:p-12 overflow-y-auto max-h-[92vh] leading-7">
                      {/* Left Column - Image Section */}
                      <div className="w-full space-y-5 lg:space-y-6">
                        {/* Image Container */}
                        <div className="relative overflow-hidden h-72 sm:h-96 lg:h-[28rem] flex items-center justify-center rounded-2xl p-6 sm:p-10 bg-gradient-to-br from-[var(--color-neutral-light)]/50 to-[var(--color-neutral-light)]/20 shadow-inner border border-border/30">
                          {/* Background Image Layer */}

                          {/* Animated Product Image */}
                          <AnimatePresence mode="wait">
                            {product.images[popupImageIndex] && product.images[popupImageIndex].trim() !== "" && (
                              <motion.div
                                key={popupImageIndex}
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{
                                  duration: 0.5,
                                  ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className="relative w-full h-full flex items-center justify-center z-10"
                              >
                                <Image
                                  src={product.images[popupImageIndex] || "/placeholder.svg"}
                                  alt={`${product.name} - Imagem ${popupImageIndex + 1}`}
                                  width={600}
                                  height={600}
                                  className="h-auto object-contain max-w-[240px] shadow-none w-20 md:w-32"
                                  priority
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Navigation Buttons */}
                          {product.images.length > 1 && (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.1, x: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  prevPopupImage()
                                }}
                                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-[var(--color-primary)] p-3 sm:p-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 z-20"
                                aria-label="Imagem anterior"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  className="sm:w-6 sm:h-6"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m15 18-6-6 6-6" />
                                </svg>
                              </motion.button>

                              <motion.button
                                whileHover={{ scale: 1.1, x: 2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  nextPopupImage()
                                }}
                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-[var(--color-primary)] p-3 sm:p-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 z-20"
                                aria-label="Próxima imagem"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  className="sm:w-6 sm:h-6"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </motion.button>
                            </>
                          )}

                          {/* Image Counter Badge */}
                          {product.images.length > 1 && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold z-20"
                            >
                              {popupImageIndex + 1} / {product.images.length}
                            </motion.div>
                          )}
                        </div>

                        {/* Dot Indicators */}
                        {product.images.length > 1 && (
                          <div className="flex justify-center gap-3">
                            {product.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setPopupImageIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-500 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 ${
                                  popupImageIndex === idx
                                    ? "bg-[var(--color-primary)] w-10 shadow-md"
                                    : "bg-muted hover:bg-muted-foreground/50 w-2.5"
                                }`}
                                aria-label={`Ver imagem ${idx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right Column - Product Details */}
                      <div className="w-full space-y-5 lg:space-y-6 relative rounded-3xl overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                          <ProductBackground />
                        </div>

                        {/* Content */}
                        <div className="relative z-20 space-y-5 lg:space-y-6 border-card border-solid shadow-none opacity-100 px-0 mx-0 border-8 pt-11 mt-0 pb-0 rounded-lg">
                          {/* Protection Badge */}

                          {/* Product Name & Description */}
                          <div className="space-y-3 mx-7">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-primary)] font-heading leading-none my-3.5 tracking-wider text-balance">
                              {product.name}
                            </h2>
                            <p className="text-base sm:text-lg text-[var(--color-primary)]/70 leading-relaxed text-pretty">
                              {product.description}
                            </p>
                          </div>

                          {/* Claimings Grid */}
                          {product.claimings && product.claimings.length > 0 && (
                            <div className="grid grid-cols-2 sm:gap-0">
                              {product.claimings.map((claiming, idx) => (
                                <motion.div
                                  key={idx}
                                  whileHover={{ scale: 1.08 }}
                                  transition={{ duration: 0.2 }}
                                  className="flex items-center justify-center p-4 sm:p-6 transition-all duration-300 rounded-none gap[-30] sm:pl-0 flex-col mr-0 ml-0 sm:pr-0 sm:pt-2.5 mb-0 sm:pb-9"
                                >
                                  {claiming.image && claiming.image.trim() !== "" && (
                                    <Image
                                      src={claiming.image || "/placeholder.svg"}
                                      alt={claiming.alt}
                                      width={256}
                                      height={256}
                                      quality={100}
                                      priority={idx < 2}
                                      className="w-24 sm:w-32 object-contain drop-shadow-md h-auto rounded-md bg-[rgba(255,255,255,1)] md:w-32"
                                    />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {/* Features List */}
                          <ul className="space-y-3 mx-7">
                            {product.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-3 text-sm sm:text-base text-[var(--color-primary)]"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 64 64"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="flex-shrink-0 mt-1"
                                >
                                  <rect
                                    x="4"
                                    y="18"
                                    width="56"
                                    height="28"
                                    rx="14"
                                    stroke="var(--color-primary)"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <circle cx="44" cy="32" r="10" fill="var(--color-primary)" />
                                  <circle cx="44" cy="32" r="3.5" fill="white" />
                                </svg>
                                <span className="leading-relaxed">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* CTA Button */}

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              window.location.href = "#contato"
                            }}
                            className="w-full py-4 sm:py-5 bg-primary text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 cursor-pointer"
                          >
                            <span className="flex items-center justify-center gap-2">Fale Conosco!</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedArticle !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden bg-card border border-border/50"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const articleSet = blogPosts[selectedArticle.setIndex]
                if (!articleSet) {
                  console.log("[v0] Article set not found for index:", selectedArticle.setIndex)
                  return null
                }

                const article = articleSet[selectedArticle.postIndex]
                if (!article) {
                  console.log("[v0] Article not found at index:", selectedArticle.postIndex)
                  return null
                }

                // Additional safety check for content structure
                if (!article.content || !article.content.points || !Array.isArray(article.content.points)) {
                  console.log("[v0] Article content structure is invalid:", article)
                  return null
                }

                return (
                  <>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="absolute top-4 right-4 z-30 w-11 h-11 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
                      aria-label="Fechar"
                    >
                      <X size={20} className="text-gray-700" />
                    </button>

                    <div className="overflow-y-auto p-8 sm:p-10 lg:p-16 max-h-[85vh]">
                      {/* Header */}
                      <div className="mb-8">
                        <Badge className="bg-[var(--color-primary)] text-white border-none mb-4">
                          {article.category}
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                          {article.title}
                        </h2>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <div className="flex space-x-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex space-x-1">
                            <Clock size={14} />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Article Image */}
                      <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden mb-10 shadow-lg">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Article Content */}
                      <div className="prose prose-lg max-w-none">
                        <p className="text-muted-foreground mb-10 text-lg lg:text-xl leading-relaxed text-pretty">
                          {article.content.intro}
                        </p>

                        {article.content.points.map((point, idx) => (
                          <div key={idx} className="mb-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                              {point.title}
                            </h3>
                            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed text-pretty">
                              {point.content}
                            </p>
                          </div>
                        ))}

                        <div className="mt-12 p-8 lg:p-10 bg-[var(--color-primary)]/10 rounded-2xl border-l-4 border-[var(--color-primary)]">
                          <p className="text-foreground font-medium text-base sm:text-lg lg:text-xl leading-relaxed text-pretty">
                            {article.content.conclusion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
