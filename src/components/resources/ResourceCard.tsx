import { ExternalLink, Star } from 'lucide-react';
import type { Resource, ResourceCategory } from '@/types/resource';

const categoryConfig: Record<ResourceCategory, { label: string; color: string; bg: string }> = {
  blog: { label: 'Blog', color: 'text-blue-700', bg: 'bg-blue-100' },
  book: { label: 'Book', color: 'text-purple-700', bg: 'bg-purple-100' },
  podcast: { label: 'Podcast', color: 'text-green-700', bg: 'bg-green-100' },
  tool: { label: 'Tool', color: 'text-fire-700', bg: 'bg-fire-100' },
  research: { label: 'Research', color: 'text-amber-700', bg: 'bg-amber-100' },
  community: { label: 'Community', color: 'text-cyan-700', bg: 'bg-cyan-100' },
  video: { label: 'Video', color: 'text-red-700', bg: 'bg-red-100' },
};

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const cat = categoryConfig[resource.category];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${cat.bg} ${cat.color}`}>
            {cat.label}
          </span>
          {resource.isFree && (
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">
              Free
            </span>
          )}
          {resource.featured && (
            <Star className="w-4 h-4 text-gold fill-gold" />
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-navy-800 text-base mb-1 leading-tight">{resource.title}</h3>
      <p className="text-xs text-fire-500 font-medium mb-3">By {resource.author}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{resource.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {resource.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-fire-500 hover:text-fire-600 transition-colors mt-auto"
      >
        Visit {resource.title.split(' ')[0]}
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
