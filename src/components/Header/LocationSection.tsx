import React from 'react';
import { MapPin } from 'lucide-react';

export const LocationSection = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border-2 border-yellow-200 shadow-lg transform hover:scale-105 transition-transform">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-yellow-500 p-3 rounded-full">
          <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <span className="text-lg md:text-xl font-bold text-gray-800">Salle</span>
        <span className="text-xl md:text-2xl font-bold text-yellow-600">Luxury Event</span>
        <span className="text-sm md:text-base text-gray-600 text-center">Charleroi</span>
      </div>
    </div>
  );
};