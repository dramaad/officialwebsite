import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  TrendingUp, Play, ArrowUp, Sparkles, 
  Send, Layers, Rocket, BarChart2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Feature 1: Creative Radar - Market Intelligence Dashboard
function CreativeRadarDemo() {
  const [activeItem, setActiveItem] = useState(0);
  
  const trendingHooks = [
    { hook: '"Wait for the ending..."', engagement: '+340%', trend: 'up' },
    { hook: '"Nobody talks about this..."', engagement: '+280%', trend: 'up' },
    { hook: '"Here\'s what happened..."', engagement: '+195%', trend: 'up' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % trendingHooks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [trendingHooks.length]);

  return (
    <div className="bg-[#111] rounded-lg border border-white/5 p-5 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-xs text-gray-400 font-medium">Live Market Scan</span>
      </div>
      
      {/* Trending Hooks List */}
      <div className="space-y-2">
        {trendingHooks.map((item, i) => (
          <div 
            key={i}
            className={`p-3 rounded-md border transition-all duration-500 ${
              activeItem === i 
                ? 'bg-orange-500/10 border-orange-500/30' 
                : 'bg-white/[0.02] border-white/5'
            }`}
          >
            <p className={`text-sm mb-1 transition-colors ${activeItem === i ? 'text-white' : 'text-gray-400'}`}>
              {item.hook}
            </p>
            <div className="flex items-center gap-2">
              <ArrowUp className={`w-3 h-3 ${activeItem === i ? 'text-orange-400' : 'text-gray-600'}`} />
              <span className={`text-xs font-medium ${activeItem === i ? 'text-orange-400' : 'text-gray-600'}`}>
                {item.engagement}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action */}
      <button className="w-full mt-4 py-2 text-xs text-orange-400 border border-orange-500/20 rounded-md hover:bg-orange-500/10 transition-colors">
        Apply to my creatives →
      </button>
    </div>
  );
}

// Feature 2: Content Decoding - Agent-Native Editor
function ContentDecodingDemo() {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [clipPosition, setClipPosition] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    setIsProcessing(true);
    setShowResult(false);
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
      setClipPosition(45); // Simulate the AI trimming the clip
    }, 1500);
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setClipPosition((x / rect.width) * 100);
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div 
      className="bg-[#111] rounded-lg border border-white/5 p-5 h-full"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Prompt Input */}
      <div className="relative mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Trim to the best 15 seconds..."
          className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
        />
        <button 
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-orange-400 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      {/* Processing State */}
      {isProcessing && (
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
          <div className="w-3 h-3 border border-orange-500 border-t-transparent rounded-full animate-spin" />
          <span>Analyzing content structure...</span>
        </div>
      )}

      {/* Timeline */}
      <div className="mb-3">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>00:00</span>
          <span>00:45</span>
        </div>
        <div 
          ref={timelineRef}
          className="relative h-12 bg-black rounded-md overflow-hidden cursor-crosshair"
        >
          {/* Waveform visualization */}
          <div className="absolute inset-0 flex items-center px-1">
            {[...Array(45)].map((_, i) => (
              <div
                key={i}
                className="flex-1 mx-px bg-gray-700 rounded-full"
                style={{ height: `${20 + Math.random() * 60}%` }}
              />
            ))}
          </div>
          
          {/* Selected region */}
          <div 
            className={`absolute top-0 bottom-0 bg-orange-500/20 border-l-2 border-r-2 border-orange-500 transition-all ${showResult ? 'duration-700' : 'duration-0'}`}
            style={{ 
              left: `${clipPosition}%`, 
              width: '33%',
            }}
          />
          
          {/* Draggable handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize hover:bg-orange-400 transition-colors"
            style={{ left: `${clipPosition}%` }}
            onMouseDown={handleMouseDown}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
          </div>
        </div>
      </div>

      {/* Result */}
      {showResult && (
        <div className="flex items-center gap-2 text-xs text-orange-400 animate-fade-in">
          <Sparkles className="w-3 h-3" />
          <span>Hook detected at 0:12 — trimmed to best segment</span>
        </div>
      )}
    </div>
  );
}

