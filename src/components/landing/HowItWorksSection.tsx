import Link from 'next/link';
import { Calculator, BookOpen, Library, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calculator,
    title: 'Calculate Your FIRE Number',
    description:
      'Enter your income, expenses, age, and dependents. Our calculator instantly shows your personalized FIRE number using the proven 4% rule and inflation adjustments.',
    cta: { href: '/calculator', label: 'Try the Calculator' },
    color: 'text-fire-500',
    bg: 'bg-fire-50',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Learn the Strategies',
    description:
      'Understand the different FIRE approaches — Lean, Fat, Coast, and Barista FIRE. Learn about the 4% rule, safe withdrawal rates, and the research behind FIRE.',
    cta: { href: '/learn', label: 'Start Learning' },
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    number: '03',
    icon: Library,
    title: 'Explore Curated Resources',
    description:
      'Access our hand-picked collection of the best FIRE blogs, books, podcasts, tools, and research — all with full credits to the original creators.',
    cta: { href: '/resources', label: 'Browse Resources' },
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Build Your FIRE Plan',
    description:
      'Armed with your number, a strategy, and the right resources, you have everything you need to start your FIRE journey and achieve financial independence.',
    cta: { href: '/calculator', label: 'Get Started' },
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-fire-500 text-sm font-semibold tracking-wider uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
            Your FIRE Journey in 4 Steps
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to plan and achieve financial independence is right here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className={`${step.bg} p-4 rounded-xl shrink-0`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-5xl font-black text-gray-100 leading-none">{step.number}</span>
                      <h3 className="text-xl font-bold text-navy-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <Link
                      href={step.cta.href}
                      className={`text-sm font-semibold ${step.color} hover:underline`}
                    >
                      {step.cta.label} →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
