import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.2 });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="headline-hero mb-8"
            style={{ opacity: 0 }}
          >
            Turn <span className="text-accent-soft">Raw Footage</span> into{' '}
            <span className="text-accent-bright">Winning Ads</span> at Scale
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadRef}
            className="subheadline max-w-3xl mx-auto mb-10"
            style={{ opacity: 0 }}
          >
            Your ultimate engine for performance marketing. Our agents use fine-tuned multimodal models 
            to decode market sentiment and your raw footage, extracting the best hooks and cliffhangers. 
            We generate paid ads at scale and autonomously optimize campaigns directly to your ad networks.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ opacity: 0 }}
          >
            <a href="#signup" className="btn-primary flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Tagline */}
          <div
            ref={taglineRef}
            className="mt-20"
            style={{ opacity: 0 }}
          >
            <p className="eyebrow mb-2">Raw materials in. Revenue out.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
