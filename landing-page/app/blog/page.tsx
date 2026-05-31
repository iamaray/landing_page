import BlogListItem from "@/components/BlogListItem";
import ItemList from "@/components/ItemList";
import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import { fetchPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Math and dev logs.",
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <PageSection>
      <PageHeader title="Blog" description="Math and Development Logs." />

      <ItemList>
        {posts.map((post) => (
          <BlogListItem
            key={post.slug}
            postLink={`/blog/${post.slug}`}
            postTitle={post.metadata.title}
            postSnippet={post.metadata.description}
            postDate={post.metadata.date}
          />
        ))}
      </ItemList>
    </PageSection>
  );
}
