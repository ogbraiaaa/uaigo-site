import React, { useState } from 'react';
import {
  Camera,
  BookOpen,
  Quote,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { diaryEntries } from '../data/projectData';

const DiaryEntryCard: React.FC<{ entry: { id: string; title: string; content: string }; index: number }> = ({ entry, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl bg-white border border-purple-200 hover:border-purple-400 transition-all overflow-hidden"
    >
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
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
              <div className="pl-14">
                {entry.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-sm text-purple-900/80 font-medium leading-relaxed mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const VideoPlayer: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration && isFinite(duration)) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const duration = videoRef.current.duration;
      if (duration && isFinite(duration)) {
        videoRef.current.currentTime = percentage * duration;
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 rounded-[2rem] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

      <div
        className="relative rounded-3xl overflow-hidden bg-purple-950 shadow-2xl shadow-purple-900/40"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(true)}
      >
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/f9kjnmns/video/upload/v1788194284/WhatsApp_Video_2026-08-31_at_13.36.51.mp4"
          className="w-full aspect-video object-cover"
          muted={isMuted}
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
        />

        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-transparent to-purple-950/20 flex flex-col justify-end p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" fill="currentColor" /> : <Play className="w-5 h-5 ml-0.5" fill="currentColor" />}
                </motion.button>

                <div className="flex-1 h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden" onClick={handleSeek}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <Maximize className="w-4 h-4" />
                </motion.button>
              </div>

              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="text-white/90 text-sm font-bold">
                    UaiGO! — Waze Cultural
                  </p>
                  <p className="text-white/50 text-xs font-medium mt-1">
                    Clique para reproduzir
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const MediaDiary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'midia' | 'diario'>('midia');

  return (
    <section id="midia-diario" className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-50 to-white border-t border-purple-200">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-950 text-xs font-black uppercase tracking-wider mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Camera className="w-3.5 h-3.5 text-purple-700" />
            </motion.div>
            Galeria & Diário de Bordo
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
            Mídias e <span className="text-purple-700">Diário de Bordo</span>
          </h2>
          <p className="mt-3 text-purple-900/80 text-sm sm:text-base font-medium">
            Registros visuais, vídeos e reflexões da equipe Purple Squad durante o desenvolvimento do UaiGO! no Desafio dos Dados Vivo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setActiveTab('midia')}
            className={`px-6 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
              activeTab === 'midia'
                ? 'bg-purple-700 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white text-purple-700 border border-purple-300 hover:bg-purple-50'
            }`}
          >
            <Camera className="w-4 h-4" />
            Mídias
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setActiveTab('diario')}
            className={`px-6 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
              activeTab === 'diario'
                ? 'bg-purple-700 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white text-purple-700 border border-purple-300 hover:bg-purple-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Diário de Bordo
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'midia' && (
            <motion.div
              key="midia"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <VideoPlayer />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-purple-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-purple-950">Registro Audiovisual</p>
                    <p className="text-[10px] text-purple-500 font-medium">Vídeo do projeto</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-purple-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 text-amber-600" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-purple-950">Desafio dos Dados</p>
                    <p className="text-[10px] text-purple-500 font-medium">Purple Squad • Vivo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-purple-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-purple-950">UaiGO!</p>
                    <p className="text-[10px] text-purple-500 font-medium">Waze Cultural</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'diario' && (
            <motion.div
              key="diario"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {diaryEntries.map((entry, index) => (
                <DiaryEntryCard key={entry.id} entry={entry} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-purple-100/60 border border-purple-200 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Quote className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          </motion.div>
          <p className="text-sm text-purple-900/80 font-medium italic max-w-xl mx-auto">
            "A cultura não é um luxo, é um direito. O UaiGO! nasceu para conectar cada pessoa à riqueza artística que existe ao seu redor, muitas vezes invisível."
          </p>
          <p className="text-xs text-purple-700 font-bold mt-2">— Purple Squad</p>
        </motion.div>
      </div>
    </section>
  );
};
