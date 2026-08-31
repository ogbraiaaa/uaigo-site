import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChallengeSection } from './components/ChallengeSection';
import { ProjectUaiGo } from './components/ProjectUaiGo';
import { AppSimulator } from './components/AppSimulator';
import { TeamCardsOverlap } from './components/TeamCardsOverlap';
import { DataImpactSection } from './components/DataImpactSection';
import { MediaDiary } from './components/MediaDiary';
import { TourismDashboard } from './components/TourismDashboard';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-purple-50 text-purple-950 selection:bg-purple-600 selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <ChallengeSection />
        <ProjectUaiGo />
        <AppSimulator />
        <TourismDashboard />
        <DataImpactSection />
        <MediaDiary />
        <TeamCardsOverlap />
      </main>

      <Footer />
    </div>
  );
}
