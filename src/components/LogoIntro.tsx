import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LogoIntroProps {
  onComplete: () => void;
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textMaskRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1: Ignite - logo reveals from BOTTOM to TOP (flame rises)
    tl.set(maskRef.current, { height: '100%' })
      .to(maskRef.current, {
        height: '0%',
        duration: 1.6,
        ease: 'power2.out',
      })
      // Glow appears only after logo is mostly revealed
      .fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1.2, duration: 0.7, ease: 'power2.out' },
        '-=0.35'
      )
      .to(glowRef.current, { scale: 1, duration: 0.3, ease: 'power2.inOut' })
      // Text left to right
      .fromTo(textRef.current, { opacity: 1 }, { opacity: 1, duration: 0 }, '-=0.4')
      .fromTo(
        textMaskRef.current,
        { width: '0%' },
        { width: '100%', duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      )
      .to({}, { duration: 0.5 })
      // Exit: logo flies to top-left
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
      .to(textRef.current, { opacity: 0, x: -30, duration: 0.3, ease: 'power2.in' }, '-=0.6')
      .to(glowRef.current, { opacity: 0, duration: 0.4 }, '-=0.5')
      .to(containerRef.current, { opacity: 0, duration: 0.3, ease: 'power2.inOut' }, '-=0.2')
      .add(() => onComplete());

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute w-[480px] h-[480px] rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(254, 109, 4, 0.18) 0%, rgba(254, 109, 4, 0.06) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div ref={logoRef} className="relative">
        <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden">
          <img
            src="/flamma_logo.svg"
            alt="Flamma"
            className="w-full h-full object-contain"
          />
          {/* Mask: soft gradient at bottom edge so no hard black bar when shrinking */}
          <div
            ref={maskRef}
            className="absolute top-0 left-0 right-0"
            style={{
              height: '100%',
              background: 'linear-gradient(to bottom, #000 0%, #000 50%, rgba(0,0,0,0.6) 80%, transparent 100%)',
            }}
          />
        </div>

        {/* Subtle ember particles during ignition */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float-particle"
              style={{
                left: `${38 + Math.random() * 24}%`,
                bottom: '8%',
                background: `rgba(254, 109, 4, ${0.35 + Math.random() * 0.25})`,
                animationDelay: `${i * 0.25}s`,
                animationDuration: `${1.3 + Math.random() * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div ref={textRef} className="mt-8 overflow-hidden">
        <div ref={textMaskRef} className="overflow-hidden" style={{ width: '0%' }}>
          <p
            className="text-lg md:text-xl font-semibold tracking-[0.25em] whitespace-nowrap"
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
    </div>
  );
}
