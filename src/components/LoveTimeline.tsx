import React from 'react';
import { Heart, MessageCircle, Video, Smile, Calendar, Infinity } from 'lucide-react';

const LoveTimeline = () => {
  const milestones = [
    {
      icon: MessageCircle,
      title: "First Message",
      description: "The day our story began with a simple hello",
      date: "The beginning of forever"
    },
    {
      icon: Smile,
      title: "First Laugh",
      description: "When I realized your humor was perfectly matched to mine",
      date: "When my heart skipped"
    },
    {
      icon: Video,
      title: "First Video Call",
      description: "Seeing your beautiful face light up my screen and my world",
      date: "When distance felt like nothing"
    },
    {
      icon: Heart,
      title: "Falling in Love",
      description: "The moment I knew you were my person, my forever",
      date: "When everything clicked"
    },
    {
      icon: Calendar,
      title: "Planning Our Future",
      description: "Dreaming together about all the adventures waiting for us",
      date: "Our tomorrow starts now"
    },
    {
      icon: Infinity,
      title: "Forever & Always",
      description: "Every day forward, choosing you, loving you, cherishing you",
      date: "Until the end of time"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          The Story of Us
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200 via-rose-300 to-orange-200 md:transform md:-translate-x-1/2"></div>
          
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-lg md:transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-rose-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-rose-100 rounded-full">
                        <IconComponent className="w-5 h-5 text-rose-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-3 leading-relaxed">{milestone.description}</p>
                    
                    <p className="text-sm text-rose-500 font-medium italic">{milestone.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoveTimeline;