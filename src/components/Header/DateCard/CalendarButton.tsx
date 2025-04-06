import React from 'react';
import { Calendar } from 'lucide-react';

export const CalendarButton = () => (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
    <Calendar className="w-6 h-6 text-pink-500" />
  </div>
);