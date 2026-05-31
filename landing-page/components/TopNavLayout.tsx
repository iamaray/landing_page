"use client";

import ThemeToggle from "./ThemeToggle";
import TopNav from "./TopNavItems";

export default function TopNavBar() {
  return (
    <nav className="flex items-center gap-6 border-b border-border bg-surface px-6 py-3 text-sm">
      <div>
        <p className="font-semibold tracking-wide text-foreground">
          ARYA NAHRI
        </p>
      </div>
      <TopNav />
      <ThemeToggle />
    </nav>
  );
}
