import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radar, Search, Layers, Zap, TrendingUp, Play, Globe, CheckCircle, BarChart3, ArrowUp, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animated Demo Components
function CreativeRadarDemo() {
  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radar className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-white">Creative Radar</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Live scanning</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Trending Ads */}
        {[
          { platform: 'TikTok', hook: '"Wait for it..." opener', ctr: '+42%', trending: true },
          { platform: 'Meta', hook: 'UGC testimonial format', ctr: '+38%', trending: true },
          { platform: 'Google', hook: 'Problem-solution split', ctr: '+29%', trending: false },
        ].map((item, i) => (
          <div 
            key={i} 
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                <Globe className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{item.hook}</p>
                <p className="text-xs text-gray-500">{item.platform}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-green-400">{item.ctr}</span>
              {item.trending && <TrendingUp className="w-4 h-4 text-green-400" />}
            </div>
          </div>
        ))}
        
        {/* Action Button */}
        <button className="w-full py-2 mt-2 rounded-lg bg-orange-500/10 text-orange-400 text-sm font-medium hover:bg-orange-500/20 transition-colors">
          Use Template →
        </button>
      </div>
    </div>
  );
}

function ContentDecodingDemo() {
  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Video Timeline */}
      <div className="px-4 py-3 border-b border-white/5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-white">Content Analysis</span>
          </div>
          <span className="text-xs text-green-400">✓ 847 frames analyzed</span>
        </div>
        
        {/* Timeline */}
        <div className="relative h-12 bg-white/5 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="flex-1 border-r border-white/5"
                style={{ 
                  background: [3, 7, 12, 16].includes(i) 
                    ? 'linear-gradient(180deg, rgba(249, 115, 22, 0.3), transparent)' 
                    : 'transparent' 
                }}
              />
            ))}
          </div>
          {/* Markers */}
          <div className="absolute top-0 left-[15%] w-0.5 h-full bg-orange-500" />
          <div className="absolute top-0 left-[35%] w-0.5 h-full bg-orange-500" />
          <div className="absolute top-0 left-[60%] w-0.5 h-full bg-orange-500" />
          <div className="absolute top-0 left-[80%] w-0.5 h-full bg-orange-500" />
        </div>
      </div>
      
      {/* Detected Moments */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-500 mb-3">HIGH-RETENTION MOMENTS DETECTED</p>
        {[
          { time: '00:03', label: 'Hook - Emotional peak', score: 94 },
          { time: '00:12', label: 'Cliffhanger moment', score: 91 },
          { time: '00:28', label: 'Plot twist reveal', score: 88 },
          { time: '00:41', label: 'CTA trigger point', score: 86 },
        ].map((moment, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-orange-400 w-12">{moment.time}</span>
              <span className="text-sm text-white">{moment.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400" style={{ width: `${moment.score}%` }} />
              </div>
              <span className="text-xs text-gray-400">{moment.score}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GenerativeScaleDemo() {
  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-white">Batch Generation</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-green-400">127</span>
          <span className="text-gray-500">variants ready</span>
        </div>
      </div>
      
      {/* Generation Grid */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-video rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative overflow-hidden group"
            >
              <Play className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              {i < 3 && (
                <div className="absolute top-1 right-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Languages */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['EN', 'ES', 'PT', 'DE', 'FR', 'JA', 'KO', 'ZH'].map((lang) => (
            <span key={lang} className="px-2 py-1 rounded text-xs bg-white/5 text-gray-400">
              {lang}
            </span>
          ))}
        </div>
        
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">Generation Progress</span>
            <span className="text-orange-400">127/150</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all" style={{ width: '85%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoOptimizeDemo() {
  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-white">Daily Optimization</span>
        </div>
        <span className="text-xs text-gray-500">Today, 09:41</span>
      </div>
      
      {/* Stats */}
      <div className="px-4 py-3 border-b border-white/5 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-500">Campaigns analyzed</span>
          </div>
          <span className="text-2xl font-bold text-white">18</span>
        </div>
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-xs text-gray-500">Changes made</span>
          </div>
          <span className="text-2xl font-bold text-white">38</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="p-4 space-y-3">
        {[
          { action: 'Scaled budget +15%', detail: 'Top performer in Gaming UA', icon: ArrowUp, color: 'text-green-400' },
          { action: 'Paused 3 creatives', detail: 'Below ROAS threshold', icon: ArrowDown, color: 'text-red-400' },
          { action: 'Launched 12 variants', detail: 'A/B testing new hooks', icon: Zap, color: 'text-orange-400' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
            <div className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center ${item.color}`}>
              <item.icon className="w-3 h-3" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{item.action}</p>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    id: 'radar',
    title: 'Creative Radar',
    description: "Stop guessing. Flamma's agents crawl global ad libraries 24/7, identifying the winning patterns, hooks, and formats that are currently scaling. You can also use similar templates with a simple click.",
    Demo: CreativeRadarDemo,
    align: 'left',
  },
  {
    id: 'decoding',
    title: 'Content Decoding',
    description: 'With fine-tuned multimodal models, our agents digest and pick the high-retention cliffhangers, emotional peaks, and sellable moments with frame-level precision.',
    Demo: ContentDecodingDemo,
    align: 'right',
  },
  {
    id: 'scale',
    title: 'Generative Scale',
    description: 'Turn one concept into hundreds of multilingual variations. Beat creative fatigue and boost bid efficiency with massive A/B testing.',
    Demo: GenerativeScaleDemo,
    align: 'left',
  },
  {
    id: 'optimize',
    title: 'Auto Launch & Optimization',
    description: 'The engine deploys directly to your networks. It learns from real-time performance data, killing losers and doubling down on winners to maximize ROAS.',
    Demo: AutoOptimizeDemo,
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
        const demo = block?.querySelector('.feature-demo');

        if (content && demo) {
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
            demo,
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
            <span className="text-accent-bright">Not Just Creation</span>
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
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

              {/* Demo Component */}
              <div 
                className={`feature-demo relative ${feature.align === 'right' ? 'lg:order-1' : ''}`}
                style={{ opacity: 0 }}
              >
                <feature.Demo />
                
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
