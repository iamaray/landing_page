"use client";

import ThemeToggle from "./ThemeToggle";
import TopNav from "./TopNavItems";

export default function TopNavBar() {
  return (
    <nav className="flex items-center gap-5 border-b border-border bg-surface px-5 py-2 font-mono text-xs sm:px-6">
      <div>
        <p className="font-semibold uppercase text-foreground">ARYA NAHRI</p>
      </div>
      <TopNav />
      <ThemeToggle />
    </nav>
  );
}
