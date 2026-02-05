import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Radar, Search, Layers, Zap, TrendingUp, Play, Globe, CheckCircle, 
  BarChart3, ArrowUp, ArrowDown, Copy, Sparkles, Clock, GripVertical,
  MessageSquare, Bot, ChevronRight, Pause
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animated Demo Components
function CreativeRadarDemo() {
  const [activeTab, setActiveTab] = useState<'trending' | 'competitors' | 'formats'>('trending');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const trendingHooks = [
    { platform: 'TikTok', hook: '"POV: When the update finally drops..."', views: '2.4M', growth: '+847%', uses: '12,400' },
    { platform: 'Instagram', hook: '"I didn\'t expect this to happen at level 50"', views: '1.8M', growth: '+562%', uses: '8,900' },
    { platform: 'TikTok', hook: '"This game is literally unplayable... in a good way"', views: '956K', growth: '+234%', uses: '4,200' },
  ];

  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Tabs */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center gap-1">
        {[
          { id: 'trending', label: 'Trending Hooks', icon: TrendingUp },
          { id: 'competitors', label: 'Competitors', icon: Globe },
          { id: 'formats', label: 'Formats', icon: BarChart3 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-orange-500/20 text-orange-400'
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {trendingHooks.map((item, i) => (
          <div 
            key={i} 
            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer group border border-transparent hover:border-orange-500/20"
          >
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm font-medium text-white leading-snug pr-4">{item.hook}</p>
              <button 
                onClick={() => handleCopy(i)}
                className="flex-shrink-0 p-1.5 rounded-lg bg-white/5 hover:bg-orange-500/20 transition-colors"
              >
                {copiedIndex === i ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 group-hover:text-orange-400" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className={`px-2 py-0.5 rounded ${
                item.platform === 'TikTok' ? 'bg-pink-500/20 text-pink-400' : 'bg-purple-500/20 text-purple-400'
              }`}>
                {item.platform}
              </span>
              <span className="text-gray-500">👁 {item.views}</span>
              <span className="text-green-400 font-medium">{item.growth}</span>
              <span className="text-gray-500">{item.uses} uses</span>
            </div>
          </div>
        ))}
        
        {/* Use Template CTA */}
        <button className="w-full py-2.5 mt-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-400 text-sm font-semibold hover:from-orange-500/30 hover:to-orange-600/30 transition-all flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          Use Similar Template →
        </button>
        
        {/* Footer */}
        <div className="pt-3 flex items-center justify-between text-xs text-gray-500">
          <span>Data from TikTok & Meta Ads Library</span>
          <span>Updated 2 hours ago</span>
        </div>
      </div>
    </div>
  );
}

function ContentDecodingDemo() {
  const [playheadPosition, setPlayheadPosition] = useState(35);
  const [isPlaying, setIsPlaying] = useState(false);
  const [agentMessage, setAgentMessage] = useState(0);

  const agentMessages = [
    'Analyzing frame 00:12... High emotional peak detected',
    'Cliffhanger moment identified at 00:28',
    'Optimal CTA placement: 00:41',
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setPlayheadPosition((prev) => (prev >= 95 ? 5 : prev + 0.5));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAgentMessage((prev) => (prev + 1) % agentMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const markers = [
    { position: 15, label: 'Hook', color: '#f97316' },
    { position: 35, label: 'Peak', color: '#22c55e' },
    { position: 60, label: 'Twist', color: '#8b5cf6' },
    { position: 80, label: 'CTA', color: '#06b6d4' },
  ];

  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Agent Header */}
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-medium text-white">Content Analysis Agent</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-green-400">Active</span>
        </div>
      </div>

      {/* Agent Chat */}
      <div className="px-4 py-3 border-b border-white/5 bg-orange-500/5">
        <div className="flex items-start gap-2">
          <MessageSquare className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-300 animate-pulse">
            {agentMessages[agentMessage]}
          </p>
        </div>
      </div>
      
      {/* Video Timeline */}
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">raw_footage_ep23.mp4</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white" />
                )}
              </button>
              <span className="text-xs font-mono text-gray-400">
                {Math.floor(playheadPosition / 100 * 60).toString().padStart(2, '0')}:
                {Math.floor((playheadPosition / 100 * 60 % 1) * 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
          
          {/* Timeline with drag */}
          <div 
            className="relative h-16 bg-white/5 rounded-lg overflow-hidden cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = ((e.clientX - rect.left) / rect.width) * 100;
              setPlayheadPosition(Math.max(0, Math.min(100, pos)));
            }}
          >
            {/* Waveform visualization */}
            <div className="absolute inset-0 flex items-center px-1">
              {Array.from({ length: 50 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 mx-px bg-white/20 rounded-full"
                  style={{ 
                    height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 20}%`,
                  }}
                />
              ))}
            </div>
            
            {/* Markers */}
            {markers.map((marker, i) => (
              <div 
                key={i}
                className="absolute top-0 bottom-0 w-1 cursor-pointer group"
                style={{ left: `${marker.position}%`, backgroundColor: marker.color }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: marker.color }}
                >
                  {marker.label}
                </div>
              </div>
            ))}
            
            {/* Playhead */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-ew-resize"
              style={{ left: `${playheadPosition}%` }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
              <GripVertical className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-gray-800" />
            </div>
          </div>
        </div>
        
        {/* Detected Moments */}
        <div className="space-y-2">
          <p className="text-xs text-gray-500 mb-2">AI-DETECTED HIGH RETENTION MOMENTS</p>
          {markers.map((marker, i) => (
            <div 
              key={i} 
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => setPlayheadPosition(marker.position)}
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: marker.color }} />
                <span className="text-xs font-mono text-orange-400 w-10">
                  00:{Math.floor(marker.position / 100 * 60).toString().padStart(2, '0')}
                </span>
                <span className="text-sm text-white">{marker.label} - High engagement</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GenerativeScaleDemo() {
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  const [selectedCount, setSelectedCount] = useState(15);

  const platforms = [
    { name: 'All Platforms', count: 15 },
    { name: 'IG Reels', count: 5 },
    { name: 'TikTok', count: 5 },
    { name: 'YT Shorts', count: 5 },
  ];

  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Header Tabs */}
      <div className="px-4 py-2 border-b border-white/5 flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:bg-white/5">
          <Play className="w-3.5 h-3.5" />
          Preview
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-pink-500/20 text-pink-400">
          <Sparkles className="w-3.5 h-3.5" />
          Variants ({selectedCount})
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-32 border-r border-white/5 p-2">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 px-2">Platforms</p>
          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={() => {
                setSelectedPlatform(platform.name);
                setSelectedCount(platform.count);
              }}
              className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs mb-1 transition-colors ${
                selectedPlatform === platform.name
                  ? 'bg-orange-500/20 text-orange-400'
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <span>{platform.name}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                selectedPlatform === platform.name ? 'bg-orange-500/30' : 'bg-white/10'
              }`}>
                {platform.count}
              </span>
            </button>
          ))}
          
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 px-2">Selection</p>
            <p className="text-sm font-semibold text-white px-2">{selectedCount} / {selectedCount} selected</p>
            <button className="text-xs text-orange-400 px-2 mt-1">Select all • Clear</button>
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-gray-500">
              <Globe className="w-3.5 h-3.5 inline mr-1" />
              {selectedPlatform} ({selectedCount} variants)
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i} 
                className="aspect-[9/16] rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative overflow-hidden group border border-white/10 hover:border-orange-500/50 transition-colors cursor-pointer"
              >
                {/* Language badge */}
                <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-medium bg-blue-500/80 text-white">
                  EN
                </div>
                {/* Checkmark */}
                <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <Play className="w-6 h-6 text-white" />
                </div>
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[8px] text-white/80 truncate">demo_ig-reels_EN_V{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Languages */}
          <div className="mt-3 flex flex-wrap gap-1">
            {['EN', 'ES', 'PT', 'DE', 'FR', 'JA', 'KO', 'ZH'].map((lang) => (
              <span key={lang} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-gray-400 hover:bg-orange-500/20 hover:text-orange-400 cursor-pointer transition-colors">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoOptimizeDemo() {
  const [deployProgress, setDeployProgress] = useState(0);
  const [isDeploying, setIsDeploying] = useState(true);

  useEffect(() => {
    if (isDeploying && deployProgress < 100) {
      const timer = setTimeout(() => {
        setDeployProgress((prev) => Math.min(100, prev + 2));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [deployProgress, isDeploying]);

  const channels = [
    { name: 'Google Ads', letter: 'G', color: 'bg-green-500', selected: true },
    { name: 'Meta (FB + IG)', letter: 'M', color: 'bg-pink-500', selected: true },
    { name: 'TikTok Ads', letter: 'T', color: 'bg-cyan-500', selected: true },
    { name: 'YouTube Shorts', letter: 'Y', color: 'bg-red-500', selected: false },
  ];

  const insights = [
    { title: 'Cross-Channel Budget Shift', desc: 'TikTok+Unity outperforming Google by 35% CPI. Recommend reallocating $500/day.', tag: 'Est. +22% ROAS', tagColor: 'bg-green-500/20 text-green-400', action: 'Apply Optimization' },
    { title: 'Creative Fatigue on Meta', desc: 'Top 3 creatives CTR dropped 15% on FB/IG. 4 new UGC variants ready to deploy.', tag: 'Restore +12% CTR', tagColor: 'bg-orange-500/20 text-orange-400', action: 'Refresh Creatives' },
    { title: 'New High-Intent Segment', desc: 'Discovered lookalike from Japan whale users. Est. LTV 3.2x higher than avg.', tag: 'Est. +$12k revenue', tagColor: 'bg-purple-500/20 text-purple-400', action: 'Launch Campaign' },
  ];

  return (
    <div className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden">
      {/* Campaign Header */}
      <div className="px-4 py-3 border-b border-white/5">
        <p className="text-white font-semibold">demo_Campaign</p>
        <p className="text-xs text-gray-500">This name will appear in your Campaign Dashboard</p>
      </div>

      {/* Ready to Deploy */}
      <div className="px-4 py-4 border-b border-white/5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white">Ready to Deploy</span>
          </div>
          <span className="px-2 py-0.5 rounded text-xs bg-cyan-500/20 text-cyan-400">AI Generated</span>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-4">
          {[
            { label: 'CREATIVES', value: '15', icon: Play },
            { label: 'TYPES', value: '3', icon: Layers },
            { label: 'LANGUAGES', value: '1', icon: Globe },
            { label: 'FORMATS', value: '3', icon: BarChart3 },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-4 h-4 mx-auto mb-1 text-gray-500" />
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-[10px] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          {['IG Reels', 'TikTok Feed', 'YT Shorts'].map((format) => (
            <span key={format} className="px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400">
              {format}
            </span>
          ))}
        </div>
      </div>

      {/* Distribution Channels */}
      <div className="px-4 py-4 border-b border-white/5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500">Distribution Channels</span>
          <span className="text-xs text-gray-400">3 selected</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {channels.map((channel) => (
            <div 
              key={channel.name}
              className={`p-2 rounded-lg text-center cursor-pointer transition-all ${
                channel.selected 
                  ? 'bg-white/5 border border-orange-500/30' 
                  : 'bg-white/5 border border-transparent opacity-50'
              }`}
            >
              <div className={`w-8 h-8 mx-auto mb-1 rounded-full ${channel.color} flex items-center justify-center text-white text-sm font-bold`}>
                {channel.letter}
              </div>
              <p className="text-[10px] text-gray-400 truncate">{channel.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deploy Progress */}
      <div className="px-4 py-3 bg-purple-500/5 border-b border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-purple-400 animate-spin" />
          <span className="text-sm text-purple-400">Deploying to 3 platforms...</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${deployProgress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Initiating multi-channel deployment...</p>
      </div>

      {/* AI Insights */}
      <div className="px-4 py-3">
        <p className="text-xs text-gray-500 mb-3">AI INSIGHTS</p>
        <div className="space-y-2">
          {insights.slice(0, 2).map((insight, i) => (
            <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i === 0 ? <ArrowUp className="w-3 h-3 text-orange-400" /> : <ArrowDown className="w-3 h-3 text-yellow-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white">{insight.title}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{insight.desc}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] ${insight.tagColor}`}>{insight.tag}</span>
                    <button className="text-[10px] text-orange-400 hover:underline">{insight.action}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
  const laserRef = useRef<HTMLDivElement>(null);

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

      // Laser line animation tied to scroll
      if (laserRef.current) {
        gsap.fromTo(
          laserRef.current,
          { height: '0%', opacity: 0 },
          {
            height: '100%',
            opacity: 1,
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

      {/* Center Laser Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-48 bottom-24 w-px hidden lg:block">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/5" />
        {/* Animated laser */}
        <div 
          ref={laserRef}
          className="absolute top-0 left-0 w-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #f97316 20%, #fb923c 50%, #f97316 80%, transparent 100%)',
            boxShadow: '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3)',
            filter: 'blur(1px)',
          }}
        />
        {/* Glow orb at the leading edge */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, #fb923c 0%, #f97316 50%, transparent 100%)',
            boxShadow: '0 0 15px rgba(249, 115, 22, 0.8)',
            bottom: '0',
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
