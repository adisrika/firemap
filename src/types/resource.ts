export type ResourceCategory =
  | 'blog'
  | 'book'
  | 'podcast'
  | 'tool'
  | 'research'
  | 'community'
  | 'video';

export interface Resource {
  id: string;
  title: string;
  author: string;
  url: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  isFree: boolean;
  featured: boolean;
}
