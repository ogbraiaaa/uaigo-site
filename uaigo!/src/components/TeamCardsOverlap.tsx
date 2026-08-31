import React, { useState } from 'react';
import { TeamMember } from '../types';
import {
  Users,
  Sparkles,
  Github,
  Mail
} from 'lucide-react';

export const FIXED_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Nayara Giovani",
    role: "Professora e Orientadora",
    area: "Gestão Pedagógica e Metodologia",
    contribution: "Responsável pelo direcionamento metodológico, mentoria pedagógica e validação das etapas do projeto, garantindo o alinhamento estratégico da solução com os objetivos do desafio.",
    bio: "Professora e orientadora acadêmica, responsável pela mentoria pedagógica, direcionamento metodológico e acompanhamento estratégico de projetos de tecnologia e inovação.",
    avatar: "https://res.cloudinary.com/f9kjnmns/image/upload/v1787267551/WhatsApp_Image_2026-08-20_at_20.11.13.jpg",
    skills: ["Metodologia de Projetos", "Mentoria Acadêmica", "Alinhamento Estratégico"],
    socialLinks: {
      email: ""
    }
  },
  {
    id: "2",
    name: "Brayan Silva",
    role: "Desenvolvedor Full Stack & Mobile",
    area: "Desenvolvimento & Arquitetura",
    contribution: "Desenvolvi a solução completa do Desafio dos Dados — criando a aplicação mobile e a plataforma web do zero com Flutter e Node.js/TypeScript, além de integrar recursos de IA e geolocalização com Mapbox.",
    bio: "Desenvolvedor Full-Stack & Mobile, focado em criar soluções completas web e mobile com Flutter, Node.js, TypeScript e ecossistema Linux.",
    avatar: "https://res.cloudinary.com/f9kjnmns/image/upload/v1787266766/WhatsApp_Image_2026-08-20_at_19.20.56.jpg",
    skills: ["Python", "JavaScript/TypeScript", "Node JS", "Mapbox", "Cibersegurança", "IA"],
    socialLinks: {
      github: "https://github.com/ogbraiaaa",
      email: "brayantsilva12@icloud.com"
    }
  },
  {
    id: "3",
    name: "Rondiney Beck",
    role: "Pesquisa Histórica, Conhecimento Cultural e Análise Estratégica",
    area: "Pesquisa e comunicacão",
    contribution: "Contribuiu diretamente para o aprofundamento histórico e cultural do projeto, pesquisando a origem e o contexto de eventos, manifestações culturais, movimentos e pontos turísticos, garantindo mais autenticidade e valorização da cultura local. Também acompanhou a trajetória da equipe, registrou detalhes importantes e realizou uma análise crítica da solução, contribuindo para seu aprimoramento.",
    bio: "Designer centrado no usuário com foco em acessibilidade e democratização digital.",
    avatar: "https://res.cloudinary.com/f9kjnmns/image/upload/v1787266766/WhatsApp_Image_2026-08-20_at_19.37.57.jpg",
    skills: ["Pesquisa Histórica", "Pesquisa Cultural", "Curadoria de Informações", "Análise Crítica", "Documentação"],
    socialLinks: {
      email: "rondineybeck84@gmail.com"
    }
  },
  {
    id: "4",
    name: "Maria Leticia Borges",
    role: "Direção Criativa, Audiovisual e Identidade Visual",
    area: "Desing e Identidade Visual",
    contribution: "Atuou na construção da identidade e da comunicação visual do projeto, conectando estratégia, criatividade e narrativa para transformar a proposta da equipe em uma experiência visual. Foi responsável pela edição do vídeo de transmídia, captação e registro audiovisual de eventos e pontos turísticos, documentação dos momentos da equipe e desenvolvimento da identidade visual, incluindo a criação da logo do aplicativo e do símbolo do Squad.",
    bio: "Estrategista de inovação social focado em impacto comunitário e parcerias público-privadas.",
    avatar: "https://res.cloudinary.com/f9kjnmns/image/upload/v1787270062/WhatsApp_Image_2026-08-20_at_20.41.08.jpg",
    skills: ["Direção Criativa", "Produção Audiovisual", "Edição de Vídeo", "Captação de Imagem e Vídeo", "Design Gráfico", "Identidade Visual", "Branding", "Storytelling", "Comunicação Visual"],
    socialLinks: {
      email: "carlos.negocios@uaigo.app"
    }
  }
];

