import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp, Play, ArrowUp, Sparkles, Send, Layers, Rocket,
  Copy, Check, Bot, GripVertical, ChevronRight, Eye, Target, BarChart3,
  MessageSquare, Globe, Monitor,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ——— Creative Radar ———
// Trending: strong hooks including visual descriptions. Competitors: screenshot 3 structure, no brand names.
function CreativeRadarDemo() {
  const [activeTab, setActiveTab] = useState<'trending' | 'competitors' | 'formats'>('trending');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const trendingHooks = [
    { hook: 'Wait for the ending...', visual: null, platform: 'TikTok', views: '2.1M', growth: '+340%', uses: '12.4k' },
    { hook: 'POV: You open the app for the first time', visual: 'POV / first-time reaction', platform: 'Instagram', views: '1.8M', growth: '+280%', uses: '8.9k' },
    { hook: 'Split screen: 1 week later', visual: 'Before vs after (visual)', platform: 'TikTok', views: '1.2M', growth: '+195%', uses: '6.1k' },
    { hook: 'Nobody talks about this...', visual: null, platform: 'TikTok', views: '956K', growth: '+162%', uses: '4.2k' },
    { hook: 'This changed everything', visual: 'Pure visual payoff', platform: 'Instagram', views: '890K', growth: '+218%', uses: '5.3k' },
  ];

  const competitors = [
    { tag: 'UGC Reaction', duration: '15s', platforms: 'TikTok Meta', creatives: '47', days: '30d', insight: 'Heavy focus on real reactions and unexpected moments' },
    { tag: 'Satisfying Gameplay', duration: '12s', platforms: 'Meta YouTube', creatives: '89', days: '30d', insight: 'ASMR-style satisfying moments performing well' },
    { tag: 'Fail/Win Hook', duration: '18s', platforms: 'TikTok Meta YouTube', creatives: '156', days: '30d', insight: 'Contrast hooks driving strong completion' },
  ];

  const formats = [
    { name: 'UGC Reaction', pct: 34, growth: '+12%' },
    { name: 'Split Screen', pct: 22, growth: '+8%' },
    { name: 'POV Style', pct: 18, growth: '+15%' },
    { name: 'ASMR / Satisfying', pct: 14, growth: '+23%' },
    { name: 'Tutorial Hook', pct: 12, growth: '-3%' },
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

      <div className="flex gap-1 p-1 bg-black/40 rounded-lg mb-4">
        {(['trending', 'competitors', 'formats'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
              activeTab === tab ? 'bg-orange-500/20 text-orange-400' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab === 'trending' && <TrendingUp className="w-3 h-3" />}
            {tab === 'competitors' && <Target className="w-3 h-3" />}
            {tab === 'formats' && <BarChart3 className="w-3 h-3" />}
            {tab === 'trending' ? 'Trending Hooks' : tab === 'competitors' ? 'Competitors' : 'Formats'}
          </button>
        ))}
      </div>

      {/* Tab content: all three panels in same slot so height is stable; only active one visible */}
      <div className="relative min-h-[320px]">
        {/* Trending Hooks */}
        <div
          className="w-full absolute top-0 left-0 right-0 transition-opacity duration-200"
          style={{ visibility: activeTab === 'trending' ? 'visible' : 'hidden' }}
          aria-hidden={activeTab !== 'trending'}
        >
          <div className="space-y-2 mb-4 max-h-[220px] overflow-y-auto">
            {trendingHooks.map((item, i) => (
              <div
                key={i}
                className="group flex items-center justify-between gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-200 truncate">{item.hook}</p>
                  {item.visual && <p className="text-[10px] text-gray-500 mt-0.5">{item.visual}</p>}
                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-400">{item.platform}</span>
                    <span className="text-[10px] text-gray-500 flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views}</span>
                    <span className="text-[10px] text-orange-400 font-medium flex items-center gap-0.5"><ArrowUp className="w-3 h-3" /> {item.growth}</span>
                    <span className="text-[10px] text-gray-500">{item.uses} uses</span>
                  </div>
                </div>
                <button onClick={() => handleCopy(i)} className="p-2 rounded-md text-gray-500 hover:text-orange-400 hover:bg-orange-500/10 transition-colors flex-shrink-0" title="Copy">
                  {copiedIndex === i ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ))}
          </div>
          <button className="w-full py-2.5 text-xs font-medium text-orange-400 border border-orange-500/25 rounded-lg hover:bg-orange-500/10 transition-colors flex items-center justify-center gap-2">
            Use similar template
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Competitors — Creative strategies (3 cards, unchanged) */}
        <div
          className="w-full absolute top-0 left-0 right-0 transition-opacity duration-200"
          style={{ visibility: activeTab === 'competitors' ? 'visible' : 'hidden' }}
          aria-hidden={activeTab !== 'competitors'}
        >
          <div className="space-y-2">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3 pb-1">Creative strategies</p>
            {competitors.map((c, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-white">{c.tag}</span>
                  <span className="text-[10px] text-orange-400">{c.creatives} new creatives ({c.days})</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-1.5">
                  <span>{c.duration}</span>
                  <span>{c.platforms}</span>
                </div>
                <p className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-orange-400/60 flex-shrink-0" /> {c.insight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div
          className="w-full absolute top-0 left-0 right-0 transition-opacity duration-200"
          style={{ visibility: activeTab === 'formats' ? 'visible' : 'hidden' }}
          aria-hidden={activeTab !== 'formats'}
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">Top performing ad formats (last 30 days)</p>
          <div className="space-y-2.5 mb-4">
            {formats.map((f, i) => (
              <div key={i}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-gray-300">{f.name}</span>
                  <span className={f.growth.startsWith('+') ? 'text-orange-400' : 'text-gray-500'}>{f.pct}% · {f.growth}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500/70 rounded-full transition-all duration-500"
                    style={{ width: `${f.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
            <p className="text-[10px] font-medium text-orange-400/90 mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI Recommendation
            </p>
            <p className="text-[11px] text-gray-400">
              UGC Reaction and POV Style are showing strongest growth. Consider combining these formats with trending hooks for maximum engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ——— Content Decoding ———
// Flow: dialog box → cycling example text (no exposed prompt) → AI thinking + High retention moments → 剪映-style multi-track timeline.
const CONTENT_DECODE_EXAMPLES = [
  'Turn our product demo into Facebook ads',
  'Turn this gameplay into UGC-style ads for Tik Tok with dinosaur avatar and voice over',
];

function ContentDecodingDemo() {
  const [phase, setPhase] = useState<'input' | 'cycling' | 'thinking' | 'timeline'>('input');
  const [cycleIndex, setCycleIndex] = useState(0);
  const [clipStart, setClipStart] = useState(20);
  const [clipEnd, setClipEnd] = useState(55);
  const [showMoments, setShowMoments] = useState(0);
  const [isDragging, setIsDragging] = useState<'left' | 'right' | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const moments = [
    { time: '00:09', label: 'Hook' },
    { time: '00:21', label: 'Peak' },
    { time: '00:36', label: 'Twist' },
    { time: '00:48', label: 'CTA' },
  ];

  // Auto flow: 1.5x faster loop — input → cycling → thinking → timeline → reset
  useEffect(() => {
    if (phase === 'input') {
      const t = setTimeout(() => setPhase('cycling'), 400);
      return () => clearTimeout(t);
    }
    if (phase === 'cycling') {
      const t = setInterval(() => setCycleIndex((i) => (i + 1) % 2), 1867);
      const done = setTimeout(() => setPhase('thinking'), 4000);
      return () => {
        clearInterval(t);
        clearTimeout(done);
      };
    }
    if (phase === 'thinking') {
      const t = setTimeout(() => setShowMoments(1), 267);
      const t2 = setTimeout(() => setShowMoments(2), 467);
      const t3 = setTimeout(() => setShowMoments(3), 667);
      const t4 = setTimeout(() => setShowMoments(4), 867);
      const toTimeline = setTimeout(() => setPhase('timeline'), 1467);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(toTimeline);
      };
    }
    if (phase === 'timeline') {
      const reset = setTimeout(() => {
        setPhase('input');
        setShowMoments(0);
      }, 5333);
      return () => clearTimeout(reset);
    }
  }, [phase]);

  const handleTrackMouse = (e: React.MouseEvent) => {
    if (!trackRef.current || !isDragging || phase !== 'timeline') return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    if (isDragging === 'left') setClipStart(Math.min(pct, clipEnd - 8));
    if (isDragging === 'right') setClipEnd(Math.max(pct, clipStart + 8));
  };

  return (
    <div
      className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-5 h-full shadow-xl shadow-black/20 flex flex-col"
      style={{ minHeight: 420, height: 420 }}
      onMouseMove={handleTrackMouse}
      onMouseUp={() => setIsDragging(null)}
      onMouseLeave={() => setIsDragging(null)}
    >
      <p className="text-[10px] text-gray-500 mb-2 flex-shrink-0">Describe the change. We map it to timeline operations.</p>

      {/* 1. Dialog box — no user prompt visible; placeholder or cycling example only */}
      <div className="relative mb-4 flex-shrink-0">
        <div className="w-full bg-black border border-white/10 rounded-xl pl-4 pr-11 py-3 text-sm text-white min-h-[48px] flex items-center">
          {phase === 'input' && <span className="text-gray-500">Describe the change...</span>}
          {phase === 'cycling' && (
            <span className="text-gray-300 truncate block overflow-hidden text-ellipsis">
              {CONTENT_DECODE_EXAMPLES[cycleIndex]}
            </span>
          )}
          {(phase === 'thinking' || phase === 'timeline') && (
            <span className="text-gray-500">Describe the change...</span>
          )}
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500">
          <Send className="w-4 h-4" />
        </div>
      </div>

      {/* 2 & 3: Fixed-height slot so layout never jumps — thinking+moments and timeline overlay */}
      <div className="relative flex-1 min-h-0">
        {/* AI thinking + High retention moments */}
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{ visibility: phase === 'thinking' || phase === 'timeline' ? 'visible' : 'hidden', opacity: phase === 'thinking' || phase === 'timeline' ? 1 : 0 }}
          aria-hidden={phase !== 'thinking' && phase !== 'timeline'}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-3 h-3 text-orange-400" />
            </div>
            {phase === 'thinking' && (
              <>
                <div className="w-3 h-3 border border-orange-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs text-gray-400">Analyzing…</span>
              </>
            )}
            {phase === 'timeline' && (
              <span className="text-xs text-orange-400">Trimmed 0:12–0:42. Cliffhanger at 0:28.</span>
            )}
          </div>
          <div className="space-y-1 mb-4">
            <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-1.5">High retention moments</p>
            {moments.map((m, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 py-1.5 px-2 rounded bg-white/[0.02] border border-white/5 transition-all duration-200 ${
                  showMoments > i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-1 h-4 rounded-full bg-orange-500/80 flex-shrink-0" />
                <span className="text-[10px] text-gray-300">{m.time} {m.label}</span>
                <ChevronRight className="w-3 h-3 text-gray-600 ml-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* 剪映-style multi-track timeline */}
        <div
          className="absolute inset-0 overflow-auto transition-opacity duration-200"
          style={{ visibility: phase === 'timeline' ? 'visible' : 'hidden', opacity: phase === 'timeline' ? 1 : 0 }}
          aria-hidden={phase !== 'timeline'}
        >
          <div className="mb-0">
          <div className="flex justify-between text-[9px] text-gray-500 mb-1">
            <span>00:00</span>
            <span>00:30</span>
          </div>
          <div ref={trackRef} className="relative rounded-lg overflow-hidden border border-white/5 bg-black">
            <div className="flex flex-col">
              <div className="h-6 flex items-center gap-2 px-2 border-b border-white/5">
                <span className="text-[8px] text-gray-500 w-12">Video</span>
                <div className="flex-1 h-4 rounded bg-gray-700/80" style={{ width: '92%' }} />
              </div>
              <div className="h-6 flex items-center gap-2 px-2 border-b border-white/5">
                <span className="text-[8px] text-gray-500 w-12">Avatar</span>
                <div className="h-4 rounded bg-orange-900/40 flex-shrink-0" style={{ width: '25%' }} />
              </div>
              <div className="h-6 flex items-center gap-2 px-2 border-b border-white/5">
                <span className="text-[8px] text-gray-500 w-12">Subs</span>
                <div className="flex-1 h-4 rounded bg-gray-600/60" style={{ width: '90%' }} />
              </div>
              <div className="h-7 flex items-center gap-2 px-2">
                <span className="text-[8px] text-gray-500 w-12">Wave</span>
                <div className="flex-1 flex items-center px-0.5">
                  {[...Array(45)].map((_, i) => (
                    <div key={i} className="flex-1 mx-px bg-gray-600 rounded-full max-w-[2px]" style={{ height: `${20 + Math.sin(i * 0.4) * 50}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 bg-orange-500/15 border-l border-r border-orange-500/50 pointer-events-none" style={{ left: `${clipStart}%`, width: `${clipEnd - clipStart}%` }} />
            <div className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none" style={{ left: '35%' }} />
            <div className="absolute top-0 bottom-0 w-1.5 bg-white/90 cursor-ew-resize z-10 hover:bg-orange-400 rounded-sm" style={{ left: `${clipStart}%` }} onMouseDown={() => setIsDragging('left')}>
              <GripVertical className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-gray-800" />
            </div>
            <div className="absolute top-0 bottom-0 w-1.5 bg-white/90 cursor-ew-resize z-10 hover:bg-orange-400 rounded-sm" style={{ left: `${clipEnd}%` }} onMouseDown={() => setIsDragging('right')}>
              <GripVertical className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-gray-800" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

// ——— Generative Scale ———
// Multi-language + portrait/landscape batch.
function GenerativeScaleDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const t = setTimeout(() => setProgress((p) => Math.min(100, p + 1.2)), 55);
      return () => clearTimeout(t);
    }
    const reset = setTimeout(() => setProgress(0), 3800);
    return () => clearTimeout(reset);
  }, [progress]);

  const languages = ['EN', 'ZH', 'ES', 'JA', 'DE', 'PT', 'KO', 'FR'];
  const platforms = [
    { name: 'Facebook', ratio: '1:1', count: 8, done: progress > 20 },
    { name: 'IG Reels', ratio: '9:16', count: 12, done: progress > 40 },
    { name: 'TikTok', ratio: '9:16', count: 12, done: progress > 65 },
    { name: 'YT Shorts', ratio: '9:16', count: 8, done: progress > 85 },
    { name: 'YouTube', ratio: '16:9', count: 6, done: progress >= 100 },
  ];

  const total = progress >= 100 ? 46 : '—';

  return (
    <div className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-5 h-full shadow-xl shadow-black/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Batch production</span>
        </div>
        <span className="text-xs font-mono text-orange-400">{Math.round(progress)}%</span>
      </div>

      <div className="h-1.5 bg-white/5 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-150 rounded-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Multi-language + aspect */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-orange-400/80" />
          <span className="text-[10px] text-gray-500">Languages:</span>
          <div className="flex gap-1">
            {languages.slice(0, 6).map((lang, i) => (
              <span key={i} className={`text-[9px] px-1.5 py-0.5 rounded ${progress > (i + 1) * 12 ? 'bg-orange-500/15 text-orange-400' : 'bg-white/5 text-gray-600'}`}>{lang}</span>
            ))}
            <span className="text-[9px] text-gray-500">+2</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Monitor className="w-3.5 h-3.5 text-orange-400/80" />
          <span className="text-[10px] text-gray-500">Portrait 9:16 + Landscape 16:9</span>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-24 space-y-2 flex-shrink-0">
          {platforms.map((p, i) => (
            <div key={i} className={`py-2 px-2 rounded-lg border transition-all text-center ${p.done ? 'bg-orange-500/10 border-orange-500/25' : 'bg-white/[0.02] border-white/5'}`}>
              <p className={`text-[10px] ${p.done ? 'text-white' : 'text-gray-500'}`}>{p.name}</p>
              <p className={`text-[9px] text-gray-500`}>{p.ratio}</p>
              <p className={`text-xs font-mono ${p.done ? 'text-orange-400' : 'text-gray-600'}`}>{p.done ? p.count : '—'}</p>
            </div>
          ))}
          <div className="pt-2 border-t border-white/5 flex justify-between text-[10px]">
            <span className="text-gray-500">Total</span>
            <span className="font-medium text-white">{total}</span>
          </div>
        </div>
        {/* Row 1: 1:1 only. Row 2: 9:16 only. Appear one by one. */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className={`rounded border flex flex-col items-center justify-center transition-all duration-300 ${
                  progress > 15 + i * 12 ? 'border-orange-500/30 bg-orange-500/5 opacity-100' : 'border-white/5 bg-black/50 opacity-40'
                }`}
                style={{ aspectRatio: '1/1' }}
              >
                <Play className={`w-3 h-3 ${progress > 15 + i * 12 ? 'text-orange-400' : 'text-gray-700'}`} />
                {progress > 15 + i * 12 && <span className="text-[8px] text-gray-500 mt-0.5">1:1</span>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`rounded border flex flex-col items-center justify-center transition-all duration-300 ${
                  progress > 45 + i * 12 ? 'border-orange-500/30 bg-orange-500/5 opacity-100' : 'border-white/5 bg-black/50 opacity-40'
                }`}
                style={{ aspectRatio: '9/16' }}
              >
                <Play className={`w-3 h-3 ${progress > 45 + i * 12 ? 'text-orange-400' : 'text-gray-700'}`} />
                {progress > 45 + i * 12 && <span className="text-[8px] text-gray-500 mt-0.5">9:16</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ——— Auto Launch & Optimize ———
// Right panel: agent content animates in one by one.
function AutoOptimizeDemo() {
  const [deployProgress, setDeployProgress] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [agentVisible, setAgentVisible] = useState(0); // 0=hide, 1=header, 2=status, 3=label, 4,5,6=cards, 7=input

  useEffect(() => {
    if (deployProgress < 100) {
      const t = setTimeout(() => setDeployProgress((p) => p + 1), 48);
      return () => clearTimeout(t);
    }
    setShowDashboard(true);
  }, [deployProgress]);

  useEffect(() => {
    if (deployProgress >= 100) {
      const reset = setTimeout(() => {
        setDeployProgress(0);
        setShowDashboard(false);
        setAgentVisible(0);
      }, 8000);
      return () => clearTimeout(reset);
    }
  }, [deployProgress]);

  useEffect(() => {
    if (!showDashboard) return;
    const delays = [0, 200, 450, 700, 950, 1200, 1450, 1700];
    const timers = delays.map((d, i) => setTimeout(() => setAgentVisible(i + 1), d));
    return () => timers.forEach(clearTimeout);
  }, [showDashboard]);

  const kpis = [
    { label: 'Budget', value: '$141k' },
    { label: 'Spent', value: '$17k' },
    { label: 'Impr.', value: '29.2M' },
    { label: 'CTR', value: '4.31%' },
    { label: 'Conv.', value: '65.7k' },
    { label: 'CPI', value: '$0.26' },
  ];

  const insights = [
    { title: 'Cross-Channel Budget Shift', text: 'TikTok outperforming Google. Reallocate for +22% ROAS.', action: 'Apply' },
    { title: 'Creative Fatigue on Meta', text: 'CTR drop on FB/IG. 12 new UGC variants ready to deploy.', action: 'Refresh' },
    { title: 'Multi-Platform Sync', text: '240 creatives synced across 6 platforms in 8 languages.', action: 'View' },
  ];

  return (
    <div className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-5 h-full shadow-xl shadow-black/20 flex flex-col min-h-0">
      <div className="flex gap-4 flex-1 min-h-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-white">Campaign Dashboard</p>
              <p className="text-[10px] text-gray-500">Manage campaigns across channels</p>
            </div>
          </div>

          {deployProgress < 100 && (
            <div className="mb-3">
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                <Rocket className="w-3.5 h-3.5 text-orange-400" />
                Deploying...
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 transition-all duration-100 rounded-full" style={{ width: `${deployProgress}%` }} />
              </div>
            </div>
          )}

          {showDashboard && (
            <>
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                {kpis.map((k, i) => (
                  <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[8px] text-gray-500 uppercase">{k.label}</p>
                    <p className="text-xs font-semibold text-white truncate">{k.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 mb-2">
                {['Q1 Short-form', 'Holiday Push', 'Retargeting'].map((name, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-[11px] text-white">{name}</span>
                    <span className="text-[10px] text-orange-400">Active</span>
                    <span className="text-[10px] text-gray-500">$229 / $15k</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-[52%] flex-shrink-0 border-l border-white/5 pl-3 flex flex-col min-w-0">
          {agentVisible >= 1 && (
            <div className="mb-2 animate-fade-in">
              <p className="text-xs font-medium text-white flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                Campaign Agent
              </p>
            </div>
          )}
          {agentVisible >= 2 && (
            <div className="mb-2 animate-fade-in">
              <p className="text-[9px] text-gray-500">AI-powered optimization</p>
              <p className="text-[9px] text-green-400 mt-0.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                Auto-Pilot Active · Monitoring 5 campaigns
              </p>
            </div>
          )}
          <div className="flex-1 min-h-0 overflow-auto space-y-2">
            {agentVisible >= 3 && <p className="text-[9px] text-gray-500 uppercase animate-fade-in">AI Insights (5)</p>}
            {insights.map((ins, i) =>
              agentVisible >= 4 + i ? (
                <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/5 animate-fade-in">
                  <p className="text-[10px] font-medium text-white mb-0.5">{ins.title}</p>
                  <p className="text-[9px] text-gray-400 mb-1.5">{ins.text}</p>
                  <button className="text-[9px] text-orange-400 hover:underline">{ins.action}</button>
                </div>
              ) : null
            )}
          </div>
          {agentVisible >= 7 && (
            <div className="mt-2 pt-2 border-t border-white/5 animate-fade-in">
              <input
                type="text"
                placeholder="Ask the agent..."
                className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/40"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const features = [
  { id: 'radar', title: 'Creative Radar', description: 'Scan the market for winning hooks and trending formats. Know what works before you create.', Demo: CreativeRadarDemo },
  { id: 'decode', title: 'Content Decoding', description: 'Tell the AI what you need in plain English. It finds the best moments and makes the cut.', Demo: ContentDecodingDemo },
  { id: 'scale', title: 'Generative Scale', description: 'One source, dozens of variations. Multi-language and portrait/landscape batch production.', Demo: GenerativeScaleDemo },
  { id: 'optimize', title: 'Auto Launch & Optimize', description: 'Deploy directly to ad networks. The system learns what converts and improves autonomously.', Demo: AutoOptimizeDemo },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.features-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
      if (laserRef.current) {
        gsap.fromTo(laserRef.current, { height: '0%' }, { height: '100%', ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top center', end: 'bottom center', scrub: 1 } });
      }
      features.forEach((_, index) => {
        const block = sectionRef.current?.querySelector(`[data-feature="${index}"]`);
        if (block) gsap.fromTo(block, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: block, start: 'top 82%' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 relative">
      <div className="absolute left-1/2 top-32 bottom-32 w-px -translate-x-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-white/[0.04]" />
        <div ref={laserRef} className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-500/80 via-orange-400/50 to-transparent" style={{ height: '0%' }} />
      </div>
      <div className="features-header max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <p className="eyebrow mb-4">Core Capabilities</p>
          <h2 className="headline-section">Built for Scale, Not Just <span className="text-accent-bright">Creation</span></h2>
          <p className="body-text mt-4 max-w-2xl mx-auto">Four integrated systems that turn market intelligence into deployed campaigns.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature, index) => (
            <div key={feature.id} data-feature={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} min-h-[420px] flex flex-col justify-center`}>
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
