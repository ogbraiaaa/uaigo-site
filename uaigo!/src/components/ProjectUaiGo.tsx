import React from 'react';
import { projectHighlights } from '../data/projectData';
import { MapPin, Navigation, Sparkles, Users, Compass, BarChart3, HeartHandshake, Layers, Smartphone, ShieldCheck, Flame } from 'lucide-react';

export const ProjectUaiGo: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Users2: <Users className="w-5 h-5" />,
    Compass: <Compass className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5" />
  };

  return (
    <section id="sobre-uaigo" className="py-20 relative overflow-hidden bg-purple-50/50">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-black uppercase tracking-wider mb-4">
            <Navigation className="w-3.5 h-3.5 text-purple-700" />
            Nossa Solução Tecnológica
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            O que é o <span className="text-purple-700">UaiGO!</span>?
          </h2>
          <p className="mt-4 text-purple-900/85 text-base sm:text-lg leading-relaxed font-medium">
            Uma plataforma colaborativa e orientada a dados que funciona como um <strong className="text-purple-950 font-bold bg-purple-200/60 px-1.5 py-0.5 rounded">"Waze Cultural"</strong>. Conectamos cidadãos a eventos de bairro, tradições populares e artistas independentes em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-purple-200 shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-900 font-black text-sm">
                  01
                </div>
                <h3 className="text-xl font-black text-purple-950">Por que o nome "UaiGO!"?</h3>
              </div>
              <p className="text-sm sm:text-base text-purple-900/80 leading-relaxed font-medium">
                A expressão calorosa <strong className="text-purple-950 font-bold">"Uai"</strong> simboliza o sentimento de pertencimento, a cultura brasileira de raiz e o acolhimento comunitário. Já o <strong className="text-purple-700 font-black">"GO!"</strong> traz a mobilidade ativa, o convite a sair de casa, descobrir novos horizontes e vivenciar a cultura ao vivo.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-purple-200 shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-900 font-black text-sm">
                  02
                </div>
                <h3 className="text-xl font-black text-purple-950">Como a Lógica de "Waze" Funciona na Cultura?</h3>
              </div>
              <p className="text-sm sm:text-base text-purple-900/80 leading-relaxed font-medium">
                Assim como o motorista usa o Waze para saber o que acontece na via, o usuário do <strong className="text-purple-950 font-bold">UaiGO!</strong> abre o mapa e enxerga alertas culturais em tempo real: <em>"Batalha de MCs começando na praça"</em>, <em>"Feira de artesanato aberta até as 18h"</em>, <em>"Oficina gratuita de cerâmica com vagas"</em>. Qualquer produtor ou morador pode alimentar e validar a rede.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-purple-200 shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-900 font-black text-sm">
                  03
                </div>
                <h3 className="text-xl font-black text-purple-950">Quebrando a Barreira dos "Grandes Centros"</h3>
              </div>
              <p className="text-sm sm:text-base text-purple-900/80 leading-relaxed font-medium">
                Geralmente, os grandes aplicativos de eventos só mostram shows caros em shoppings e teatros centrais. O <strong className="text-purple-950 font-bold">UaiGO!</strong> inverte a lógica: nosso algoritmo de dados pondera a diversidade territorial, garantindo que iniciativas das periferias e comunidades tenham o mesmo ou maior destaque.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-7 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 border-2 border-purple-700 text-white shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-purple-500/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  <span className="text-base font-black text-white">Arquitetura da Solução</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-800 text-purple-100 font-black border border-purple-600">
                  UaiGO! Stack
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">Camada 1: Bases Públicas & Dados Abertos</h4>
                    <p className="text-[11px] text-purple-200">MinC, IBGE, Mapas Culturais dos Municípios e Equipamentos Públicos</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-purple-950 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">Camada 2: Crowdsourcing Comunitário</h4>
                    <p className="text-[11px] text-purple-200">Cadastros ágeis de produtores, artistas de rua e validações por presença</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">Camada 3: Motor de Recomendação Territorial</h4>
                    <p className="text-[11px] text-purple-200">Priorização por proximidade a pé, gratuidade e diversidade de linguagens</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">Camada 4: Interface do Cidadão (UaiGO!)</h4>
                    <p className="text-[11px] text-purple-200">Mapa dinâmico, rotas de mobilidade e alertas de eventos próximos</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-500/30 flex items-center justify-between text-xs text-purple-200">
                <span className="flex items-center gap-1.5 font-bold">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Fácil de usar, leve e acessível
                </span>
                <span className="font-black text-white bg-purple-800 px-2 py-0.5 rounded-md">100% Mobile Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectHighlights.map((feat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-purple-200 hover:border-purple-500 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-700 group-hover:text-white transition-all">
                {iconMap[feat.icon]}
              </div>
              <h3 className="text-xl font-black text-purple-950 mb-2 group-hover:text-purple-700 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-purple-900/80 leading-relaxed font-medium">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
