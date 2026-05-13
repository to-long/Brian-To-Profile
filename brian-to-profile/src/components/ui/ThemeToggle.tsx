"use client";

import { m } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { MouseEvent, useEffect } from "react";
import {
  markThemeHydrated,
  selectTheme,
  toggleTheme,
  useThemeStore,
} from "@/store/useThemeStore";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useThemeStore(selectTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    markThemeHydrated();
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggleTheme({ x: e.clientX, y: e.clientY });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle theme"
      className={cn(
        "relative flex cursor-pointer items-center gap-0 rounded-full border border-[var(--color-border-subtle)] p-1",
        "bg-[var(--color-surface-elevated)] transition-colors duration-300",
        className,
      )}
    >
      <m.span
        aria-hidden
        className="absolute top-1 left-1 h-7 w-7 rounded-full bg-[var(--color-foreground-primary)] pointer-events-none"
        initial={false}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 32, mass: 0.6 }}
      />
      <span
        className={cn(
          "relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors",
          !isDark ? "text-[var(--color-surface)]" : "text-[var(--color-foreground-secondary)]",
        )}
      >
        <Sun size={14} strokeWidth={2.2} />
      </span>
      <span
        className={cn(
          "relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-colors",
          isDark ? "text-[var(--color-surface)]" : "text-[var(--color-foreground-secondary)]",
        )}
      >
        <Moon size={14} strokeWidth={2.2} />
      </span>
    </button>
  );
}
