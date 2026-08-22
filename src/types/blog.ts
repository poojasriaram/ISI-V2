export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
  coAvatar?: string;
  bio?: string;
}

export interface BlogStat {
  value: string;
  label: string;
  source?: string;
}

export interface BlogTableColumn {
  key: string;
  header: string;
}

export interface BlogTableRow {
  [key: string]: string;
}

export interface BlogTable {
  title?: string;
  columns: BlogTableColumn[];
  rows: BlogTableRow[];
}

export interface BlogSection {
  id?: string;
  title: string;
  subtitle?: string;
  content: string[];
  bullets?: string[];
  stats?: BlogStat[];
  image?: {
    url: string;
    alt: string;
    caption?: string;
  };
  table?: BlogTable;
  callout?: {
    type?: 'info' | 'warning' | 'tip' | 'quote';
    text: string;
    author?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  heroImageAlt: string;
  featured?: boolean;
  sections: BlogSection[];
}
