import { TeamMember, CulturalEvent, OdsItem } from '../types';

export const challengeInfo = {
  challengeTitle: "Desafio dos Dados Vivo",
  edition: "Edição Inovação & Impacto Social",
  trackCode: "1.1.2",
  trackTitle: "Ampliação do Acesso à Cultura",
  guidingQuestion: "Como podemos empregar conhecimentos de dados e tecnologia para que a população possa descobrir, acessar e participar de atividades culturais em suas comunidades, fortalecendo a circulação cultural para além dos grandes centros?",
  description: "A proposta convida os squads a investigar os desafios relacionados ao acesso à cultura e à participação em atividades culturais, especialmente em territórios afastados dos grandes centros urbanos. Embora existam diversas iniciativas culturais em diferentes regiões do país, muitas pessoas desconhecem essas oportunidades ou encontram barreiras para acessá-las, seja por falta de informação, distância, custo ou pouca divulgação.",
  opportunityStatement: "A partir da análise de dados sobre oferta cultural, hábitos de consumo de cultura, distribuição de equipamentos culturais e perfil dos públicos, o UaiGO! desenvolve uma solução que aproxima as pessoas das experiências culturais disponíveis em suas comunidades."
};

export const odsData: OdsItem[] = [
  {
    number: 4,
    title: "Educação de Qualidade",
    subtitle: "Garantir a educação inclusiva e equitativa e promover oportunidades de aprendizagem ao longo da vida",
    color: "#C5192D",
    iconName: "GraduationCap",
    howWeAddress: "A cultura é uma extensão viva da educação. O UaiGO! mapeia oficinas gratuitas, saraus literários, cineclubes comunitários e rodas de conversa, permitindo que jovens e famílias acessem saberes e formações culturais em seus próprios bairros.",
    indicators: [
      "Mapeamento de oficinas formativas gratuitas",
      "Integração com bibliotecas e centros comunitários",
      "Incentivo à formação de novos públicos artísticos"
    ]
  },
  {
    number: 10,
    title: "Redução das Desigualdades",
    subtitle: "Reduzir a desigualdade dentro dos países e entre eles",
    color: "#DD1367",
    iconName: "Users",
    howWeAddress: "Democratiza a visibilidade cultural ao romper com a concentração de divulgações restritas às zonas centrais e de alta renda. Dá voz e público para artistas periféricos, coletivos independentes e tradições populares.",
    indicators: [
      "Priorização algorítmica de eventos descentralizados",
      "Destaque para produções periféricas e independentes",
      "Filtros de gratuidade e acessibilidade física/comunicacional"
    ]
  },
  {
    number: 11,
    title: "Cidades e Comunidades Sustentáveis",
    subtitle: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis",
    color: "#FD9D24",
    iconName: "Building2",
    howWeAddress: "Fortalece a ocupação positiva dos espaços públicos locais (praças, vielas culturais, centros de convivência), incentivando a mobilidade ativa, o pertencimento territorial e a economia criativa de bairro.",
    indicators: [
      "Ocupação cívica e pacífica de praças e espaços públicos",
      "Fomento da economia criativa de pequenos produtores",
      "Rotas culturais integradas com transporte público"
    ]
  }
];

export const defaultTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ana Beatriz Rocha",
    role: "Líder de Dados & Engenharia",
    area: "Data Science & Modelagem",
    contribution: "Responsável pelo pipeline de coleta e estruturação de dados de equipamentos culturais públicos, análise de geolocalização e pelo algoritmo de recomendação de proximidade cultural.",
    bio: "Entusiasta de dados com foco em inteligência territorial e impacto social. Conectou as bases públicas com a lógica de recomendação do app.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    skills: ["Python", "Pandas", "GeoPandas", "Algoritmos de Recomendação", "ETL"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "ana.dados@uaigo.app"
    }
  },
  {
    id: "2",
    name: "Lucas Mendes",
    role: "Desenvolvedor Full Stack & Mobile",
    area: "Desenvolvimento & Arquitetura",
    contribution: "Desenvolveu o protótipo funcional do aplicativo UaiGO!, a interface interativa do mapa em tempo real estilo Waze e o sistema de colaboração comunitária de eventos.",
    bio: "Dev apaixonado por interfaces fluidas e acessibilidade web/mobile. Construiu a experiência de navegação do usuário.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    skills: ["React", "TypeScript", "Tailwind CSS", "Mapbox/Leaflet", "REST APIs"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "lucas.dev@uaigo.app"
    }
  },
  {
    id: "3",
    name: "Mariana Alencar",
    role: "Product Designer & UX/UI",
    area: "Design de Produto & Pesquisa",
    contribution: "Conduziu as pesquisas com coletivos culturais periféricos, estruturou a jornada do usuário ('Waze Cultural') e criou o design system acolhedor em tons de roxo e energia criativa.",
    bio: "Especialista em UX para inclusão digital. Focou em garantir que o app fosse leve, intuitivo e fácil de usar por qualquer comunidade.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    skills: ["Figma", "User Research", "Design System", "Acessibilidade", "Prototipagem"],
    socialLinks: {
      linkedin: "#",
      email: "mariana.ux@uaigo.app"
    }
  },
  {
    id: "4",
    name: "Carlos Eduardo Silva",
    role: "Especialista de Negócios & Parcerias",
    area: "Estratégia & Articulação Local",
    contribution: "Mapeou as dores dos produtores culturais independentes, articulou parcerias com coletivos locais e desenhou o modelo de engajamento comunitário e gamificação do app.",
    bio: "Focado em inovação social e desenvolvimento comunitário. Alinhou a solução com as diretrizes do Desafio dos Dados Vivo.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    skills: ["Gestão de Projetos", "Storytelling", "Análise de Negócios", "Articulação Social"],
    socialLinks: {
      linkedin: "#",
      email: "carlos.negocios@uaigo.app"
    }
  },
  {
    id: "5",
    name: "Juliana Santos",
    role: "Analista de Dados & BI",
    area: "Visualização de Dados & Métricas",
    contribution: "Construiu os painéis de calor e mapas de 'desertos culturais', cruzando dados do IBGE, MinC e oferta de transporte para comprovar o impacto da descentralização.",
    bio: "Cientista social aplicada à análise quantitativa. Responsável por traduzir dados brutos em insights para a tomada de decisão.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    skills: ["SQL", "Power BI / Tableau", "Estatística Espacial", "Dados Abertos"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "juliana.bi@uaigo.app"
    }
  }
];

