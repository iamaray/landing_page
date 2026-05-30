import type { ReactNode } from "react";

type ListProps = {
  children: ReactNode;
};

export function CustomItemList({ children }: ListProps) {
  return <ul className="flex flex-col gap-1">{children}</ul>;
}
