import React from 'react';
import { FloatingIcon } from './FloatingIcon';
import { useFloatingElements } from './hooks/useFloatingElements';
import './styles.css';

export const FloatingElements: React.FC = () => {
  const elements = useFloatingElements();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {elements.map((element, index) => (
        <FloatingIcon
          key={index}
          {...element}
        />
      ))}
    </div>
  );
};