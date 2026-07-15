import { fetchPost, fetchSlugs, formatPostDate } from "@/lib/blog";


type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return fetchSlugs().map((slug) => ({
    slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;

  try {
    const post = await fetchPost(slug);

    return {
      title: post.metadata.title,
      description: post.metadata.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const { default: Post, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  return (
    <article className="text-foreground">
      <header className="mb-8">
        <h1 className="text-page-title font-semibold">
          {metadata.title}
        </h1>

        <p className="mt-2 font-mono text-xs text-muted">
          {formatPostDate(metadata.date)}
        </p>

        <p className="mt-3 max-w-3xl leading-7 text-muted">
          {metadata.description}
        </p>
      </header>
      <div className="max-w-none">
        <Post />
      </div>
    </article>
  );
}