export const TeamCardsOverlap: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const members = FIXED_TEAM_MEMBERS;

  return (
    <section id="equipe" className="py-24 relative overflow-hidden bg-purple-50/70 border-t border-purple-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            <Users className="w-3.5 h-3.5 text-purple-700" />
            Quem Faz Acontecer
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Integrantes do <span className="text-purple-700">Purple Squad</span>
          </h2>
          <p className="mt-3 text-purple-900/80 text-sm sm:text-base leading-relaxed font-medium">
            Conheça as pessoas por trás do projeto no Desafio dos Dados Vivo. Passe o cursor sobre os cards sobrepostos para expandir e ver a atuação de cada integrante.
          </p>
        </div>

        <div className="relative py-8 px-2 overflow-x-auto lg:overflow-visible pb-16 scrollbar-none">
          <div className="flex items-center justify-start lg:justify-center min-w-max lg:min-w-0 pt-6 pb-10">
            {members.map((member, index) => {
              const isHovered = hoveredId === member.id;
              const hasHoveredOther = hoveredId !== null && !isHovered;

              return (
                <div
                  key={member.id}
                  id={`team-card-${member.id}`}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    relative transition-all duration-500 ease-out cursor-pointer
                    w-[270px] sm:w-[295px] h-[480px] flex flex-col
                    rounded-3xl p-5 sm:p-6 select-none overflow-hidden
                    ${index > 0 ? '-ml-20 sm:-ml-28 md:-ml-32 lg:-ml-24 xl:-ml-20' : 'ml-0'}
                    ${isHovered
                      ? 'z-50 -translate-y-8 scale-105 sm:scale-110 bg-purple-900 text-white border-2 border-amber-400 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.5)] ring-4 ring-purple-400'
                      : hasHoveredOther
                        ? 'z-10 opacity-75 scale-95 blur-[0.3px] bg-white border border-purple-200 shadow-md text-purple-950'
                        : 'z-20 bg-white border-2 border-purple-200 hover:border-purple-400 shadow-xl text-purple-950'
                    }
                  `}
                  style={{
                    zIndex: isHovered ? 50 : 25 - index,
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full truncate max-w-[190px] ${isHovered
                        ? 'bg-purple-950 text-purple-200 border border-purple-600'
                        : 'bg-purple-100 text-purple-900 border border-purple-200'
                        }`}
                    >
                      {member.area}
                    </span>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isHovered ? 'bg-amber-400 text-purple-950' : 'bg-purple-200 text-purple-900'
                        }`}
                    >
                      #{index + 1}
                    </span>
                  </div>

                  <div className="relative mx-auto my-2 text-center group">
                    <div
                      className={`relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden border-2 transition-all duration-300 ${isHovered
                        ? 'border-amber-400 ring-4 ring-purple-400 shadow-lg'
                        : 'border-purple-300 shadow'
                        }`}
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            member.name
                          )}&background=7c3aed&color=fff`;
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center my-2">
                    <h4 className={`text-lg sm:text-xl font-black leading-tight ${isHovered ? 'text-white' : 'text-purple-950'}`}>
                      {member.name}
                    </h4>
                    <p className={`text-xs font-bold mt-1 ${isHovered ? 'text-amber-300' : 'text-purple-700'}`}>
                      {member.role}
                    </p>
                  </div>

                  <div
                    className={`my-2.5 p-3 rounded-2xl border transition-all duration-300 ${isHovered
                      ? 'bg-purple-950/95 border-purple-500/60 shadow-inner'
                      : 'bg-purple-50 border-purple-200'
                      }`}
                  >
                    <div
                      className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider mb-1.5 ${isHovered ? 'text-amber-300' : 'text-purple-700'
                        }`}
                    >
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>Contribuição no Projeto:</span>
                    </div>
                    <p
                      className={`text-[11px] leading-relaxed font-medium transition-all duration-300 ${isHovered
                        ? 'text-purple-100 line-clamp-4 max-h-[72px] overflow-y-auto pr-1'
                        : 'text-purple-900/90 line-clamp-4'
                        }`}
                    >
                      {member.contribution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center my-2">
                    {member.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[9px] font-black px-2 py-0.5 rounded-md border ${isHovered
                          ? 'bg-purple-950 text-purple-200 border-purple-600'
                          : 'bg-purple-100 text-purple-900 border-purple-200'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`pt-3 border-t flex items-center justify-between text-xs ${isHovered ? 'border-purple-700 text-purple-200' : 'border-purple-200 text-purple-700'
                      }`}
                  >
                    <span className="text-[10px] font-black">
                      Purple Squad • Vivo
                    </span>
                    <div className="flex items-center gap-1.5">
                      {member.socialLinks?.github && (
                        <a
                          href={member.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                          className={`p-1.5 rounded-md transition-colors ${isHovered
                            ? 'text-purple-200 hover:text-white hover:bg-purple-800'
                            : 'text-purple-700 hover:text-purple-950 hover:bg-purple-100'
                            }`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socialLinks?.email && (
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          title="E-mail"
                          className={`p-1.5 rounded-md transition-colors ${isHovered
                            ? 'text-purple-200 hover:text-white hover:bg-purple-800'
                            : 'text-purple-700 hover:text-purple-950 hover:bg-purple-100'
                            }`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center text-xs text-purple-700 font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Passe o mouse sobre cada integrante para ver o foco de atuação e contribuições desenvolvidas.</span>
        </div>
      </div>
    </section>
  );
};
