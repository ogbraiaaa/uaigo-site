import React from 'react';
import { MapPin, Navigation, Sparkles, ArrowRight, ShieldCheck, Heart, Radio } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-purple-50">
      {/* Subtle background visual glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-300/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f715_1px,transparent_1px),linear-gradient(to_bottom,#a855f715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Challenge Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider shadow-sm mb-6 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-black text-purple-800">Desafio dos Dados Vivo</span>
            <span className="text-purple-400">•</span>
            <span className="font-extrabold text-purple-950">Squad UaiGO!</span>
            <span className="text-purple-400">•</span>
            <span className="text-purple-700">Questão 1.1.2</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-purple-950 tracking-tighter leading-[1.05] mb-6">
            O <span className="text-purple-600 underline decoration-purple-300 decoration-wavy decoration-2">Waze Cultural</span> que descentraliza a arte e conecta territórios
          </h1>

          {/* Subtitle / Value proposition */}
          <p className="text-base sm:text-lg md:text-xl text-purple-900/85 font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
            Utilizamos a ciência de dados, georreferenciamento colaborativo e inteligência territorial para que qualquer pessoa descubra saraus, teatros de rua, oficinas e expressões artísticas em suas próprias comunidades — <strong className="text-purple-950 font-bold bg-purple-200/70 px-1.5 py-0.5 rounded">muito além dos grandes centros urbanos</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#simulador"
              id="hero-cta-simulador"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-black text-sm tracking-wide shadow-xl shadow-purple-300/50 hover:shadow-purple-400/60 border border-purple-600 transition-all flex items-center justify-center gap-2.5 active:scale-98"
            >
              <Navigation className="w-4 h-4 text-amber-300 fill-amber-300" />
              Explorar Simulador Interativo
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#questao-ods"
              id="hero-cta-ods"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-purple-100 text-purple-950 font-extrabold text-sm border border-purple-200 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              Ver Questão & ODS Escolhida
            </a>

            <a
              href="#equipe"
              id="hero-cta-equipe"
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold text-sm border border-purple-300 transition-all flex items-center justify-center gap-2"
            >
              Conhecer a Equipe
            </a>
          </div>

          {/* Fast Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-md">
              <div className="flex items-center gap-2 text-purple-700 mb-1 text-xs font-black uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                Foco Territorial
              </div>
              <p className="text-xl font-black text-purple-950">100% Descentralizado</p>
              <p className="text-xs text-purple-700/80 font-medium mt-0.5">Bairros e periferias em destaque</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-md">
              <div className="flex items-center gap-2 text-purple-700 mb-1 text-xs font-black uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                Colaborativo
              </div>
              <p className="text-xl font-black text-purple-950">Estilo Waze</p>
              <p className="text-xs text-purple-700/80 font-medium mt-0.5">A própria comunidade cadastra e avalia</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-md">
              <div className="flex items-center gap-2 text-purple-700 mb-1 text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                ODS da ONU
              </div>
              <p className="text-xl font-black text-purple-950">ODS 4, 10 e 11</p>
              <p className="text-xs text-purple-700/80 font-medium mt-0.5">Educação, igualdade & cidades</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-md">
              <div className="flex items-center gap-2 text-purple-700 mb-1 text-xs font-black uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Inclusão Real
              </div>
              <p className="text-xl font-black text-purple-950">Eventos Gratuitos</p>
              <p className="text-xs text-purple-700/80 font-medium mt-0.5">Filtro de acessibilidade e custo zero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
