import React from 'react';
import { Star, Sparkles, PartyPopper, Heart, Gift, Cake, Wine, Music } from 'lucide-react';
import './styles.css';

const ICONS = [
  { Icon: Star, color: 'text-yellow-400', size: 'w-8 h-8' },
  { Icon: Sparkles, color: 'text-pink-400', size: 'w-6 h-6' },
  { Icon: PartyPopper, color: 'text-purple-400', size: 'w-8 h-8' },
  { Icon: Heart, color: 'text-red-400', size: 'w-6 h-6' },
  { Icon: Gift, color: 'text-blue-400', size: 'w-7 h-7' },
  { Icon: Cake, color: 'text-pink-500', size: 'w-8 h-8' },
  { Icon: Wine, color: 'text-purple-500', size: 'w-7 h-7' },
  { Icon: Music, color: 'text-indigo-400', size: 'w-6 h-6' }
];

const ANIMATIONS = [
  'animate-float-up',
  'animate-float-side',
  'animate-float-diagonal',
  'animate-float-spin'
];

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {Array.from({ length: 40 }, (_, i) => {
        const icon = ICONS[i % ICONS.length];
        const animation = ANIMATIONS[i % ANIMATIONS.length];
        const section = Math.floor(i / 10);
        const sectionSize = 100 / 4;
        const baseLeft = section * sectionSize;
        const left = `${baseLeft + (Math.random() * sectionSize)}%`;
        const top = `${Math.random() * 90}%`;
        const delay = Math.random() * 10;
        const duration = 5 + Math.random() * 5;

        return (
          <div
            key={i}
            className={`absolute ${animation} ${icon.color} ${icon.size} opacity-70 hover:opacity-100 transition-opacity duration-300`}
            style={{
              left,
              top,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.3))',
              zIndex: 20,
            }}
          >
            <icon.Icon strokeWidth={1.5} />
          </div>
        );
      })}
    </div>
  );
};