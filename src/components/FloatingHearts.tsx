import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    size: Math.random() * 20 + 15,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-pink-300 animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.animationDelay}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;