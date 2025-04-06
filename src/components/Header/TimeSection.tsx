import React from 'react';
import { Clock } from 'lucide-react';

export const TimeSection = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-lg border border-purple-200 shadow hover:shadow-md transform hover:scale-102 transition-all">
      <div className="flex items-center gap-2">
        <div className="bg-purple-500 p-1.5 rounded-lg">
          <Clock className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="text-left">
          <span className="text-xs font-medium text-gray-600">À partir de</span>
          <div className="text-xs font-bold text-purple-600">19:00</div>
        </div>
      </div>
    </div>
  );
};