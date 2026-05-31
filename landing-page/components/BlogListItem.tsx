import Link from "next/link";

type CreateBlogListItemArgs = {
  postLink: string;
  postTitle: string;
  postDate: string;
  postSnippet: string;
};

export default function BlogListItem({
  postLink,
  postTitle,
  postDate,
  postSnippet,
}: CreateBlogListItemArgs) {
  return (
    <li className="w-full">
      <Link
        href={postLink}
        className="flex flex-col gap-2 w-full cursor-pointer justify-between border border-black rounded-sm p-3 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="w-full">
          <p className="text-black text-3xl">{postTitle}</p>
        </div>

        <div className="w-full">
          <p className="text-black">{postDate}</p>
        </div>

        <div>
          <p className="text-black">{postSnippet}</p>
        </div>
      </Link>
    </li>
  );
}


// import Link from "next/link";
// import { fetchPosts } from "@/lib/blog";

// export const metadata = {
//   title: "Blog",
//   description: "Essays, notes, and technical writing.",
// };

// export default async function BlogPage() {
//   const posts = await fetchPosts();

//   return (
//     <section>
//       <h1 className="text-3xl font-bold tracking-tight">Blog</h1>

//       <div className="mt-8 space-y-6">
//         {posts.map((post) => (
//           <article key={post.slug}>
//             <Link href={`/blog/${post.slug}`} className="group block">
//               <h2 className="text-xl font-semibold group-hover:underline">
//                 {post.metadata.title}
//               </h2>

//               <p className="mt-2 text-sm text-neutral-500">
//                 {new Date(post.metadata.date).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </p>

//               <p className="mt-2 text-neutral-700">
//                 {post.metadata.description}
//               </p>
//             </Link>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
