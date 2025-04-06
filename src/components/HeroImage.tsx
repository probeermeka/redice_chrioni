import React from 'react';
import { images } from '../config/images';
import { useImageFocus } from '../hooks/useImageFocus';

export const HeroImage = () => {
  const imageRef = useImageFocus();

  return (
    <div 
      ref={imageRef}
      className="relative w-full max-w-xs md:max-w-2xl mx-auto mb-8 md:mb-12 outline-none transition-transform duration-300"
      tabIndex={0}
    >
      <div className="relative">
        <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden border-4 md:border-8 border-white/20 shadow-xl transform hover:scale-105 transition-transform">
          <img
            src={images.celebration.url}
            alt={images.celebration.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg z-10">
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          50 ans
        </span>
      </div>
    </div>
  );
};