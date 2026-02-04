import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="card-dark p-8 md:p-16 text-center relative overflow-hidden"
          style={{ opacity: 0 }}
        >
          {/* Background gradient */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10">
            <h2 className="headline-section mb-4">
              Ready to Transform Your{' '}
              <span className="text-accent-soft">Creative Workflow</span>?
            </h2>
            <p className="subheadline max-w-2xl mx-auto mb-8">
              Join teams already using Flamma to generate high-performing ad creatives at scale. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#signup" 
                className="btn-primary flex items-center gap-2 border-2 border-orange-500"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="btn-secondary flex items-center gap-2 border border-white/20"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
