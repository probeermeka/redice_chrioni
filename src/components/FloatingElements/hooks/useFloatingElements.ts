import { useMemo } from 'react';
import { TOTAL_ELEMENTS, ICONS, ANIMATIONS } from '../config/constants';
import { generateFloatingStyles } from '../utils/styles';
import type { FloatingElement } from '../types';

export const useFloatingElements = (): FloatingElement[] => {
  return useMemo(() => {
    return Array.from({ length: TOTAL_ELEMENTS }, (_, i) => ({
      icon: ICONS[i % ICONS.length],
      animation: ANIMATIONS[i % ANIMATIONS.length],
      style: generateFloatingStyles(i)
    }));
  }, []);
};