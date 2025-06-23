import type { Product } from "@/contexts/cart-context"

export interface ProductImage {
  url: string
  alt: string
  type?: "main" | "detail" | "usage" | "ingredients"
}

export interface ExtendedProduct extends Product {
  images: ProductImage[]
  features?: string[]
  ingredients?: string[]
  howToUse?: string[]
}

export const products: ExtendedProduct[] = [
  // Limpeza Facial
  {
    id: "gel-limpeza",
    name: "Gel de Limpeza Facial",
    price: 89.9,
    originalPrice: 119.9,
    description: "Remove impurezas e oleosidade sem ressecar",
    image: "/images/products/new-age-men-cleanser-pump.png",
    category: "limpeza",
    badge: "Mais Vendido",
    images: [
      {
        url: "/images/products/new-age-men-cleanser-pump.png",
        alt: "Gel de Limpeza Facial - Frasco Principal",
        type: "main",
      },
      {
        url: "/images/products/new-age-men-cleanser-tube.png",
        alt: "Gel de Limpeza - Textura e Aplicação",
        type: "detail",
      },
      {
        url: "/images/products/gel-limpeza-usage.png",
        alt: "Modo de Uso do Gel de Limpeza",
        type: "usage",
      },
      {
        url: "/images/products/ingredientes-naturais.png",
        alt: "Ingredientes Naturais",
        type: "ingredients",
      },
    ],
    features: ["Fórmula suave", "Controla oleosidade", "Não resseca", "pH balanceado"],
    ingredients: ["Ácido Salicílico", "Extrato de Chá Verde", "Glicerina", "Pantenol"],
    howToUse: ["Aplique no rosto úmido", "Massageie suavemente", "Enxágue com água", "Use 2x ao dia"],
  },
  {
    id: "sabonete-carvao",
    name: "Sabonete Facial Carvão Ativado",
    price: 45.9,
    originalPrice: 59.9,
    description: "Purifica profundamente e controla oleosidade",
    image: "/images/products/sabonete-carvao-main.png",
    category: "limpeza",
    badge: "",
    images: [
      {
        url: "/images/products/sabonete-carvao-main.png",
        alt: "Sabonete de Carvão Ativado",
        type: "main",
      },
      {
        url: "/images/products/sabonete-carvao-texture.png",
        alt: "Textura do Sabonete",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação do Sabonete",
        type: "usage",
      },
    ],
    features: ["Carvão ativado", "Purificação profunda", "Controla oleosidade", "Vegano"],
    ingredients: ["Carvão Ativado", "Óleo de Coco", "Glicerina Vegetal", "Vitamina E"],
  },
  {
    id: "espuma-limpeza",
    name: "Espuma de Limpeza Profunda",
    price: 67.9,
    originalPrice: 89.9,
    description: "Limpeza suave para peles sensíveis",
    image: "/images/products/new-age-men-tube.png",
    category: "limpeza",
    badge: "Novidade",
    images: [
      {
        url: "/images/products/new-age-men-tube.png",
        alt: "Espuma de Limpeza Profunda",
        type: "main",
      },
      {
        url: "/images/products/espuma-limpeza-texture.png",
        alt: "Textura da Espuma",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Modo de Aplicação",
        type: "usage",
      },
    ],
    features: ["Fórmula suave", "Para peles sensíveis", "Espuma rica", "Hidratante"],
    ingredients: ["Ácido Hialurônico", "Aloe Vera", "Camomila", "Glicerina"],
  },

  // Hidratantes
  {
    id: "hidratante-anti-idade",
    name: "Hidratante Anti-Idade",
    price: 149.9,
    originalPrice: 199.9,
    description: "Combate sinais de envelhecimento e hidrata profundamente",
    image: "/images/products/new-age-men-cream.png",
    category: "hidratante",
    badge: "Premium",
    images: [
      {
        url: "/images/products/new-age-men-cream.png",
        alt: "Hidratante Anti-Idade Premium",
        type: "main",
      },
      {
        url: "/images/products/nam-rejuvenating-cream.png",
        alt: "Textura Cremosa",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação no Rosto",
        type: "usage",
      },
      {
        url: "/images/products/ingredientes-naturais.png",
        alt: "Ingredientes Anti-Idade",
        type: "ingredients",
      },
    ],
    features: ["Retinol", "Ácido Hialurônico", "Peptídeos", "FPS 15"],
    ingredients: ["Retinol", "Ácido Hialurônico", "Peptídeos", "Vitamina C", "Niacinamida"],
    howToUse: ["Aplique no rosto limpo", "Massageie suavemente", "Use pela manhã e noite", "Evite área dos olhos"],
  },
  {
    id: "hidratante-matificante",
    name: "Hidratante Matificante",
    price: 89.9,
    originalPrice: 119.9,
    description: "Hidrata sem deixar oleosidade, ideal para pele mista",
    image: "/images/products/new-age-men-moisturizer.png",
    category: "hidratante",
    badge: "",
    images: [
      {
        url: "/images/products/new-age-men-moisturizer.png",
        alt: "Hidratante Matificante",
        type: "main",
      },
      {
        url: "/images/products/hidratante-matificante-texture.png",
        alt: "Textura Gel-Creme",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Efeito Matificante",
        type: "usage",
      },
    ],
    features: ["Base aquosa", "Controle de oleosidade", "Absorção rápida", "Não comedogênico"],
    ingredients: ["Niacinamida", "Ácido Salicílico", "Zinco", "Extrato de Hamamélis"],
  },
  {
    id: "hidratante-noturno",
    name: "Hidratante Noturno Reparador",
    price: 129.9,
    originalPrice: 169.9,
    description: "Regenera a pele durante o sono com ácido hialurônico",
    image: "/images/products/nam-repairing-emulsion.png",
    category: "hidratante",
    badge: "Premium",
    images: [
      {
        url: "/images/products/nam-repairing-emulsion.png",
        alt: "Hidratante Noturno Reparador",
        type: "main",
      },
      {
        url: "/images/products/hidratante-noturno-texture.png",
        alt: "Textura Rica",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação Noturna",
        type: "usage",
      },
    ],
    features: ["Fórmula noturna", "Regeneração celular", "Hidratação intensa", "Anti-idade"],
    ingredients: ["Ácido Hialurônico", "Ceramidas", "Peptídeos", "Óleo de Jojoba"],
  },

  // Proteção Solar
  {
    id: "protetor-solar",
    name: "Protetor Solar Facial FPS 60",
    price: 79.9,
    originalPrice: 99.9,
    description: "FPS 60 com textura não oleosa e absorção rápida",
    image: "/images/products/nam-sunscreen-spf60.png",
    category: "protecao",
    badge: "Essencial",
    images: [
      {
        url: "/images/products/nam-sunscreen-spf60.png",
        alt: "Protetor Solar FPS 60",
        type: "main",
      },
      {
        url: "/images/products/protetor-solar-texture.png",
        alt: "Textura Fluida",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação Uniforme",
        type: "usage",
      },
      {
        url: "/images/products/ingredientes-naturais.png",
        alt: "Filtros Solares",
        type: "ingredients",
      },
    ],
    features: ["FPS 60", "Resistente à água", "Não oleoso", "Base para maquiagem"],
    ingredients: ["Óxido de Zinco", "Octinoxato", "Avobenzona", "Vitamina E"],
    howToUse: [
      "Aplique 30min antes da exposição",
      "Reaplique a cada 2 horas",
      "Use diariamente",
      "Espalhe uniformemente",
    ],
  },
  {
    id: "protetor-com-cor",
    name: "Protetor Solar com Cor FPS 50",
    price: 94.9,
    originalPrice: 124.9,
    description: "Proteção solar com leve cobertura natural",
    image: "/images/products/protetor-com-cor-main.png",
    category: "protecao",
    badge: "Novidade",
    images: [
      {
        url: "/images/products/protetor-com-cor-main.png",
        alt: "Protetor Solar com Cor",
        type: "main",
      },
      {
        url: "/images/products/protetor-com-cor-texture.png",
        alt: "Cobertura Natural",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação com Cor",
        type: "usage",
      },
    ],
    features: ["FPS 50", "Com cor", "Cobertura natural", "Longa duração"],
    ingredients: ["Óxido de Zinco", "Dióxido de Titânio", "Pigmentos Minerais", "Ácido Hialurônico"],
  },

  // Séruns e Tratamentos
  {
    id: "serum-vitamina-c",
    name: "Sérum Vitamina C",
    price: 129.9,
    originalPrice: 169.9,
    description: "Antioxidante poderoso para pele radiante",
    image: "/images/products/new-age-men-serum.png",
    category: "tratamento",
    badge: "Novidade",
    images: [
      {
        url: "/images/products/new-age-men-serum.png",
        alt: "Sérum Vitamina C",
        type: "main",
      },
      {
        url: "/images/products/serum-vitamina-c-texture.png",
        alt: "Textura Sérum",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação do Sérum",
        type: "usage",
      },
      {
        url: "/images/products/ingredientes-naturais.png",
        alt: "Vitamina C Pura",
        type: "ingredients",
      },
    ],
    features: ["Vitamina C 20%", "Antioxidante", "Ilumina a pele", "Anti-idade"],
    ingredients: ["Vitamina C", "Vitamina E", "Ácido Ferúlico", "Ácido Hialurônico"],
    howToUse: ["Use pela manhã", "Aplique antes do hidratante", "Evite área dos olhos", "Use protetor solar"],
  },
  {
    id: "serum-acido-hialuronico",
    name: "Sérum Ácido Hialurônico",
    price: 139.9,
    originalPrice: 179.9,
    description: "Hidratação intensa e preenchimento natural",
    image: "/images/products/nam-serum-dropper.png",
    category: "tratamento",
    badge: "Premium",
    images: [
      {
        url: "/images/products/nam-serum-dropper.png",
        alt: "Sérum Ácido Hialurônico",
        type: "main",
      },
      {
        url: "/images/products/serum-hialuronico-texture.png",
        alt: "Textura Hidratante",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Hidratação Profunda",
        type: "usage",
      },
    ],
    features: ["Ácido Hialurônico", "Hidratação 24h", "Preenchimento", "Todos os tipos de pele"],
    ingredients: ["Ácido Hialurônico", "Glicerina", "Pantenol", "Aloe Vera"],
  },
  {
    id: "serum-niacinamida",
    name: "Sérum Niacinamida 10%",
    price: 119.9,
    originalPrice: 149.9,
    description: "Controla oleosidade e minimiza poros",
    image: "/images/products/serum-niacinamida-main.png",
    category: "tratamento",
    badge: "",
    images: [
      {
        url: "/images/products/serum-niacinamida-main.png",
        alt: "Sérum Niacinamida 10%",
        type: "main",
      },
      {
        url: "/images/products/serum-niacinamida-texture.png",
        alt: "Textura Leve",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Controle de Oleosidade",
        type: "usage",
      },
    ],
    features: ["Niacinamida 10%", "Controla oleosidade", "Minimiza poros", "Uniformiza tom"],
    ingredients: ["Niacinamida", "Zinco", "Ácido Hialurônico", "Glicerina"],
  },

  // Esfoliação
  {
    id: "esfoliante-facial",
    name: "Esfoliante Facial",
    price: 69.9,
    originalPrice: 89.9,
    description: "Remove células mortas e desobstrui poros",
    image: "/images/products/esfoliante-facial-main.png",
    category: "esfoliacao",
    badge: "",
    images: [
      {
        url: "/images/products/esfoliante-facial-main.png",
        alt: "Esfoliante Facial",
        type: "main",
      },
      {
        url: "/images/products/esfoliante-facial-texture.png",
        alt: "Microesferas Esfoliantes",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Modo de Esfoliação",
        type: "usage",
      },
    ],
    features: ["Microesferas naturais", "Remove células mortas", "Desobstrui poros", "Suave"],
    ingredients: ["Microesferas de Jojoba", "Ácido Salicílico", "Aloe Vera", "Vitamina E"],
  },
  {
    id: "peeling-quimico",
    name: "Peeling Químico Suave",
    price: 159.9,
    originalPrice: 199.9,
    description: "Renovação celular com ácidos suaves",
    image: "/images/products/peeling-quimico-main.png",
    category: "esfoliacao",
    badge: "Premium",
    images: [
      {
        url: "/images/products/peeling-quimico-main.png",
        alt: "Peeling Químico Suave",
        type: "main",
      },
      {
        url: "/images/products/peeling-quimico-texture.png",
        alt: "Fórmula Concentrada",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação Noturna",
        type: "usage",
      },
    ],
    features: ["Ácidos AHA/BHA", "Renovação celular", "Uso noturno", "Resultados visíveis"],
    ingredients: ["Ácido Glicólico", "Ácido Salicílico", "Ácido Lático", "Niacinamida"],
  },

  // Área dos Olhos
  {
    id: "creme-olhos",
    name: "Creme para Área dos Olhos",
    price: 109.9,
    originalPrice: 139.9,
    description: "Reduz olheiras e linhas de expressão",
    image: "/images/products/creme-olhos-main.png",
    category: "olhos",
    badge: "",
    images: [
      {
        url: "/images/products/creme-olhos-main.png",
        alt: "Creme para Área dos Olhos",
        type: "main",
      },
      {
        url: "/images/products/creme-olhos-texture.png",
        alt: "Textura Delicada",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação nos Olhos",
        type: "usage",
      },
    ],
    features: ["Reduz olheiras", "Anti-rugas", "Hidratação delicada", "Oftalmologicamente testado"],
    ingredients: ["Cafeína", "Retinol", "Ácido Hialurônico", "Peptídeos"],
  },
  {
    id: "gel-olhos-cafeina",
    name: "Gel para Olhos com Cafeína",
    price: 89.9,
    originalPrice: 119.9,
    description: "Desinchaço instantâneo e redução de olheiras",
    image: "/images/products/gel-olhos-cafeina-main.png",
    category: "olhos",
    badge: "Novidade",
    images: [
      {
        url: "/images/products/gel-olhos-cafeina-main.png",
        alt: "Gel para Olhos com Cafeína",
        type: "main",
      },
      {
        url: "/images/products/gel-olhos-cafeina-texture.png",
        alt: "Textura Gel Refrescante",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Efeito Desinchaço",
        type: "usage",
      },
    ],
    features: ["Cafeína concentrada", "Efeito refrescante", "Desinchaço imediato", "Base aquosa"],
    ingredients: ["Cafeína", "Extrato de Pepino", "Ácido Hialurônico", "Mentol"],
  },

  // Máscaras
  {
    id: "mascara-argila",
    name: "Máscara de Argila Purificante",
    price: 54.9,
    originalPrice: 74.9,
    description: "Purifica poros e controla oleosidade",
    image: "/images/products/mascara-argila-main.png",
    category: "mascara",
    badge: "",
    images: [
      {
        url: "/images/products/mascara-argila-main.png",
        alt: "Máscara de Argila Purificante",
        type: "main",
      },
      {
        url: "/images/products/mascara-argila-texture.png",
        alt: "Argila Natural",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Aplicação da Máscara",
        type: "usage",
      },
    ],
    features: ["Argila bentonítica", "Purifica poros", "Controla oleosidade", "Uso semanal"],
    ingredients: ["Argila Bentonítica", "Carvão Ativado", "Óleo de Tea Tree", "Extrato de Hamamélis"],
  },
  {
    id: "mascara-hidratante",
    name: "Máscara Hidratante Intensiva",
    price: 64.9,
    originalPrice: 84.9,
    description: "Hidratação profunda em 15 minutos",
    image: "/images/products/mascara-hidratante-main.png",
    category: "mascara",
    badge: "",
    images: [
      {
        url: "/images/products/mascara-hidratante-main.png",
        alt: "Máscara Hidratante Intensiva",
        type: "main",
      },
      {
        url: "/images/products/mascara-hidratante-texture.png",
        alt: "Textura Cremosa",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Hidratação Intensiva",
        type: "usage",
      },
    ],
    features: ["Hidratação intensiva", "15 minutos", "Todos os tipos de pele", "Efeito imediato"],
    ingredients: ["Ácido Hialurônico", "Glicerina", "Aloe Vera", "Óleo de Argan"],
  },

  // Kits
  {
    id: "kit-completo",
    name: "Kit Completo N.A.M",
    price: 399.9,
    originalPrice: 599.9,
    description: "Todos os produtos essenciais em um kit especial",
    image: "/images/products/nam-complete-kit-blue.png",
    category: "kit",
    badge: "Oferta Especial",
    images: [
      {
        url: "/images/products/nam-complete-kit-blue.png",
        alt: "Kit Completo N.A.M",
        type: "main",
      },
      {
        url: "/images/products/nam-complete-line.png",
        alt: "Produtos do Kit",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Rotina Completa",
        type: "usage",
      },
      {
        url: "/images/products/ingredientes-naturais.png",
        alt: "Embalagem Premium",
        type: "ingredients",
      },
    ],
    features: ["6 produtos", "Rotina completa", "Embalagem premium", "Guia de uso"],
    ingredients: ["Todos os ativos essenciais", "Fórmulas complementares", "Testado dermatologicamente"],
  },
  {
    id: "kit-iniciante",
    name: "Kit Iniciante Skincare",
    price: 199.9,
    originalPrice: 279.9,
    description: "Perfeito para quem está começando nos cuidados",
    image: "/images/products/nam-starter-kit-premium.png",
    category: "kit",
    badge: "Mais Vendido",
    images: [
      {
        url: "/images/products/nam-starter-kit-premium.png",
        alt: "Kit Iniciante Skincare",
        type: "main",
      },
      {
        url: "/images/products/kit-iniciante-detail.png",
        alt: "3 Produtos Essenciais",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Rotina Básica",
        type: "usage",
      },
    ],
    features: ["3 produtos essenciais", "Para iniciantes", "Rotina simples", "Manual incluído"],
    ingredients: ["Fórmulas suaves", "Ingredientes básicos", "Testado para sensibilidade"],
  },
  {
    id: "kit-anti-idade",
    name: "Kit Anti-Idade Premium",
    price: 349.9,
    originalPrice: 479.9,
    description: "Tratamento completo contra sinais de envelhecimento",
    image: "/images/products/nam-anti-aging-duo.png",
    category: "kit",
    badge: "Premium",
    images: [
      {
        url: "/images/products/nam-anti-aging-duo.png",
        alt: "Kit Anti-Idade Premium",
        type: "main",
      },
      {
        url: "/images/products/kit-anti-idade-detail.png",
        alt: "Produtos Anti-Idade",
        type: "detail",
      },
      {
        url: "/images/products/aplicacao-rosto.png",
        alt: "Tratamento Completo",
        type: "usage",
      },
    ],
    features: ["4 produtos premium", "Anti-idade avançado", "Resultados visíveis", "Fórmulas concentradas"],
    ingredients: ["Retinol", "Peptídeos", "Vitamina C", "Ácido Hialurônico"],
  },
]

export const categories = [
  { id: "all", name: "Todos os Produtos" },
  { id: "limpeza", name: "Limpeza Facial" },
  { id: "hidratante", name: "Hidratantes" },
  { id: "protecao", name: "Proteção Solar" },
  { id: "tratamento", name: "Séruns e Tratamentos" },
  { id: "esfoliacao", name: "Esfoliação" },
  { id: "olhos", name: "Área dos Olhos" },
  { id: "mascara", name: "Máscaras" },
  { id: "kit", name: "Kits" },
]
