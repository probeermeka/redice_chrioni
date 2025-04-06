import React from 'react';
import { generateGoogleCalendarUrl } from '../../utils/calendar';
import { GOOGLE_MAPS_URL } from '../../constants/urls';

export const EventActions = () => {
  return (
    <div className="flex gap-4 mt-4">
      <a
        href={generateGoogleCalendarUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-pink-600 hover:text-pink-700 transition-colors"
      >
        Ajouter au calendrier
      </a>
      <span className="text-gray-300">|</span>
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
        }}
        className="text-sm text-pink-600 hover:text-pink-700 transition-colors"
      >
        Voir sur Maps
      </a>
    </div>
  );
};