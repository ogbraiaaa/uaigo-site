import React, { useState } from 'react';
import { challengeInfo, odsData } from '../data/projectData';
import { Target, BookOpen, Users, Building2, Briefcase, CheckCircle2, ChevronRight, HelpCircle, Lightbulb, Compass, Award } from 'lucide-react';

export const ChallengeSection: React.FC = () => {
  const [selectedOdsIndex, setSelectedOdsIndex] = useState(0);

  const odsIcons: Record<string, React.ReactNode> = {
    GraduationCap: <BookOpen className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Building2: <Building2 className="w-6 h-6" />
  };

  return (
    <section id="desafio" className="py-20 relative bg-white/70 border-y border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-black uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5 text-purple-700" />
            Contexto Institucional
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Sobre o <span className="text-purple-700">Desafio dos Dados Vivo</span>
          </h2>
          <p className="mt-3 text-purple-900/80 text-base leading-relaxed font-medium">
            Uma maratona de inovação e ciência de dados promovida pela Vivo para desenvolver soluções tecnológicas de alto impacto social, transformando indicadores públicos em ferramentas práticas para os cidadãos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-3xl bg-white border border-purple-200 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-4">
              <Lightbulb className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-black text-purple-950 mb-2">Dados com Propósito Social</h3>
            <p className="text-sm text-purple-900/80 leading-relaxed font-medium">
              O desafio convida os squads a transformar bases de dados governamentais e territoriais em soluções que resolvem problemas reais da sociedade brasileira.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-purple-200 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-4">
              <Compass className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-black text-purple-950 mb-2">Descentralização & Território</h3>
            <p className="text-sm text-purple-900/80 leading-relaxed font-medium">
              Foco na quebra da centralização dos serviços e oportunidades, levando visibilidade a territórios periféricos e comunidades historicamente invisibilizadas.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-purple-200 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-4">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-black text-purple-950 mb-2">Alinhamento aos ODS da ONU</h3>
            <p className="text-sm text-purple-900/80 leading-relaxed font-medium">
              Propostas estruturadas e mensuráveis que aceleram metas dos Objetivos de Desenvolvimento Sustentável da Agenda 2030.
            </p>
          </div>
        </div>

        <div id="questao-ods" className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white border-2 border-purple-700 shadow-2xl shadow-purple-900/30 mb-16 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-purple-950 text-xs font-black uppercase tracking-wider shadow-sm">
                Desafio Escolhido • Eixo {challengeInfo.trackCode}
              </span>
              <span className="text-xs text-purple-200 font-bold">
                Desafio dos Dados Vivo | Purple Squad
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white mb-6 tracking-tight">
              {challengeInfo.trackCode} {challengeInfo.trackTitle}
            </h3>

            <div className="p-6 sm:p-8 rounded-2xl bg-purple-950/80 border border-purple-500/40 mb-6 shadow-inner">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-7 h-7 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-black text-amber-300 tracking-widest mb-1.5">
                    Questão Norteadora Oficial
                  </h4>
                  <p className="text-lg sm:text-xl font-bold text-white italic leading-snug">
                    "{challengeInfo.guidingQuestion}"
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-purple-100 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-black">Diagnóstico do Problema:</strong> {challengeInfo.description}
              </p>
              <p className="text-amber-200 font-medium">
                <strong className="text-amber-400 font-black">Nossa Resposta com UaiGO!:</strong> {challengeInfo.opportunityStatement}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                Compromisso Global
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-purple-950 mt-1 tracking-tight">
                ODS Principais Envolvidos
              </h3>
            </div>
            <p className="hidden sm:block text-xs font-bold text-purple-800 max-w-xs text-right">
              Clique nos cards de ODS abaixo para ver detalhadamente a contribuição do UaiGO!
            </p>
          </div>              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {odsData.map((item, index) => {
              const isSelected = selectedOdsIndex === index;
              return (
                <button
                  key={item.number}
                  id={`ods-tab-${item.number}`}
                  onClick={() => setSelectedOdsIndex(index)}
                  className={`p-5 rounded-2xl text-left transition-all duration-200 border relative overflow-hidden ${
                    isSelected
                      ? 'bg-purple-100/80 border-purple-600 shadow-lg ring-2 ring-purple-600/30'
                      : 'bg-white border-purple-200 hover:border-purple-400 hover:bg-purple-50/50 shadow-sm'
                  }`}
                >
                  <div
                    className="absolute top-0 left-0 bottom-0 w-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="pl-3 flex items-center justify-between">
                    <div>
                      <span
                        className="text-xs font-black px-2.5 py-0.5 rounded text-white inline-block mb-1.5"
                        style={{ backgroundColor: item.color }}
                      >
                        ODS {item.number}
                      </span>
                      <h4 className="text-base font-black text-purple-950">{item.title}</h4>
                    </div>
                    <div className="text-purple-700">
                      {odsIcons[item.iconName]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {odsData[selectedOdsIndex] && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-purple-200 shadow-xl">
              <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="text-xs font-black px-3 py-1 rounded text-white"
                      style={{ backgroundColor: odsData[selectedOdsIndex].color }}
                    >
                      Meta ONU • ODS {odsData[selectedOdsIndex].number}
                    </span>
                    <h4 className="text-xl font-black text-purple-950">
                      {odsData[selectedOdsIndex].title}
                    </h4>
                  </div>
                  <p className="text-xs text-purple-700 font-bold italic">
                    "{odsData[selectedOdsIndex].subtitle}"
                  </p>
                  <div>
                    <h5 className="text-xs font-black text-purple-900 uppercase tracking-wider mb-1.5">
                      Como o UaiGO! atua nesta meta:
                    </h5>
                    <p className="text-purple-950 text-sm sm:text-base leading-relaxed font-medium">
                      {odsData[selectedOdsIndex].howWeAddress}
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-80 bg-purple-50 p-5 rounded-2xl border border-purple-200">
                  <h5 className="text-xs font-black text-purple-900 uppercase tracking-wider mb-3">
                    Ações & Indicadores do Projeto
                  </h5>
                  <ul className="space-y-2.5">
                    {odsData[selectedOdsIndex].indicators.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-purple-950 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
