import { LazyMotion, domAnimation, m } from "motion/react";
import { LOCALES, type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

const PADDING = 4;
const BUTTON_W = 32;

interface Props {
  locale: Locale;
  className?: string;
}

export function LanguageSwitch({ locale, className }: Props) {
  const activeIndex = LOCALES.findIndex((l) => l.code === locale);

  const handleSwitch = (code: string) => {
    // Store preference in localStorage for the redirect script
    try {
      localStorage.setItem(
        "brian-to-locale",
        JSON.stringify({ state: { locale: code }, version: 0 }),
      );
    } catch {}
    // Navigate to the locale route
    const target = code === "en" ? "/" : `/${code}/`;
    window.location.href = target;
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        class={cn(
          "relative flex items-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)]",
          className,
        )}
        role="tablist"
        aria-label="Language"
        style={{ padding: PADDING }}
      >
        <m.span
          aria-hidden
          class="absolute rounded-full bg-[var(--color-foreground-primary)] pointer-events-none"
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
              onClick={() => handleSwitch(option.code)}
              style={{ width: BUTTON_W }}
              class={cn(
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
    </LazyMotion>
  );
}
