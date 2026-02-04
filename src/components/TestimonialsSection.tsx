import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "As a mid-sized short drama company without an in-house creative team, Flamma has been a game-changer. We can now produce hundreds of ad variations weekly that actually convert. The AI understands exactly which cliffhangers drive installs.",
    author: 'Lisa Chen',
    role: 'Head of User Acquisition',
    company: 'DramaFlow Studio',
    avatar: 'LC',
    industry: 'Short Drama',
  },
  {
    quote: "We replaced our entire intern team with Flamma. It's 10x cheaper, infinitely faster, and the performance is actually better. Our clients are seeing 40% improvement in CTR across the board. It's like having a top-tier creative agency that never sleeps.",
    author: 'Marcus Johnson',
    role: 'Founder & CEO',
    company: 'GrowthRocket Agency',
    avatar: 'MJ',
    industry: 'Marketing Agency',
  },
  {
    quote: "Compliance was our biggest headache. Our social app ads kept getting flagged, and aligning with platform policies took forever. With Flamma, the creatives are compliant from day one. We just upload and go. Saved us countless hours and headaches.",
    author: 'Sarah Park',
    role: 'Growth Lead',
    company: 'ConnectApp',
    avatar: 'SP',
    industry: 'Social App',
  },
  {
    quote: "Flamma has been instrumental in our growth trajectory. We went from spending weeks on creative production to launching new campaigns in hours. The results speak for themselves—better ROAS, faster iteration, and a team that can focus on strategy instead of editing.",
    author: 'David Kim',
    role: 'Co-founder & CMO',
    company: 'NeuralWorks AI',
    avatar: 'DK',
    industry: 'AI Startup',
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const testimonialsHeader = sectionRef.current?.querySelector('.testimonials-header');
      if (testimonialsHeader) {
        gsap.fromTo(
          testimonialsHeader,
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

      const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
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
    <section id="testimonials" ref={sectionRef} className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="headline-section mb-4">
            What People Are Saying About{' '}
            <span className="text-accent-soft">Flamma</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card card-dark p-8"
              style={{ opacity: 0 }}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-orange-500/40" />
              </div>

              {/* Quote text */}
              <p className="text-gray-300 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Industry tag */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium">
                  {testimonial.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
