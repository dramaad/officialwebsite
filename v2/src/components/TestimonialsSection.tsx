import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "We burn through 100 creatives a week. We used to be bottlenecked by outsourcing delays. Now, we just feed the engine our raw series footage, and it spits out 100+ variations overnight. It nails the cliffhangers better than most junior editors we've hired.",
    author: 'Jason',
    role: 'Founder',
    tag: 'Short Drama App',
  },
  {
    quote: "We used to have 4 interns for editing to save cost but the back-and-forth was endless. Flamma replaced that entire workflow. It's not just about saving money; it's about the feedback loop. We can now test 20x more hooks for the same budget, and our ROAS actually went up.",
    author: 'Marcus',
    role: 'Head of Media Buying',
    tag: 'Marketing Agency',
  },
  {
    quote: "Our ads were getting flagged constantly on Google for minor policy violations. It was a nightmare. Flamma's model seems to 'get' the platform rules better than we do. Since we switched, our rejection rate dropped to near zero, and we can finally scale our spend without worrying about bans.",
    author: 'Bryan',
    role: 'Growth Lead',
    tag: 'Social App',
  },
  {
    quote: "Traditional agencies just couldn't keep pace with our shipping velocity. Flamma feels like an extension of our engineering team and it turns product demos into high-performing ads instantly. Finally, we can have a UA team that moves as fast as we code.",
    author: 'Zoey',
    role: 'Co-founder',
    tag: 'Series A AI Startup',
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const header = sectionRef.current?.querySelector('.testimonials-header');
      if (header) {
        gsap.fromTo(
          header,
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

      // Auto-scroll animation
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        gsap.to(scrollContainer, {
          scrollLeft: scrollWidth,
          duration: 40,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 overflow-hidden">
      {/* Header */}
      <div className="testimonials-header max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="headline-section">
            Trusted by{' '}
            <span className="text-flamma-bright">Growth Teams</span>
          </h2>
        </div>
      </div>

      {/* Horizontal Scrolling Testimonials */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[400px] card-dark p-6"
          >
            {/* Tag */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium">
                {testimonial.tag}
              </span>
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {testimonial.author[0]}
                </span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">{testimonial.author}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
