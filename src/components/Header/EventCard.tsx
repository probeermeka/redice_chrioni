import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface EventCardProps {
  icon: LucideIcon;
  content: string;
  subContent?: string;
  iconColor?: string;
}

export const EventCard = ({ 
  icon: Icon, 
  content, 
  subContent,
  iconColor = "text-pink-500"
}: EventCardProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`w-6 h-6 ${iconColor}`} />
      <div className="flex flex-col">
        <span className="text-xl font-semibold">{content}</span>
        {subContent && (
          <span className="text-sm text-gray-600">{subContent}</span>
        )}
      </div>
    </div>
  );
};