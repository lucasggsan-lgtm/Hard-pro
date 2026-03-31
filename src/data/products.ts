import { Product } from "../types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Parafusadeira/Furadeira de Impacto 1/2\" 20V MAX",
    sku: "DCD7781D2-BR",
    price: 1299.90,
    category: "Ferramentas",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    description: "Parafusadeira e furadeira de impacto a bateria 20V MAX. Ideal para perfurações em alvenaria, madeira e metal. Motor Brushless sem escovas de carvão para maior durabilidade.",
    stock: 45,
    features: [
      "Motor Brushless (sem escovas de carvão)",
      "Mandril de aperto rápido 1/2\" (13mm)",
      "2 velocidades mecânicas",
      "Luz LED para iluminação da área de trabalho"
    ],
    specs: {
      "Voltagem": "20V MAX",
      "Torque Máximo": "65 Nm",
      "Velocidade sem Carga": "0-500 / 0-1750 RPM",
      "Impactos por Minuto": "0-8500 / 0-29750 IPM",
      "Peso": "1.5 kg"
    },
    rating: 4.8,
    reviews: 124,
    relatedIds: ["p2", "p5"]
  },
  {
    id: "p2",
    name: "Jogo de Chaves Combinadas 6 a 32mm (24 peças)",
    sku: "ST09026SJ",
    price: 459.50,
    category: "Ferramentas Manuais",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    description: "Jogo de chaves combinadas em aço cromo vanádio, com acabamento niquelado e cromado. Acompanha estojo organizador em lona.",
    stock: 120,
    features: [
      "Aço Cromo Vanádio de alta resistência",
      "Acabamento resistente à corrosão",
      "Bolsa de lona reforçada para transporte",
      "Medidas de 6mm a 32mm"
    ],
    specs: {
      "Material": "Aço Cromo Vanádio",
      "Quantidade de Peças": "24",
      "Tamanhos": "6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 30, 32 mm",
      "Garantia": "Vitalícia (fabricante)"
    },
    rating: 4.9,
    reviews: 89,
    relatedIds: ["p1", "p3"]
  },
  {
    id: "p3",
    name: "Rolamento Rígido de Esferas 6204-2RS",
    sku: "6204-2RS-SKF",
    price: 35.90,
    category: "Peças Industriais",
    image: "https://images.unsplash.com/photo-1580983546591-9126607c3164?w=800&q=80",
    description: "Rolamento rígido de esferas com vedação de borracha em ambos os lados. Alta precisão e durabilidade para aplicações industriais e automotivas.",
    stock: 500,
    features: [
      "Vedação dupla em borracha (2RS)",
      "Lubrificação permanente",
      "Alta capacidade de carga radial",
      "Baixo nível de ruído"
    ],
    specs: {
      "Diâmetro Interno (d)": "20 mm",
      "Diâmetro Externo (D)": "47 mm",
      "Largura (B)": "14 mm",
      "Material": "Aço Cromo",
      "Velocidade Limite": "10000 RPM"
    },
    rating: 4.7,
    reviews: 210,
    relatedIds: ["p4", "p6"]
  },
  {
    id: "p4",
    name: "Contator Tripolar 32A 220V",
    sku: "CWM32-10-30D23",
    price: 189.90,
    category: "Elétrica",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    description: "Contator de potência tripolar para manobra de motores elétricos e outras cargas. Alta confiabilidade e vida útil mecânica.",
    stock: 85,
    features: [
      "Bobina em corrente alternada",
      "Contatos auxiliares integrados",
      "Fixação por trilho DIN ou parafusos",
      "Design compacto"
    ],
    specs: {
      "Corrente Nominal (In)": "32 A",
      "Tensão da Bobina": "220V CA",
      "Frequência": "50/60 Hz",
      "Contatos Principais": "3 NA",
      "Contatos Auxiliares": "1 NA"
    },
    rating: 4.6,
    reviews: 45,
    relatedIds: ["p5"]
  },
  {
    id: "p5",
    name: "Caixa de Parafusos Sextavados M8x30 (100 un)",
    sku: "PAR-SEXT-M830-ZINC",
    price: 45.00,
    category: "Fixadores",
    image: "https://images.unsplash.com/photo-1584646098378-0874589d79b1?w=800&q=80",
    description: "Parafusos sextavados rosca inteira em aço carbono zincado. Ideal para montagens industriais, estruturas metálicas e uso geral.",
    stock: 300,
    features: [
      "Acabamento zincado branco",
      "Rosca métrica grossa (MA)",
      "Alta resistência à tração",
      "Caixa com 100 unidades"
    ],
    specs: {
      "Diâmetro": "M8 (8mm)",
      "Comprimento": "30 mm",
      "Passo da Rosca": "1.25 mm",
      "Classe de Resistência": "8.8",
      "Material": "Aço Carbono"
    },
    rating: 4.8,
    reviews: 312,
    relatedIds: ["p2", "p3"]
  },
  {
    id: "p6",
    name: "Correia em V Perfil B B-45",
    sku: "COR-B45-GATES",
    price: 28.50,
    category: "Mecânica",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=80",
    description: "Correia de transmissão em V de alta performance. Resistente a óleo, calor e estática. Projetada para transmissões industriais exigentes.",
    stock: 150,
    features: [
      "Cordonéis de tração em poliéster",
      "Cobertura resistente à abrasão",
      "Flexibilidade superior",
      "Baixo alongamento"
    ],
    specs: {
      "Perfil": "B",
      "Comprimento Efetivo": "45 polegadas",
      "Largura Superior": "17 mm",
      "Altura": "11 mm",
      "Material": "Borracha com reforço têxtil"
    },
    rating: 4.5,
    reviews: 67,
    relatedIds: ["p3"]
  }
];

export const categories = [
  { id: "ferramentas", name: "Ferramentas", icon: "Wrench", image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?w=400&q=80" },
  { id: "eletrica", name: "Elétrica", icon: "Zap", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80" },
  { id: "fixadores", name: "Fixadores", icon: "Nut", image: "https://images.unsplash.com/photo-1584646098378-0874589d79b1?w=400&q=80" },
  { id: "pecas-industriais", name: "Peças Industriais", icon: "Settings", image: "https://images.unsplash.com/photo-1580983546591-9126607c3164?w=400&q=80" },
  { id: "mecanica", name: "Mecânica", icon: "Cog", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80" },
];
