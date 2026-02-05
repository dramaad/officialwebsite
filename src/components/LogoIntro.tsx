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
  const horizonRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Dawn: horizon band rises from bottom, logo revealed as light sweeps up
    tl.set(horizonRef.current, { y: '80vh' })
      .set(maskRef.current, { height: '100%' })
      // Horizon rises; mask shrinks in sync so logo is "lit" by the dawn
      .to(maskRef.current, { height: '0%', duration: 1.9, ease: 'power2.out' }, 0)
      .to(horizonRef.current, { y: '-80vh', duration: 1.9, ease: 'power2.out' }, 0)
      // Sky glow fades in as dawn breaks
      .fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' },
        0.8
      )
      // Text left to right
      .fromTo(
        textMaskRef.current,
        { width: '0%' },
        { width: '100%', duration: 0.9, ease: 'power2.out' },
        '-=0.5'
      )
      .to({}, { duration: 0.6 })
      // Exit
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Dawn glow — sky lighting up */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(254, 109, 4, 0.08) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Horizon band — warm light rising like dawn */}
      <div
        ref={horizonRef}
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{
          height: 160,
          top: '50%',
          marginTop: -80,
          willChange: 'transform',
          background: 'linear-gradient(to top, transparent 0%, rgba(254, 109, 4, 0.08) 30%, rgba(254, 109, 4, 0.25) 50%, rgba(254, 109, 4, 0.08) 70%, transparent 100%)',
          filter: 'blur(24px)',
        }}
      />

      <div ref={logoRef} className="relative z-10">
        <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden">
          <img
            src="/flamma_logo.svg"
            alt="Flamma"
            className="w-full h-full object-contain"
          />
          {/* Mask: reveals logo as horizon sweeps up */}
          <div
            ref={maskRef}
            className="absolute top-0 left-0 right-0 bg-black"
            style={{ height: '100%' }}
          />
        </div>
      </div>

      <div ref={textRef} className="mt-8 overflow-hidden z-10">
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
