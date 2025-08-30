import React from 'react';
import { Heart } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

const HeroSection = () => {
  const scrollToLetter = () => {
    const letterSection = document.getElementById('love-letter');
    letterSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-orange-100">
      <FloatingHearts />
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif font-light text-gray-800 mb-6 animate-fade-in-up">
          For Aaptika,
        </h1>
        <h2 className="text-4xl md:text-6xl font-serif font-light text-rose-600 mb-8 animate-fade-in-up animation-delay-200">
          With All My Love
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto leading-relaxed">
          Every word on this page is for you, and only you.
        </p>
        
        <button
          onClick={scrollToLetter}
          className="group bg-white/80 backdrop-blur-sm hover:bg-rose-50 text-rose-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-600 flex items-center gap-3 mx-auto"
        >
          Enter My Heart
          <Heart className="w-5 h-5 group-hover:text-rose-500 transition-colors" />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;