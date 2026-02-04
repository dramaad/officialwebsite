import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vertical: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = sectionRef.current?.querySelector('.contact-content');
      if (content) {
        gsap.fromTo(
          content,
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-24"
    >
      <div className="contact-content w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <p className="eyebrow mb-4">Get Started</p>
            <h2 className="headline-section mb-6">
              Ready to <span style={{ color: '#FF3D00' }}>Transform</span>
              <br />
              Your Creative Workflow?
            </h2>
            <p className="subheadline mb-8">
              Join leading gaming studios and short drama platforms already using Flamma to
              generate high-performing creatives at scale.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255, 61, 0, 0.15)' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#FF3D00' }} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email us at</div>
                  <a
                    href="mailto:hello@goflamma.ai"
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    hello@goflamma.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-8" style={{ borderColor: 'rgba(255, 61, 0, 0.2)' }}>
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(0, 255, 100, 0.15)' }}
                >
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-400">
                  We&apos;ll be in touch within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Vertical</label>
                    <select
                      name="vertical"
                      value={formData.vertical}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">
                        Select vertical
                      </option>
                      <option value="gaming" className="bg-gray-900">
                        Gaming UA
                      </option>
                      <option value="drama" className="bg-gray-900">
                        Short Drama
                      </option>
                      <option value="other" className="bg-gray-900">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about your creative challenges..."
                  />
                </div>

                <button type="submit" className="btn-ember w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Request Early Access
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #FF3D00, #FF9100)',
              }}
            >
              <span className="text-white font-bold text-xs">F</span>
            </div>
            <span className="text-sm text-gray-500">Flamma Inc.</span>
          </div>
          <p className="text-sm text-gray-600">© 2025 Flamma. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
