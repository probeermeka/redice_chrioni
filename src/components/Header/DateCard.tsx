import React from 'react';
import { Calendar } from 'lucide-react';
import { generateGoogleCalendarUrl } from '../../utils/calendar';

export const DateCard = () => {
  return (
    <a
      href={generateGoogleCalendarUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200 shadow-md transform hover:scale-105 transition-transform duration-300 group"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="bg-pink-500 p-2 rounded-full">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-sm font-medium text-gray-700">Samedi</span>
          <span className="text-xl font-bold text-pink-600">28 Juin 2025</span>
          <span className="text-lg font-bold text-pink-600">19:00</span>
        </div>

        <div className="text-xs font-medium text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ajouter au calendrier
        </div>
      </div>
    </a>
  );
};