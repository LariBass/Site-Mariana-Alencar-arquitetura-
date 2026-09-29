/**
 * Configuração e Conteúdo Institucional do Escritório de Arquitetura
 * 
 * Todas as variáveis principais estão centralizadas aqui para facilitar
 * personalizações de nome, contatos, localização, projetos e textos.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residencial' | 'Comercial' | 'Interiores' | 'Reformas';
  location: string;
  year: string;
  area: string;
  image: string;
  gallery: string[];
  description: string;
  concept: string;
  featured?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientType: string;
  projectInfo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const OFFICE_CONFIG = {
  // Dados do Arquiteto / Escritório
  brandName: "Mariana Alencar",
  brandSubtitle: "Arquitetura & Interiores",
  architectName: "Mariana Alencar",
  cau: "A149823-7",
  specialties: "ARQUITETURA • INTERIORES • DESIGN",

  // Contatos
  // Placeholder oficial conforme briefing: https://wa.me/55XXXXXXXXXXX
  whatsappNumber: "55XXXXXXXXXXX",
  whatsappUrl: "https://wa.me/55XXXXXXXXXXX",
  phoneDisplay: "+55 (11) 98765-4321",
  email: "contato@marianaalencar.arq.br",
  instagram: "@marianaalencar.arq",
  instagramUrl: "https://instagram.com",

  // Localização
  city: "São Paulo",
  state: "SP",
  address: "Rua Oscar Freire, 1420 - Jardins",
  neighborhood: "Jardins, São Paulo - SP",
  postalCode: "01426-001",
  regionServed: "São Paulo, Grande ABC, Litoral, Interior e atendimento online para todo o Brasil",
  googleMapsUrl: "https://maps.google.com/?q=Rua+Oscar+Freire+1420+Jardins+Sao+Paulo",

  // Mensagens pré-definidas para o WhatsApp
  messages: {
    hero: "Olá! Gostaria de conversar sobre um projeto com o escritório Mariana Alencar Arquitetura.",
    service: (serviceName: string) => `Olá! Gostaria de saber mais sobre o serviço de ${serviceName} para o meu espaço.`,
    project: (projectName: string) => `Olá! Vi o projeto "${projectName}" no site e gostaria de solicitar um orçamento para um projeto com características semelhantes.`,
    process: "Olá! Gostaria de entender os prazos e etapas para iniciar meu projeto de arquitetura.",
    general: "Olá! Conheci o trabalho de vocês pelo site e gostaria de conversar sobre um projeto de arquitetura.",
  },

  // Imagens principais
  images: {
    hero: "/src/assets/images/hero_architecture_vertical_1790634791156.jpg",
    architect: "/src/assets/images/architect_portrait_1790634802969.jpg",
    ctaBackground: "/src/assets/images/cta_architecture_panoramic_1790634853555.jpg",
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Projetos Residenciais",
    description: "Projetos para casas e apartamentos, considerando a rotina dos moradores, distribuição dos ambientes, estética e funcionalidade.",
    details: [
      "Estudo preliminar e implantação bioclimática",
      "Projeto legal para aprovação em condomínios e prefeitura",
      "Projeto executivo arquitetônico detalhado",
      "Compatibilização com projetos complementares"
    ]
  },
  {
    number: "02",
    title: "Projetos Comerciais",
    description: "Espaços comerciais planejados de acordo com as necessidades do negócio, buscando equilíbrio entre identidade, circulação e funcionalidade.",
    details: [
      "Alinhamento da arquitetura à identidade da marca",
      "Otimização de fluxos de clientes e colaboradores",
      "Especificação de materiais de alto desempenho e durabilidade",
      "Atenção às normas técnicas, acessibilidade e ergonomia"
    ]
  },
  {
    number: "03",
    title: "Arquitetura de Interiores",
    description: "Planejamento de ambientes, layout, materiais, iluminação e composição para criar espaços coerentes com o uso e o estilo desejado.",
    details: [
      "Paginação de pisos e revestimentos",
      "Projeto luminotécnico e forro de gesso",
      "Detalhamento completo de marcenaria sob medida",
      "Curadoria de mobiliário, paleta de cores e texturas"
    ]
  },
  {
    number: "04",
    title: "Reformas",
    description: "Desenvolvimento de projetos para transformar ambientes existentes, considerando as características e necessidades de cada espaço.",
    details: [
      "Levantamento métrico e diagnóstico da estrutura existente",
      "Planta de demolição e construção otimizada",
      "Planejamento para minimizar imprevistos de obra",
      "Readequação de instalações elétricas e hidráulicas"
    ]
  },
  {
    number: "05",
    title: "Projetos 3D",
    description: "Representações visuais que ajudam o cliente a compreender melhor as propostas e visualizar os ambientes antes da execução.",
    details: [
      "Modelagem volumétrica fidedigna em escala real",
      "Renderizações fotorrealistas de alta definição",
      "Estudos de iluminação natural e artificial nos ambientes",
      "Visualização de combinações de materiais e acabamentos"
    ]
  }
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: "casa-horizonte",
    title: "Casa Horizonte",
    category: "Residencial",
    location: "São Paulo / SP",
    year: "2025",
    area: "540 m²",
    image: "/src/assets/images/portfolio_casa_horizonte_1790634812346.jpg",
    gallery: [
      "/src/assets/images/portfolio_casa_horizonte_1790634812346.jpg",
      "/src/assets/images/hero_architecture_vertical_1790634791156.jpg",
      "/src/assets/images/cta_architecture_panoramic_1790634853555.jpg"
    ],
    description: "Residência unifamiliar térrea com estrutura em concreto aparente, grandes vãos livres envidraçados e integração visual com o jardim e espelho d'água.",
    concept: "A proposta partiu do desejo de diluir os limites entre interior e exterior. O concreto ripado e os brises de madeira ripada controlam a incidência solar, garantindo conforto térmico e privacidade aos dormitórios enquanto a área social se abre completamente para a paisagem circundante.",
    featured: true
  },
  {
    id: "apartamento-jardins",
    title: "Apartamento Jardins",
    category: "Interiores",
    location: "São Paulo / SP",
    year: "2025",
    area: "210 m²",
    image: "/src/assets/images/portfolio_apto_jardins_1790634822175.jpg",
    gallery: [
      "/src/assets/images/portfolio_apto_jardins_1790634822175.jpg",
      "/src/assets/images/portfolio_refugio_serra_1790634843250.jpg"
    ],
    description: "Projeto de interiores focado em materiais táteis e paleta neutra e atemporal, combinando painéis em carvalho europeu e mármore travertino navona.",
    concept: "Reorganização do living e integração com a cozinha através de portas de correr embutidas. A iluminação indireta foi projetada para valorizar obras de arte e criar uma atmosfera de serenidade e acolhimento para momentos em família.",
    featured: true
  },
  {
    id: "galeria-cafe-amago",
    title: "Galeria & Café Âmago",
    category: "Comercial",
    location: "Pinheiros, São Paulo / SP",
    year: "2024",
    area: "175 m²",
    image: "/src/assets/images/portfolio_comercial_cafe_1790634832975.jpg",
    gallery: [
      "/src/assets/images/portfolio_comercial_cafe_1790634832975.jpg",
      "/src/assets/images/hero_architecture_vertical_1790634791156.jpg"
    ],
    description: "Espaço híbrido comercial unindo cafeteria de cafés especiais e galeria de arte contemporânea com fluxo contínuo e acolhedor.",
    concept: "O balcão escultural em latão escovado atua como âncora central do espaço, contrastando com o piso monolítico em microcimento e paredes com textura mineral. A disposição do mobiliário incentiva a permanência e a contemplação das exposições temporárias.",
    featured: false
  },
  {
    id: "refugio-da-serra",
    title: "Refúgio da Serra",
    category: "Reformas",
    location: "Campos do Jordão / SP",
    year: "2024",
    area: "380 m²",
    image: "/src/assets/images/portfolio_refugio_serra_1790634843250.jpg",
    gallery: [
      "/src/assets/images/portfolio_refugio_serra_1790634843250.jpg",
      "/src/assets/images/portfolio_casa_horizonte_1790634812346.jpg"
    ],
    description: "Reforma completa e ampliação de residência serrana, integrando paredes em pedra natural preservada a uma nova estrutura metálica preta e esquadrias de alto desempenho.",
    concept: "Valorização da memória arquitetônica existente através da manutenção da alvenaria de pedra rústica original, contrastada com intervenções contemporâneas em aço e vidro duplo para elevar o conforto térmico nas estações frias.",
    featured: true
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    number: "01",
    title: "Atendimento próximo",
    description: "Cada projeto começa a partir das necessidades e características específicas de cada cliente."
  },
  {
    number: "02",
    title: "Projeto personalizado",
    description: "As soluções são desenvolvidas considerando o espaço, a rotina e os objetivos definidos no briefing."
  },
  {
    number: "03",
    title: "Atenção aos detalhes",
    description: "Layout, materiais, iluminação e composição são analisados de forma integrada."
  },
  {
    number: "04",
    title: "Clareza durante o processo",
    description: "As etapas do projeto são apresentadas de maneira organizada para que o cliente acompanhe seu desenvolvimento."
  },
  {
    number: "05",
    title: "Arquitetura com propósito",
    description: "A proposta é encontrar soluções que façam sentido para o espaço e para a forma como ele será utilizado."
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: "01",
    title: "Conversa inicial",
    description: "Você conta um pouco sobre o espaço, suas necessidades e o que pretende realizar.",
    detail: "Alinhamento das expectativas preliminares, localização do imóvel e estimativa de cronograma."
  },
  {
    number: "02",
    title: "Briefing",
    description: "Reunimos as informações necessárias para entender melhor o projeto.",
    detail: "Questionário detalhado de hábitos, rotina de uso dos ambientes, preferências estéticas e orçamento pretendido."
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "A partir do briefing, são desenvolvidas as soluções arquitetônicas adequadas ao projeto.",
    detail: "Elaboração de estudos de layout, modelagem 3D, pesquisas de volumetria, materiais e iluminação."
  },
  {
    number: "04",
    title: "Apresentação",
    description: "O projeto é apresentado para avaliação e alinhamento dos detalhes.",
    detail: "Reunião de apresentação com visualizações tridimensionais, plantas e amostras de materiais para aprovação."
  },
  {
    number: "05",
    title: "Próximas etapas",
    description: "Após a aprovação, seguimos conforme o escopo e as etapas definidas para o serviço contratado.",
    detail: "Entrega do caderno executivo detalhado, especificações técnicas e orientações para o início da execução."
  }
];

/* Substituir por depoimentos reais antes da publicação. */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "dep-1",
    quote: "Desde o primeiro contato, tivemos muita atenção e conseguimos participar das decisões do projeto.",
    clientType: "Cliente residencial",
    projectInfo: "Casa Horizonte · São Paulo/SP"
  },
  {
    id: "dep-2",
    quote: "O projeto nos ajudou a visualizar melhor as possibilidades para o espaço e organizar as próximas etapas.",
    clientType: "Cliente",
    projectInfo: "Apartamento Jardins · São Paulo/SP"
  },
  {
    id: "dep-3",
    quote: "Gostamos principalmente da atenção aos detalhes e da comunicação durante o desenvolvimento.",
    clientType: "Cliente",
    projectInfo: "Refúgio da Serra · Campos do Jordão/SP"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Preciso ter o imóvel pronto para contratar um arquiteto?",
    answer: "Não necessariamente. O momento ideal depende do tipo de projeto. Na conversa inicial é possível entender a situação do imóvel e quais etapas podem ser necessárias."
  },
  {
    question: "O arquiteto atende apenas projetos residenciais?",
    answer: "Não. O escritório também pode atender projetos comerciais, interiores e reformas, conforme os serviços oferecidos."
  },
  {
    question: "Como funciona o primeiro contato?",
    answer: "Você pode entrar em contato pelo WhatsApp e contar brevemente o que pretende fazer. A partir dessas informações, podemos entender melhor sua necessidade e orientar sobre os próximos passos."
  },
  {
    question: "Quanto custa um projeto de arquitetura?",
    answer: "O valor depende de fatores como tipo de projeto, tamanho, complexidade, localização e escopo dos serviços. Por isso, o orçamento é definido após compreender as características do projeto."
  },
  {
    question: "Posso solicitar apenas um projeto de interiores?",
    answer: "Sim, caso esse serviço faça parte do escopo de atendimento do escritório. Entre em contato para explicar o que você precisa."
  },
  {
    question: "Vocês fazem acompanhamento de obra?",
    answer: "O acompanhamento depende dos serviços contratados e do escopo definido para cada projeto. Consulte o escritório para saber quais opções estão disponíveis."
  },
  {
    question: "Atendem projetos fora da cidade?",
    answer: "O atendimento pode variar conforme a localização e o tipo de projeto. Entre em contato para verificar a disponibilidade para sua região."
  }
];
