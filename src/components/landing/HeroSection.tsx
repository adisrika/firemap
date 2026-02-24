'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuickCalculatorCard } from './QuickCalculator';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-navy hero-grid overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-fire-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ember/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-fire-400 text-sm font-medium mb-6 border-fire-500/20">
              <Zap className="w-4 h-4" />
              Free FIRE Calculator — No sign-up required
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Discover Your{' '}
              <span className="gradient-fire-text">Financial Independence</span>{' '}
              Number
            </h1>

            <p className="text-lg text-navy-200 leading-relaxed mb-8 max-w-lg">
              Calculate your personalized FIRE number, visualize your path to early
              retirement, and learn proven strategies — all in one place. No spreadsheets
              required.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/calculator">
                <Button
                  size="lg"
                  className="gradient-fire text-white border-0 hover:opacity-90 shadow-xl shadow-orange-500/30 text-base px-8 group"
                >
                  Get Full Projection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/learn">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent text-base px-8"
                >
                  Learn About FIRE
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, text: 'No personal data stored' },
                { icon: TrendingUp, text: 'Based on 50+ yrs of research' },
                { icon: Zap, text: 'Instant results' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-navy-300 text-sm">
                  <Icon className="w-4 h-4 text-fire-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: interactive calculator */}
          <div className="hidden lg:block">
            <QuickCalculatorCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-400 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-navy-400 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
