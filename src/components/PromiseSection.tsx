import React from 'react';
import { Heart, Sun, Moon, Smile, Umbrella, Star } from 'lucide-react';

const PromiseSection = () => {
  const promises = [
    {
      icon: Sun,
      title: "I promise to be your sunshine",
      description: "To brighten your darkest days and celebrate your brightest moments"
    },
    {
      icon: Heart,
      title: "I promise to love you unconditionally",
      description: "Through every season of life, my love for you will only grow stronger"
    },
    {
      icon: Smile,
      title: "I promise to make you smile",
      description: "To find joy in the little things and share laughter that echoes through our days"
    },
    {
      icon: Umbrella,
      title: "I promise to be your shelter",
      description: "To protect you from life's storms and be your safe haven always"
    },
    {
      icon: Moon,
      title: "I promise to dream with you",
      description: "To build our future together and make every dream we share come true"
    },
    {
      icon: Star,
      title: "I promise to choose you, always",
      description: "Every single day, in every moment, I choose you and our love"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          My Promises to You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90 border border-rose-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-rose-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                    {promise.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;