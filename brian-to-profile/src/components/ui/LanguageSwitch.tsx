"use client";

import { m } from "motion/react";
import { selectLocale, setLocale, useLanguageStore } from "@/store/useLanguageStore";
import { LOCALES, type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

const PADDING = 4;
const BUTTON_W = 32;

export function LanguageSwitch({ className }: { className?: string }) {
  const locale = useLanguageStore(selectLocale);
  const activeIndex = LOCALES.findIndex((l) => l.code === locale);

  return (
    <div
      className={cn(
        "relative flex items-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)]",
        className,
      )}
      role="tablist"
      aria-label="Language"
      style={{ padding: PADDING }}
    >
      <m.span
        aria-hidden
        className="absolute rounded-full bg-[var(--color-foreground-primary)] pointer-events-none"
        initial={false}
        animate={{ x: activeIndex * BUTTON_W }}
        style={{
          left: PADDING,
          top: PADDING,
          bottom: PADDING,
          width: BUTTON_W,
        }}
        transition={{ type: "spring", stiffness: 360, damping: 32, mass: 0.6 }}
      />
      {LOCALES.map((option) => {
        const active = option.code === locale;
        return (
          <button
            key={option.code}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setLocale(option.code as Locale)}
            style={{ width: BUTTON_W }}
            className={cn(
              "relative z-10 flex h-7 shrink-0 cursor-pointer items-center justify-center rounded-full font-captions text-[11px] font-semibold tracking-wide transition-colors",
              active
                ? "text-[var(--color-surface)]"
                : "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground-primary)]",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
