"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Droplets,
  Shield,
  Leaf,
  Sparkles,
  Sun,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  Copy,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Music2,
} from "lucide-react"

interface HorizontalScrollTipsProps {
  onProductLineClick?: (productIndex: number) => void
}

export function HorizontalScrollTips({ onProductLineClick }: HorizontalScrollTipsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedTip, setSelectedTip] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showSharePopup, setShowSharePopup] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  const tips = [
    {
      icon: Droplets,
      date: "10/11/2025",
      title: "Entenda mais sobre a transpiração",
      subtitle: "Por que suamos e como controlar o suor",
      badge: "Proteção 96h",
      image: "/images/design-mode/Untitled%20design%20%281%29.png",
      description:
        "A transpiração é um mecanismo natural do corpo humano que tem uma função essencial: regular a temperatura corporal. Quando estamos expostos ao calor, praticamos atividades físicas ou vivemos situações de estresse, o corpo produz suor para se resfriar.",
      content: [
        {
          subtitle: "O que é a transpiração e por que ela é importante?",
          text: "A transpiração é um mecanismo natural do corpo humano que tem uma função essencial: regular a temperatura corporal. Quando estamos expostos ao calor, praticamos atividades físicas ou vivemos situações de estresse, o corpo produz suor para se resfriar. Esse suor é formado por água e sais minerais, e é liberado pelas glândulas sudoríparas. Ao evaporar, ele ajuda o corpo a manter o equilíbrio térmico e a funcionar corretamente.",
        },
        {
          subtitle: "Suor e mau cheiro: entenda a diferença",
          text: "Ao contrário do que muitos pensam, o suor não tem cheiro. O odor aparece quando ele entra em contato com bactérias presentes na pele, principalmente nas axilas. Essas bactérias decompõem substâncias do suor, gerando o cheiro característico que tanto incomoda. Por isso, o segredo para se manter fresco está em controlar a proliferação bacteriana — e é aqui que o DRYON Desodorante Aerossol se destaca. DRYON combina tecnologia antitranspirante e ação antibacteriana, oferecendo proteção duradoura contra o suor e o mau odor, sem agredir a pele.",
        },
        {
          subtitle: "Por que algumas pessoas suam mais do que outras?",
          text: "A quantidade de suor pode variar bastante de pessoa para pessoa. Fatores como genética, metabolismo, alimentação, clima e até emoções influenciam diretamente. Em alguns casos, a transpiração pode ser excessiva — uma condição conhecida como hiperidrose. Nesses casos, é importante procurar orientação médica para identificar o tratamento adequado.",
        },
        {
          subtitle: "Como controlar a transpiração no dia a dia",
          points: [
            "Hidrate-se bem: Beber água ajuda o corpo a regular a temperatura.",
            "Use roupas leves e de algodão: Elas permitem que a pele respire melhor.",
            "Higiene é essencial: Banhos diários removem o suor e as bactérias.",
            "Escolha um bom desodorante: Prefira produtos com tecnologia antitranspirante e ação prolongada, como DRYON.",
          ],
        },
      ],
    },
    {
      icon: Shield,
      date: "08/11/2025",
      title: "Como evitar contaminação por vírus e bactérias",
      subtitle: "Manter o corpo protegido todos os dias",
      badge: "Ação bactericida",
      image: "/images/tips/contaminacao.png",
      description:
        "Vírus e bactérias fazem parte do nosso ambiente e estão por toda parte — nas mãos, nas superfícies e até no ar. Embora muitos sejam inofensivos, alguns podem causar infecções respiratórias, gripes, resfriados e doenças de pele, especialmente quando há falta de higiene e imunidade baixa.",
      content: [
        {
          subtitle: "Por que é importante prevenir a contaminação por vírus e bactérias",
          text: "Vírus e bactérias fazem parte do nosso ambiente e estão por toda parte — nas mãos, nas superfícies e até no ar. Embora muitos sejam inofensivos, alguns podem causar infecções respiratórias, gripes, resfriados e doenças de pele, especialmente quando há falta de higiene e imunidade baixa. A boa notícia é que pequenas atitudes diárias podem reduzir significativamente o risco de contaminação e ajudar a manter o corpo saudável e protegido.",
        },
        {
          subtitle: "Higiene pessoal: a primeira linha de defesa",
          text: "Manter uma rotina de higiene pessoal é o passo mais eficaz para evitar a proliferação de micro-organismos. Isso inclui desde lavar bem as mãos até cuidar das axilas e da pele, regiões mais propensas à umidade e à ação de bactérias. DRYON Desodorante Aerossol tem ação antibacteriana e tecnologia antitranspirante, ajudando a reduzir o suor e o mau odor — que podem ser portas de entrada para bactérias quando não tratados adequadamente. Assim, além de proteger, ele contribui para manter a pele limpa, seca e saudável durante todo o dia.",
        },
        {
          subtitle: "Hábitos simples que fazem toda a diferença",
          points: [
            "Lave as mãos com frequência: Use água e sabão por pelo menos 20 segundos, especialmente antes de comer e após usar o banheiro.",
            "Evite tocar o rosto: Os olhos, nariz e boca são portas de entrada para vírus e bactérias.",
            "Troque de roupa diariamente: Peças úmidas ou suadas são ambientes ideais para a proliferação de micro-organismos.",
            "Mantenha o corpo limpo: Tome banho regularmente e utilize produtos que ajudem a controlar o suor e as bactérias da pele.",
            "Fortaleça a imunidade: Durma bem, mantenha uma alimentação equilibrada e pratique atividades físicas leves.",
          ],
        },
        {
          subtitle: "Ambiente limpo também é saúde",
          text: "Além do cuidado pessoal, é importante manter ambientes ventilados e higienizados. Superfícies como celulares, teclados, maçanetas e bolsas acumulam microrganismos com facilidade — e podem ser uma das principais fontes de contaminação cruzada no dia a dia. Um pano úmido com álcool 70% ou produtos desinfetantes é suficiente para eliminar a maioria dos vírus e bactérias.",
        },
      ],
    },
    {
      icon: Leaf,
      date: "05/11/2025",
      title: "Cuidados com as axilas",
      subtitle: "Como manter a pele protegida, saudável e livre de odor",
      badge: "Dermatologicamente testado",
      image: "/images/photo-2025-11-24-11-11-30.jpg",
      description:
        "As axilas são uma das áreas mais sensíveis e delicadas do corpo. Além de concentrar um grande número de glândulas sudoríparas, essa região está em constante atrito com a pele e com as roupas — o que pode causar irritações, escurecimento e mau odor quando não há o cuidado adequado.",
      content: [
        {
          subtitle: "Por que é importante cuidar das axilas",
          text: "As axilas são uma das áreas mais sensíveis e delicadas do corpo. Além de concentrar um grande número de glândulas sudoríparas, essa região está em constante atrito com a pele e com as roupas — o que pode causar irritações, escurecimento e mau odor quando não há o cuidado adequado. Cuidar das axilas é mais do que uma questão estética: é uma forma de manter a saúde da pele e o conforto diário.",
        },
        {
          subtitle: "Higiene e prevenção: o primeiro passo para axilas saudáveis",
          text: "A limpeza correta é essencial para eliminar o excesso de suor e bactérias que se acumulam ao longo do dia. Durante o banho, lave bem as axilas com sabonete neutro e enxágue completamente para evitar resíduos que podem causar irritação. Dica: Após o banho, seque bem as axilas antes de aplicar o desodorante. A pele seca ajuda o produto a agir melhor e evita o acúmulo de umidade — ambiente favorável à proliferação bacteriana.",
        },
        {
          subtitle: "Escolha o desodorante ideal para o seu tipo de pele",
          text: "Cada pessoa tem necessidades diferentes. Peles sensíveis, por exemplo, exigem produtos suaves e dermatologicamente testados, enquanto quem transpira mais pode se beneficiar de desodorantes com tecnologia antitranspirante. DRYON foi desenvolvido com alta performance e tecnologia de ponta, unindo proteção antibacteriana e efeito antitranspirante. Ele mantém a pele seca, perfumada e protegida por até 72 horas, oferecendo conforto e segurança em qualquer situação.",
        },
        {
          subtitle: "Evite erros comuns no cuidado com as axilas",
          points: [
            "Aplicar o desodorante logo após depilar: espere algumas horas para a pele se recuperar.",
            "Esquecer de limpar bem antes de reaplicar: aplicar o produto sobre suor ou sujeira reduz sua ação.",
            "Exposição solar após a depilação: pode causar manchas e irritações.",
            "Usar roupas muito apertadas: o atrito constante pode escurecer e sensibilizar a pele.",
          ],
        },
      ],
    },
    {
      icon: Sparkles,
      date: "03/11/2025",
      title: "Lidando com axilas irritadas e manchas escuras",
      subtitle: "Causas, prevenção e cuidados",
      badge: "Cuidado especial",
      image: "/images/design-mode/freepik__create-a-1080x1080-11-ultrarealistic-lifestyle-por__90521.png.jpeg",
      description:
        "As axilas são uma região delicada do corpo, constantemente exposta a atrito, umidade, calor e depilação — fatores que podem causar irritações, coceiras e manchas escuras.",
      content: [
        {
          subtitle: "Por que as axilas ficam irritadas ou escurecidas?",
          text: "As axilas são uma região delicada do corpo, constantemente exposta a atrito, umidade, calor e depilação — fatores que podem causar irritações, coceiras e manchas escuras. Entre as principais causas estão: Uso de lâminas de barbear com muita frequência; Depilação agressiva ou sem hidratação adequada; Roupas muito apertadas que causam atrito constante; Uso de desodorantes com álcool ou fragrâncias fortes, que sensibilizam a pele; E até mesmo reações inflamatórias decorrentes do acúmulo de suor e bactérias. O resultado é uma pele que perde a uniformidade, fica sensível e pode causar desconforto no dia a dia.",
        },
        {
          subtitle: "Como evitar irritações nas axilas",
          points: [
            "Higiene suave: use sabonetes neutros e água morna, sem esfregar com força.",
            "Cuidado com a depilação: prefira métodos menos agressivos e, após o procedimento, evite aplicar desodorante por algumas horas.",
            "Roupas confortáveis: opte por tecidos leves e respiráveis, como algodão.",
            "Escolha o desodorante certo: prefira produtos sem álcool, com ação antitranspirante e antibacteriana.",
          ],
        },
        {
          subtitle: "Manchas escuras nas axilas: o que são e como tratar",
          text: "O escurecimento das axilas é uma resposta natural da pele a agressões repetidas — como atrito, depilação e inflamações. Nesses casos, a pele produz mais melanina como forma de defesa, resultando nas manchas escuras. Além de adotar hábitos mais delicados, algumas medidas podem ajudar: Hidratar a região diariamente para manter a pele macia e recuperar a barreira natural; Evitar atrito constante, especialmente com roupas justas; Usar desodorantes suaves e dermatologicamente testados, que protegem sem sensibilizar; Evitar exposição solar após a depilação, pois pode piorar o escurecimento. Com o tempo e a rotina correta, é possível clarear gradualmente as axilas e recuperar o tom uniforme da pele.",
        },
        {
          subtitle: "A importância do cuidado contínuo",
          text: "Cuidar das axilas é mais do que uma questão estética — é um gesto de autocuidado e saúde. Ao escolher produtos que respeitam a pele e adotar hábitos delicados, você evita irritações, controla o suor e mantém uma aparência saudável e bonita. DRYON Hidratação Avançada é para quem busca proteção inteligente e cuidado com a pele sensível, oferecendo frescor, suavidade e confiança o dia todo.",
        },
      ],
    },
    {
      icon: Sun,
      date: "25/03/2026",
      title: "Guia da Pele Brasileira",
      subtitle: "Como o clima quente influencia seu cuidado diário",
      badge: "Cuidado diário",
      image: "/images/tips/guia-pele-brasileira.png",
      description:
        "O Brasil é um país tropical, com altas temperaturas e umidade durante a maior parte do ano. Esse clima impacta diretamente a saúde da pele, aumentando a produção de suor, oleosidade e a exposição aos raios UV. Entender como o calor influencia o seu corpo é o primeiro passo para uma rotina de cuidados mais eficaz.",
      content: [
        {
          subtitle: "O impacto do clima tropical na pele",
          text: "Quem vive no Brasil sabe: o calor é constante. E com ele vêm desafios reais para a saúde da pele. Temperaturas elevadas estimulam as glândulas sudoríparas a produzir mais suor, enquanto a umidade dificulta a evaporação natural, criando um ambiente propício para a proliferação de bactérias e o surgimento de odores. Além disso, a exposição prolongada ao sol acelera o envelhecimento da pele e pode causar manchas e ressecamento nas camadas mais profundas — mesmo quando a superfície parece oleosa.",
        },
        {
          subtitle: "Suor e oleosidade: aliados ou vilões?",
          text: "O suor é um mecanismo natural de regulação térmica — ele não é o inimigo. O problema surge quando o excesso de suor se acumula nas axilas, virilhas e outras dobras do corpo, favorecendo o crescimento bacteriano e o mau cheiro. Já a oleosidade excessiva pode obstruir poros e causar irritações. A chave é equilibrar: manter a pele limpa e protegida sem eliminar completamente a hidratação natural. DRYON combina tecnologia antitranspirante com ingredientes que respeitam o pH da pele brasileira, oferecendo proteção prolongada sem ressecar.",
        },
        {
          subtitle: "Dicas essenciais para o cuidado no calor",
          points: [
            "Hidrate-se por dentro e por fora: beba pelo menos 2 litros de água por dia e use hidratantes leves e oil-free.",
            "Use protetor solar diariamente: mesmo em dias nublados, os raios UV atravessam as nuvens e atingem a pele.",
            "Prefira roupas leves e de algodão: tecidos sintéticos retêm calor e umidade, agravando o suor e o odor.",
            "Tome banhos mornos: a água muito quente remove a oleosidade natural da pele, causando efeito rebote.",
            "Escolha desodorantes com proteção prolongada: produtos como DRYON oferecem até 72h de proteção, ideais para o clima brasileiro.",
            "Evite aplicar produtos nas axilas logo após a depilação: a pele sensibilizada pode reagir com irritações.",
          ],
        },
        {
          subtitle: "A rotina ideal para a pele brasileira",
          text: "Uma rotina de cuidados adaptada ao nosso clima não precisa ser complicada. Pela manhã, limpe a pele, aplique protetor solar e um desodorante de longa duração. Durante o dia, mantenha-se hidratado e, se possível, refresque o rosto com água termal. À noite, faça uma limpeza mais profunda para remover o acúmulo de suor, poluição e oleosidade do dia. Com consistência e os produtos certos, sua pele estará protegida e saudável o ano todo — não importa o termômetro. DRYON foi desenvolvido pensando no brasileiro: proteção inteligente que acompanha o seu ritmo, do verão ao verão.",
        },
      ],
    },
  ]

  const tipToProductLineMap = [
    { productLineIndex: 3, productLineName: "Sport", description: "Proteção máxima contra suor e odor" },
    { productLineIndex: 1, productLineName: "Proteção Intensiva", description: "Tecnologia antibacteriana avançada" },
    { productLineIndex: 0, productLineName: "Hidratação Avançada", description: "Cuidado e hidratação especial" },
    { productLineIndex: 2, productLineName: "Invisible", description: "Para pele sensível e delicada" },
    { productLineIndex: 0, productLineName: "Hidratação Avançada", description: "Cuidado diário para o clima brasileiro" },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 320 : 420
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    updateScrollButtons()
    setIsMounted(true)
    window.addEventListener("resize", checkMobile)
    window.addEventListener("resize", updateScrollButtons)
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTip(null)
        setShowSharePopup(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    if (selectedTip !== null) {
      // Simpler scroll lock
      document.body.style.overflow = "hidden"

      // Reset scroll position of modal
      setTimeout(() => {
        if (popupRef.current) {
          popupRef.current.scrollTop = 0
          const contentDiv = popupRef.current.querySelector(".popup-content-scroll")
          if (contentDiv) {
            (contentDiv as HTMLElement).scrollTop = 0
          }
        }
      }, 50)

      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [selectedTip])

  const handleShare = async () => {
    if (selectedTip === null) return

    const tip = tips[selectedTip]
    const shareData = {
      title: tip.title,
      text: `${tip.subtitle}\n\nConfira essa dica incrível sobre cuidados com a pele!`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        setShowSharePopup(true)
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Erro ao compartilhar:", error)
        setShowSharePopup(true)
      }
    }
  }

  // Render modal content
  const renderTipModal = () => {
    if (selectedTip === null) return null

    return (
      <motion.div
        ref={popupRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        onClick={() => setSelectedTip(null)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Close button - outside modal for proper positioning */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setSelectedTip(null)
          }}
          className="fixed top-4 right-4 z-[100001] p-2.5 rounded-full transition-all duration-200 hover:scale-110 bg-gray-900/90 hover:bg-gray-900 text-white shadow-lg"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full h-full sm:w-[90vw] sm:h-auto md:w-[85vw] lg:w-[80vw] xl:w-[75vw] sm:max-h-[90vh] sm:m-4 sm:rounded-2xl shadow-2xl bg-primary-foreground z-10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="popup-content-scroll p-4 pt-14 sm:pt-8 sm:p-8 md:p-10 lg:p-12 bg-primary-foreground overflow-y-auto"
            style={{
              height: "100%",
              maxHeight: "100dvh",
            }}
          >
            <div className="mx-auto">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {(() => {
                    const Icon = tips[selectedTip].icon
                    return (
                      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex-shrink-0 bg-secondary">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                    )
                  })()}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-muted-foreground">
                      {tips[selectedTip].date}
                    </p>
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wide bg-primary text-primary-foreground">
                      {tips[selectedTip].badge}
                    </div>
                  </div>
                </div>

                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-balance"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {tips[selectedTip].title}
                </h2>

                <p
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-pretty"
                  style={{ color: "var(--color-muted)" }}
                >
                  {tips[selectedTip].subtitle}
                </p>
              </div>

              {/* Description box */}
              <div
                className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl leading-relaxed"
                style={{
                  background: "var(--color-neutral-light)",
                  color: "var(--color-foreground)",
                }}
              >
                <p className="text-sm sm:text-base md:text-lg text-pretty">{tips[selectedTip].description}</p>
              </div>

              {/* Content sections */}
              <div className="space-y-6 sm:space-y-8">
                {tips[selectedTip].content.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-bold flex items-start sm:items-center gap-2 sm:gap-3 text-balance"
                      style={{ color: "var(--color-primary)" }}
                    >
                      <span
                        className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-sm font-bold flex items-center justify-center"
                        style={{
                          background: "var(--color-secondary)",
                          color: "var(--color-primary)",
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span className="leading-tight">{section.subtitle}</span>
                    </h3>

                    {section.text && (
                      <p
                        className="text-sm sm:text-base leading-relaxed text-pretty"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        {section.text}
                      </p>
                    )}

                    {section.points && (
                      <ul className="space-y-2 sm:space-y-3 pl-9 sm:pl-11">
                        {section.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-2 sm:gap-3">
                            <span
                              className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5 sm:mt-2"
                              style={{ background: "var(--color-secondary)" }}
                            />
                            <span
                              className="text-sm sm:text-base leading-relaxed"
                              style={{ color: "var(--color-muted-foreground)" }}
                            >
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Product line CTA */}
              <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-xl" style={{ background: "var(--color-secondary)" }}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between">
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                      Conheça a linha {tipToProductLineMap[selectedTip].productLineName}
                    </h4>
                    <p className="text-sm sm:text-base" style={{ color: "var(--color-muted-foreground)" }}>
                      {tipToProductLineMap[selectedTip].description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (onProductLineClick) {
                        onProductLineClick(tipToProductLineMap[selectedTip].productLineIndex)
                        setSelectedTip(null)
                      }
                    }}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold uppercase tracking-wide text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
                    style={{
                      background: "var(--color-primary)",
                      color: "white",
                    }}
                  >
                    Ver Produtos
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Share section */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
                  <p
                    className="text-xs sm:text-sm text-center sm:text-left"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Gostou desta dica? Compartilhe com amigos!
                  </p>
                  <button
                    onClick={handleShare}
                    className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold uppercase tracking-wide text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: "var(--color-primary)",
                      color: "white",
                    }}
                  >
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  // Render share popup content
  const renderSharePopup = () => {
    if (!showSharePopup) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100001] flex items-center justify-center p-4"
        onClick={() => setShowSharePopup(false)}
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
            onClick={() => setShowSharePopup(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full"
            aria-label="Fechar"
          >
            <X size={20} className="text-foreground" />
          </button>

          <div className="p-6 pb-4 border-b border-border/30">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Compartilhar</h3>
            <p className="text-sm text-muted-foreground">Escolha onde deseja compartilhar</p>
          </div>

          <div className="p-6 grid grid-cols-3 gap-4">
            {/* WhatsApp */}
            <button
              onClick={() => {
                const text = encodeURIComponent("Confira esta dica DryOn!")
                const url = encodeURIComponent(window.location.href)
                window.open(`https://wa.me/?text=${text}%20${url}`, "_blank")
                setShowSharePopup(false)
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <span className="text-xs font-semibold text-foreground">WhatsApp</span>
            </button>

            {/* Instagram */}
            <button
              onClick={() => {
                window.location.href = "/home"
                setShowSharePopup(false)
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 flex items-center justify-center transition-colors">
                <Instagram className="w-7 h-7 text-pink-500" />
              </div>
              <span className="text-xs font-semibold text-foreground">Instagram</span>
            </button>

            {/* Facebook */}
            <button
              onClick={() => {
                window.location.href = "/home"
                setShowSharePopup(false)
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#1877F2]/10 group-hover:bg-[#1877F2]/20 flex items-center justify-center transition-colors">
                <Facebook className="w-7 h-7 text-[#1877F2]" />
              </div>
              <span className="text-xs font-semibold text-foreground">Facebook</span>
            </button>

            {/* Twitter/X */}
            <button
              onClick={() => {
                window.location.href = "/home"
                setShowSharePopup(false)
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                <Twitter className="w-7 h-7 text-black" />
              </div>
              <span className="text-xs font-semibold text-foreground">Twitter</span>
            </button>

            {/* TikTok */}
            <button
              onClick={() => {
                window.open("https://tiktok.com/@dryon", "_blank")
                setShowSharePopup(false)
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-14 h-14 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                <Music2 className="w-7 h-7 text-black" />
              </div>
              <span className="text-xs font-semibold text-foreground">TikTok</span>
            </button>

            {/* Email */}
            <button
              onClick={() => {
                const subject = encodeURIComponent("Confira DryOn!")
                const body = encodeURIComponent(`Olá! Confira os produtos DryOn: ${window.location.href}`)
                window.open(`mailto:?subject=${subject}&body=${body}`, "_blank")
                setShowSharePopup(false)
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
                setShowSharePopup(false)
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              <Copy className="w-5 h-5" />
              Copiar Link
            </button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <>
      <section
        className="relative sm:py-16 overflow-hidden rounded-3xl lg:py-6 py-12 pt-12 pb-0 mb-11"
        style={{
          background: "var(--color-white)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8 lg:py-10">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-sm" style={{ background: "var(--color-secondary)" }} />
                <div className="w-2 h-2 rounded-sm" style={{ background: "var(--color-secondary)" }} />
              </div>
              <p className="text-sm uppercase tracking-wider font-medium text-muted-foreground">DICAS E INFORMAÇÕES</p>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-bebas)] text-balance"
              style={{
                color: "var(--color-primary)",
              }}
            >
              Fique por dentro
            </h2>
          </div>

          <div className="relative">
            {canScrollLeft && !isMobile && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-3 sm:-translate-x-5 rounded-lg p-3 transition-all duration-300 hover:scale-110 shadow-xl focus:outline-none focus:ring-2"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-secondary-foreground)",
                }}
                aria-label="Dica anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {canScrollRight && !isMobile && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-3 sm:translate-x-5 rounded-lg p-3 transition-all duration-300 hover:scale-110 shadow-xl focus:outline-none focus:ring-2"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-secondary-foreground)",
                }}
                aria-label="Próxima dica"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              onScroll={updateScrollButtons}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-1 px-1"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {tips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group flex-shrink-0 w-[300px] sm:w-[340px] md:w-[400px] rounded-2xl overflow-hidden snap-start cursor-pointer transition-all duration-300 hover:shadow-2xl relative"
                    style={{
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                      transform: isMobile ? "scale(1)" : undefined,
                    }}
                    whileHover={isMobile ? {} : { scale: 1.02 }}
                    onClick={() => setSelectedTip(index)}
                  >
                    <div className="absolute top-2 right-4 z-10"></div>

                    <div
                      className="relative h-56 overflow-hidden"
                      style={{
                        background:
                          index % 3 === 0
                            ? "linear-gradient(135deg, var(--color-neutral-light) 0%, var(--color-muted-light) 100%)"
                            : index % 3 === 1
                              ? "linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-accent) 100%)"
                              : "linear-gradient(135deg, var(--color-secondary-light) 0%, var(--color-secondary) 100%)",
                      }}
                    >
                      {index === 0 ? (
                        <img
                          src="/images/design-mode/Untitled%20design%20%281%29.png"
                          alt="Entenda mais sobre a transpiração"
                          className="object-cover w-full py-0 h-72"
                        />
                      ) : index === 1 ? (
                        <img
                          src="/images/tips/contaminacao.png"
                          alt="Como evitar contaminação por vírus e bactérias"
                          className="object-cover w-full h-full"
                        />
                      ) : index === 2 ? (
                        <img
                          src="/images/photo-2025-11-24-11-11-30.jpg"
                          alt="Cuidados com as axilas"
                          className="object-cover w-full h-full"
                        />
                      ) : index === 3 ? (
                        <img
                          src="/images/design-mode/freepik__create-a-1080x1080-11-ultrarealistic-lifestyle-por__90521.png.jpeg"
                          alt="Lidando com axilas irritadas e manchas escuras"
                          className="object-cover h-80 w-full"
                        />
                      ) : index === 4 ? (
                        <img
                          src="/images/tips/guia-pele-brasileira.png"
                          alt="Guia da Pele Brasileira: como o clima quente influencia seu cuidado diário"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-32 h-32 opacity-20" style={{ color: "var(--color-primary)" }} />
                          </div>

                          <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            <div className="absolute top-6 left-6 w-20 h-20 rounded-full border-4 border-white/50" />
                            <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full border-4 border-white/50" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white/30" />
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-5 sm:p-6 md:p-8" style={{ background: "var(--color-primary)" }}>
                      <p className="text-sm mb-3 sm:mb-4 font-medium" style={{ color: "var(--color-muted-light)" }}>
                        {tip.date}
                      </p>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight text-balance">
                        {tip.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-200 mb-4 sm:mb-6 line-clamp-2 leading-relaxed text-pretty">
                        {tip.subtitle}
                      </p>

                      <button
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all duration-300 group-hover:gap-3"
                        style={{ color: "var(--color-secondary)" }}
                        aria-label={`Saiba mais sobre ${tip.title}`}
                      >
                        Saiba mais
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center px-4">
            <p className="text-xs text-muted-foreground sm:text-base">
              {isMobile
                ? `${tips.length} artigos • Deslize para ver mais`
                : `Deslize para ver mais dicas • ${tips.length} artigos disponíveis`}
            </p>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Tip Detail Modal - Portal to body */}
      {isMounted && createPortal(
        <AnimatePresence mode="wait">
          {renderTipModal()}
        </AnimatePresence>,
        document.body
      )}

      {/* Share Popup - Portal to body */}
      {isMounted && createPortal(
        <AnimatePresence mode="wait">
          {renderSharePopup()}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
