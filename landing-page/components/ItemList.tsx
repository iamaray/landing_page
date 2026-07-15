import type { ReactNode } from "react";

type ItemListProps = {
  children: ReactNode;
};

export default function ItemList({ children }: ItemListProps) {
  return <ul className="mt-6 flex flex-col gap-2">{children}</ul>;
}
