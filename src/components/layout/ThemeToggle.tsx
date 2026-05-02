"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const onToggle = () => {
    const next = isDark ? "light" : "dark";
    // Add a global transition flag for the duration of the swap so
    // every painted color (including ones not in the :where() list)
    // animates buttery smooth.
    const root = document.documentElement;
    root.classList.add("theme-changing");
    setTheme(next);
    window.setTimeout(() => {
      root.classList.remove("theme-changing");
    }, 380);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
      className={cn(
        "relative inline-flex items-center justify-center w-10 h-10 rounded-md border border-border-subtle bg-bg-secondary/60 text-text-primary hover:border-border-accent hover:text-accent-green transition-colors",
        className
      )}
    >
      <span className="sr-only">Toggle theme</span>
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex"
          >
            {isDark ? (
              <MoonIcon className="w-4 h-4" />
            ) : (
              <SunIcon className="w-4 h-4" />
            )}
          </motion.span>
        ) : (
          <span className="w-4 h-4" />
        )}
      </AnimatePresence>
    </button>
  );
}
