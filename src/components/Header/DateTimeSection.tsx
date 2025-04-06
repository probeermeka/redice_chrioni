import React from 'react';
import { Calendar } from 'lucide-react';
import { generateGoogleCalendarUrl } from '../../utils/calendar';

export const DateTimeSection = () => {
  return (
    <a
      href={generateGoogleCalendarUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-br from-pink-50 to-pink-100 px-8 py-6 rounded-xl border-2 border-pink-200 shadow-lg transform hover:scale-105 transition-transform group"
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="bg-pink-500 p-3 rounded-full">
          <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        
        <div className="flex flex-col items-center space-y-1">
          <span className="text-lg font-semibold text-gray-800">Samedi</span>
          <span className="text-3xl font-bold text-pink-600">28 Juin 2025</span>
          <span className="text-2xl font-bold text-pink-600">19:00</span>
        </div>

        <div className="text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Ajouter au calendrier</span>
        </div>
      </div>
    </a>
  );
};