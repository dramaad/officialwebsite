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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[400px] card-dark p-6 mx-3 hover:border-orange-500/30 transition-colors duration-300">
      {/* Tag */}
      <div className="mb-5">
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold">
          {testimonial.tag}
        </span>
      </div>

      {/* Quote */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-white/5">
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
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 overflow-hidden">
      {/* Header */}
      <div className="testimonials-header max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="headline-section">
            Loved by{' '}
            <span className="text-accent-bright">Growth Teams</span>
          </h2>
        </div>
      </div>

      {/* Auto-scrolling Marquee */}
      <div className="relative">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        {/* Marquee track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
