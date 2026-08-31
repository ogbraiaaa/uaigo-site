import React, { useState } from 'react';
import {
  Camera,
  FileText,
  Calendar,
  MapPin,
  Users,
  Play,
  Image as ImageIcon,
  BookOpen,
  Quote,
  Plus,
  Upload,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { diaryEntries } from '../data/projectData';

const DiaryEntryCard: React.FC<{ entry: { id: string; title: string; content: string }; index: number }> = ({ entry, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-white border border-purple-200 hover:border-purple-400 transition-all overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-purple-50/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-black text-purple-700">{index + 1}</span>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-purple-950">{entry.title}</h3>
            <p className="text-xs text-purple-900/50 font-medium mt-0.5">
              {isExpanded ? 'Clique para recolher' : 'Clique para expandir'}
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
          <div className="pl-14">
            {entry.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="text-sm text-purple-900/80 font-medium leading-relaxed mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const MediaDiary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'midia' | 'diario'>('midia');

  return (
    <section id="midia-diario" className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-50 to-white border-t border-purple-200">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-purple-700" />
            Galeria & Diário de Bordo
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Mídias e <span className="text-purple-700">Diário de Bordo</span>
          </h2>
          <p className="mt-3 text-purple-900/80 text-sm sm:text-base font-medium">
            Registros visuais, vídeos e reflexões da equipe Purple Squad durante o desenvolvimento do UaiGO! no Desafio dos Dados Vivo.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('midia')}
            className={`px-6 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
              activeTab === 'midia'
                ? 'bg-purple-700 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white text-purple-700 border border-purple-300 hover:bg-purple-50'
            }`}
          >
            <Camera className="w-4 h-4" />
            Mídias
          </button>
          <button
            onClick={() => setActiveTab('diario')}
            className={`px-6 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
              activeTab === 'diario'
                ? 'bg-purple-700 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white text-purple-700 border border-purple-300 hover:bg-purple-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Diário de Bordo
          </button>
        </div>

        {activeTab === 'midia' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white border-2 border-dashed border-purple-200 hover:border-purple-400 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center min-h-[380px] p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-100 transition-all">
                  <Upload className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-base font-black text-purple-950 mb-2">
                  {i === 1 ? 'Fotos do Projeto' : i === 2 ? 'Vídeos & Documentários' : 'Textos & Artigos'}
                </h3>
                <p className="text-xs text-purple-900/60 font-medium max-w-[220px]">
                  {i === 1
                    ? 'Registros fotográficos das atividades de campo e encontros da equipe.'
                    : i === 2
                      ? 'Entrevistas, depoimentos e registros audiovisual do projeto.'
                      : 'Reflexões, artigos e documentação escrita pela equipe.'
                  }
                </p>
                <button className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200 hover:bg-purple-200 transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                  Adicionar
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'diario' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {diaryEntries.map((entry, index) => (
              <DiaryEntryCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        )}

        <div className="mt-12 p-6 rounded-2xl bg-purple-100/60 border border-purple-200 text-center">
          <Quote className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <p className="text-sm text-purple-900/80 font-medium italic max-w-xl mx-auto">
            "A cultura não é um luxo, é um direito. O UaiGO! nasceu para conectar cada pessoa à riqueza artística que existe ao seu redor, muitas vezes invisível."
          </p>
          <p className="text-xs text-purple-700 font-bold mt-2">— Purple Squad</p>
        </div>
      </div>
    </section>
  );
};
