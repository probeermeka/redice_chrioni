import React from 'react';
import { Calendar } from 'lucide-react';
import { generateGoogleCalendarUrl } from '../../../utils/calendar';

export const DateCard = () => {
  return (
    <a
      href={generateGoogleCalendarUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-br from-pink-50 to-pink-100 p-5 rounded-lg border border-pink-200 shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Calendar Icon */}
        <div className="bg-pink-500 p-2.5 rounded-full">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        
        {/* Date Information */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-medium text-gray-600">Samedi</span>
          <span className="text-xl font-bold text-pink-600">28 Juin</span>
          <span className="text-lg font-bold text-pink-600">19:00</span>
        </div>

        {/* Hover Text */}
        <div className="text-xs font-medium text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
          Ajouter au calendrier
        </div>
      </div>
    </a>
  );
};