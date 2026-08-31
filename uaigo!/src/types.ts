export interface TeamMember {
  id: string;
  name: string;
  role: string;
  area: string;
  contribution: string;
  bio: string;
  avatar: string;
  skills: string[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface CulturalEvent {
  id: string;
  title: string;
  category: 'musica' | 'teatro' | 'arte_visual' | 'sarau' | 'gastronomia' | 'danca' | 'workshop';
  neighborhood: string;
  city: string;
  date: string;
  time: string;
  price: string;
  isFree: boolean;
  distance: string;
  coordinates: { x: number; y: number };
  description: string;
  attendeesCount: number;
  tags: string[];
}

export interface OdsItem {
  number: number;
  title: string;
  subtitle: string;
  color: string;
  iconName: string;
  howWeAddress: string;
  indicators: string[];
}
