import React from 'react';
import { Star, Sparkles, PartyPopper } from 'lucide-react';

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        >
          {i % 3 === 0 ? (
            <Star className="text-pink-400 w-8 h-8" />
          ) : i % 3 === 1 ? (
            <Sparkles className="text-yellow-400 w-6 h-6" />
          ) : (
            <PartyPopper className="text-purple-400 w-7 h-7" />
          )}
        </div>
      ))}
    </div>
  );
};