import { useState } from 'react';
import { LogoIntro } from '../components/LogoIntro';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showNavLogo, setShowNavLogo] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowNavLogo(true);
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Subtle film grain for depth */}
      <div className="grain-overlay" aria-hidden />

      {/* Logo Intro Animation */}
      {showIntro && <LogoIntro onComplete={handleIntroComplete} />}

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation showLogo={showNavLogo} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
