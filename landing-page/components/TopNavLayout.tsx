"use client";

import TopNav from "./TopNavItems";

export default function TopNavBar() {
  return (
    <nav className="flex gap-6 text-sm bg-white px-6 py-1 border-b border-neutral-300">
      <div>
        <p className="text-black">ARYA NAHRI</p>
      </div>
      <TopNav />
    </nav>
  );
}
