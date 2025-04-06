import { LucideIcon } from 'lucide-react';

export interface IconConfig {
  Icon: LucideIcon;
  color: string;
  size: string;
}

export interface FloatingIconProps {
  icon: IconConfig;
  animation: string;
  style: React.CSSProperties;
}