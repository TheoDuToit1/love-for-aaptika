import React from 'react';
import BackgroundMusic from './components/BackgroundMusic';
import HeroSection from './components/HeroSection';
import LoveLetterSection from './components/LoveLetterSection';
import LoveTimeline from './components/LoveTimeline';
import PromiseSection from './components/PromiseSection';
import FinalSection from './components/FinalSection';

function App() {
  return (
    <div className="scroll-smooth">
      <BackgroundMusic />
      <HeroSection />
      <LoveLetterSection />
      <LoveTimeline />
      <PromiseSection />
      <FinalSection />
    </div>
  );
}

export default App;