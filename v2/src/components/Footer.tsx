import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing'],
  Company: ['About', 'Careers'],
  Legal: [
    { label: 'Privacy Policy', href: '#/privacy' },
    { label: 'Terms of Service', href: '#/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <defs>
                  <linearGradient id="footerFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 95 C30 95, 15 80, 15 55 C15 35, 30 15, 50 5 C70 15, 85 35, 85 55 C85 80, 70 95, 50 95 Z M50 80 C62 80, 70 70, 70 55 C70 42, 62 30, 50 22 C38 30, 30 42, 30 55 C30 70, 38 80, 50 80 Z"
                  fill="url(#footerFlame)"
                />
                <path
                  d="M50 70 C42 70, 38 62, 38 52 C38 44, 44 36, 50 30 C56 36, 62 44, 62 52 C62 62, 58 70, 50 70 Z"
                  fill="#0d0d0d"
                />
              </svg>
              <span className="font-semibold text-xl text-white">Flamma</span>
            </a>
            <p className="text-gray-500 text-sm">
              The generative engine for performance video.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isObject = typeof link === 'object';
                  const label = isObject ? link.label : link;
                  const href = isObject ? link.href : '#';
                  
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-gray-500 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                      >
                        {label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 FlammaLabs Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#/privacy" className="text-gray-600 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#/terms" className="text-gray-600 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
