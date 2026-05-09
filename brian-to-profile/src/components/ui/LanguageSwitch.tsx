"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { LOCALES, type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "relative flex items-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] p-1",
        className,
      )}
      role="tablist"
      aria-label="Language"
    >
      {LOCALES.map((option) => {
        const active = option.code === locale;
        return (
          <button
            key={option.code}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setLocale(option.code as Locale)}
            className={cn(
              "relative z-10 flex h-7 min-w-[36px] cursor-pointer items-center justify-center rounded-full px-2.5 font-captions text-[11px] font-semibold tracking-wide transition-colors",
              active
                ? "text-[var(--color-surface)]"
                : "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground-primary)]",
            )}
          >
            {active ? (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-[var(--color-foreground-primary)]"
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
            ) : null}
            <span className="relative">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
