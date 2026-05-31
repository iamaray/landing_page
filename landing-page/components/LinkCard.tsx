import type { ReactNode } from "react";

type LinkCardProps = {
  children: ReactNode;
};

export default function LinkCard({ children }: LinkCardProps) {
  return (
    <li className="w-full">
      <div className="group rounded-md border border-border bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-sm focus-within:border-accent focus-within:ring-2 focus-within:ring-focus-ring/30">
        {children}
      </div>
    </li>
  );
}
