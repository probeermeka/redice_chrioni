import React from 'react';

export const DateDisplay = () => (
  <div className="flex flex-col items-center">
    <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">Samedi</span>
    <div className="text-center">
      <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
        28
      </span>
      <span className="text-2xl font-bold text-gray-700 ml-2">Juin</span>
    </div>
  </div>
);