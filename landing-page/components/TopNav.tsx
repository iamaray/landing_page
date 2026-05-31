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
    // <header className="flex border-b border-neutral-500 bg-white px-6">
    <nav className="flex gap-6 text-sm bg-white px-6 py-1 border-b border-neutral-300">
      {navItems.map((item) => {
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "underline underline-offset-2 text-black"
                : "text-black"
            }
          >
            {item.label}
          </Link>
        );
      })}

      {/* <Link href="/" className="hover:underline text-black">
          HOME
        </Link>

        <Link href="/blog" className="hover:underline text-black">
          BLOG
        </Link> */}
    </nav>
    // </header>
  );
}
