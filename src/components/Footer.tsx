import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy', isRoute: true },
    { label: 'Terms of Service', href: '/terms', isRoute: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Flamma" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-xl text-white">Flamma</span>
            </a>
            <p className="text-gray-500 text-sm">
              The generative engine for performance marketing at scale.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isRoute = 'isRoute' in link && link.isRoute;
                  
                  if (isRoute) {
                    return (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-gray-500 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    );
                  }
                  
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-500 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar - just copyright, no duplicate links */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-center">
          <p className="text-gray-600 text-sm">
            © 2026 FlammaLabs Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