export const sampleEvents: CulturalEvent[] = [
  {
    id: "ev1",
    title: "Sarau das Quebradas & Batalha de Rima",
    category: "sarau",
    neighborhood: "Vila Esperança",
    city: "Zona Leste / Periferia",
    date: "Hoje, 19:30",
    time: "19:30 - 22:00",
    price: "Gratuito",
    isFree: true,
    distance: "850 m de você",
    coordinates: { x: 28, y: 35 },
    description: "Encontro aberto de poesia marginal, microfone livre e batalha de MCs com intervenção de grafite ao vivo na praça comunitária.",
    attendeesCount: 78,
    tags: ["Microfone Aberto", "Grafite", "Jovens", "Acessível"]
  },
  {
    id: "ev2",
    title: "Feira de Gastronomia & Artesanato Afro-Mineiro",
    category: "gastronomia",
    neighborhood: "Bairro Novo Horizonte",
    city: "Região Metropolitana",
    date: "Sábado, 10:00",
    time: "10:00 - 18:00",
    price: "Entrada Franca",
    isFree: true,
    distance: "1.4 km de você",
    coordinates: { x: 62, y: 48 },
    description: "Culinária típica de pequenos produtores familiares, doces tradicionais, artesanato em cerâmica e roda de viola com artistas locais.",
    attendeesCount: 142,
    tags: ["Comida Típica", "Artesãos Locais", "Família", "Música ao Vivo"]
  },
  {
    id: "ev3",
    title: "Teatro de Rua: O Circo da Memória",
    category: "teatro",
    neighborhood: "Jardim das Flores",
    city: "Comunidade São Pedro",
    date: "Domingo, 16:00",
    time: "16:00 - 17:30",
    price: "Gratuito (Passe o Chapéu)",
    isFree: true,
    distance: "2.1 km de você",
    coordinates: { x: 45, y: 72 },
    description: "Espetáculo circense e teatral voltado para todas as idades, resgatando causos e histórias populares do próprio bairro.",
    attendeesCount: 95,
    tags: ["Circo", "Infantil e Adulto", "Rua", "Comunitário"]
  },
  {
    id: "ev4",
    title: "Oficina Aberta de Percussão & Maracatu",
    category: "musica",
    neighborhood: "Centro Cultural Vila Viva",
    city: "Bairro Alto",
    date: "Sexta, 18:00",
    time: "18:00 - 20:00",
    price: "Gratuito",
    isFree: true,
    distance: "3.2 km de você",
    coordinates: { x: 78, y: 22 },
    description: "Aprenda ritmos brasileiros do zero com instrumentos fornecidos pelo coletivo local. Não precisa de experiência prévia!",
    attendeesCount: 54,
    tags: ["Oficina Prática", "Música", "Sem Inscrição Prévia", "Inclusivo"]
  },
  {
    id: "ev5",
    title: "Mostra de Cinema Independente na Parede",
    category: "arte_visual",
    neighborhood: "Praça da Caixa d'Água",
    city: "Vila dos Sonhos",
    date: "Sábado, 20:00",
    time: "20:00 - 22:30",
    price: "Gratuito",
    isFree: true,
    distance: "1.8 km de você",
    coordinates: { x: 18, y: 65 },
    description: "Projeção de curtas-metragens produzidos por cineastas periféricos diretamente no muro da praça com pipoca comunitária.",
    attendeesCount: 110,
    tags: ["Cineclube", "Cinema Nacional", "Pipoca Grátis", "Debate"]
  }
];

export const projectHighlights = [
  {
    icon: "MapPin",
    title: "Navegação Estilo Waze",
    description: "Encontre eventos acontecendo em tempo real ao seu redor, com mapa interativo de calor e avisos da própria comunidade."
  },
  {
    icon: "Sparkles",
    title: "Descentralização Real",
    description: "Nosso algoritmo prioriza eventos em territórios periféricos e bairros distantes que não têm espaço na grande mídia."
  },
  {
    icon: "Users2",
    title: "Cadastro Comunitário",
    description: "Qualquer coletivo, artista de rua ou morador pode cadastrar e divulgar atividades culturais em menos de 1 minuto."
  },
  {
    icon: "Compass",
    title: "Rotas Culturais Inteligentes",
    description: "Gere trajetos que combinam múltiplos pontos culturais com opções seguras e de transporte coletivo."
  },
  {
    icon: "BarChart3",
    title: "Inteligência de Dados",
    description: "Gera relatórios de 'Desertos Culturais' para orientar editais públicos, marcas e patrocinadores com base em dados reais."
  },
  {
    icon: "HeartHandshake",
    title: "100% Inclusivo & Gratuito",
    description: "Filtros para atividades acessíveis, livres de custo e abertas para todas as faixas etárias."
  }
];
