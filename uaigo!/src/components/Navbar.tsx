import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Users, Target, Smartphone, BarChart2, Menu, X, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Desafio Vivo', href: '#desafio', icon: Target },
    { label: 'Questão & ODS', href: '#questao-ods', icon: Sparkles },
    { label: 'O Projeto UaiGO!', href: '#sobre-uaigo', icon: Compass },
    { label: 'Simulador do App', href: '#simulador', icon: Smartphone },
    { label: 'Impacto dos Dados', href: '#impacto', icon: BarChart2 },
    { label: 'Nossa Equipe', href: '#equipe', icon: Users },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-purple-50/90 backdrop-blur-md border-b border-purple-200 py-3 shadow-md shadow-purple-200/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-purple-700 flex items-center justify-center shadow-md shadow-purple-300/50 group-hover:scale-105 transition-transform">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tighter text-purple-950 font-sans">
                Uai<span className="text-purple-600">GO!</span>
              </span>
              <span className="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-purple-200 text-purple-900 border border-purple-300">
                Waze Cultural
              </span>
            </div>
            <span className="text-[11px] text-purple-700 font-bold">
              Desafio dos Dados Vivo
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/90 border border-purple-200 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-bold text-purple-800 hover:text-purple-950 hover:bg-purple-100 rounded-full transition-all duration-200 flex items-center gap-1.5"
            >
              <item.icon className="w-3.5 h-3.5 text-purple-600" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#simulador"
            id="nav-cta-btn"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-white bg-purple-700 hover:bg-purple-800 rounded-xl shadow-md shadow-purple-300/50 hover:shadow-purple-400/60 transition-all active:scale-95 border border-purple-600"
          >
            <Smartphone className="w-3.5 h-3.5 text-amber-300" />
            Testar App
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            className="lg:hidden p-2 rounded-xl bg-white border border-purple-200 text-purple-900 hover:bg-purple-100 shadow-sm"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-purple-200 px-4 py-4 backdrop-blur-lg shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-purple-900 hover:bg-purple-100 rounded-xl flex items-center gap-2.5 transition-colors"
              >
                <item.icon className="w-4 h-4 text-purple-600" />
                {item.label}
              </a>
            ))}
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 text-sm font-black uppercase tracking-wider text-white bg-purple-700 rounded-xl shadow-md"
            >
              Testar Simulador UaiGO!
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
