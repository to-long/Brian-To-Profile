"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { MouseEvent } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggleTheme({ x: e.clientX, y: e.clientY });
  };

  const isDark = mounted && theme === "dark";

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
      <motion.span
        layout
        layoutId="theme-toggle-pill"
        className="absolute inset-y-1 w-7 rounded-full bg-[var(--color-foreground-primary)]"
        style={{ left: isDark ? "calc(100% - 1.875rem)" : "0.25rem" }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
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
