import React from 'react';
import { Heart } from 'lucide-react';
import SparkleAnimation from './SparkleAnimation';

const FinalSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 flex items-center justify-center overflow-hidden">
      <SparkleAnimation />
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="relative">
          <Heart className="w-16 h-16 text-rose-400 mx-auto mb-8 animate-pulse" />
          
          <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-800 mb-8 leading-tight">
            Aaptika,
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-serif text-rose-600 mb-12 leading-relaxed">
            You are my everything.
          </h2>
          
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl font-handwriting text-gray-700 animate-glow">
              Forever & Always
            </p>
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-lg opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="w-6 h-6 text-rose-400 animate-bounce"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalSection;