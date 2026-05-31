import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
};

export default function PageSection({ children }: PageSectionProps) {
  return <section className="flex flex-col">{children}</section>;
}
