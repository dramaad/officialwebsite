import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [riseProgress, setRiseProgress] = useState(0);

  // Horizon rises as user scrolls down (scroll-linked)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const h = section.offsetHeight;
      if (h <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / h));
      setRiseProgress(progress);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

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

      {/* Dawn / horizon — same orange area as before; rises with scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 bottom-0 w-full will-change-transform"
          style={{
            transform: `translateY(-${riseProgress * 72}%)`,
          }}
        >
          {/* Horizon band — warm light at bottom */}
          <div
            className="absolute left-0 right-0 w-full"
            style={{
              height: 'min(280px, 28vh)',
              bottom: 0,
              background: 'linear-gradient(to top, transparent 0%, rgba(254, 109, 4, 0.06) 20%, rgba(254, 109, 4, 0.18) 50%, rgba(254, 109, 4, 0.06) 80%, transparent 100%)',
              filter: 'blur(40px)',
            }}
          />
          {/* Dawn sky glow — soft above horizon */}
          <div
            className="absolute left-0 right-0 bottom-0 w-full"
            style={{
              height: '70%',
              background: 'linear-gradient(to top, rgba(254, 109, 4, 0.03) 0%, rgba(254, 109, 4, 0.01) 40%, transparent 100%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 35%, rgba(0,0,0,0.45) 100%)',
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
