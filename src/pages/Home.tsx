import { useState } from 'react';
import { LogoIntro } from '../components/LogoIntro';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { ValueProps } from '../components/ValueProps';
import { ProductDemo } from '../components/ProductDemo';
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
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Logo Intro Animation */}
      {showIntro && <LogoIntro onComplete={handleIntroComplete} />}

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation showLogo={showNavLogo} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ValueProps />
        <ProductDemo />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
