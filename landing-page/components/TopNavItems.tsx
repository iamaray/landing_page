"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/blog", label: "BLOG" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      {navItems.map((item) => {
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "text-foreground underline underline-offset-4"
                : "text-muted hover:text-foreground hover:underline hover:underline-offset-4"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
