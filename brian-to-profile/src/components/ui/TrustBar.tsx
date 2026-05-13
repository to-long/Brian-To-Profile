"use client";

import { useTranslations } from "@/lib/i18n/useTranslations";
import { COMPANIES } from "@/data/portfolio";

export function TrustBar() {
  const t = useTranslations("trust");
  return (
    <section className="flex flex-col items-center gap-6 py-10">
      <p
        data-reveal
        className="font-captions text-[11px] font-medium tracking-[0.25em] text-[var(--color-foreground-secondary)]"
      >
        {t("label")}
      </p>
      <div data-reveal className="flex flex-col items-center gap-y-5">
        {COMPANIES.map((row, rowIndex) => (
          <div
            key={rowIndex}
            data-stagger
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 md:gap-x-16"
          >
            {row.map((c, i) => (
              <span
                key={c.name}
                style={
                  {
                    fontWeight: c.weight,
                    letterSpacing: `${c.spacing}px`,
                    "--stagger-i": i,
                  } as React.CSSProperties
                }
                className="cursor-default font-headings text-base text-[var(--color-foreground-secondary)] transition-colors hover:text-[var(--color-foreground-primary)] hover:scale-105 md:text-lg"
              >
                {c.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
