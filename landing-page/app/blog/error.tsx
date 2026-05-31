"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <h1 className="text-2xl font-bold">Something went wrong.</h1>
      <p className="mt-2 text-neutral-600">The blog failed to load.</p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="mt-4 rounded-md border px-4 py-2"
      >
        Try again
      </button>
    </section>
  );
}
