import React from 'react';
import { Sparkles } from 'lucide-react';

const SparkleAnimation = () => {
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 3,
    size: Math.random() * 10 + 8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <Sparkles
          key={sparkle.id}
          className="absolute text-yellow-300 animate-twinkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.animationDelay}s`,
            fontSize: `${sparkle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleAnimation;