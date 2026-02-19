import Link from 'next/link';
import { Flame, Heart, ExternalLink } from 'lucide-react';

const footerLinks = {
  'FIRE Types': [
    { href: '/learn/lean-fire', label: 'Lean FIRE' },
    { href: '/learn/fat-fire', label: 'Fat FIRE' },
    { href: '/learn/coast-fire', label: 'Coast FIRE' },
    { href: '/learn/barista-fire', label: 'Barista FIRE' },
    { href: '/learn/four-percent-rule', label: 'The 4% Rule' },
  ],
  Tools: [
    { href: '/calculator', label: 'FIRE Calculator' },
    { href: '/resources', label: 'Resources' },
    { href: '/learn', label: 'Learn FIRE' },
  ],
  Legal: [
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-fire flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                FIRE<span className="text-fire-500">map</span>
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-4">
              Your free, comprehensive guide to Financial Independence, Retire Early.
              Calculate, learn, and achieve your FIRE number.
            </p>
            <p className="text-xs text-navy-400">
              For educational purposes only. Not financial advice.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm text-fire-400 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-navy-300 text-sm hover:text-fire-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-xs">
            © {new Date().getFullYear()} FIREmap. Built with{' '}
            <Heart className="inline w-3 h-3 text-fire-500" /> for the FIRE community.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.reddit.com/r/financialindependence/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-400 text-xs hover:text-fire-400 transition-colors flex items-center gap-1"
            >
              r/financialindependence <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.choosefi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-400 text-xs hover:text-fire-400 transition-colors flex items-center gap-1"
            >
              ChooseFI <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
