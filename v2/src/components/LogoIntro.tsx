import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LogoIntroProps {
  onComplete: () => void;
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const flameRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state - logo small and dark
      gsap.set(logoRef.current, { scale: 0.3, opacity: 0 });
      gsap.set(flameRef.current, { scaleY: 0, opacity: 0, transformOrigin: 'bottom center' });
      gsap.set(taglineRef.current, { opacity: 0, y: 20 });

      // Animation sequence
      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to(flameRef.current, {
        scaleY: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3')
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2');

      // Hold for a moment then exit
      tl.to({}, { duration: 0.8 });

      // Exit animation
      tl.add(() => setIsExiting(true));
      
      tl.to([logoRef.current, taglineRef.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setTimeout(onComplete, 100);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#0d0d0d' }}
    >
      {/* Logo with flame effect */}
      <div className="relative">
        {/* Logo */}
        <div ref={logoRef} className="relative z-10">
          <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48">
            {/* Flame shape logo - transparent orange */}
            <defs>
              <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            <path
              d="M50 95 C30 95, 15 80, 15 55 C15 35, 30 15, 50 5 C70 15, 85 35, 85 55 C85 80, 70 95, 50 95 Z M50 80 C62 80, 70 70, 70 55 C70 42, 62 30, 50 22 C38 30, 30 42, 30 55 C30 70, 38 80, 50 80 Z"
              fill="url(#flameGradient)"
            />
            <path
              d="M50 70 C42 70, 38 62, 38 52 C38 44, 44 36, 50 30 C56 36, 62 44, 62 52 C62 62, 58 70, 50 70 Z"
              fill="#0d0d0d"
            />
          </svg>
        </div>

        {/* Animated flame glow */}
        <div 
          ref={flameRef}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 pointer-events-none"
        >
          <div 
            className="w-full h-full rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.6) 0%, rgba(251, 146, 60, 0.3) 40%, transparent 70%)',
              animation: 'flame-pulse 1s ease-in-out infinite alternate',
            }}
          />
        </div>
      </div>

      {/* Tagline */}
      <div 
        ref={taglineRef}
        className="mt-12"
      >
        <p 
          className="text-2xl md:text-3xl font-semibold tracking-wide"
          style={{ 
            color: '#f97316',
            textShadow: '0 0 30px rgba(249, 115, 22, 0.5)',
          }}
        >
          Ignite Your Growth
        </p>
      </div>

      <style>{`
        @keyframes flame-pulse {
          0% {
            transform: scaleY(0.8) scaleX(1);
            opacity: 0.7;
          }
          100% {
            transform: scaleY(1.2) scaleX(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
