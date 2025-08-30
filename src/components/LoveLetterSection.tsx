import React, { useEffect, useState } from 'react';

const LoveLetterSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  
  const loveLetterLines = [
    "My Dearest Aaptika,",
    "",
    "From the moment you entered my life,",
    "everything changed in the most beautiful way.",
    "",
    "Your laughter became my favorite melody,",
    "your smile, my daily sunrise.",
    "",
    "In a world full of temporary things,",
    "you are my constant, my forever.",
    "",
    "Every day with you feels like a gift,",
    "every moment, a treasure I hold close to my heart.",
    "",
    "You are not just my love,",
    "you are my home, my peace, my everything.",
    "",
    "Forever yours,",
    "With all my love ❤️"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            setVisibleLines((prev) => {
              if (prev < loveLetterLines.length) {
                return prev + 1;
              }
              clearInterval(timer);
              return prev;
            });
          }, 800);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('love-letter');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="love-letter" className="min-h-screen bg-gradient-to-br from-cream-50 to-rose-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-100">
          <div className="space-y-4">
            {loveLetterLines.map((line, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl font-handwriting text-gray-800 leading-relaxed transition-all duration-1000 ${
                  index < visibleLines 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                } ${line === '' ? 'h-4' : ''}`}
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  transitionDelay: `${index * 100}ms` 
                }}
              >
                {line || '\u00A0'}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;