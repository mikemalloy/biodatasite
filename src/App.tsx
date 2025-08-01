import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ResultsSection } from './components/ResultsSection';
import { HowWeAreDifferent } from './components/HowWeAreDifferent';
import { NextSteps } from './components/NextSteps';
import { Footer } from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <div id="solutions">
        <ProblemSection />
        <SolutionSection />
        <ResultsSection />
        <HowWeAreDifferent />
      </div>
      <div id="about">
        {/* About section placeholder - you can add content later */}
      </div>
      <div id="contact">
        <NextSteps />
      </div>
      <Footer />
    </div>
  );
}

export default App; 