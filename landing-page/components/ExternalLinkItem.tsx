import type { IconType } from "react-icons";
import LinkCard from "./LinkCard";

type ExternalLinkItemProps = {
  href: string;
  siteName: string;
  Icon: IconType;
};

export default function ExternalLinkItem({
  href,
  siteName,
  Icon,
}: ExternalLinkItemProps) {
  return (
    <LinkCard>
      <a
        href={href}
        className="flex w-full items-center gap-4 rounded-md p-4 text-foreground outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-focus-ring/40"
      >
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />

        <span className="text-sm font-medium">{siteName}</span>
      </a>
    </LinkCard>
  );
}
