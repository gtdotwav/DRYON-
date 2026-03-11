import { Droplets, Shield, Leaf, Sparkles, Trophy, Sun, Building2, Activity, type LucideIcon } from "lucide-react"

export interface BlogPostSection {
  subtitle: string
  text?: string
  points?: string[]
}

export interface BlogPost {
  slug: string
  icon: LucideIcon
  date: string
  title: string
  subtitle: string
  badge: string
  image: string
  description: string
  content: BlogPostSection[]
  productLineIndex: number
  productLineName: string
  productLineDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "quando-cuidado-vira-gasto",
    icon: Sparkles,
    date: "11/03/2026",
    title: "Quando o cuidado vira gasto: como evitar manchas e não abrir mão de conforto e liberdade",
    subtitle: "Proteger as roupas não precisa significar abrir mão do que funciona",
    badge: "Dicas e Informações",
    image: "/images/cuidado-manchas-blog.png",
    description:
      "Manchas amareladas nas axilas das camisetas, resíduos brancos em tecidos escuros, roupas descartadas antes da hora. O cuidado com o corpo não deveria custar o guarda-roupa. Entenda por que isso acontece e como evitar.",
    content: [
      {
        subtitle: "O problema que ninguém conta",
        text: "Você investe em roupas que gosta, escolhe com cuidado, cuida na lavagem — e mesmo assim, depois de algumas semanas, começa a notar aquelas manchas amareladas na região das axilas. Ou então, ao vestir uma camiseta preta, percebe resíduos brancos que não saem nem com escova. É frustrante. E é mais comum do que parece. O que pouca gente sabe é que, na maioria das vezes, o vilão não é o suor em si — mas a reação entre o suor e certos componentes presentes em desodorantes e antitranspirantes convencionais. O cuidado com o corpo acaba se transformando em gasto com roupas novas.",
      },
      {
        subtitle: "Por que as manchas aparecem?",
        text: "As manchas amareladas são causadas, principalmente, pela combinação de sais de alumínio (presentes em muitos antitranspirantes) com proteínas do suor. Essa reação forma compostos que se fixam nas fibras do tecido e se tornam cada vez mais difíceis de remover com o tempo. Já os resíduos brancos em roupas escuras geralmente surgem pela aplicação em excesso ou pela formulação do produto, que não é absorvida completamente pela pele antes do contato com o tecido.",
        points: [
          "Manchas amarelas: reação química entre alumínio e suor nas fibras.",
          "Resíduos brancos: excesso de produto ou fórmula que não absorve bem.",
          "Endurecimento do tecido: acúmulo de resíduos ao longo de várias lavagens.",
          "Odor persistente: bactérias que se fixam nas fibras danificadas pela reação química.",
        ],
      },
      {
        subtitle: "O impacto no bolso e no dia a dia",
        text: "Uma pesquisa informal entre consumidores mostra que roupas manchadas são uma das principais razões para o descarte precoce de peças de vestuário. Camisetas brancas, regatas e blusas claras são as mais afetadas. O resultado é um ciclo: você compra, mancha, descarta e compra de novo. Além do impacto financeiro, há o desconforto emocional. Quem lida com manchas visíveis nas roupas acaba evitando certas cores, certos tecidos e até certos momentos — como levantar os braços em público. O cuidado que deveria trazer liberdade passa a gerar limitação.",
      },
      {
        subtitle: "Como evitar manchas sem abrir mão da proteção",
        points: [
          "Aplique o desodorante e espere secar completamente antes de se vestir — esse simples hábito já reduz muito os resíduos.",
          "Prefira fórmulas que combinam proteção antitranspirante com rápida absorção, evitando o acúmulo nas fibras.",
          "Lave as roupas logo após o uso prolongado no calor, sem deixar o suor secar no tecido por muitas horas.",
          "Use água fria ou morna na lavagem das peças — água muito quente pode fixar as manchas.",
          "Evite aplicar produto em excesso: uma camada fina e uniforme é suficiente para garantir proteção.",
          "Escolha produtos dermatologicamente testados e com tecnologia anti-manchas, como a linha DryOn Invisible, desenvolvida para proteger sem deixar rastros.",
        ],
      },
      {
        subtitle: "Conforto e liberdade andam juntos",
        text: "Cuidar do corpo não deveria significar abrir mão das roupas que você gosta ou evitar cores e tecidos por medo de manchas. A tecnologia certa permite que você tenha proteção real — contra suor, odor e bactérias — sem comprometer o seu guarda-roupa. Conforto é vestir o que quiser, quando quiser, sem pensar duas vezes. Liberdade é levantar os braços, se movimentar e viver o dia sem preocupação. E o cuidado certo é aquele que acompanha tudo isso, sem cobrar nada em troca.",
      },
    ],
    productLineIndex: 2,
    productLineName: "Invisible",
    productLineDescription: "Proteção invisível que cuida das roupas e da pele",
  },
  {
    slug: "por-que-suar-faz-bem",
    icon: Activity,
    date: "04/03/2026",
    title: "Por que suar faz bem? Entendendo o corpo em movimento",
    subtitle: "O suor é um sinal de que o corpo está funcionando como deveria",
    badge: "Corpo em Movimento",
    image: "/images/suar-faz-bem-blog.png",
    description:
      "Suar durante o exercício ou no calor é muito mais do que desconforto — é o corpo trabalhando a seu favor. Entenda por que a transpiração é essencial para a saúde e como ela se conecta com o movimento.",
    content: [
      {
        subtitle: "Suar é sinal de saúde",
        text: "Muita gente associa o suor a algo negativo — desconforto, mau cheiro, roupas manchadas. Mas a verdade é que suar é um dos sinais mais claros de que o corpo está funcionando bem. A transpiração é o mecanismo natural que o organismo utiliza para regular a temperatura interna, especialmente durante atividades físicas, dias quentes ou momentos de esforço. Quando você se movimenta, os músculos geram calor. Para evitar o superaquecimento, o cérebro ativa as glândulas sudoríparas, que liberam suor na superfície da pele. Ao evaporar, esse suor resfria o corpo e mantém o equilíbrio térmico. É um sistema inteligente, eficiente e vital.",
      },
      {
        subtitle: "Os benefícios reais da transpiração",
        text: "Além de regular a temperatura, suar traz uma série de benefícios para o corpo que muitas vezes passam despercebidos.",
        points: [
          "Eliminação de toxinas: o suor ajuda a expelir substâncias como sódio, ureia e até metais pesados em pequenas quantidades, auxiliando o processo de desintoxicação natural do corpo.",
          "Melhora da circulação: durante o exercício, o aumento da transpiração acompanha a dilatação dos vasos sanguíneos, favorecendo a circulação e a oxigenação dos tecidos.",
          "Saúde da pele: a transpiração ajuda a desobstruir os poros e a eliminar impurezas acumuladas, contribuindo para uma pele mais limpa e saudável.",
          "Fortalecimento imunológico: estudos indicam que o suor contém peptídeos antimicrobianos que atuam como uma camada adicional de defesa contra bactérias na superfície da pele.",
          "Bem-estar emocional: suar durante o exercício está diretamente ligado à liberação de endorfinas, os hormônios responsáveis pela sensação de prazer e alívio do estresse.",
        ],
      },
      {
        subtitle: "O corpo em movimento pede cuidado",
        text: "Entender que suar faz bem não significa ignorar os cuidados que a transpiração exige. O suor em si não tem cheiro, mas quando entra em contato com as bactérias naturais da pele — especialmente nas axilas — pode gerar odor e desconforto. Por isso, quem vive em movimento precisa de proteção que acompanhe o ritmo. Manter a higiene, usar roupas adequadas e escolher produtos que respeitem a pele são atitudes simples que fazem toda a diferença. O objetivo não é impedir o suor, mas conviver bem com ele.",
      },
      {
        subtitle: "Dicas para quem sua e não quer parar",
        points: [
          "Hidrate-se antes, durante e depois da atividade física — o suor elimina água e sais minerais que precisam ser repostos.",
          "Use roupas leves e de tecidos que favoreçam a evaporação, como dry-fit ou algodão.",
          "Tome banho logo após o exercício para remover o suor e evitar a proliferação de bactérias.",
          "Escolha um desodorante com tecnologia antitranspirante e ação antibacteriana, como DryOn, que oferece proteção prolongada sem agredir a pele.",
          "Não tenha vergonha de suar — é o seu corpo dizendo que está vivo, ativo e funcionando.",
        ],
      },
      {
        subtitle: "Suar é viver ON",
        text: "O suor é parte da experiência de estar vivo e em movimento. Ele acompanha cada treino, cada caminhada, cada momento de esforço e superação. Em vez de lutar contra ele, o caminho é entendê-lo e se preparar. Com os cuidados certos e a proteção adequada, suar deixa de ser um problema e passa a ser apenas mais um sinal de que você está vivendo no seu melhor ritmo.",
      },
    ],
    productLineIndex: 3,
    productLineName: "Sport",
    productLineDescription: "Proteção e performance para quem vive em movimento",
  },
  {
    slug: "abradilan-conexao-farma-2026",
    icon: Building2,
    date: "24/02/2026",
    title: "Allpharma e DryOn confirmam presença na ABRADILAN, o maior encontro farma do ano",
    subtitle: "DryOn marca presença no principal evento do setor farmacêutico do Brasil",
    badge: "ABRADILAN 2026",
    image: "/images/abradilan-blog.png",
    description:
      "A Allpharma, indústria responsável pelo lançamento de DryOn, confirma participação na ABRADILAN Conexão Farma 2026, que acontece no Expo Center Norte - São Paulo entre os dias 10 e 12 de março.",
    content: [
      {
        subtitle: "ABRADILAN Conexão Farma 2026",
        text: "A Allpharma, indústria responsável pelo lançamento de DryOn, confirma participação na ABRADILAN Conexão Farma 2026, que acontece no Expo Center Norte - São Paulo entre os dias 10 e 12 de março. Considerada um dos principais eventos do setor farmacêutico no Brasil, a feira reúne indústria, distribuidores e varejo em um ambiente focado em networking, inovação e tendências do mercado.",
      },
      {
        subtitle: "Expansão e consolidação no canal farma",
        text: "A presença de DryOn no evento acompanha o movimento de expansão e consolidação da marca no canal farma, ampliando a visibilidade em um espaço que concentra as principais discussões e novidades do segmento. A feira também se destaca por promover conexões estratégicas entre empresas e profissionais que atuam diretamente no dia a dia das farmácias em todo o país.",
      },
      {
        subtitle: "Presença no calendário farmacêutico nacional",
        text: "Com essa participação, DryOn reforça sua presença em um dos encontros mais relevantes do calendário farmacêutico nacional, acompanhando de perto as transformações do setor e as demandas do mercado que evolui junto com o consumidor brasileiro.",
      },
      {
        subtitle: "Visite nosso estande",
        text: "Visite nosso estande: Rua A/10/11 - ESTANDE: #A17. Venha conhecer de perto as novidades DryOn e conversar com nosso time no Expo Center Norte, São Paulo.",
      },
    ],
    productLineIndex: 3,
    productLineName: "DryOn",
    productLineDescription: "Inovação e proteção no setor farmacêutico",
  },
  {
    slug: "axilas-no-verao",
    icon: Sun,
    date: "15/02/2026",
    title: "Axilas no verão: cuidados pra enfrentar sol, praia e dias quentes sem estresse",
    subtitle: "Como cuidar da pele em uma das épocas mais intensas do ano",
    badge: "Modo Praia ON",
    image: "/images/axilas-verao-blog.png",
    description:
      "O verão brasileiro não pede licença. Ele chega com sol forte, calor constante, mais suor, mais movimento e muito mais tempo fora de casa. Praia, rua, transporte, trabalho, encontros. Tudo acontece ao mesmo tempo e o corpo sente.",
    content: [
      {
        subtitle: "As axilas sentem primeiro",
        text: "Algumas regiões sentem antes de todo mundo. As axilas, por exemplo, lidam diariamente com calor, umidade, atrito da roupa e movimento constante. Sem cuidado adequado, isso pode gerar desconforto, irritação e aquela sensação de peso que acompanha o dia inteiro.",
      },
      {
        subtitle: "Por que o verão exige mais atenção?",
        text: "Durante os dias quentes, a transpiração aumenta, a pele fica mais sensível e o contato com tecidos apertados ou sintéticos se intensifica. Além disso, areia, sal do mar e até resíduos de protetor solar podem interferir na saúde da pele se não houver uma rotina básica de cuidado.",
      },
      {
        subtitle: "Cuidados simples que fazem diferença no calor",
        points: [
          "Secar bem a pele após o banho, principalmente nas dobras.",
          "Evitar roupas muito justas por longos períodos.",
          "Optar por tecidos leves e respiráveis.",
          "Manter a higiene ao longo do dia, especialmente após atividades físicas ou exposição ao sol.",
          "Dar intervalos para a pele respirar, sempre que possível.",
        ],
      },
      {
        subtitle: "O verão pede liberdade",
        text: "O verão pede liberdade. E conforto é parte essencial dessa experiência. Cuidar da pele é o que permite viver o calor sem estresse.",
      },
    ],
    productLineIndex: 0,
    productLineName: "Natural Fresh",
    productLineDescription: "Frescor natural para dias quentes",
  },
  {
    slug: "modo-futebol-on",
    icon: Trophy,
    date: "29/01/2026",
    title: "DryOn entra em campo como patrocinador do Campeonato Carioca e Mineiro",
    subtitle: "O futebol brasileiro tem ritmo, calor e emoção e agora tem DryOn jogando junto",
    badge: "Patrocinador Oficial 2026",
    image: "/images/futebol-blog.png",
    description:
      "Somos os novos patrocinadores do Campeonato Carioca e do Campeonato Mineiro, duas competições que representam como ninguém a paixão, o movimento e a intensidade do nosso futebol.",
    content: [
      {
        subtitle: "DryOn no futebol brasileiro",
        text: "O futebol brasileiro tem ritmo, calor e emoção e agora tem DryOn jogando junto. Somos os novos patrocinadores do Campeonato Carioca e do Campeonato Mineiro, duas competições que representam como ninguém a paixão, o movimento e a intensidade do nosso futebol.",
      },
      {
        subtitle: "Perto de quem vive o jogo de verdade",
        text: "Estar nesses campeonatos é estar perto de quem vive o jogo de verdade: torcida, rua, encontro e muita vibração. Futebol é corpo em movimento, é suor, é presença e tudo aquilo que faz parte da rotina de quem vive ON.",
      },
      {
        subtitle: "Mais do que patrocinar",
        text: "Mais do que patrocinar, a DryOn chega para somar. Para acompanhar o ritmo do torcedor, do atleta e de quem transforma cada jogo em experiência. Conforto, liberdade e cuidado fazem parte dessa parceria.",
      },
      {
        subtitle: "Quando o corpo acompanha, o jogo rende",
        text: "Porque quando o corpo acompanha, o jogo rende. DryOn e futebol brasileiro: sempre ON!",
      },
    ],
    productLineIndex: 3,
    productLineName: "Sport",
    productLineDescription: "Proteção extrema para atletas e torcedores",
  },
  {
    slug: "entenda-transpiracao",
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
    productLineIndex: 3,
    productLineName: "Sport",
    productLineDescription: "Proteção máxima contra suor e odor",
  },
  {
    slug: "evitar-contaminacao",
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
    productLineIndex: 1,
    productLineName: "Proteção Intensiva",
    productLineDescription: "Tecnologia antibacteriana avançada",
  },
  {
    slug: "cuidados-axilas",
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
    productLineIndex: 0,
    productLineName: "Hidratação Avançada",
    productLineDescription: "Cuidado e hidratação especial",
  },
  {
    slug: "axilas-irritadas-manchas",
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
    productLineIndex: 2,
    productLineName: "Invisible",
    productLineDescription: "Para pele sensível e delicada",
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
