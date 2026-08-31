import React from 'react';
import { BarChart3, ShieldAlert, Sparkles } from 'lucide-react';

export const DataImpactSection: React.FC = () => {
  return (
    <section id="impacto" className="py-20 relative overflow-hidden bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-purple-700" />
            Inteligência Territorial & Dados
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            O Poder dos Dados na <span className="text-purple-700 underline decoration-purple-300">Descentralização Cultural</span>
          </h2>
          <p className="mt-3 text-purple-900/80 text-sm sm:text-base font-medium">
            Como transformamos dados abertos, georreferenciamento e crowdsourcing em ferramentas de equidade territorial no Desafio dos Dados Vivo.
          </p>
        </div>

        {/* Comparative Cards: O Cenário Tradicional vs O Modelo UaiGO! */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Cenário Centralizado Tradicional */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-rose-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-300 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                Cenário Centralizado Tradicional
              </span>
              <span className="text-xs text-purple-700 font-bold">Diagnóstico de Dados</span>
            </div>

            <h3 className="text-2xl font-black text-purple-950">
              Concentração e Invisibilidade Periférica
            </h3>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-start gap-3.5">
                <div className="text-xl font-black text-rose-700 mt-0.5">82%</div>
                <div>
                  <h4 className="text-xs font-black text-purple-950">Eventos concentrados no centro</h4>
                  <p className="text-[11px] text-purple-900/80 font-medium">A divulgação oficial e os grandes portais cobrem quase exclusivamente bairros nobres e centrais.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-start gap-3.5">
                <div className="text-xl font-black text-rose-700 mt-0.5">2h+</div>
                <div>
                  <h4 className="text-xs font-black text-purple-950">Deslocamento médio do público periférico</h4>
                  <p className="text-[11px] text-purple-900/80 font-medium">Moradores de comunidades precisam gastar horas e passagens de ônibus para acessar teatros e museus.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-start gap-3.5">
                <div className="text-xl font-black text-rose-700 mt-0.5">67%</div>
                <div>
                  <h4 className="text-xs font-black text-purple-950">Artistas locais sem canal de divulgação</h4>
                  <p className="text-[11px] text-purple-900/80 font-medium">Saraus, grupos de teatro comunitário e feirantes locais dependem apenas do boca a boca restrito.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impacto com UaiGO! */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 border-2 border-purple-700 shadow-2xl text-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-200 border border-emerald-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Impacto com a Solução UaiGO!
              </span>
              <span className="text-xs text-amber-300 font-black">Proposta de Valor</span>
            </div>

            <h3 className="text-2xl font-black text-white">
              Cultura Democrática, Próxima e Ativa
            </h3>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-start gap-3.5">
                <div className="text-xl font-black text-emerald-400 mt-0.5">100%</div>
                <div>
                  <h4 className="text-xs font-black text-white">Território mapeável e colaborativo</h4>
                  <p className="text-[11px] text-purple-200 font-medium">Qualquer viela, praça ou centro comunitário passa a ter presença digital no radar cultural.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-start gap-3.5">
                <div className="text-xl font-black text-amber-400 mt-0.5">&lt; 15 min</div>
                <div>
                  <h4 className="text-xs font-black text-white">Acesso a pé ou de transporte rápido</h4>
                  <p className="text-[11px] text-purple-200 font-medium">Foco em descobrir experiências acontecendo no raio de caminhada do próprio morador.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-start gap-3.5">
                <div className="text-xl font-black text-purple-300 mt-0.5">+4.5x</div>
                <div>
                  <h4 className="text-xs font-black text-white">Aumento de visibilidade para coletivos locais</h4>
                  <p className="text-[11px] text-purple-200 font-medium">O algoritmo recomenda com equidade, fortalecendo a renda e o pertencimento da comunidade.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Big Numbers Row */}
        <div className="p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-purple-200">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-purple-700">
                ODS 4, 10, 11
              </div>
              <p className="text-xs font-black text-purple-950 mt-1">Metas Globais Integradas</p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-purple-950">
                Zero Custo
              </div>
              <p className="text-xs font-black text-purple-950 mt-1">Foco em Atividades Gratuitas</p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-600">
                Tempo Real
              </div>
              <p className="text-xs font-black text-purple-950 mt-1">Alertas e Validações Comunitárias</p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-emerald-700">
                Descentralizado
              </div>
              <p className="text-xs font-black text-purple-950 mt-1">Fortalecimento das Periferias</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
