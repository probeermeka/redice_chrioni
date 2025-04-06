import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="text-center text-white mt-16">
      <div className="flex items-center justify-center gap-2">
        <Heart className="w-5 h-5 text-pink-500" />
        <p>Au plaisir de célébrer ensemble ce moment spécial</p>
      </div>
    </footer>
  );
};