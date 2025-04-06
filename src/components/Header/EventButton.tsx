import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EventButtonProps {
  icon: LucideIcon;
  bgGradient: string;
  borderColor: string;
  iconBgColor: string;
  label: string;
  sublabel?: string;
  href?: string;
  hoverText?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const EventButton: React.FC<EventButtonProps> = ({
  icon: Icon,
  bgGradient,
  borderColor,
  iconBgColor,
  label,
  sublabel,
  href,
  hoverText,
  onClick
}) => {
  const ButtonContent = () => (
    <div className="flex items-center gap-2">
      <div className={`${iconBgColor} p-1.5 rounded-lg`}>
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="text-left">
        <span className="text-xs font-medium text-gray-600">{label}</span>
        {sublabel && (
          <div className="text-xs font-medium text-gray-500">{sublabel}</div>
        )}
        {hoverText && (
          <div className="text-[10px] text-inherit opacity-0 group-hover:opacity-100 transition-opacity">
            {hoverText}
          </div>
        )}
      </div>
    </div>
  );

  const className = `w-full md:w-auto ${bgGradient} p-2 rounded-lg border ${borderColor} shadow hover:shadow-md transform hover:scale-102 transition-all group`;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      <ButtonContent />
    </a>
  ) : (
    <div className={className}>
      <ButtonContent />
    </div>
  );
};