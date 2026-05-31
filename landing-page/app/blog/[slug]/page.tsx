import { fetchPost, fetchSlugs } from "@/lib/blog";

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
    <article className="text-black">
      <header className="mb-10">
        <h1 className="text-4xl tracking-tight">{metadata.title}</h1>

        <p className="mt-3 text-sm text-neutral-500">
          {new Date(metadata.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="mt-4 text-lg text-neutral-700">{metadata.description}</p>
      </header>
      <div className="prose max-w-none">
        <Post />
      </div>
    </article>
  );
}
