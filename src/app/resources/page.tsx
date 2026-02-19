import type { Metadata } from 'next';
import { ResourceGrid } from '@/components/resources/ResourceGrid';
import resourcesData from '@/lib/data/resources.json';
import type { Resource } from '@/types/resource';

export const metadata: Metadata = {
  title: 'FIRE Resources — Best Blogs, Books, Podcasts & Tools for Financial Independence',
  description:
    'Curated collection of the best FIRE resources: Mr. Money Mustache, JL Collins, ChooseFI, Early Retirement Now, FIRECalc, and 20+ more — all with full credits to creators.',
  keywords:
    'FIRE resources, FIRE blogs, FIRE books, FIRE podcasts, FIRE tools, Mr Money Mustache, JL Collins, ChooseFI, financial independence resources',
};

export default function ResourcesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-fire-500 text-sm font-semibold tracking-wider uppercase mb-3">
            Curated with Care
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-800 mb-4">
            The Best FIRE Resources
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hand-picked blogs, books, podcasts, tools, communities, and research papers for your
            financial independence journey — all with full credits to the incredible creators who
            built the FIRE community.
          </p>
        </div>

        {/* Attribution note */}
        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-5 mb-8 flex gap-3">
          <div className="text-2xl shrink-0">🤝</div>
          <div>
            <p className="font-semibold text-navy-800 mb-1">Full Attribution</p>
            <p className="text-navy-600 text-sm leading-relaxed">
              Every resource below is credited to its original author or creator. We believe in
              supporting and promoting the amazing work of the FIRE community. Always visit the
              original sources for the most up-to-date content.
            </p>
          </div>
        </div>

        <ResourceGrid resources={resourcesData as Resource[]} />
      </div>
    </div>
  );
}
