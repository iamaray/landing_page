import type { ReactNode } from "react";

type ItemListProps = {
  children: ReactNode;
};

export default function ItemList({ children }: ItemListProps) {
  return <ul className="mt-8 flex flex-col gap-3">{children}</ul>;
}
