import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChallengeSection } from './components/ChallengeSection';
import { ProjectUaiGo } from './components/ProjectUaiGo';
import { AppSimulator } from './components/AppSimulator';
import { TeamCardsOverlap } from './components/TeamCardsOverlap';
import { DataImpactSection } from './components/DataImpactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-purple-50 text-purple-950 selection:bg-purple-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ChallengeSection />
        <ProjectUaiGo />
        <AppSimulator />
        <DataImpactSection />
        <TeamCardsOverlap />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
