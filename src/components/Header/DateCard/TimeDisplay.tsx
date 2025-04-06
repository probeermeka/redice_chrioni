import React from 'react';
import { Clock } from 'lucide-react';

export const TimeDisplay = () => (
  <div className="absolute -bottom-4 right-0 bg-pink-500 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
    <Clock className="w-4 h-4 text-white" />
    <span className="text-white font-semibold">19:00</span>
  </div>
);