import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserX, Scissors, Send, Frown, RotateCcw, Sparkles, Rocket, BarChart3, Brain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const oldWorldSteps = [
  { icon: UserX, label: 'Manual Editing', desc: 'Editor guesses' },
  { icon: Send, label: 'Launch', desc: 'Hope for best' },
  { icon: Frown, label: 'Poor Results', desc: 'Low CTR/CVR' },
  { icon: RotateCcw, label: 'Start Over', desc: 'Repeat cycle' },
];

const newWorldSteps = [
  { icon: Sparkles, label: 'AI Generation', desc: 'Data-driven creatives', color: '#FF3D00' },
  { icon: Rocket, label: 'Market Deploy', desc: 'Auto-optimized launch', color: '#FF9100' },
  { icon: BarChart3, label: 'Performance Feedback', desc: 'CTR/CVR data flows back', color: '#00E5FF' },
  { icon: Brain, label: 'Self-Optimization', desc: 'AI learns & improves', color: '#00FF64' },
];

export function DataLoopSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const oldWorldRef = useRef<HTMLDivElement>(null);
  const newWorldRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Old world fade in
      gsap.fromTo(
        oldWorldRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 0.4,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      // New world with glow
      gsap.fromTo(
        newWorldRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          },
        }
      );

      // Loop animation
      const loopArrow = loopRef.current?.querySelector('.loop-arrow');
      if (loopArrow) {
        gsap.to(loopArrow, {
          rotation: 360,
          duration: 8,
          repeat: -1,
          ease: 'none',
        });
      }

      // Step cards stagger
      const oldCards = oldWorldRef.current?.querySelectorAll('.step-card');
      const newCards = newWorldRef.current?.querySelectorAll('.step-card');

      if (oldCards) {
        gsap.fromTo(
          oldCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: oldWorldRef.current,
              start: 'top 70%',
            },
          }
        );
      }

      if (newCards) {
        gsap.fromTo(
          newCards,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: newWorldRef.current,
              start: 'top 60%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-24"
    >
      {/* Title */}
      <div ref={titleRef} className="text-center mb-16">
        <p className="eyebrow mb-4">Why Generic AI Tools Fail</p>
        <h2 className="headline-section">
          The <span style={{ color: '#FF3D00' }}>Data Loop</span> Difference
        </h2>
      </div>

      {/* Comparison Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Old World */}
        <div ref={oldWorldRef} className="old-world">
          <div className="glass-card p-8 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                <Scissors className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-400">Linear Editing</h3>
                <p className="text-sm text-gray-500">The Guesswork Method</p>
              </div>
            </div>

            {/* Broken chain */}
            <div className="space-y-4">
              {oldWorldSteps.map((step, i) => (
                <div key={i} className="step-card flex items-center gap-4 p-4 rounded-xl bg-gray-900/50">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-400">{step.label}</div>
                    <div className="text-xs text-gray-600">{step.desc}</div>
                  </div>
                  {i < oldWorldSteps.length - 1 && (
                    <div className="text-gray-700">
                      <span className="text-lg">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Broken indicator */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-900/30">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm text-red-400">Broken Feedback Loop</span>
              </div>
            </div>
          </div>
        </div>

        {/* New World */}
        <div ref={newWorldRef} className="new-world">
          <div
            className="glass-card p-8 h-full"
            style={{
              borderColor: 'rgba(255, 61, 0, 0.3)',
              boxShadow: '0 0 40px rgba(255, 61, 0, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #FF3D00, #FF9100)',
                }}
              >
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">The Kinetic Loop</h3>
                <p className="text-sm" style={{ color: '#FF9100' }}>
                  Data-Driven Intelligence
                </p>
              </div>
            </div>

            {/* Closed loop */}
            <div className="space-y-4">
              {newWorldSteps.map((step, i) => (
                <div
                  key={i}
                  className="step-card flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: 'rgba(10, 10, 15, 0.8)',
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}20` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{step.label}</div>
                    <div className="text-xs" style={{ color: '#8B8B9A' }}>
                      {step.desc}
                    </div>
                  </div>
                  {i < newWorldSteps.length - 1 ? (
                    <div style={{ color: step.color }}>
                      <span className="text-lg">→</span>
                    </div>
                  ) : (
                    <div ref={loopRef} className="relative">
                      <div
                        className="loop-arrow w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#00FF6420', border: '1px solid #00FF6440' }}
                      >
                        <RotateCcw className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Success indicator */}
            <div className="mt-6 text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(0, 255, 100, 0.15)',
                  border: '1px solid rgba(0, 255, 100, 0.3)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400">Closed Feedback Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="mt-16 text-center">
        <p className="text-xl font-medium" style={{ color: '#FF9100' }}>
          "It gets smarter with every ad dollar you spend."
        </p>
      </div>
    </section>
  );
}
