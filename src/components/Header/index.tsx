import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { generateGoogleCalendarUrl } from '../../utils/calendar';

export const Header = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Salle+Luxury+Event+Chaussée+de+Bruxelles+342+6040+Charleroi+Belgium";

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-transparent rounded-3xl -z-10" />
      
      {/* Main content */}
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        {/* Title section with reduced size */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-800">SAVE THE DATE</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Anniversaire de
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Mimie Aurélie PERO
          </h2>
        </div>

        {/* Event details cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Date & Time Card */}
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-xl shadow-md">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Date & Heure</p>
                <p className="text-lg font-bold text-gray-800 mb-1">Samedi 28 Juin 2025</p>
                <p className="text-xl font-bold text-pink-600">19:00</p>
                <p className="text-xs text-pink-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ajouter au calendrier →
                </p>
              </div>
            </div>
          </a>

          {/* Location Card */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Lieu</p>
                <p className="text-lg font-bold text-gray-800 mb-1">Salle Luxury Event</p>
                <p className="text-base text-gray-600">Charleroi</p>
                <p className="text-xs text-purple-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir sur Maps →
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-gray-600 text-sm md:text-base">
            Rejoignez-nous pour une soirée inoubliable à la Salle Luxury Event de Charleroi.
          </p>
        </div>
      </div>
    </div>
  );
};