import React, { useState } from 'react';
import { defaultTeamMembers } from '../data/projectData';
import { TeamMember } from '../types';
import {
  Users,
  Sparkles,
  Code2,
  Database,
  Palette,
  Briefcase,
  Linkedin,
  Github,
  Mail,
  Edit3,
  Plus,
  Trash2,
  Check,
  UserCheck
} from 'lucide-react';

export const TeamCardsOverlap: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>(defaultTeamMembers);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeModalMember, setActiveModalMember] = useState<TeamMember | null>(null);
  const [isEditingSquad, setIsEditingSquad] = useState<boolean>(false);

  // New member temporary state
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('');
  const [newMemberArea, setNewMemberArea] = useState('');
  const [newMemberContribution, setNewMemberContribution] = useState('');
  const [newMemberBio, setNewMemberBio] = useState('');
  const [newMemberSkills, setNewMemberSkills] = useState('');
  const [newMemberAvatar, setNewMemberAvatar] = useState('');

  const handleAddNewMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName || !newMemberRole) return;

    const newM: TeamMember = {
      id: Date.now().toString(),
      name: newMemberName,
      role: newMemberRole,
      area: newMemberArea || 'Squad Member',
      contribution: newMemberContribution || 'Contribuiu com desenvolvimento e pesquisa no projeto UaiGO!.',
      bio: newMemberBio || 'Integrante dedicado do Squad no Desafio dos Dados Vivo.',
      avatar: newMemberAvatar || `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000)}?w=400&auto=format&fit=crop&q=80`,
      skills: newMemberSkills ? newMemberSkills.split(',').map(s => s.trim()) : ['Inovação', 'Trabalho em Equipe'],
      socialLinks: {
        linkedin: '#',
        email: 'contato@uaigo.app'
      }
    };

    setMembers([...members, newM]);
    setNewMemberName('');
    setNewMemberRole('');
    setNewMemberArea('');
    setNewMemberContribution('');
    setNewMemberBio('');
    setNewMemberSkills('');
    setNewMemberAvatar('');
    setIsEditingSquad(false);
  };

  const handleDeleteMember = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <section id="equipe" className="py-24 relative overflow-hidden bg-purple-50/70 border-t border-purple-200">
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-purple-700" />
            Quem Faz Acontecer
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Integrantes do <span className="text-purple-700 underline decoration-purple-300">Squad UaiGO!</span>
          </h2>
          <p className="mt-3 text-purple-900/80 text-sm sm:text-base leading-relaxed font-medium">
            Conheça as pessoas por trás do projeto no Desafio dos Dados Vivo. Passe o mouse sobre os cards sobrepostos para focar e ver as contribuições de cada integrante.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsEditingSquad(!isEditingSquad)}
              className="px-5 py-2 rounded-full bg-white border-2 border-purple-300 hover:border-purple-600 text-xs font-black text-purple-900 hover:text-purple-950 flex items-center gap-1.5 transition-all shadow-md"
            >
              <Edit3 className="w-3.5 h-3.5 text-purple-700" />
              {isEditingSquad ? 'Fechar Edição' : 'Personalizar Integrantes do Grupo'}
            </button>
          </div>
        </div>

        {/* Modal / Inline form to add or edit squad members */}
        {isEditingSquad && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-400 shadow-2xl backdrop-blur-xl max-w-3xl mx-auto animate-fadeIn">
            <div className="flex items-center justify-between border-b border-purple-200 pb-3 mb-5">
              <h3 className="text-base font-black text-purple-950 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-700" />
                Adicionar Integrante ao Squad
              </h3>
              <span className="text-xs text-purple-700 font-bold">
                Total atual: {members.length} integrantes
              </span>
            </div>

            <form onSubmit={handleAddNewMember} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-black text-purple-950">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Ex: João da Silva"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-purple-950">Função / Cargo no Projeto</label>
                <input
                  type="text"
                  placeholder="Ex: Desenvolvedor Front-end & Dados"
                  value={newMemberRole}
                  onChange={(e) => setNewMemberRole(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-purple-950">Área de Atuação</label>
                <input
                  type="text"
                  placeholder="Ex: Ciência de Dados / UX"
                  value={newMemberArea}
                  onChange={(e) => setNewMemberArea(e.target.value)}
                  className="w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-purple-950">Link da Foto (Avatar)</label>
                <input
                  type="url"
                  placeholder="URL da foto (opcional)"
                  value={newMemberAvatar}
                  onChange={(e) => setNewMemberAvatar(e.target.value)}
                  className="w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-black text-purple-950">O que fez no projeto (Contribuição principal)</label>
                <textarea
                  rows={2}
                  placeholder="Descreva as tarefas, análises e entregas que esta pessoa realizou no projeto UaiGO!..."
                  value={newMemberContribution}
                  onChange={(e) => setNewMemberContribution(e.target.value)}
                  className="w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-black text-purple-950">Habilidades / Tecnologias (separadas por vírgula)</label>
                <input
                  type="text"
                  placeholder="Ex: Python, Figma, React, Geoprocessamento"
                  value={newMemberSkills}
                  onChange={(e) => setNewMemberSkills(e.target.value)}
                  className="w-full px-3 py-2 bg-purple-50 border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingSquad(false)}
                  className="px-4 py-2 rounded-xl text-xs text-purple-700 font-bold hover:text-purple-950"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  Salvar Novo Integrante
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* OVERLAPPING VERTICAL CARDS CONTAINER                                     */}
        {/* "card deve ser na vertical e ficar um sobrepondo metade do outro e quando */}
        {/* colocar o mouse ele focar naquele sabe"                                   */}
        {/* ========================================================================= */}
        <div className="relative py-12 px-2 overflow-x-auto lg:overflow-visible pb-16">
          <div className="flex items-center justify-start lg:justify-center min-w-max lg:min-w-0 pt-8 pb-12">
            
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
                    /* Vertical Card Dimensions */
                    w-[290px] sm:w-[320px] min-h-[460px] flex flex-col justify-between
                    rounded-3xl p-6 select-none
                    /* Overlapping Margin logic: first card 0 margin, subsequent overlap half */
                    ${index > 0 ? '-ml-28 sm:-ml-36 lg:-ml-36' : 'ml-0'}
                    /* Z-Index & Elevation logic */
                    ${
                      isHovered
                        ? 'z-40 -translate-y-8 scale-110 bg-purple-900 text-white border-2 border-amber-400 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.5)] ring-4 ring-purple-400'
                        : hasHoveredOther
                        ? 'z-10 opacity-70 scale-95 blur-[0.4px] bg-white border border-purple-200 shadow-md text-purple-950'
                        : 'z-20 bg-white border-2 border-purple-200 hover:border-purple-400 shadow-xl text-purple-950'
                    }
                  `}
                  style={{
                    zIndex: isHovered ? 50 : 20 - index,
                  }}
                >
                  {/* Subtle top indicator badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                      isHovered
                        ? 'bg-purple-950 text-purple-200 border border-purple-600'
                        : 'bg-purple-100 text-purple-900 border border-purple-200'
                    }`}>
                      {member.area}
                    </span>
                    
                    {isEditingSquad && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMember(member.id);
                        }}
                        className="p-1 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200"
                        title="Remover integrante"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Member Photo & Glow */}
                  <div className="relative mx-auto my-2 text-center group">
                    <div
                      className={`relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                        isHovered
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
                          // Fallback avatar if unsplash fails
                          (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=7c3aed&color=fff`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="text-center my-2">
                    <h4 className={`text-xl font-black leading-tight ${isHovered ? 'text-white' : 'text-purple-950'}`}>
                      {member.name}
                    </h4>
                    <p className={`text-xs font-black mt-1 ${isHovered ? 'text-amber-300' : 'text-purple-700'}`}>
                      {member.role}
                    </p>
                  </div>

                  {/* "O que fez no projeto" highlight card inside */}
                  <div
                    className={`my-3 p-3.5 rounded-2xl border transition-all ${
                      isHovered
                        ? 'bg-purple-950/90 border-purple-500/60 shadow-inner'
                        : 'bg-purple-50 border-purple-200'
                    }`}
                  >
                    <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider mb-1 ${
                      isHovered ? 'text-amber-300' : 'text-purple-700'
                    }`}>
                      <Sparkles className="w-3 h-3" />
                      O que fez no projeto:
                    </div>
                    <p className={`text-xs leading-relaxed font-medium ${
                      isHovered ? 'text-purple-100' : 'text-purple-900/90'
                    }`}>
                      {member.contribution}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 justify-center my-2">
                    {member.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[9px] font-black px-2 py-0.5 rounded-md border ${
                          isHovered
                            ? 'bg-purple-950 text-purple-200 border-purple-600'
                            : 'bg-purple-100 text-purple-900 border-purple-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social and bio drawer on hover focus */}
                  <div className={`pt-3 border-t flex items-center justify-between text-xs ${
                    isHovered ? 'border-purple-700 text-purple-200' : 'border-purple-200 text-purple-700'
                  }`}>
                    <span className="text-[10px] font-black">
                      Squad UaiGO! Vivo
                    </span>
                    <div className="flex items-center gap-2">
                      {member.socialLinks?.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          className={`p-1 rounded-md ${
                            isHovered ? 'text-purple-200 hover:text-white hover:bg-purple-800' : 'text-purple-700 hover:text-purple-950 hover:bg-purple-100'
                          }`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socialLinks?.github && (
                        <a
                          href={member.socialLinks.github}
                          className={`p-1 rounded-md ${
                            isHovered ? 'text-purple-200 hover:text-white hover:bg-purple-800' : 'text-purple-700 hover:text-purple-950 hover:bg-purple-100'
                          }`}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socialLinks?.email && (
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          className={`p-1 rounded-md ${
                            isHovered ? 'text-purple-200 hover:text-white hover:bg-purple-800' : 'text-purple-700 hover:text-purple-950 hover:bg-purple-100'
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

        {/* Helpful user tip */}
        <div className="text-center text-xs text-purple-700 font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Dica: passe o cursor por cada integrante para ver o foco de atuação e tarefas desenvolvidas.</span>
        </div>

      </div>
    </section>
  );
};
