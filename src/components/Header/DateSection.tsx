import React from 'react';
import { Calendar } from 'lucide-react';
import { generateGoogleCalendarUrl } from '../../utils/calendar';

export const DateSection = () => {
  return (
    <a
      href={generateGoogleCalendarUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Icon */}
        <div className="text-pink-500">
          <Calendar className="w-10 h-10" />
        </div>
        
        {/* Date and Time Information */}
        <div className="flex flex-col items-center space-y-1">
          <span className="text-base text-gray-600">Samedi</span>
          <span className="text-3xl font-bold text-pink-500">28 Juin 2025</span>
          <span className="text-2xl font-semibold text-pink-500">19:00</span>
        </div>

        {/* Calendar Link Text */}
        <span className="text-sm text-pink-400 opacity-80 hover:opacity-100 transition-opacity">
          Ajouter au calendrier
        </span>
      </div>
    </a>
  );
};