import React from 'react';
import { Calendar } from 'lucide-react';

export const CalendarIcon = () => (
  <div className="relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
      <Calendar className="w-6 h-6 text-pink-500" />
    </div>
  </div>
);