import React from 'react';
import { Gift } from 'lucide-react';

export const GiftButton = () => {
  return (
    <a
      href="https://www.leetchi.com/fr/c/redice-chrioni-1212410?utm_source=whatsapp&utm_medium=social_sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <Gift className="w-5 h-5" />
      <span>Participer au cadeau commun</span>
    </a>
  );
};