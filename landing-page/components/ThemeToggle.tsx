"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [isReady, setIsReady] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const systemTheme = getSystemTheme();

      setTheme(systemTheme);
      setIsReady(true);
      document.documentElement.dataset.theme = systemTheme;
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (isReady) {
      document.documentElement.dataset.theme = theme;
    }
  }, [isReady, theme]);

  function toggleTheme() {
    const currentTheme = isReady ? theme : getSystemTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    setIsReady(true);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={
        isReady ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"
      }
      aria-pressed={isReady ? isDark : undefined}
      onClick={toggleTheme}
      className="ml-auto inline-flex h-7 w-7 shrink-0 items-center justify-center border border-border bg-surface-muted text-muted hover:border-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring"
    >
      <span className="sr-only">Toggle color theme</span>
      {isDark ? (
        <FaMoon className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <FaSun className="h-3.5 w-3.5" aria-hidden="true" />
      )}
    </button>
  );
}
