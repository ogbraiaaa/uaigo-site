export const kpiCards = [
  {
    id: 'app-interest',
    label: 'Interesse no App Turístico',
    value: '85%',
    description: 'Aceitação em usar um app dedicado ao turismo local',
    trend: 'up' as const,
    color: 'emerald',
  },
  {
    id: 'use-probability',
    label: 'Probabilidade de Uso',
    value: 'Alta',
    description: 'Média de alta a muito alta no planejamento de viagens',
    trend: 'up' as const,
    color: 'purple',
  },
  {
    id: 'main-channel',
    label: 'Principal Canal',
    value: '>70%',
    description: 'Redes Sociais como principal forma de divulgação',
    trend: 'neutral' as const,
    color: 'blue',
  },
  {
    id: 'visit-frequency',
    label: 'Frequência de Visita',
    value: 'Baixa',
    description: 'Maioria declara visitar "Nunca" ou "Raramente"',
    trend: 'down' as const,
    color: 'amber',
  },
];

export const channelData = [
  { name: 'Redes Sociais', value: 72, fill: '#7c3aed' },
  { name: 'Amigos ou familiares', value: 55, fill: '#a78bfa' },
  { name: 'Sites/Portais de Notícias', value: 38, fill: '#c4b5fd' },
  { name: 'Outros/Rádio', value: 15, fill: '#ede9fe' },
];

export const eventTypeData = [
  { name: 'Shows e Festivais', votes: 142, fill: '#7c3aed' },
  { name: 'Eventos Gastronômicos', votes: 118, fill: '#a78bfa' },
  { name: 'Feiras e Exposições', votes: 95, fill: '#c4b5fd' },
  { name: 'Oficinas e Workshops', votes: 72, fill: '#ddd6fe' },
  { name: 'Saraus Literários', votes: 58, fill: '#ede9fe' },
];

export const appFeaturesData = [
  { name: 'Agenda atualizada de eventos', votes: 156, fill: '#7c3aed' },
  { name: 'Mapa turístico interativo', votes: 138, fill: '#8b5cf6' },
  { name: 'Guia de Restaurantes e Gastronomia', votes: 121, fill: '#a78bfa' },
  { name: 'Fotos e vídeos dos locais', votes: 105, fill: '#c4b5fd' },
  { name: 'Roteiros turísticos prontos', votes: 89, fill: '#ddd6fe' },
  { name: 'Sugestões personalizadas', votes: 74, fill: '#ede9fe' },
];

export const interactivityData = [
  { name: 'Fotos e vídeos publicados pelos participantes', value: 42, fill: '#7c3aed' },
  { name: 'Roteiros combinando eventos, pontos e restaurantes', value: 28, fill: '#a78bfa' },
  { name: 'Compartilhar eventos e salvar favoritos', value: 18, fill: '#c4b5fd' },
  { name: 'Outras funcionalidades', value: 12, fill: '#ede9fe' },
];

export const ratingDistribution = [
  { nota: '1', pessoas: 3 },
  { nota: '2', pessoas: 5 },
  { nota: '3', pessoas: 8 },
  { nota: '4', pessoas: 15 },
  { nota: '5', pessoas: 22 },
  { nota: '6', pessoas: 28 },
  { nota: '7', pessoas: 20 },
  { nota: '8', pessoas: 12 },
  { nota: '9', pessoas: 6 },
  { nota: '10', pessoas: 3 },
];

export const communitySuggestions = [
  {
    id: 1,
    icon: 'TrendingUp',
    title: 'Investir em Redes Sociais e Influenciadores',
    description: 'Aumentar a presença digital com parcerias com criadores de conteúdo locais e regionais para ampliar o alcance da divulgação de eventos.',
    impact: 'Alto',
    category: 'Marketing Digital',
  },
  {
    id: 2,
    icon: 'Mountain',
    title: 'Infraestrutura nas Belezas Naturais',
    description: 'Dar mais visibilidade e criar infraestrutura adequada nas belezas naturais, como a Cachoeira do Fagundes, com sinalização e acessibilidade.',
    impact: 'Alto',
    category: 'Infraestrutura',
  },
  {
    id: 3,
    icon: 'MapPin',
    title: 'Sinalização Turística no Centro',
    description: 'Instalar sinalização turística e pontos físicos de informação no centro da cidade, facilitando a orientação de visitantes.',
    impact: 'Médio',
    category: 'Infraestrutura',
  },
  {
    id: 4,
    icon: 'Smartphone',
    title: 'Aplicativo Consolidado com Agenda e Mapas',
    description: 'Criar um aplicativo integrado com agenda de eventos, mapas interativos e rotas turísticas que una toda a experiência de visitante.',
    impact: 'Alto',
    category: 'Tecnologia',
  },
];
