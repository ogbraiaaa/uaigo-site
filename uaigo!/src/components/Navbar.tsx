import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Users, Target, Smartphone, BarChart2, Menu, X, Compass, ArrowRight, Camera } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(link => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const navLinks = [
    { label: 'Desafio', href: '#desafio', icon: Target },
    { label: 'ODS', href: '#questao-ods', icon: Sparkles },
    { label: 'Projeto', href: '#sobre-uaigo', icon: Compass },
    { label: 'App', href: '#simulador', icon: Smartphone },
    { label: 'Pesquisa', href: '/dashboard', icon: BarChart2, isRoute: true },
    { label: 'Dados', href: '#impacto', icon: BarChart2 },
    { label: 'Mídias', href: '#midia-diario', icon: Camera },
    { label: 'Equipe', href: '#equipe', icon: Users },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/60 backdrop-blur-md border-b border-purple-100/40 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="UaiGO! Página Inicial"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-purple-500/20 group-hover:scale-105 transition-all duration-300">
                <img src="https://res.cloudinary.com/f9kjnmns/image/upload/v1788191529/e6d250d8-a879-479f-b29d-bfe549409ad1-removebg-preview.png" alt="UaiGO! Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-purple-950">
                Uai<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">GO!</span>
              </span>
            </a>

            <a
              href="#simulador"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md shadow-purple-600/20 hover:shadow-lg hover:shadow-purple-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-300" strokeWidth={2} />
              Testar App
            </a>
          </div>
        </div>
      </header>

      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          visible
            ? 'bottom-6 opacity-100 translate-y-0'
            : 'bottom-10 opacity-0 translate-y-6 pointer-events-none'
        }`}
        aria-label="Navegação Principal"
      >
        <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-purple-950/90 backdrop-blur-xl border border-purple-700/50 shadow-[0_8px_40px_-8px_rgba(88,28,135,0.5)]">
          {navLinks.map((item) => {
            const isActive = item.isRoute ? false : activeSection === item.href.replace('#', '');
            const linkContent = (
              <>
                <item.icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-amber-300' : 'text-purple-400 group-hover:text-amber-300'}`} strokeWidth={2} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-amber-300" />
                )}
              </>
            );
            if (item.isRoute) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-semibold rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap relative text-purple-200 hover:text-white hover:bg-white/10"
                >
                  {linkContent}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-1.5 px-3.5 py-2 text-[12px] font-semibold rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap relative ${
                  isActive
                    ? 'text-white bg-white/15'
                    : 'text-purple-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {linkContent}
              </a>
            );
          })}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-14 h-14 rounded-full bg-purple-950/90 backdrop-blur-xl border border-purple-700/50 shadow-[0_8px_40px_-8px_rgba(88,28,135,0.5)] flex items-center justify-center text-white active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
          </button>

          {mobileMenuOpen && (
            <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-purple-950/95 backdrop-blur-xl rounded-2xl border border-purple-700/50 shadow-2xl p-2 space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
              {navLinks.map((item) => {
                const isActive = item.isRoute ? false : activeSection === item.href.replace('#', '');
                const mobileLinkContent = (
                  <>
                    <item.icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-purple-400'}`} strokeWidth={1.8} />
                    <span>{item.label}</span>
                  </>
                );
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2.5 text-sm font-semibold rounded-xl flex items-center gap-3 transition-colors text-purple-200 hover:text-white hover:bg-white/10"
                    >
                      {mobileLinkContent}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-xl flex items-center gap-3 transition-colors ${
                      isActive
                        ? 'text-white bg-white/15 border-l-2 border-amber-300'
                        : 'text-purple-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {mobileLinkContent}
                  </a>
                );
              })}
              <div className="pt-1 border-t border-purple-700/50 mt-1">
                <a
                  href="#simulador"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all"
                >
                  <Smartphone className="w-3.5 h-3.5 text-amber-300" strokeWidth={2} />
                  Testar App
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
