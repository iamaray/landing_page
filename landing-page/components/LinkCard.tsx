import type { ReactNode } from "react";

type LinkCardProps = {
  children: ReactNode;
};

export default function LinkCard({ children }: LinkCardProps) {
  return (
    <li className="w-full">
      <div className="group border border-border bg-surface hover:border-accent focus-within:border-accent focus-within:ring-1 focus-within:ring-focus-ring">
        {children}
      </div>
    </li>
  );
}
