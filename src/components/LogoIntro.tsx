import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LogoIntroProps {
  onComplete: () => void;
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const [phase, setPhase] = useState<'ignite' | 'visible' | 'exit'>('ignite');
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1: Ignite animation (torch lighting from bottom to top)
    tl.set(maskRef.current, { height: '100%' })
      .to(maskRef.current, {
        height: '0%',
        duration: 1.2,
        ease: 'power2.inOut',
      })
      // Glow pulse during ignition
      .fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1.2, duration: 0.6, ease: 'power2.out' },
        '-=0.8'
      )
      .to(glowRef.current, { scale: 1, duration: 0.4, ease: 'power2.inOut' })
      // Text appears letter by letter
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .add(() => setPhase('visible'))
      // Hold for a moment
      .to({}, { duration: 0.8 })
      .add(() => setPhase('exit'))
      // Exit: Logo flies to top-left corner
      .to(
        logoRef.current,
        {
          x: -window.innerWidth / 2 + 80,
          y: -window.innerHeight / 2 + 50,
          scale: 0.25,
          duration: 0.6,
          ease: 'power3.inOut',
        }
      )
      .to(
        textRef.current,
        { opacity: 0, y: -20, duration: 0.3, ease: 'power2.in' },
        '-=0.6'
      )
      .to(
        glowRef.current,
        { opacity: 0, duration: 0.4 },
        '-=0.5'
      )
      .to(
        containerRef.current,
        { opacity: 0, duration: 0.3, ease: 'power2.inOut' },
        '-=0.2'
      )
      .add(() => onComplete());

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(254, 109, 4, 0.25) 0%, rgba(254, 109, 4, 0.1) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Logo container */}
      <div ref={logoRef} className="relative">
        {/* Logo with mask for ignition effect */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <img
            src="/flamma_logo.svg"
            alt="Flamma"
            className="w-full h-full object-contain"
          />
          {/* Mask that reveals from bottom to top */}
          <div
            ref={maskRef}
            className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a]"
            style={{ height: '100%' }}
          />
        </div>

        {/* Flame particles during ignition */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float-particle"
              style={{
                left: `${30 + Math.random() * 40}%`,
                bottom: '20%',
                background: `rgba(254, ${109 + Math.random() * 50}, 4, ${0.6 + Math.random() * 0.4})`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: `${1 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div
        ref={textRef}
        className="mt-8 opacity-0"
      >
        <p
          className="text-lg md:text-xl font-semibold tracking-widest"
          style={{
            background: 'linear-gradient(90deg, #fe6d04, #fb923c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          IGNITE YOUR GROWTH
        </p>
      </div>
    </div>
  );
}
