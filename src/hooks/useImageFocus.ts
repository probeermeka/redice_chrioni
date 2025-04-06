import { useEffect, useRef } from 'react';

export const useImageFocus = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the image container when component mounts
    if (imageRef.current) {
      imageRef.current.focus();
      
      // Add a subtle animation class
      imageRef.current.classList.add('scale-105');
      setTimeout(() => {
        imageRef.current?.classList.remove('scale-105');
      }, 1000);
    }
  }, []);

  return imageRef;
};