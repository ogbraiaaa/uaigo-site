import React from 'react';
import { MapPin, Heart, Sparkles, Target, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t-2 border-purple-200 text-purple-900 text-xs py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-purple-200">
          
          {/* Brand & Desafio Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-700 flex items-center justify-center text-white font-black shadow-md">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-2xl font-black text-purple-950">
                Uai<span className="text-purple-700">GO!</span>
              </span>
              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-300">
                Waze Cultural
              </span>
            </div>
            <p className="text-purple-900/80 leading-relaxed text-xs max-w-sm font-medium">
              Projeto desenvolvido pelo Squad UaiGO! para o <strong className="text-purple-950 font-black">Desafio dos Dados Vivo</strong>. Promovendo a ampliação do acesso à cultura e a descentralização territorial através de dados e colaboração.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-300 text-purple-950 text-[11px] font-bold">
              <Target className="w-3.5 h-3.5 text-purple-700" />
              Eixo 1.1.2 • Ampliação do Acesso à Cultura
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-purple-950">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-purple-900/80">
              <li>
                <a href="#desafio" className="hover:text-purple-700 transition-colors">
                  • Sobre o Desafio dos Dados Vivo
                </a>
              </li>
              <li>
                <a href="#questao-ods" className="hover:text-purple-700 transition-colors">
                  • Questão Norteadora & ODS (4, 10, 11)
                </a>
              </li>
              <li>
                <a href="#sobre-uaigo" className="hover:text-purple-700 transition-colors">
                  • O Aplicativo UaiGO! (Waze Cultural)
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-purple-700 transition-colors">
                  • Simulador Interativo do App
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-purple-700 transition-colors">
                  • Integrantes do Squad & Contribuições
                </a>
              </li>
            </ul>
          </div>

          {/* ODS Badges in Footer */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-purple-950">
              ODS Atendidos
            </h4>
            <p className="text-[11px] text-purple-900/80 font-medium">
              Alinhamento direto com as metas da Agenda 2030 das Nações Unidas:
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-rose-100 border border-rose-300 text-rose-950 font-black text-[11px]">
                ODS 4: Educação de Qualidade
              </span>
              <span className="px-2.5 py-1 rounded-md bg-pink-100 border border-pink-300 text-pink-950 font-black text-[11px]">
                ODS 10: Redução das Desigualdades
              </span>
              <span className="px-2.5 py-1 rounded-md bg-amber-100 border border-amber-300 text-amber-950 font-black text-[11px]">
                ODS 11: Cidades Sustentáveis
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-purple-900/80 font-bold">
            © {new Date().getFullYear()} UaiGO! • Apresentação para o Desafio dos Dados da Vivo.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-purple-950 font-black px-4 py-2 rounded-xl bg-purple-100 border border-purple-300 hover:bg-purple-200 transition-all shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Voltar ao Topo
          </button>
        </div>

      </div>
    </footer>
  );
};
