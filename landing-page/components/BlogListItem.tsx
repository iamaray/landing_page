import Link from "next/link";
import { formatPostDate } from "@/lib/blog";
import LinkCard from "./LinkCard";

type BlogListItemProps = {
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
}: BlogListItemProps) {
  return (
    <LinkCard>
      <Link
        href={postLink}
        className="flex w-full flex-col gap-2 p-3 outline-none focus-visible:ring-1 focus-visible:ring-focus-ring"
      >
        <div>
          <p className="text-card-title font-semibold text-foreground group-hover:text-accent group-hover:underline">
            {postTitle}
          </p>

          <p className="mt-1 font-mono text-xs text-muted">
            {formatPostDate(postDate)}
          </p>
        </div>

        <p className="leading-7 text-muted">{postSnippet}</p>
      </Link>
    </LinkCard>
  );
}
