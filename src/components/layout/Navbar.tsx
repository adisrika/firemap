'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/learn', label: 'Learn' },
  { href: '/resources', label: 'Resources' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-orange-100 dark:border-navy-800 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <div className="w-8 h-8 rounded-lg gradient-fire flex items-center justify-center group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className={cn(
              'transition-colors',
              scrolled
                ? 'text-navy-800 dark:text-white'
                : 'text-white'
            )}>
              FIRE<span className="text-fire-500">map</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'bg-fire-500/10 text-fire-500'
                    : scrolled
                    ? 'text-navy-700 dark:text-navy-300 hover:bg-gray-100 dark:hover:bg-navy-800'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/calculator" className="hidden md:block">
              <Button size="sm" className="gradient-fire text-white border-0 hover:opacity-90 shadow-lg shadow-orange-500/25">
                Calculate My FIRE
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                scrolled
                  ? 'text-navy-800 dark:text-white hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-navy-950 border-b border-gray-200 dark:border-navy-800 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-fire-500/10 text-fire-500'
                      : 'text-navy-700 dark:text-navy-300 hover:bg-gray-100 dark:hover:bg-navy-800'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/calculator">
                  <Button className="w-full gradient-fire text-white border-0">
                    Calculate My FIRE Number
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
