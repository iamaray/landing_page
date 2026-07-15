"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <h1 className="text-section-title font-semibold text-foreground">
        Something went wrong.
      </h1>
      <p className="mt-2 text-muted">The blog failed to load.</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-4 border border-border bg-surface px-3 py-2 font-mono text-xs text-foreground hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring"
      >
        Try again
      </button>
    </section>
  );
}
