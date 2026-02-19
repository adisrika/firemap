'use client';

import { useEffect, useRef, useState } from 'react';
import statsData from '@/lib/data/stats.json';

function StatCard({ value, label, description }: { value: string; label: string; description: string }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl sm:text-5xl font-black gradient-fire-text mb-2">{value}</div>
      <div className="text-navy-800 font-semibold text-lg mb-1">{label}</div>
      <div className="text-gray-500 text-sm leading-relaxed">{description}</div>
    </div>
  );
}

export function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
            The Numbers Behind FIRE
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Financial independence is based on decades of academic research, historical market
            data, and thousands of real-world success stories.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
