import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, BarChart3, Zap, Target, RefreshCw, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Sparkles,
    title: 'AI Generation',
    description: 'Generate hundreds of video variants from a single raw asset using advanced AI models trained on performance data.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time tracking of CTR, CVR, and ROAS metrics with actionable insights to optimize your campaigns.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Cut production time by 70%. What used to take days now takes minutes with automated workflows.',
  },
  {
    icon: Target,
    title: 'Smart Targeting',
    description: 'Automatically match creatives to audience segments for maximum engagement and conversion.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'Our AI improves with every campaign, learning what works best for your specific vertical.',
  },
  {
    icon: Layers,
    title: 'Multi-Platform',
    description: 'One-click publishing to Meta, TikTok, Google, and more with platform-optimized formats.',
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Features</p>
          <h2 className="headline-section mb-4">
            Everything You Need to{' '}
            <span className="text-accent">Scale</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            A complete creative automation platform designed for high-volume user acquisition teams.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card card-dark p-6"
              style={{ opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="headline-card mb-2">{feature.title}</h3>
              <p className="body-small">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
