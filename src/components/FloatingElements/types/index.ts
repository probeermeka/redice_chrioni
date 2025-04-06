import { LucideIcon } from 'lucide-react';

export interface IconConfig {
  Icon: LucideIcon;
  color: string;
  size: string;
}

export interface FloatingElement {
  icon: IconConfig;
  animation: string;
  style: React.CSSProperties;
}

export interface FloatingIconProps extends FloatingElement {}