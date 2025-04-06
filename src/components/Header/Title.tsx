import React from 'react';
import { Sparkles } from 'lucide-react';

export const Title = () => {
  return (
    <div className="mb-4">
      <h1 className="text-base font-bold text-gray-800 mb-2 animate-pulse flex items-center justify-center gap-1.5 flex-wrap">
        <Sparkles className="w-3 h-3 text-yellow-400" />
        <span className="whitespace-nowrap">SAVE THE DATE</span>
        <Sparkles className="w-3 h-3 text-yellow-400" />
      </h1>
      <h2 className="text-sm font-semibold text-pink-600">
        Anniversaire de Mimie Aurélie PERO
      </h2>
    </div>
  );
};