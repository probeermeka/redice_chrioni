import { Star, Sparkles, PartyPopper, Heart, Gift, Cake, Wine, Music } from 'lucide-react';
import type { IconConfig } from './types';

export const TOTAL_ELEMENTS = 40;

export const ICONS: IconConfig[] = [
  { Icon: Star, color: 'text-yellow-400', size: 'w-8 h-8' },
  { Icon: Sparkles, color: 'text-pink-400', size: 'w-6 h-6' },
  { Icon: PartyPopper, color: 'text-purple-400', size: 'w-8 h-8' },
  { Icon: Heart, color: 'text-red-400', size: 'w-6 h-6' },
  { Icon: Gift, color: 'text-blue-400', size: 'w-7 h-7' },
  { Icon: Cake, color: 'text-pink-500', size: 'w-8 h-8' },
  { Icon: Wine, color: 'text-purple-500', size: 'w-7 h-7' },
  { Icon: Music, color: 'text-indigo-400', size: 'w-6 h-6' }
];

export const ANIMATIONS = [
  'animate-float-up',
  'animate-float-side',
  'animate-float-diagonal',
  'animate-float-spin'
];