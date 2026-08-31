import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChallengeSection } from './components/ChallengeSection';
import { ProjectUaiGo } from './components/ProjectUaiGo';
import { AppSimulator } from './components/AppSimulator';
import { TeamCardsOverlap } from './components/TeamCardsOverlap';
import { DataImpactSection } from './components/DataImpactSection';
import { MediaDiary } from './components/MediaDiary';
import { Footer } from './components/Footer';
import { DashboardPage } from './pages/DashboardPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChallengeSection />
        <ProjectUaiGo />
        <AppSimulator />
        <DataImpactSection />
        <MediaDiary />
        <TeamCardsOverlap />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-purple-50 text-purple-950 selection:bg-purple-600 selection:text-white font-sans antialiased overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
