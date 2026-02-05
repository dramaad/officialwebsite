import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  showLogo: boolean;
}

export function Navigation({ showLogo }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - larger now */}
          <a 
            href="#" 
            className={`flex items-center gap-3 transition-all duration-500 ${
              showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <svg viewBox="0 0 100 100" className="w-10 h-10">
              <defs>
                <linearGradient id="navFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
              <path
                d="M50 95 C30 95, 15 80, 15 55 C15 35, 30 15, 50 5 C70 15, 85 35, 85 55 C85 80, 70 95, 50 95 Z M50 80 C62 80, 70 70, 70 55 C70 42, 62 30, 50 22 C38 30, 30 42, 30 55 C30 70, 38 80, 50 80 Z"
                fill="url(#navFlame)"
              />
              <path
                d="M50 70 C42 70, 38 62, 38 52 C38 44, 44 36, 50 30 C56 36, 62 44, 62 52 C62 62, 58 70, 50 70 Z"
                fill="#0d0d0d"
              />
            </svg>
            <span className="font-semibold text-xl text-white">Flamma</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link px-4 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="btn-ghost">
              Log in
            </a>
            <a href="#demo" className="btn-primary">
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-white hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a href="#login" className="block btn-secondary text-center">
                Log in
              </a>
              <a href="#demo" className="block btn-primary text-center">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
