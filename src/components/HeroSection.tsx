import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.8 });

      // H1 animation
      tl.fromTo(
        h1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      // H2 animation
      .fromTo(
        h2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      // CTA animation
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      )
      // Process bar animation
      .fromTo(
        processRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Try to autoplay video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, that's ok
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Video Background - uncomment and add video file when available */}
      {/* 
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      */}

      {/* Animated gradient background - visible presence */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary orb - stronger, drifts */}
        <div 
          className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full animate-hero-drift pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.9) 0%, rgba(249, 115, 22, 0.2) 40%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] rounded-full animate-hero-drift-delay pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(254, 109, 4, 0.6) 0%, transparent 60%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Center glow */}
        <div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-slow pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Grid - more visible */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Vignette - lighter so content stands out */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 */}
          <h1
            ref={h1Ref}
            className="headline-hero mb-8"
            style={{ opacity: 0 }}
          >
            Turn <span className="text-accent-soft">Raw Footage</span> into{' '}
            <span className="text-accent-bright glow-text">Winning Ads</span>
            <br />
            <span className="text-white">at Scale</span>
          </h1>

          {/* H2 - Lead-in + description */}
          <div ref={h2Ref} className="mb-10" style={{ opacity: 0 }}>
            <p className="lead-in mb-4">
              Your ultimate engine for performance marketing.
            </p>
            <p className="body-text max-w-2xl mx-auto">
              With fine-tuned multimodal models, our agents decode market sentiment and raw footage, 
              extract winning hooks and cliffhangers, then autonomously optimize campaigns directly to your ad networks.
            </p>
          </div>

          {/* Process Bar - Eyebrow style above CTA */}
          <div
            ref={processRef}
            className="flex justify-center mb-6"
            style={{ opacity: 0 }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="eyebrow">RAW MATERIALS IN</span>
              <ArrowRight className="w-4 h-4 text-accent-soft" />
              <span className="eyebrow">REVENUE OUT</span>
            </div>
          </div>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ opacity: 0 }}
          >
            <a href="#demo" className="btn-primary flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
