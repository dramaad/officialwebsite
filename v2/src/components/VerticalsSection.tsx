import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gamepad2, Film, Zap, Target, Sparkles, TrendingUp, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const verticals = {
  gaming: {
    icon: Gamepad2,
    title: 'Gaming UA',
    subtitle: 'High-Octane Creative Generation',
    description:
      'Transform raw gameplay footage into high-converting ad creatives. Our AI identifies peak moments, enhances visual impact, and generates multiple variants for A/B testing.',
    image: '/gaming_preview.jpg',
    features: [
      { icon: Zap, label: 'Highlight Auto-Detection', desc: 'AI identifies clutch moments & epic plays' },
      { icon: TrendingUp, label: 'Visual Enhancement', desc: 'Damage numbers, combo counters, speed ramps' },
      { icon: Target, label: 'Hook Variants', desc: '50+ opening hooks tested automatically' },
    ],
    stats: [
      { value: '3.2x', label: 'Average CTR Lift' },
      { value: '45+', label: 'Variants per Asset' },
      { value: '60%', label: 'Time Saved' },
    ],
  },
  drama: {
    icon: Film,
    title: 'Short Drama',
    subtitle: 'Emotion-Driven Story Clipping',
    description:
      'Extract the most compelling moments from your episodes. Flamma identifies emotional peaks, creates suspenseful cuts, and optimizes for viewer retention and conversion.',
    image: '/short_drama_preview.jpg',
    features: [
      { icon: Sparkles, label: 'Plot Twist Extraction', desc: 'Auto-detect cliffhangers & reveals' },
      { icon: Users, label: 'Character Focus', desc: 'Emotional expression recognition' },
      { icon: Clock, label: 'Paywall Timing', desc: 'Optimal cut points for conversion' },
    ],
    stats: [
      { value: '2.8x', label: 'Retention Rate' },
      { value: '35+', label: 'Trailers per Episode' },
      { value: '70%', label: 'Production Time Cut' },
    ],
  },
};

export function VerticalsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'gaming' | 'drama'>('gaming');
  const contentRef = useRef<HTMLDivElement>(null);

  const activeData = verticals[activeTab];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate content change
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-24"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="eyebrow mb-4">Built for High-Volume Verticals</p>
        <h2 className="headline-section">
          Industry-<span style={{ color: '#FF3D00' }}>Specific</span> Solutions
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-12 p-1 rounded-2xl bg-white/5">
        <button
          onClick={() => setActiveTab('gaming')}
          className={`tab-btn rounded-xl px-8 py-4 flex items-center gap-3 transition-all ${
            activeTab === 'gaming' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <Gamepad2 className="w-5 h-5" />
          <span className="font-semibold">Gaming UA</span>
        </button>
        <button
          onClick={() => setActiveTab('drama')}
          className={`tab-btn rounded-xl px-8 py-4 flex items-center gap-3 transition-all ${
            activeTab === 'drama' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <Film className="w-5 h-5" />
          <span className="font-semibold">Short Drama</span>
        </button>
      </div>

      {/* Content Card */}
      <div
        ref={contentRef}
        className="w-full max-w-6xl glass-card overflow-hidden"
        style={{ borderColor: 'rgba(255, 61, 0, 0.2)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <img
              src={activeData.image}
              alt={activeData.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Overlay Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-4">
                {activeData.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 glass-card p-4 text-center"
                    style={{ borderColor: 'rgba(255, 61, 0, 0.2)' }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: '#FF9100' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #FF3D00, #FF9100)',
                }}
              >
                <activeData.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{activeData.title}</h3>
                <p className="text-sm" style={{ color: '#FF9100' }}>
                  {activeData.subtitle}
                </p>
              </div>
            </div>

            <p className="body-text mb-8">{activeData.description}</p>

            {/* Features */}
            <div className="space-y-4">
              {activeData.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255, 61, 0, 0.05)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255, 61, 0, 0.15)' }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: '#FF3D00' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{feature.label}</div>
                    <div className="text-sm text-gray-400">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Want to see how it works for your vertical?</p>
        <button className="btn-outline">Schedule a Demo</button>
      </div>
    </section>
  );
}
