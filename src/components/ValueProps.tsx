import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radar, FileSearch, Layers, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const valueProps = [
  {
    icon: Radar,
    title: 'Creative Radar',
    description: 'Crawl global ad libraries to decode winning patterns. Turn trending concepts into your own assets with one click.',
  },
  {
    icon: FileSearch,
    title: 'Content Decoding',
    description: 'AI digests raw footage to isolate high-retention hooks and cliffhangers. We identify exactly which seconds will sell.',
  },
  {
    icon: Layers,
    title: 'Generative Scale',
    description: 'Turn one concept into hundreds of multilingual variations. Beat creative fatigue and boost bid efficiency with massive A/B testing.',
  },
  {
    icon: Zap,
    title: 'Auto-Optimization',
    description: 'Agents monitor and learn from real-time data 24/7. The engine kills losers instantly and doubles down on winners to ensure every dollar drives maximized growth.',
  },
];

export function ValueProps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      const header = sectionRef.current?.querySelector('.value-header');
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      }

      // Animate cards
      const cards = sectionRef.current?.querySelectorAll('.value-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valueProps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="value-header text-center mb-16">
          <p className="eyebrow mb-4">Core Capabilities</p>
          <h2 className="headline-section">
            One AI-Powered Engine,{' '}
            <span className="text-accent-soft">Unlimited Scale</span>
          </h2>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                className={`value-card card-dark p-6 cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-orange-500/30' : ''
                }`}
                style={{ opacity: 0 }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isActive ? 'bg-orange-500/20' : 'bg-white/5'
                }`}>
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${
                    isActive ? 'text-orange-400' : 'text-gray-400'
                  }`} />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  {prop.title}
                </h3>
                <p className="body-small">
                  {prop.description}
                </p>
                
                {/* Active indicator */}
                <div className={`mt-4 h-1 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-r from-orange-500 to-orange-400 w-full' : 'bg-white/10 w-8'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
