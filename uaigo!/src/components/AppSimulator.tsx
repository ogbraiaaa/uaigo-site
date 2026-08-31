import React, { useState } from 'react';
import { sampleEvents } from '../data/projectData';
import { CulturalEvent } from '../types';
import {
  MapPin,
  Navigation,
  Sparkles,
  Calendar,
  Clock,
  PlusCircle,
  ListFilter,
  CheckCircle2,
  Users,
  Search,
  Flame,
  Radio,
  Share2,
  Tag,
  Route
} from 'lucide-react';

export const AppSimulator: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent>(sampleEvents[0]);
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'route' | 'add'>('map');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [onlyFree, setOnlyFree] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Add event form state
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventNeighborhood, setNewEventNeighborhood] = useState('');
  const [newEventCategory, setNewEventCategory] = useState('sarau');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'sarau', label: 'Saraus & Poesia' },
    { id: 'musica', label: 'Música & Ritmos' },
    { id: 'teatro', label: 'Teatro de Rua' },
    { id: 'gastronomia', label: 'Gastronomia Local' },
    { id: 'arte_visual', label: 'Artes Visuais' }
  ];

  const filteredEvents = sampleEvents.filter(ev => {
    if (selectedCategory !== 'todos' && ev.category !== selectedCategory) return false;
    if (onlyFree && !ev.isFree) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return ev.title.toLowerCase().includes(q) || ev.neighborhood.toLowerCase().includes(q) || ev.tags.some(t => t.toLowerCase().includes(q));
    }
    return true;
  });

  const handleSimulateAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle || !newEventNeighborhood) return;
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setNewEventTitle('');
      setNewEventNeighborhood('');
      setActiveTab('map');
    }, 1800);
  };

  return (
    <section id="simulador" className="py-20 bg-purple-100/40 border-y border-purple-200 relative">
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-200 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-purple-700 animate-pulse" />
            Protótipo Funcional Interativo
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Experimente o <span className="text-purple-700 underline decoration-purple-300">UaiGO!</span> em Ação
          </h2>
          <p className="mt-3 text-purple-900/80 text-sm sm:text-base font-medium">
            Interaja com o simulador abaixo: clique nos marcadores do mapa, filtre atividades comunitárias ou simule a criação de um evento em seu próprio bairro.
          </p>
        </div>

        {/* The Simulator Interface Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main App Frame (Phone / Interface Mockup) */}
          <div className="lg:col-span-8 bg-white border-2 border-purple-300 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
            
            {/* Top Bar of the App */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-200 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-700 flex items-center justify-center text-white font-black text-sm shadow-md">
                  U!
                </div>
                <div>
                  <h3 className="text-sm font-black text-purple-950 leading-tight">UaiGO! Live</h3>
                  <p className="text-[11px] text-purple-700 flex items-center gap-1 font-bold">
                    <MapPin className="w-3 h-3 text-purple-600" />
                    Você está em: <span className="text-purple-950 font-black">Comunidade Viva (Periferia Norte)</span>
                  </p>
                </div>
              </div>

              {/* Top View Selector Buttons */}
              <div className="flex items-center gap-1 bg-purple-50 p-1 rounded-xl border border-purple-200">
                <button
                  id="tab-map"
                  onClick={() => setActiveTab('map')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 transition-colors ${
                    activeTab === 'map'
                      ? 'bg-purple-700 text-white shadow-sm'
                      : 'text-purple-700 hover:text-purple-950'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Mapa Waze
                </button>

                <button
                  id="tab-list"
                  onClick={() => setActiveTab('list')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 transition-colors ${
                    activeTab === 'list'
                      ? 'bg-purple-700 text-white shadow-sm'
                      : 'text-purple-700 hover:text-purple-950'
                  }`}
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  Lista ({filteredEvents.length})
                </button>

                <button
                  id="tab-route"
                  onClick={() => setActiveTab('route')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 transition-colors ${
                    activeTab === 'route'
                      ? 'bg-purple-700 text-white shadow-sm'
                      : 'text-purple-700 hover:text-purple-950'
                  }`}
                >
                  <Route className="w-3.5 h-3.5" />
                  Rota Cultural
                </button>

                <button
                  id="tab-add"
                  onClick={() => setActiveTab('add')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 transition-colors ${
                    activeTab === 'add'
                      ? 'bg-amber-400 text-purple-950 font-black shadow-sm'
                      : 'text-purple-900 hover:text-purple-950'
                  }`}
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  + Divulgar
                </button>
              </div>
            </div>

            {/* Quick Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="relative flex-1 min-w-[180px]">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-purple-500" />
                <input
                  type="text"
                  placeholder="Buscar sarau, teatro, bairro..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-950 placeholder-purple-400 font-medium focus:outline-none focus:border-purple-600"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-purple-700 text-white border border-purple-600'
                        : 'bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Free Only Toggle */}
              <button
                onClick={() => setOnlyFree(!onlyFree)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-black border flex items-center gap-1 transition-colors ${
                  onlyFree
                    ? 'bg-emerald-100 border-emerald-400 text-emerald-900'
                    : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Apenas Gratuitos
              </button>
            </div>

            {/* TAB 1: INTERACTIVE MAP VIEW */}
            {activeTab === 'map' && (
              <div className="relative h-[380px] sm:h-[440px] rounded-2xl bg-slate-900 border-2 border-purple-300 overflow-hidden select-none shadow-inner">
                
                {/* Simulated Street Map Grid Canvas */}
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                
                {/* Simulated Geographic River / Main Avenue Curve */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <path
                    d="M 0,250 Q 150,180 300,280 T 600,180 T 900,320"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="6"
                    strokeDasharray="8 6"
                  />
                  <path
                    d="M 120,0 Q 200,220 450,260 T 700,450"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Simulated Neighborhood Boundary Badges on Map */}
                <div className="absolute top-4 left-4 pointer-events-none text-[10px] uppercase font-black tracking-wider text-purple-200 bg-purple-950/90 px-2.5 py-1 rounded-md border border-purple-600">
                  Zona Periférica Norte • Território 04
                </div>
                <div className="absolute bottom-4 right-4 pointer-events-none text-[10px] uppercase font-black tracking-wider text-amber-300 bg-slate-950/90 px-2.5 py-1 rounded-md border border-amber-500/40">
                  Distrito Comunitário Sul
                </div>

                {/* You Are Here Indicator (Pulsing User Location) */}
                <div
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: '50%', top: '50%' }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-cyan-400/40 animate-ping" />
                    <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-white shadow-lg shadow-cyan-400/50" />
                  </div>
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-cyan-950 text-cyan-200 border border-cyan-400 text-[10px] font-black px-2 py-0.5 rounded shadow-lg">
                    Você está aqui
                  </div>
                </div>

                {/* Cultural Event Markers */}
                {filteredEvents.map((ev) => {
                  const isSelected = selectedEvent.id === ev.id;
                  return (
                    <button
                      key={ev.id}
                      id={`pin-${ev.id}`}
                      onClick={() => setSelectedEvent(ev)}
                      className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 transform group ${
                        isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                      }`}
                      style={{ left: `${ev.coordinates.x}%`, top: `${ev.coordinates.y}%` }}
                    >
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-lg transition-all ${
                            isSelected
                              ? 'bg-amber-400 text-purple-950 ring-4 ring-purple-400 shadow-amber-500/50'
                              : 'bg-purple-600 text-white border-2 border-white'
                          }`}
                        >
                          <MapPin className="w-4 h-4 fill-current" />
                        </div>
                        
                        {/* Event Title Pill on Map */}
                        <div
                          className={`mt-1 px-2.5 py-0.5 rounded-full text-[10px] whitespace-nowrap shadow-md transition-all ${
                            isSelected
                              ? 'bg-amber-400 text-purple-950 ring-1 ring-amber-300 font-black'
                              : 'bg-slate-900 text-white border border-purple-500/40 font-bold'
                          }`}
                        >
                          {ev.title.length > 22 ? ev.title.substring(0, 20) + '...' : ev.title}
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Map Floating Status Banner */}
                <div className="absolute top-4 right-4 z-10 bg-white/95 border border-purple-200 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-md">
                  <Flame className="w-4 h-4 text-purple-700" />
                  <span className="text-xs font-black text-purple-950">
                    {filteredEvents.length} eventos culturais ativos perto de você
                  </span>
                </div>
              </div>
            )}

            {/* TAB 2: LIST VIEW */}
            {activeTab === 'list' && (
              <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
                {filteredEvents.map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => {
                      setSelectedEvent(ev);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      selectedEvent.id === ev.id
                        ? 'bg-purple-100 border-2 border-purple-600 shadow-md ring-1 ring-purple-400'
                        : 'bg-purple-50/70 border-purple-200 hover:bg-purple-100'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-purple-700 text-white">
                          {ev.category}
                        </span>
                        <span className="text-xs font-black text-purple-950">
                          {ev.neighborhood}
                        </span>
                        <span className="text-xs font-bold text-purple-700">• {ev.distance}</span>
                      </div>
                      <h4 className="text-sm font-black text-purple-950">{ev.title}</h4>
                      <p className="text-xs text-purple-900/80 line-clamp-1 font-medium">{ev.description}</p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 shrink-0">
                      <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                        {ev.price}
                      </span>
                      <span className="text-[11px] text-purple-700 font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-purple-600" />
                        {ev.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: ROTA CULTURAL ITINERARY */}
            {activeTab === 'route' && (
              <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 space-y-4">
                <div className="flex items-center justify-between border-b border-purple-200 pb-3">
                  <div>
                    <h4 className="text-sm font-black text-purple-950 flex items-center gap-2">
                      <Route className="w-4 h-4 text-purple-700" />
                      Circuito Cultural Periférico • 3 Paradas
                    </h4>
                    <p className="text-xs text-purple-700 font-medium">
                      Tempo estimado: 3h30min • A pé + Ônibus integrado • 100% Gratuito
                    </p>
                  </div>
                  <span className="text-xs font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    Rota Ativa
                  </span>
                </div>

                <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-purple-600 before:via-amber-500 before:to-emerald-600">
                  <div className="flex items-start gap-4 pl-7 relative">
                    <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-purple-700 border-2 border-white -translate-x-1/2 shadow" />
                    <div>
                      <span className="text-[10px] font-black text-purple-700 uppercase">1ª Parada (10:00)</span>
                      <h5 className="text-xs font-black text-purple-950">Feira de Gastronomia & Artesanato Afro-Mineiro</h5>
                      <p className="text-[11px] text-purple-800 font-medium">Bairro Novo Horizonte • Café e artesanato</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pl-7 relative">
                    <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white -translate-x-1/2 shadow" />
                    <div>
                      <span className="text-[10px] font-black text-amber-700 uppercase">2ª Parada (16:00)</span>
                      <h5 className="text-xs font-black text-purple-950">Teatro de Rua: O Circo da Memória</h5>
                      <p className="text-[11px] text-purple-800 font-medium">Jardim das Flores • Espetáculo na praça</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pl-7 relative">
                    <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white -translate-x-1/2 shadow" />
                    <div>
                      <span className="text-[10px] font-black text-emerald-700 uppercase">3ª Parada (19:30)</span>
                      <h5 className="text-xs font-black text-purple-950">Sarau das Quebradas & Batalha de Rima</h5>
                      <p className="text-[11px] text-purple-800 font-medium">Vila Esperança • Poesia e microfone aberto</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button className="px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs flex items-center gap-1.5 shadow-md">
                    <Navigation className="w-3.5 h-3.5 text-amber-300" />
                    Iniciar Navegação da Rota
                  </button>
                  <span className="text-[11px] text-purple-700 font-bold">Inclui avisos de segurança e linhas de ônibus</span>
                </div>
              </div>
            )}

            {/* TAB 4: ADD EVENT FORM */}
            {activeTab === 'add' && (
              <form onSubmit={handleSimulateAdd} className="p-6 rounded-2xl bg-purple-50 border border-purple-200 space-y-4">
                <div className="border-b border-purple-200 pb-2">
                  <h4 className="text-sm font-black text-purple-950 flex items-center gap-2">
                    <PlusCircle className="w-4 h-4 text-purple-700" />
                    Cadastro Comunitário Descomplicado
                  </h4>
                  <p className="text-xs text-purple-700 font-medium">
                    Artistas, coletivos e moradores podem divulgar eventos locais em menos de 1 minuto.
                  </p>
                </div>

                {addedSuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-400 text-center space-y-1 text-emerald-900 animate-fadeIn">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p className="text-sm font-black">Evento Cultural Cadastrado com Sucesso!</p>
                    <p className="text-xs text-emerald-800 font-medium">O evento já está visível para a vizinhança no radar UaiGO!.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-black text-purple-950">Nome da Atividade ou Evento</label>
                      <input
                        type="text"
                        placeholder="Ex: Roda de Samba Comunitária"
                        value={newEventTitle}
                        onChange={(e) => setNewEventTitle(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-white border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-black text-purple-950">Bairro / Comunidade</label>
                      <input
                        type="text"
                        placeholder="Ex: Vila Esperança / Praça Central"
                        value={newEventNeighborhood}
                        onChange={(e) => setNewEventNeighborhood(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-white border border-purple-300 rounded-xl text-xs text-purple-950 font-medium focus:outline-none focus:border-purple-700"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-black text-purple-950">Categoria</label>
                      <select
                        value={newEventCategory}
                        onChange={(e) => setNewEventCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-purple-300 rounded-xl text-xs text-purple-950 font-bold focus:outline-none focus:border-purple-700"
                      >
                        <option value="sarau">Sarau & Poesia</option>
                        <option value="musica">Música & Show</option>
                        <option value="teatro">Teatro & Circo</option>
                        <option value="gastronomia">Gastronomia & Feira</option>
                        <option value="workshop">Oficina Gratuita</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-black text-purple-950">Entrada</label>
                      <input
                        type="text"
                        defaultValue="Gratuito / Entrada Franca"
                        disabled
                        className="w-full px-3 py-2 bg-purple-100 border border-purple-200 rounded-xl text-xs text-emerald-800 font-black"
                      />
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all"
                      >
                        Publicar Evento no Mapa Comunitário
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}

          </div>

          {/* Right Column: Selected Event Card Details & Waze Actions */}
          <div className="lg:col-span-4 bg-white border-2 border-purple-300 rounded-3xl p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-purple-200 pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Detalhes do Evento Selecionado
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-black">
                {selectedEvent.price}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-200">
                {selectedEvent.category}
              </span>
              <h3 className="text-xl font-black text-purple-950 mt-1.5 leading-snug">
                {selectedEvent.title}
              </h3>
              <p className="text-xs text-purple-700 font-bold mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                {selectedEvent.neighborhood}, {selectedEvent.city}
              </p>
            </div>

            {/* Time and Distance badges */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200">
                <span className="text-[10px] text-purple-700 font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-purple-600" />
                  Quando
                </span>
                <span className="font-black text-purple-950 mt-0.5 block">{selectedEvent.date}</span>
              </div>

              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200">
                <span className="text-[10px] text-purple-700 font-bold flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-purple-600" />
                  Distância
                </span>
                <span className="font-black text-purple-950 mt-0.5 block">{selectedEvent.distance}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <span className="text-[11px] font-black text-purple-950 uppercase tracking-wider">Sobre a Atividade:</span>
              <p className="text-xs text-purple-900/80 font-medium leading-relaxed bg-purple-50 p-3.5 rounded-2xl border border-purple-200">
                {selectedEvent.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {selectedEvent.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 border border-purple-200 flex items-center gap-1"
                >
                  <Tag className="w-2.5 h-2.5 text-purple-600" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => alert(`Iniciando trajeto cultural guiado para: ${selectedEvent.title} em ${selectedEvent.neighborhood}`)}
                className="w-full py-3.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-300/50 flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <Navigation className="w-4 h-4 fill-white" />
                Como Chegar (Waze Cultural)
              </button>

              <div className="flex items-center justify-between text-xs text-purple-700 font-bold px-1">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                  {selectedEvent.attendeesCount} pessoas confirmadas
                </span>
                <span className="flex items-center gap-1 text-purple-900">
                  <Share2 className="w-3.5 h-3.5" />
                  Convidar vizinhos
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
