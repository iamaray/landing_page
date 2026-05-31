// utility functions for blog posts

import path from "node:path";
import fs from "node:fs";

export type BlogPostMetadata = {
  title: string;
  description: string;
  date: string;
};

export type BlogPost = {
  slug: string;
  metadata: BlogPostMetadata;
};

const blogDirectory = path.join(process.cwd(), "content/blog");

export function fetchSlugs(): string[] {
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function fetchPost(slug: string): Promise<BlogPost> {
  const post = await import(`@/content/blog/${slug}.mdx`);

  return {
    slug,
    metadata: post.metadata,
  };
}

export async function fetchPosts(): Promise<BlogPost[]> {
  const slugs = fetchSlugs();
  const posts = await Promise.all(slugs.map((slug) => fetchPost(slug)));

  return posts.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });
}
