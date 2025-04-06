import React from 'react';
import type { FloatingIconProps } from './types';

export const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, animation, style }) => {
  return (
    <div
      className={`absolute ${animation} ${icon.color} ${icon.size} opacity-70 hover:opacity-100 transition-opacity duration-300`}
      style={style}
    >
      <icon.Icon strokeWidth={1.5} />
    </div>
  );
};