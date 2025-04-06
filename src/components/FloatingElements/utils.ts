export const generateFloatingStyles = (index: number): React.CSSProperties => {
  const section = Math.floor(index / 10);
  const sectionSize = 100 / 4;
  const baseLeft = section * sectionSize;
  const left = `${baseLeft + (Math.random() * sectionSize)}%`;
  const top = `${Math.random() * 90}%`;
  const delay = Math.random() * 10;
  const duration = 5 + Math.random() * 5;

  return {
    left,
    top,
    transform: 'translate(-50%, -50%)',
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.3))',
    zIndex: 20,
  };
};