import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TourismDashboard } from '../components/TourismDashboard';

export const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-50 text-purple-950 font-sans antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-purple-100/40 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-950 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao UaiGO!
            </Link>
            <span className="text-sm font-black text-purple-950">
              Dashboard de Pesquisa
            </span>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <TourismDashboard />
      </main>
    </div>
  );
};
