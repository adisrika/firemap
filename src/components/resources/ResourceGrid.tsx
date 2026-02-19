'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { ResourceCard } from './ResourceCard';
import type { Resource, ResourceCategory } from '@/types/resource';

const ALL_CATEGORIES = 'all';

const categoryLabels: Record<string, string> = {
  all: 'All',
  blog: 'Blogs',
  book: 'Books',
  podcast: 'Podcasts',
  tool: 'Tools',
  research: 'Research',
  community: 'Community',
  video: 'Video',
};

interface ResourceGridProps {
  resources: Resource[];
}

export function ResourceGrid({ resources }: ResourceGridProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>(ALL_CATEGORIES);
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set<ResourceCategory>(resources.map((r) => r.category));
    return [ALL_CATEGORIES, ...Array.from(cats).sort()];
  }, [resources]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return resources.filter((r) => {
      const matchesCategory = category === ALL_CATEGORIES || r.category === category;
      const matchesFree = !showFreeOnly || r.isFree;
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.author.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesFree && matchesSearch;
    });
  }, [resources, search, category, showFreeOnly]);

  const featured = filtered.filter((r) => r.featured);
  const rest = filtered.filter((r) => !r.featured);

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search resources, authors, topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-400 transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                category === cat
                  ? 'gradient-fire text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Free toggle */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showFreeOnly}
            onChange={(e) => setShowFreeOnly(e.target.checked)}
            className="rounded accent-fire-500"
          />
          <span className="text-sm text-gray-600">Free resources only</span>
        </label>
      </div>

      {/* Result count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing <strong>{filtered.length}</strong> of <strong>{resources.length}</strong> resources
        {search && ` for "${search}"`}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-lg font-medium mb-1">No resources found</p>
          <p className="text-sm">Try a different search term or category</p>
        </div>
      ) : (
        <>
          {/* Featured */}
          {featured.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-navy-800 mb-4 flex items-center gap-2">
                ⭐ Featured Resources
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featured.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div>
              {featured.length > 0 && (
                <h2 className="text-lg font-bold text-navy-800 mb-4">More Resources</h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
