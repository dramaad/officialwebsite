import { useEffect, useState } from 'react';

interface LogoIntroProps {
  onComplete: () => void;
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500"
        style={{ 
          backgroundColor: '#0a0a0a',
          opacity: 0,
          pointerEvents: 'none'
        }}
      >
        <img 
          src="/logo.png" 
          alt="Flamma" 
          className="w-32 h-32"
          style={{ opacity: 0 }}
        />
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="logo-intro">
        <img 
          src="/logo.png" 
          alt="Flamma" 
          className="w-40 h-40 md:w-48 md:h-48 object-contain"
        />
      </div>
    </div>
  );
}
