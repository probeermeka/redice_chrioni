import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EventButton } from './EventButton';
import { generateGoogleCalendarUrl } from '../../utils/calendar';

export const EventDetails = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Salle+Luxury+Event+Chaussée+de+Bruxelles+342+6040+Charleroi+Belgium";

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center max-w-xl mx-auto mb-4">
      <EventButton
        icon={Calendar}
        bgGradient="bg-gradient-to-br from-pink-50 to-pink-100"
        borderColor="border-pink-200"
        iconBgColor="bg-pink-500"
        label="28 Juin 2025"
        href={generateGoogleCalendarUrl()}
        hoverText="Ajouter au calendrier"
      />

      <EventButton
        icon={MapPin}
        bgGradient="bg-gradient-to-br from-yellow-50 to-yellow-100"
        borderColor="border-yellow-200"
        iconBgColor="bg-yellow-500"
        label="Luxury Event"
        sublabel="Charleroi"
        href={googleMapsUrl}
        hoverText="Voir sur Maps"
        onClick={(e) => {
          e.preventDefault();
          window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
        }}
      />
    </div>
  );
};