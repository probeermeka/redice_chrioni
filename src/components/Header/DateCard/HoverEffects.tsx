import React from 'react';

export const HoverEffects = () => (
  <>
    <div className="absolute inset-0 bg-pink-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
      <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
        Ajouter au calendrier
      </span>
    </div>
  </>
);