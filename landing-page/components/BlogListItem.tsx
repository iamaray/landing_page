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
        className="flex w-full flex-col gap-3 rounded-md p-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-focus-ring/40"
      >
        <div>
          <p className="text-card-title font-semibold text-foreground group-hover:text-accent">
            {postTitle}
          </p>

          <p className="mt-1 text-sm text-muted">{formatPostDate(postDate)}</p>
        </div>

        <p className="leading-7 text-muted">{postSnippet}</p>
      </Link>
    </LinkCard>
  );
}
