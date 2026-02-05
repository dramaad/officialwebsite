import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 'radar',
    title: 'Creative Radar',
    description: "Stop guessing. Flamma's agents crawl global ad libraries 24/7, identifying the winning patterns, hooks, and formats that are currently scaling. You can also use similar templates with a simple click.",
    image: '/feature-radar.jpg',
    align: 'left',
  },
  {
    id: 'decoding',
    title: 'Content Decoding',
    description: 'With fine-tuned multimodal models, our agents digest and pick the high-retention cliffhangers, emotional peaks, and sellable moments with frame-level precision.',
    image: '/feature-decoding.jpg',
    align: 'right',
  },
  {
    id: 'scale',
    title: 'Generative Scale',
    description: 'Turn one concept into hundreds of multilingual variations. Beat creative fatigue and boost bid efficiency with massive A/B testing.',
    image: '/feature-scale.jpg',
    align: 'left',
  },
  {
    id: 'optimize',
    title: 'Auto Launch & Optimization',
    description: 'The engine deploys directly to your networks. It learns from real-time performance data, killing losers and doubling down on winners to maximize ROAS.',
    image: '/feature-optimize.jpg',
    align: 'right',
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pulseLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each feature block
      features.forEach((_, index) => {
        const block = sectionRef.current?.querySelector(`#feature-${index}`);
        const content = block?.querySelector('.feature-content');
        const image = block?.querySelector('.feature-image');

        if (content && image) {
          gsap.fromTo(
            content,
            { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: block,
                start: 'top 70%',
              },
            }
          );

          gsap.fromTo(
            image,
            { opacity: 0, x: index % 2 === 0 ? 40 : -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: block,
                start: 'top 70%',
              },
            }
          );
        }
      });

      // Pulse line animation tied to scroll
      if (pulseLineRef.current) {
        gsap.to(pulseLineRef.current, {
          y: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative py-24">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <p className="eyebrow mb-4">Core Capabilities</p>
          <h2 className="headline-section">
            Built for Scale,{' '}
            <span className="text-flamma-bright">Not Just Creation</span>
          </h2>
        </div>
      </div>

      {/* Pulse Line - vertical on the side */}
      <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-px hidden lg:block">
        <div className="absolute inset-0 bg-white/5" />
        <div 
          ref={pulseLineRef}
          className="absolute top-0 left-0 w-full h-24"
          style={{
            background: 'linear-gradient(180deg, transparent, #f97316, transparent)',
            filter: 'blur(2px)',
          }}
        />
      </div>

      {/* Feature Blocks */}
      <div className="space-y-32">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            id={`feature-${index}`}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                feature.align === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div 
                className={`feature-content ${feature.align === 'right' ? 'lg:order-2' : ''}`}
                style={{ opacity: 0 }}
              >
                {/* Glow behind card */}
                <div 
                  className="absolute -inset-8 pointer-events-none opacity-30"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.15) 0%, transparent 60%)',
                    filter: 'blur(40px)',
                  }}
                />
                
                <div className="relative">
                  <span className="eyebrow mb-4 block">0{index + 1}</span>
                  <h3 className="headline-feature mb-6">{feature.title}</h3>
                  <p className="body-text">{feature.description}</p>
                </div>
              </div>

              {/* Image */}
              <div 
                className={`feature-image relative ${feature.align === 'right' ? 'lg:order-1' : ''}`}
                style={{ opacity: 0 }}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
