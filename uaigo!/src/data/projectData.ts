import { TeamMember, CulturalEvent, OdsItem } from '../types';

export interface DiaryEntry {
  id: string;
  title: string;
  content: string;
}

export const diaryEntries: DiaryEntry[] = [
  {
    id: 'inicio',
    title: 'Início da Jornada',
    content: `O grupo Purple Squad começou sua participação no campeonato sem saber muito bem como tudo funcionava. A equipe foi montada e inscrita no último momento, reunindo os integrantes com o objetivo de participar e aprender durante o campeonato.`
  },
  {
    id: 'etapa1',
    title: 'Etapa 1',
    content: `Na primeira etapa, o grupo encarou a competição de forma descontraída, realizando as atividades enquanto conversava e se divertia. Esse período foi importante para que os integrantes se conhecessem melhor, entendessem a dinâmica do campeonato e descobrissem os pontos fortes de cada um. Conforme as fases avançavam, a vontade de vencer aumentava, e o grupo precisou aprender novos conteúdos para responder algumas questões. Enquanto alguns continuavam nas questões de múltipla escolha, outros se isolavam para estudar ou resolver os códigos.

Foi uma fase cansativa, com muitas horas no laboratório, dores de cabeça e bastante desgaste, mas também de muita união e apoio. Os integrantes aprenderam a perceber quando alguém precisava de uma pausa e encontraram nas conversas aleatórias e nos momentos de descontração uma forma de aliviar a tensão. Com o tempo, passaram a se conhecer até nos mínimos detalhes, fortalecendo ainda mais o trabalho em equipe. No fim, todo esse esforço contribuiu para que o Purple Squad superasse os desafios e se classificasse para a Etapa 2.`
  },
  {
    id: 'etapa2',
    title: 'Etapa 2 - Mudança de Mentalidade',
    content: `Ao conseguir passar para a segunda etapa, o Purple Squad percebeu que precisava mudar sua postura. O que antes era levado de forma mais descontraída passou a ser tratado com mais responsabilidade, pois o objetivo de chegar ao primeiro lugar começava a se tornar cada vez mais real. O primeiro passo foi também o mais difícil: transformar as ideias em algo concreto. Quando surgiu a ideia de criar um Waze cultural, porém, foi como se uma luz tivesse se acendido para a equipe. A partir daquele momento, o projeto começou a tomar forma e cada integrante passou a buscar uma área na qual pudesse contribuir melhor.

A equipe se dividiu em diferentes especialidades para que o projeto pudesse se desenvolver, mas, mesmo trabalhando em funções distintas, todos continuaram unidos e ajudando uns aos outros. Enquanto alguns se dedicavam à programação do aplicativo, outros trabalhavam nos roteiros dos vídeos, na criação dos formulários com informações verificadas, no registro fotográfico dos pontos turísticos e na gravação de eventos. Porém, colocar tudo isso em prática trouxe dificuldades que não estavam previstas. Foi necessário realizar deslocamentos até o município vizinho para fazer entrevistas e registros visuais, lidar com um tempo cada vez mais curto e, em alguns momentos, conviver com a dúvida sobre se tudo realmente daria certo.

Como se esses desafios não bastassem, a equipe sofreu um grande baque com a saída de um de seus integrantes. O Purple Squad, agora reduzido a apenas três pessoas, enfrentou um momento inicial de muita tristeza e desmotivação. Além do peso emocional, veio o impacto prático: do dia para a noite, as tarefas da pessoa que saiu precisaram ser divididas entre os que ficaram. Foi um período marcado por extrema preocupação, um salto imenso nas responsabilidades e uma corrida constante contra o tempo. Somado a esse novo cenário de sobrecarga, conciliar o desenvolvimento do projeto com a rotina escolar se tornou um desafio ainda maior. Era preciso continuar acompanhando as aulas, realizar provas, testes e participar de eventos escolares sem deixar o projeto de lado e sem permitir que os estudos fossem prejudicados.

Mesmo diante dessas dificuldades, a equipe continuou avançando. Cada pesquisa realizada, foto tirada, vídeo gravado, código desenvolvido e informação conferida contribuía para transformar a ideia inicial em algo real. Houve momentos de cansaço, insegurança e pressão, mas também de aprendizado e união, principalmente quando os integrantes percebiam que precisavam uns dos outros para superar os obstáculos. Aos poucos, o Purple Squad aprendeu a administrar melhor o tempo, dividir responsabilidades e confiar no trabalho de cada integrante. O campeonato deixou de ser apenas uma competição e passou a representar um verdadeiro projeto coletivo, no qual o objetivo estava cada vez mais claro: não apenas participar, mas buscar o primeiro lugar com algo construído por todos.`
  }
];


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
    number: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    subtitle: "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo, e trabalho decente para todos",
    color: "#A21942",
    iconName: "Briefcase",
    howWeAddress: "Ao ampliar a visibilidade de artistas independentes, feirantes e produtores culturais locais, o UaiGO! fomenta a economia criativa de pequenos produtores, gerando renda e trabalho decente em comunidades que antes não tinham acesso a canais de divulgação e mercado.",
    indicators: [
      "Ampliação da visibilidade de microempreendedores culturais",
      "Fomento à economia criativa e informal organizada",
      "Conexão direta entre produtores culturais e seus públicos"
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
    title: "Sarau Poético no Coreto da Praça dos Andradas",
    category: "sarau",
    neighborhood: "Centro (Jardim Municipal)",
    city: "Barbacena - MG",
    date: "Hoje, 19:30",
    time: "19:30 - 22:00",
    price: "Gratuito",
    isFree: true,
    distance: "400 m de você",
    coordinates: { x: 32, y: 38 },
    description: "Encontro aberto de poesia e declamação no histórico coreto da Praça dos Andradas, com microfone livre para artistas locais e estudantes de Barbacena.",
    attendeesCount: 86,
    tags: ["Microfone Aberto", "Praça dos Andradas", "Poesia Mineira", "Livre"]
  },
  {
    id: "ev2",
    title: "Feira das Rosas, Artesanato & Flores",
    category: "gastronomia",
    neighborhood: "Parque de Exposições Senador Bias Fortes",
    city: "Barbacena - MG",
    date: "Sábado, 09:00",
    time: "09:00 - 18:00",
    price: "Entrada Franca",
    isFree: true,
    distance: "2.1 km de você",
    coordinates: { x: 68, y: 45 },
    description: "Celebrando a tradição da 'Cidade das Rosas', com estandes de floricultores da região, doces artesanais típicos de Minas e artesanato local.",
    attendeesCount: 230,
    tags: ["Festa das Rosas", "Flores", "Doces Mineiros", "Família"]
  },
  {
    id: "ev3",
    title: "Teatro na Antiga Estação Ferroviária: Causos das Vertentes",
    category: "teatro",
    neighborhood: "Bairro São Sebastião",
    city: "Barbacena - MG",
    date: "Domingo, 16:30",
    time: "16:30 - 18:00",
    price: "Gratuito (Passagem de Chapéu)",
    isFree: true,
    distance: "1.2 km de você",
    coordinates: { x: 48, y: 70 },
    description: "Espetáculo cênico comunitário resgatando a rica memória ferroviária e causos populares do Campo das Vertentes em frente ao Centro Cultural.",
    attendeesCount: 115,
    tags: ["Estação Ferroviária", "Teatro Comunitário", "História Local", "Infantil"]
  },
  {
    id: "ev4",
    title: "Roda de Viola & Sons do Pontilhão",
    category: "musica",
    neighborhood: "Bairro Pontilhão",
    city: "Barbacena - MG",
    date: "Sexta, 19:00",
    time: "19:00 - 21:30",
    price: "Gratuito",
    isFree: true,
    distance: "1.6 km de você",
    coordinates: { x: 76, y: 24 },
    description: "Apresentação e roda aberta de viola caipira e MPB com músicos independentes da região do Pontilhão. Traga seu instrumento e participe!",
    attendeesCount: 92,
    tags: ["Moda de Viola", "Pontilhão", "Música ao Vivo", "Comunitário"]
  },
  {
    id: "ev5",
    title: "Mostra de Memória & Arte no Museu da Loucura",
    category: "arte_visual",
    neighborhood: "Bairro Colônia / São Sebastião",
    city: "Barbacena - MG",
    date: "Sábado, 14:00",
    time: "14:00 - 17:00",
    price: "Gratuito",
    isFree: true,
    distance: "2.8 km de você",
    coordinates: { x: 20, y: 64 },
    description: "Exposição artística e documental reflexiva sobre os direitos humanos, saúde mental e resgate histórico através das artes visuais em Barbacena.",
    attendeesCount: 140,
    tags: ["Museu da Loucura", "Artes Visuais", "História & Memória", "Acessível"]
  },
  {
    id: "ev6",
    title: "Feira de Quitandas Mineiras & Produtores no Grogotó",
    category: "gastronomia",
    neighborhood: "Bairro Grogotó (IF Sudeste MG)",
    city: "Barbacena - MG",
    date: "Domingo, 08:30",
    time: "08:30 - 13:00",
    price: "Entrada Franca",
    isFree: true,
    distance: "3.4 km de você",
    coordinates: { x: 82, y: 78 },
    description: "Encontro de agricultura familiar, queijos da Canastra e Vertentes, quitandas quentinhas e cafés especiais produzidos na microrregião de Barbacena.",
    attendeesCount: 165,
    tags: ["Grogotó", "Quitandas Mineiras", "Cafés Especiais", "Produtor Local"]
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
