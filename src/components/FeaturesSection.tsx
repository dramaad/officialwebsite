import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp, Play, ArrowUp, Sparkles, Send, Layers, Rocket, BarChart2,
  Copy, Check, Bot, GripVertical, ChevronRight, Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Feature 1: Creative Radar - tabs, hooks list, copy, "Use similar template"
function CreativeRadarDemo() {
  const [activeTab, setActiveTab] = useState<'trending' | 'competitors' | 'formats'>('trending');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const trendingHooks = [
    { hook: '"Wait for the ending..."', engagement: '+340%' },
    { hook: '"Nobody talks about this..."', engagement: '+280%' },
    { hook: '"Here\'s what happened..."', engagement: '+195%' },
    { hook: '"POV: You finally..."', engagement: '+162%' },
  ];

  const handleCopy = (i: number) => {
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  return (
    <div className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-5 h-full shadow-xl shadow-black/20">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Live Market Scan</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-black/40 rounded-lg mb-4">
        {(['trending', 'competitors', 'formats'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-3 rounded-md text-xs font-medium capitalize transition-all ${
              activeTab === tab
                ? 'bg-orange-500/20 text-orange-400'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab === 'trending' ? 'Trending Hooks' : tab === 'competitors' ? 'Competitors' : 'Formats'}
          </button>
        ))}
      </div>

      {activeTab === 'trending' && (
        <>
          <div className="space-y-2 mb-4">
            {trendingHooks.map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-200 truncate">{item.hook}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <ArrowUp className="w-3 h-3 text-orange-400 flex-shrink-0" />
                    <span className="text-xs text-orange-400 font-medium">{item.engagement}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(i)}
                  className="p-2 rounded-md text-gray-500 hover:text-orange-400 hover:bg-orange-500/10 transition-colors flex-shrink-0"
                  title="Copy"
                >
                  {copiedIndex === i ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-2.5 text-xs font-medium text-orange-400 border border-orange-500/25 rounded-lg hover:bg-orange-500/10 transition-colors flex items-center justify-center gap-2">
            Use similar template
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </>
      )}
      {activeTab === 'competitors' && (
        <div className="space-y-2 text-sm text-gray-400 py-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Top creatives by competitor</p>
          {['Brand A • 12 creatives', 'Brand B • 8 creatives', 'Brand C • 6 creatives'].map((s, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
              <span>{s}</span>
              <ChevronRight className="w-3 h-3 text-gray-600" />
            </div>
          ))}
        </div>
      )}
      {activeTab === 'formats' && (
        <div className="space-y-2 text-sm text-gray-400 py-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Trending formats</p>
          {['Talking head + B-roll', 'UGC testimonial', 'Product demo'].map((s, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-gray-300">{s}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Feature 2: Content Decoding - prompt input, timeline with markers, AI feedback
function ContentDecodingDemo() {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [clipStart, setClipStart] = useState(15);
  const [clipEnd, setClipEnd] = useState(48);
  const [isDragging, setIsDragging] = useState<'left' | 'right' | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const markers = [
    { label: 'Hook', position: 12, color: 'bg-orange-500' },
    { label: 'Peak', position: 28, color: 'bg-amber-500' },
    { label: 'Twist', position: 38, color: 'bg-orange-400' },
    { label: 'CTA', position: 52, color: 'bg-orange-600' },
  ];

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    setIsProcessing(true);
    setShowResult(false);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
      setClipStart(12);
      setClipEnd(42);
    }, 1800);
  };

  const handleTrackMouse = (e: React.MouseEvent) => {
    if (!trackRef.current || !isDragging) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    if (isDragging === 'left') setClipStart(Math.min(pct, clipEnd - 5));
    if (isDragging === 'right') setClipEnd(Math.max(pct, clipStart + 5));
  };

  return (
    <div
      className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-5 h-full shadow-xl shadow-black/20"
      onMouseMove={handleTrackMouse}
      onMouseUp={() => setIsDragging(null)}
      onMouseLeave={() => setIsDragging(null)}
    >
      {/* Agent-style prompt */}
      <div className="flex gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-orange-400" />
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Trim to the best 15 seconds..."
            className="w-full bg-black border border-white/10 rounded-lg pl-4 pr-11 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/40 transition-colors"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-orange-400 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isProcessing && (
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
          <div className="w-3 h-3 border border-orange-500 border-t-transparent rounded-full animate-spin" />
          <span>Analyzing structure...</span>
        </div>
      )}

      {/* Timeline */}
      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1.5">
          <span>00:00</span>
          <span>01:00</span>
        </div>
        <div ref={trackRef} className="relative h-14 bg-black rounded-lg overflow-hidden border border-white/5">
          {/* Waveform */}
          <div className="absolute inset-0 flex items-center justify-around px-1">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] bg-gray-600 rounded-full flex-shrink-0"
                style={{ height: `${25 + Math.sin(i * 0.3) * 35}%` }}
              />
            ))}
          </div>
          {/* Markers */}
          {markers.map((m, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-0.5 flex flex-col items-center"
              style={{ left: `${m.position}%` }}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${m.color} flex-shrink-0 mt-0.5`} />
              <span className="text-[9px] text-gray-500 mt-0.5 whitespace-nowrap">{m.label}</span>
            </div>
          ))}
          {/* Selection range */}
          <div
            className="absolute top-0 bottom-0 bg-orange-500/15 border-l border-r border-orange-500/50 transition-all duration-300"
            style={{ left: `${clipStart}%`, width: `${clipEnd - clipStart}%` }}
          />
          <div
            className="absolute top-0 bottom-0 w-1.5 bg-white/90 cursor-ew-resize hover:bg-orange-400 transition-colors rounded-sm"
            style={{ left: `${clipStart}%` }}
            onMouseDown={() => setIsDragging('left')}
          >
            <GripVertical className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-gray-800" />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1.5 bg-white/90 cursor-ew-resize hover:bg-orange-400 transition-colors rounded-sm"
            style={{ left: `${clipEnd}%` }}
            onMouseDown={() => setIsDragging('right')}
          >
            <GripVertical className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-gray-800" />
          </div>
        </div>
      </div>

      {showResult && (
        <div className="space-y-2 animate-fade-in">
          <div className="flex items-center gap-2 text-xs text-orange-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hook at 0:12 — trimmed to best segment</span>
          </div>
          <div className="text-[11px] text-gray-500 space-y-1">
            <p className="font-medium text-gray-400">AI-detected high-retention moments</p>
            <p>0:12 Hook · 0:28 Peak · 0:38 Twist · 0:42 CTA</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Feature 3: Generative Scale - platform sidebar, creative grid
function GenerativeScaleDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const t = setTimeout(() => setProgress((p) => Math.min(100, p + 1.5)), 60);
      return () => clearTimeout(t);
    }
    const reset = setTimeout(() => setProgress(0), 3500);
    return () => clearTimeout(reset);
  }, [progress]);

  const platforms = [
    { name: 'IG Reels', ratio: '9:16', count: 12, done: progress > 35 },
    { name: 'TikTok', ratio: '9:16', count: 12, done: progress > 65 },
    { name: 'YT Shorts', ratio: '9:16', count: 8, done: progress >= 100 },
  ];

  const total = progress >= 100 ? 32 : '—';

  return (
    <div className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-5 h-full shadow-xl shadow-black/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Generating</span>
        </div>
        <span className="text-xs font-mono text-orange-400">{progress}%</span>
      </div>

      <div className="h-1.5 bg-white/5 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-150 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex gap-4">
        {/* Platform list */}
        <div className="w-28 space-y-2 flex-shrink-0">
          {platforms.map((p, i) => (
            <div
              key={i}
              className={`flex items-center justify-between py-2 px-3 rounded-lg border transition-all ${
                p.done ? 'bg-orange-500/10 border-orange-500/25' : 'bg-white/[0.02] border-white/5'
              }`}
            >
              <span className={`text-xs ${p.done ? 'text-white' : 'text-gray-500'}`}>{p.name}</span>
              <span className={`text-xs font-mono ${p.done ? 'text-orange-400' : 'text-gray-600'}`}>
                {p.done ? p.count : '—'}
              </span>
            </div>
          ))}
          <div className="pt-2 border-t border-white/5 flex justify-between text-[11px]">
            <span className="text-gray-500">Total</span>
            <span className="font-medium text-white">{total}</span>
          </div>
        </div>

        {/* Creative grid */}
        <div className="grid grid-cols-3 gap-2 flex-1 min-w-0">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`aspect-[9/16] rounded-md border flex items-center justify-center transition-all ${
                progress > i * 16 ? 'border-orange-500/30 bg-orange-500/5' : 'border-white/5 bg-black/50'
              }`}
            >
              <Play className={`w-3 h-3 ${progress > i * 16 ? 'text-orange-400' : 'text-gray-700'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feature 4: Auto Launch - campaign header, channels, progress, AI insights
function AutoOptimizeDemo() {
  const [deployProgress, setDeployProgress] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    if (deployProgress < 100) {
      const t = setTimeout(() => setDeployProgress((p) => p + 1), 45);
      return () => clearTimeout(t);
    }
    setShowMetrics(true);
  }, [deployProgress]);

  useEffect(() => {
    if (deployProgress >= 100) {
      const reset = setTimeout(() => {
        setDeployProgress(0);
        setShowMetrics(false);
      }, 4500);
      return () => clearTimeout(reset);
    }
  }, [deployProgress]);

  const channels = [
    { name: 'Google Ads', letter: 'G', active: deployProgress > 25 },
    { name: 'Meta', letter: 'M', active: deployProgress > 55 },
    { name: 'TikTok', letter: 'T', active: deployProgress >= 100 },
  ];

  return (
    <div className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-5 h-full shadow-xl shadow-black/20">
      {/* Campaign header */}
      <div className="mb-4 pb-3 border-b border-white/5">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Campaign</p>
        <p className="text-sm font-medium text-white">Q1 Short-form Push</p>
        <p className="text-xs text-gray-500 mt-0.5">24 creatives · 3 channels</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Rocket className={`w-4 h-4 ${deployProgress >= 100 ? 'text-green-400' : 'text-orange-400'}`} />
          <span className="text-xs text-gray-400">
            {deployProgress >= 100 ? 'Live' : 'Deploying...'}
          </span>
        </div>
        {deployProgress < 100 && <span className="text-xs font-mono text-gray-500">{deployProgress}%</span>}
      </div>

      {deployProgress < 100 && (
        <div className="h-1.5 bg-white/5 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-orange-500 transition-all duration-100 rounded-full"
            style={{ width: `${deployProgress}%` }}
          />
        </div>
      )}

      {/* Channels */}
      <div className="flex gap-2 mb-4">
        {channels.map((ch, i) => (
          <div
            key={i}
            className={`flex-1 flex items-center gap-2 py-2.5 px-3 rounded-lg border transition-all ${
              ch.active ? 'bg-orange-500/10 border-orange-500/25' : 'bg-white/[0.02] border-white/5'
            }`}
          >
            <span className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-semibold ${
              ch.active ? 'bg-orange-500/30 text-orange-400' : 'bg-white/5 text-gray-600'
            }`}>
              {ch.letter}
            </span>
            <span className={`text-[11px] ${ch.active ? 'text-gray-200' : 'text-gray-500'}`}>{ch.name}</span>
          </div>
        ))}
      </div>

      {showMetrics && (
        <div className="space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-[10px] text-gray-500">CTR</span>
              </div>
              <span className="text-sm font-semibold text-green-400">4.2%</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-1.5 mb-1">
                <BarChart2 className="w-3 h-3 text-orange-400" />
                <span className="text-[10px] text-gray-500">CPA</span>
              </div>
              <span className="text-sm font-semibold text-white">$12.40</span>
            </div>
          </div>
          {/* AI insight */}
          <div className="flex gap-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
            <Zap className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-orange-400/90">AI suggestion</p>
              <p className="text-[11px] text-gray-400 mt-0.5">Pause underperforming placements; increase budget on Meta by 15%.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const features = [
  {
    id: 'radar',
    title: 'Creative Radar',
    description: 'Scan the market for winning hooks and trending formats. Know what works before you create.',
    Demo: CreativeRadarDemo,
  },
  {
    id: 'decode',
    title: 'Content Decoding',
    description: 'Tell the AI what you need in plain English. It finds the best moments and makes the cut.',
    Demo: ContentDecodingDemo,
  },
  {
    id: 'scale',
    title: 'Generative Scale',
    description: 'One source, dozens of variations. Automatically formatted for every platform and placement.',
    Demo: GenerativeScaleDemo,
  },
  {
    id: 'optimize',
    title: 'Auto Launch & Optimize',
    description: 'Deploy directly to ad networks. The system learns what converts and improves autonomously.',
    Demo: AutoOptimizeDemo,
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.features-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );
      if (laserRef.current) {
        gsap.fromTo(
          laserRef.current,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            },
          }
        );
      }
      features.forEach((_, index) => {
        const block = sectionRef.current?.querySelector(`[data-feature="${index}"]`);
        if (block) {
          gsap.fromTo(
            block,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: { trigger: block, start: 'top 82%' },
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 relative">
      <div className="absolute left-1/2 top-32 bottom-32 w-px -translate-x-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-white/[0.04]" />
        <div
          ref={laserRef}
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-500/80 via-orange-400/50 to-transparent"
          style={{ height: '0%' }}
        />
      </div>

      <div className="features-header max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <p className="eyebrow mb-4">Core Capabilities</p>
          <h2 className="headline-section">
            From Insight to <span className="text-accent-bright">Impact</span>
          </h2>
          <p className="body-text mt-4 max-w-2xl mx-auto">
            Four integrated systems that turn market intelligence into deployed campaigns.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-feature={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-orange-400/70">0{index + 1}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/25 to-transparent" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <feature.Demo />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
