import matter from "gray-matter";

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
  content: string;
}

const modules = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parsePost(raw: string): BlogPost {
  const { data, content } = matter(raw);
  return {
    title: data.title ?? "",
    date: data.date ?? "",
    slug: data.slug ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return Object.values(modules)
    .map(parsePost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
