import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    price: '$49',
    period: '/month',
    features: [
      'Up to 100 video exports/month',
      '3 team members',
      'Basic analytics',
      'Email support',
      'Meta & TikTok integration',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing teams with advanced needs',
    price: '$149',
    period: '/month',
    features: [
      'Unlimited video exports',
      '10 team members',
      'Advanced analytics & reporting',
      'Priority support',
      'All platform integrations',
      'Custom AI training',
      'API access',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited everything',
      'Unlimited team members',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
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

  return (
    <section id="pricing" ref={sectionRef} className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="headline-section mb-4">
            Simple, Transparent{' '}
            <span className="text-accent">Pricing</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative card-dark p-6 lg:p-8 ${
                plan.popular ? 'border-orange-500/30' : ''
              }`}
              style={{ opacity: 0 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
