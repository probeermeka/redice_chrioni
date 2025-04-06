import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { generateGoogleCalendarUrl } from '../utils/calendar';

export const Header = () => {
  return (
    <div className="text-center mb-8 md:mb-16">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-8 mb-8">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4 animate-pulse flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
          <span className="whitespace-nowrap">SAVE THE DATE</span>
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
        </h1>
        <h2 className="text-xl md:text-4xl font-semibold text-pink-600 mb-6 md:mb-8 px-2">
          Redice & Chrioni
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          {/* Date Card */}
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-2 border-pink-200 shadow-lg transform hover:scale-105 transition-transform group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="bg-pink-500 p-3 rounded-full">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-800">Samedi</span>
                <span className="text-3xl font-bold text-pink-600">5 juillet 2025</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Ajouter au calendrier</span>
              </div>
            </div>
          </a>
        </div>

        <div className="max-w-2xl mx-auto px-2">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Rejoignez-nous pour une journée inoubliable à Zaventem et Merchtem.
          </p>
        </div>
      </div>
    </div>
  );
}