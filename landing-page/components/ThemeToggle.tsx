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
      className="relative ml-auto inline-flex h-8 w-16 shrink-0 items-center rounded-full border border-border bg-surface-muted p-1 text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring/40"
    >
      <span className="sr-only">Toggle color theme</span>
      <FaSun
        className="absolute left-2 h-3.5 w-3.5"
        aria-hidden="true"
      />
      <FaMoon
        className="absolute right-2 h-3.5 w-3.5"
        aria-hidden="true"
      />
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-surface text-accent shadow-sm transition-transform duration-200 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
        aria-hidden="true"
      >
        {isDark ? <FaMoon className="h-3 w-3" /> : <FaSun className="h-3 w-3" />}
      </span>
    </button>
  );
}