// Feature 3: Generative Scale - Multi-Platform Variations
function GenerativeScaleDemo() {
  const [generating, setGenerating] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (generating && progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => Math.min(100, prev + 2));
      }, 80);
      return () => clearTimeout(timer);
    } else if (progress >= 100) {
      setTimeout(() => {
        setProgress(0);
        setGenerating(true);
      }, 2000);
    }
  }, [generating, progress]);

  const platforms = [
    { name: 'TikTok', ratio: '9:16', count: 12 },
    { name: 'Reels', ratio: '9:16', count: 12 },
    { name: 'YouTube', ratio: '16:9', count: 8 },
  ];

  return (
    <div className="bg-[#111] rounded-lg border border-white/5 p-5 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs text-gray-400">Generating Variations</span>
        </div>
        <span className="text-xs text-orange-400 font-mono">{progress}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/5 rounded-full mb-4 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Platform Grid */}
      <div className="grid grid-cols-3 gap-2">
        {platforms.map((platform, i) => (
          <div key={i} className="text-center">
            <div className={`aspect-[9/16] max-h-20 mx-auto bg-black rounded border border-white/5 mb-2 flex items-center justify-center ${
              progress > (i + 1) * 30 ? 'border-orange-500/30' : ''
            }`}>
              <Play className={`w-3 h-3 transition-colors ${progress > (i + 1) * 30 ? 'text-orange-400' : 'text-gray-600'}`} />
            </div>
            <p className="text-[10px] text-gray-400">{platform.name}</p>
            <p className={`text-xs font-medium transition-colors ${progress > (i + 1) * 30 ? 'text-white' : 'text-gray-600'}`}>
              {progress > (i + 1) * 30 ? platform.count : '—'}
            </p>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
        <span className="text-xs text-gray-500">Total Creatives</span>
        <span className="text-sm font-medium text-white">
          {progress >= 100 ? '32' : '—'}
        </span>
      </div>
    </div>
  );
}

// Feature 4: Auto Launch & Optimization - Campaign Dashboard
function AutoOptimizeDemo() {
  const [deployProgress, setDeployProgress] = useState(0);
  const [metrics, setMetrics] = useState({ ctr: 0, cpa: 0 });

  useEffect(() => {
    if (deployProgress < 100) {
      const timer = setTimeout(() => {
        setDeployProgress((prev) => Math.min(100, prev + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Simulate metrics appearing after deployment
      setMetrics({ ctr: 4.2, cpa: 12.4 });
    }
  }, [deployProgress]);

  // Reset animation loop
  useEffect(() => {
    if (deployProgress >= 100) {
      const resetTimer = setTimeout(() => {
        setDeployProgress(0);
        setMetrics({ ctr: 0, cpa: 0 });
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [deployProgress]);

  return (
    <div className="bg-[#111] rounded-lg border border-white/5 p-5 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Rocket className={`w-4 h-4 ${deployProgress >= 100 ? 'text-green-400' : 'text-orange-400'}`} />
          <span className="text-xs text-gray-400">
            {deployProgress >= 100 ? 'Campaign Live' : 'Deploying...'}
          </span>
        </div>
        {deployProgress < 100 && (
          <span className="text-xs text-gray-500 font-mono">{deployProgress}%</span>
        )}
      </div>

      {/* Deploy progress */}
      {deployProgress < 100 && (
        <div className="h-1 bg-white/5 rounded-full mb-4 overflow-hidden">
          <div 
            className="h-full bg-orange-500 transition-all duration-100"
            style={{ width: `${deployProgress}%` }}
          />
        </div>
      )}

      {/* Channels */}
      <div className="flex gap-2 mb-4">
        {['Meta', 'Google', 'TikTok'].map((ch, i) => (
          <div 
            key={i}
            className={`flex-1 py-2 text-center text-[10px] rounded border transition-all duration-300 ${
              deployProgress > (i + 1) * 30 
                ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' 
                : 'bg-white/[0.02] border-white/5 text-gray-500'
            }`}
          >
            {ch}
          </div>
        ))}
      </div>

      {/* Live Metrics */}
      {deployProgress >= 100 && (
        <div className="space-y-3 animate-fade-in">
          <div className="flex items-center justify-between p-3 bg-black rounded-md">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-xs text-gray-400">CTR</span>
            </div>
            <span className="text-sm font-medium text-green-400">{metrics.ctr}%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-black rounded-md">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-gray-400">CPA</span>
            </div>
            <span className="text-sm font-medium text-white">${metrics.cpa}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Feature data
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
      // Header animation
      gsap.fromTo(
        '.features-header',
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

      // Laser line animation
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

      // Feature blocks animation
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
              scrollTrigger: {
                trigger: block,
                start: 'top 80%',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 relative">
      {/* Central axis line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px -translate-x-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-white/[0.03]" />
        {/* Animated laser */}
        <div
          ref={laserRef}
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent"
          style={{ height: '0%' }}
        />
        {/* Glow effect */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-8 bg-orange-500/20 blur-md"
          style={{ height: laserRef.current?.style.height || '0%' }}
        />
      </div>

      {/* Header */}
      <div className="features-header max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <p className="eyebrow mb-4">Core Capabilities</p>
          <h2 className="headline-section">
            From Insight to{' '}
            <span className="text-accent-bright">Impact</span>
          </h2>
          <p className="body-text mt-4 max-w-2xl mx-auto">
            Four integrated systems that turn market intelligence into deployed campaigns.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-feature={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-orange-400/60">0{index + 1}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Demo */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <feature.Demo />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
