import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radar, FileSearch, Layers, Zap, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 'radar',
    icon: Radar,
    title: 'Creative Radar',
    shortDesc: 'Crawl global ad libraries to decode winning patterns',
    fullDesc: 'Our AI agents continuously monitor TikTok, Meta, and Google ad libraries to identify trending hooks, viral concepts, and winning creative patterns. Turn proven concepts into your own assets with one click.',
    placeholder: 'Ad Library Analysis Demo',
  },
  {
    id: 'decoding',
    icon: FileSearch,
    title: 'Content Decoding',
    shortDesc: 'AI digests raw footage to isolate high-retention hooks',
    fullDesc: 'Upload your raw footage and our multimodal AI analyzes every frame to identify the most engaging moments, emotional peaks, and cliffhangers. We pinpoint exactly which seconds will drive conversions.',
    placeholder: 'Content Analysis Demo',
  },
  {
    id: 'scale',
    icon: Layers,
    title: 'Generative Scale',
    shortDesc: 'Turn one concept into hundreds of variations',
    fullDesc: 'Generate hundreds of multilingual ad variations from a single concept. Beat creative fatigue, test more hypotheses, and boost bid efficiency with massive A/B testing at scale.',
    placeholder: 'Batch Generation Demo',
  },
  {
    id: 'optimize',
    icon: Zap,
    title: 'Auto-Optimization',
    shortDesc: 'Agents monitor and learn from real-time data 24/7',
    fullDesc: 'Our optimization agents continuously monitor campaign performance, kill underperforming creatives instantly, and double down on winners. Every ad dollar drives maximized growth.',
    placeholder: 'Auto-Optimization Demo',
  },
];

export function ProductDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState('radar');

  const activeData = features.find(f => f.id === activeFeature) || features[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const demoHeader = sectionRef.current?.querySelector('.demo-header');
      const demoContent = sectionRef.current?.querySelector('.demo-content');
      
      if (demoHeader) {
        gsap.fromTo(
          demoHeader,
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

      if (demoContent) {
        gsap.fromTo(
          demoContent,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
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

  return (
    <section ref={sectionRef} className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="demo-header text-center mb-16">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="headline-section">
            Built for Scale,{' '}
            <span className="text-accent-soft">Not Just Creation</span>
          </h2>
        </div>

        {/* Demo Content */}
        <div className="demo-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Feature List */}
          <div className="space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/5 border-orange-500/30' 
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-orange-500/20' : 'bg-white/5'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-orange-400' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-display font-semibold text-lg transition-colors ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}>
                          {feature.title}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-all ${
                          isActive ? 'text-orange-400 rotate-90' : 'text-gray-600'
                        }`} />
                      </div>
                      <p className="body-small mt-1">
                        {feature.shortDesc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Demo Placeholder */}
          <div className="relative">
            <div className="card-dark aspect-video flex items-center justify-center overflow-hidden">
              {/* Placeholder content */}
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                  <activeData.icon className="w-10 h-10 text-orange-400" />
                </div>
                <h4 className="font-display font-semibold text-xl text-white mb-3">
                  {activeData.placeholder}
                </h4>
                <p className="body-small max-w-sm mx-auto">
                  {activeData.fullDesc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs text-gray-400">Animation coming soon</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>

            {/* Glow effect */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
