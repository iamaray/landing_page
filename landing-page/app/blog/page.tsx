import { CustomItemList } from "@/components/CustomItemListLayout";
import BlogListItem from "@/components/BlogListItem";
import { fetchPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Math and dev logs.",
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <section className="flex flex-col">
      <div>
        <h1 className="text-4xl tracking-tight text-black">Blog</h1>
        <p className="mt-2 max-w-3xl text-black">Math and Development Logs.</p>
      </div>

      <CustomItemList>
        {posts.map((post) => (
            <BlogListItem
                key={post.slug}
                postLink={`/blog/${post.slug}`}
                postTitle={post.metadata.title}
                postSnippet={post.metadata.description}
                postDate={post.metadata.date}
            />
        ))}
      </CustomItemList>
    </section>
  );
}
