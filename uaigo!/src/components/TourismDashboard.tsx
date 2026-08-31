import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  BarChart3, TrendingUp, TrendingDown, Minus,
  Smartphone, MapPin, Mountain, Info,
  ChevronLeft, ChevronRight,
  PieChart as PieChartIcon,
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import {
  PieChart, Pie, Cell, BarChart as RechartsBarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  kpiCards, channelData, eventTypeData, appFeaturesData,
  interactivityData, ratingDistribution, communitySuggestions,
} from '../data/dashboardData';

const COLORS = ['#7c3aed', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe', '#f5f3ff'];

const RATING_COLORS = ['#ef4444', '#ef4444', '#ef4444', '#f59e0b', '#f59e0b', '#f59e0b', '#22c55e', '#22c55e', '#22c55e', '#22c55e'];

const useCountUp = (end: number, duration = 1200, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView || !isInView || hasStarted.current) return;
    hasStarted.current = true;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration, startOnView]);

  return { count, ref };
};

const AnimatedNumber: React.FC<{ value: string; colorClass: string }> = ({ value, colorClass }) => {
  const numMatch = value.match(/[\d.]+/);
  const suffix = value.replace(/[\d.]+/, '');
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const hasDecimal = numMatch && numMatch[0].includes('.');
  const { count, ref } = useCountUp(num, 1400);

  return (
    <div ref={ref} className={`text-3xl sm:text-4xl font-black ${colorClass} leading-tight mb-1`}>
      {hasDecimal ? (count / (num < 10 ? 1 : 1)).toFixed(num < 10 ? 1 : 0) : count}{suffix}
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    const value = item.value;
    const name = item.payload?.name || label;
    const fill = item.payload?.fill || item.color || '#7c3aed';
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-2xl px-5 py-4 shadow-2xl border-2 border-purple-200 min-w-[160px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: fill }} />
          <p className="text-sm font-black text-purple-950 truncate">{name}</p>
        </div>
        <p className="text-2xl font-black text-purple-700">
          {value}<span className="text-sm font-bold text-purple-400 ml-1">{item.payload?.name ? '%' : ''}</span>
        </p>
        {item.payload?.name && (
          <p className="text-[10px] text-purple-400 font-bold mt-1 uppercase tracking-wider">respostas</p>
        )}
      </motion.div>
    );
  }
  return null;
};

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  return (
    <g>
      <text x={cx} y={cy - 8} textAnchor="middle" className="fill-purple-950 text-sm font-black">
        {payload.name}
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="fill-purple-600 text-lg font-black">
        {value}%
      </text>
      <text x={cx} y={cy + 30} textAnchor="middle" className="fill-purple-400 text-[10px] font-bold">
        {(percent * 100).toFixed(0)}% do total
      </text>
    </g>
  );
};

const KPICard: React.FC<{ card: typeof kpiCards[0]; index: number }> = ({ card, index }) => {
  const colorMap: Record<string, { bg: string; border: string; text: string; icon: string; glow: string }> = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', icon: 'text-emerald-500', glow: 'hover:shadow-emerald-200/60' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'text-purple-500', glow: 'hover:shadow-purple-200/60' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-500', glow: 'hover:shadow-blue-200/60' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', icon: 'text-amber-500', glow: 'hover:shadow-amber-200/60' },
  };
  const c = colorMap[card.color] || colorMap.purple;
  const TrendIcon = card.trend === 'up' ? TrendingUp : card.trend === 'down' ? TrendingDown : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`p-5 sm:p-6 rounded-2xl ${c.bg} border ${c.border} shadow-md hover:shadow-xl ${c.glow} transition-shadow duration-300 cursor-default`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-black uppercase tracking-wider ${c.text}`}>
          {card.label}
        </span>
        <motion.div
          animate={card.trend === 'up' ? { y: [0, -3, 0] } : card.trend === 'down' ? { y: [0, 3, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <TrendIcon className={`w-4 h-4 ${c.icon}`} strokeWidth={2.5} />
        </motion.div>
      </div>
      <AnimatedNumber value={card.value} colorClass={c.text} />
      <p className="text-xs text-purple-900/70 font-medium">
        {card.description}
      </p>
    </motion.div>
  );
};

const SectionTitle: React.FC<{ icon: React.ReactNode; number: string; title: string; subtitle: string }> = ({
  icon, number, title, subtitle,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-start gap-4 mb-8"
  >
    <motion.div
      whileHover={{ rotate: 12, scale: 1.1 }}
      className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/30"
    >
      {icon}
    </motion.div>
    <div>
      <div className="text-xs font-black uppercase tracking-wider text-purple-500 mb-0.5">Seção {number}</div>
      <h3 className="text-xl sm:text-2xl font-black text-purple-950">{title}</h3>
      <p className="text-sm text-purple-900/70 font-medium mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

const tabContentVariants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.97 },
};

export const TourismDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'channels' | 'events' | 'app' | 'interactivity'>('channels');
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [activePieIndex, setActivePieIndex] = useState<number | undefined>(undefined);
  const [activeInterPieIndex, setActiveInterPieIndex] = useState<number | undefined>(undefined);

  const tabs = [
    { id: 'channels' as const, label: 'Canais', icon: <BarChart3 className="w-3.5 h-3.5" /> },
    { id: 'events' as const, label: 'Eventos', icon: <MapPin className="w-3.5 h-3.5" /> },
    { id: 'app' as const, label: 'App', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: 'interactivity' as const, label: 'Interatividade', icon: <PieChartIcon className="w-3.5 h-3.5" /> },
  ];

  const prevSuggestion = () => {
    setActivePieIndex(undefined);
    setActiveInterPieIndex(undefined);
    setSuggestionIndex((i) => (i === 0 ? communitySuggestions.length - 1 : i - 1));
  };
  const nextSuggestion = () => {
    setActivePieIndex(undefined);
    setActiveInterPieIndex(undefined);
    setSuggestionIndex((i) => (i === communitySuggestions.length - 1 ? 0 : i + 1));
  };
  const currentSuggestion = communitySuggestions[suggestionIndex];

  const suggestionIconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Mountain: <Mountain className="w-5 h-5" />,
    MapPin: <MapPin className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
  };

  const onPieEnter = useCallback((_: any, index: number) => setActivePieIndex(index), []);
  const onPieLeave = useCallback(() => setActivePieIndex(undefined), []);
  const onInterPieEnter = useCallback((_: any, index: number) => setActiveInterPieIndex(index), []);
  const onInterPieLeave = useCallback(() => setActiveInterPieIndex(undefined), []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'channels':
        return (
          <motion.div
            key="channels"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle
              icon={<BarChart3 className="w-5 h-5" />}
              number="1"
              title="Perfil de Frequência e Divulgação Atual"
              subtitle="Engajamento e canais de comunicação mais utilizados pela população"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-sm font-black uppercase tracking-wider text-purple-950 mb-1">
                  Canais de Divulgação Mais Utilizados
                </h4>
                <p className="text-xs text-purple-700/80 font-medium mb-6">Distribuição por canal de informação</p>
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      innerRadius={activePieIndex !== undefined ? 70 : 80}
                      outerRadius={activePieIndex !== undefined ? 140 : 130}
                      paddingAngle={4}
                      dataKey="value"
                      nameKey="name"
                      strokeWidth={0}
                      activeIndex={activePieIndex}
                      activeShape={renderActiveShape}
                      onMouseEnter={onPieEnter}
                      onMouseLeave={onPieLeave}
                      animationBegin={0}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    >
                      {channelData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          style={{ filter: activePieIndex !== undefined && activePieIndex !== index ? 'brightness(0.7)' : 'none', transition: 'filter 0.3s' }}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    {activePieIndex === undefined && (
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        formatter={(value: string) => (
                          <span className="text-xs font-semibold text-purple-900">{value}</span>
                        )}
                      />
                    )}
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>

              <div className="space-y-4">
                {channelData.map((channel, index) => (
                  <motion.div
                    key={channel.name}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="p-5 rounded-2xl bg-white border border-purple-200 shadow-md flex items-center gap-4 hover:shadow-xl hover:border-purple-400 transition-all duration-300 cursor-default"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg shrink-0"
                      style={{ backgroundColor: channel.fill }}
                    >
                      {index + 1}º
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-bold text-purple-950 truncate">{channel.name}</h5>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex-1 h-3 rounded-full bg-purple-100 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${channel.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: channel.fill }}
                          />
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                          className="text-sm font-black text-purple-700 shrink-0"
                        >
                          {channel.value}%
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'events':
        return (
          <motion.div
            key="events"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle
              icon={<MapPin className="w-5 h-5" />}
              number="2"
              title="Atrativos e Eventos Mais Populares"
              subtitle="Pontos turísticos lembrados e festividades mais frequentadas pela população"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h4 className="text-sm font-black uppercase tracking-wider text-purple-950 mb-1">
                Tipos de Eventos com Maior Interesse
              </h4>
              <p className="text-xs text-purple-700/80 font-medium mb-6">Número de votos por categoria de evento</p>
              <ResponsiveContainer width="100%" height={350}>
                <RechartsBarChart
                  data={eventTypeData}
                  layout="vertical"
                  margin={{ left: 20, right: 30 }}
                >
                  <XAxis type="number" tick={{ fontSize: 12, fill: '#6b21a8' }} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={180}
                    tick={{ fontSize: 12, fill: '#1e1b4b', fontWeight: 600 }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(124, 58, 237, 0.06)' }} />
                  <Bar
                    dataKey="votes"
                    radius={[0, 10, 10, 0]}
                    barSize={30}
                    animationBegin={200}
                    animationDuration={1200}
                    animationEasing="ease-out"
                  >
                    {eventTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(124,58,237,0.2))' }}
                      />
                    ))}
                  </Bar>
                </RechartsBarChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>
        );

      case 'app':
        return (
          <motion.div
            key="app"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle
              icon={<Smartphone className="w-5 h-5" />}
              number="3"
              title="Viabilidade e Aceitação do Aplicativo Turístico"
              subtitle="Adesão ao app, funcionalidades desejadas e probabilidade de uso"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-sm font-black uppercase tracking-wider text-purple-950 mb-1">
                  Funcionalidades Mais Desejadas no App
                </h4>
                <p className="text-xs text-purple-700/80 font-medium mb-6">Recursos que o público mais gostaria de ter</p>
                <ResponsiveContainer width="100%" height={350}>
                  <RechartsBarChart data={appFeaturesData} margin={{ left: 10, right: 30 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#6b21a8' }} angle={-15} textAnchor="end" height={80} />
                    <YAxis tick={{ fontSize: 12, fill: '#1e1b4b' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(124, 58, 237, 0.06)' }} />
                    <Bar
                      dataKey="votes"
                      radius={[10, 10, 0, 0]}
                      barSize={36}
                      animationBegin={200}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    >
                      {appFeaturesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(124,58,237,0.2))' }}
                        />
                      ))}
                    </Bar>
                  </RechartsBarChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-sm font-black uppercase tracking-wider text-purple-950 mb-1">
                  Interatividade Esperada no App
                </h4>
                <p className="text-xs text-purple-700/80 font-medium mb-6">Funcionalidades interativas mais desejadas</p>
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      data={interactivityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={activeInterPieIndex !== undefined ? 60 : 70}
                      outerRadius={activeInterPieIndex !== undefined ? 130 : 120}
                      paddingAngle={3}
                      dataKey="value"
                      nameKey="name"
                      strokeWidth={0}
                      activeIndex={activeInterPieIndex}
                      activeShape={renderActiveShape}
                      onMouseEnter={onInterPieEnter}
                      onMouseLeave={onInterPieLeave}
                      animationBegin={0}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    >
                      {interactivityData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          style={{ filter: activeInterPieIndex !== undefined && activeInterPieIndex !== index ? 'brightness(0.7)' : 'none', transition: 'filter 0.3s' }}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    {activeInterPieIndex === undefined && (
                      <Legend
                        verticalAlign="bottom"
                        height={60}
                        formatter={(value: string) => (
                          <span className="text-[10px] font-semibold text-purple-900">{value}</span>
                        )}
                      />
                    )}
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        );

      case 'interactivity':
        return (
          <motion.div
            key="interactivity"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle
              icon={<Info className="w-5 h-5" />}
              number="4"
              title="Avaliação e Insights Qualitativos"
              subtitle="Notas de divulgação atual e sugestões trazidas pela comunidade"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-sm font-black uppercase tracking-wider text-purple-950 mb-1">
                  Distribuição de Avaliação da Divulgação Atual
                </h4>
                <p className="text-xs text-purple-700/80 font-medium mb-6">
                  Notas de 1 a 10 atribuídas pelos entrevistados — pico em notas medianas/baixas evidencia gargalo na comunicação
                </p>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={ratingDistribution} margin={{ left: 10, right: 10 }}>
                    <XAxis dataKey="nota" tick={{ fontSize: 13, fill: '#1e1b4b', fontWeight: 700 }} />
                    <YAxis tick={{ fontSize: 12, fill: '#6b21a8' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(124, 58, 237, 0.06)' }} />
                    <Bar
                      dataKey="pessoas"
                      radius={[8, 8, 0, 0]}
                      barSize={36}
                      animationBegin={200}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    >
                      {ratingDistribution.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={RATING_COLORS[index]}
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                        />
                      ))}
                    </Bar>
                  </RechartsBarChart>
                </ResponsiveContainer>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-6 mt-4 text-xs font-bold"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-purple-900">Baixa (1-3)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="text-purple-900">Média (4-6)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-purple-900">Alta (7-10)</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 border-2 border-purple-700 shadow-2xl text-white"
              >
                <h4 className="text-sm font-black uppercase tracking-wider text-amber-300 mb-1">
                  Sugestões da Comunidade
                </h4>
                <p className="text-xs text-purple-200/80 font-medium mb-6">
                  Insights de melhorias trazidos pelos dados da pesquisa
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={suggestionIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-purple-950/80 border border-purple-500/30 rounded-2xl p-6 mb-4"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        key={suggestionIndex}
                        initial={{ rotate: -20, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="w-10 h-10 rounded-xl bg-purple-700/60 flex items-center justify-center text-amber-300"
                      >
                        {suggestionIconMap[currentSuggestion.icon] || <Info className="w-5 h-5" />}
                      </motion.div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block">
                          {currentSuggestion.category}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          currentSuggestion.impact === 'Alto'
                            ? 'bg-emerald-900/60 text-emerald-300'
                            : 'bg-amber-900/60 text-amber-300'
                        }`}>
                          Impacto {currentSuggestion.impact}
                        </span>
                      </div>
                    </div>
                    <h5 className="text-lg font-black text-white mb-2">
                      {currentSuggestion.title}
                    </h5>
                    <p className="text-sm text-purple-200 font-medium leading-relaxed">
                      {currentSuggestion.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSuggestion}
                    className="w-10 h-10 rounded-full bg-purple-700/50 hover:bg-purple-600/50 flex items-center justify-center text-white transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <div className="flex items-center gap-2">
                    {communitySuggestions.map((_, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setSuggestionIndex(i)}
                        whileHover={{ scale: 1.4 }}
                        className={`rounded-full transition-all ${
                          i === suggestionIndex ? 'bg-amber-300 w-6 h-2.5' : 'bg-purple-500/50 hover:bg-purple-400/50 w-2.5 h-2.5'
                        }`}
                      />
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSuggestion}
                    className="w-10 h-10 rounded-full bg-purple-700/50 hover:bg-purple-600/50 flex items-center justify-center text-white transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section id="dashboard" className="py-20 relative overflow-hidden bg-purple-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider shadow-sm mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BarChart3 className="w-3.5 h-3.5 text-purple-700" />
            </motion.div>
            Dashboard de Pesquisa
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight leading-tight">
            Diagnóstico <span className="text-purple-700">Turístico e Cultural</span>
          </h2>
          <p className="mt-4 text-purple-900/80 text-sm sm:text-base font-medium max-w-3xl mx-auto leading-relaxed">
            Resultados da pesquisa sobre o turismo, divulgação de eventos e receptividade
            do público em relação a Antônio Carlos e a região de Barbacena — dados que
            fundamentam a criação do UaiGO!.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {kpiCards.map((card, index) => (
            <KPICard key={card.id} card={card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActivePieIndex(undefined);
                setActiveInterPieIndex(undefined);
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-700 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white text-purple-700 border border-purple-200 hover:bg-purple-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-purple-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pt-4 sm:pt-0"
            >
              <div className="text-xl sm:text-3xl font-black text-purple-700 leading-tight">
                <AnimatedNumberInline value={85} suffix="%" />
              </div>
              <p className="text-[10px] sm:text-xs font-black text-purple-950 mt-1">Aceitação do App</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-4 sm:pt-0"
            >
              <div className="text-xl sm:text-3xl font-black text-purple-950 leading-tight">
                &gt;70%
              </div>
              <p className="text-[10px] sm:text-xs font-black text-purple-950 mt-1">Redes Sociais</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4 sm:pt-0"
            >
              <div className="text-xl sm:text-3xl font-black text-amber-600 leading-tight">
                5-6/10
              </div>
              <p className="text-[10px] sm:text-xs font-black text-purple-950 mt-1">Nota Média Divulgação</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4 sm:pt-0"
            >
              <div className="text-xl sm:text-3xl font-black text-emerald-700 leading-tight">
                Shows & Festas
              </div>
              <p className="text-[10px] sm:text-xs font-black text-purple-950 mt-1">Evento Mais Lembrado</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedNumberInline: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const { count, ref } = useCountUp(value, 1400);
  return <span ref={ref}>{count}{suffix}</span>;
};
