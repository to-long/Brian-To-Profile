"use client";

import { useTranslations } from "@/lib/i18n/useTranslations";
import { TECH_STACK } from "@/data/portfolio";

export function TechStack() {
  const t = useTranslations("tech");
  return (
    <section id="tech" className="flex flex-col items-center gap-12 py-16">
      <div data-reveal>
        <div className="flex flex-col items-center gap-3 px-6">
          <h2 className="gradient-heading text-center font-headings text-4xl font-bold md:text-5xl">
            {t("heading")}
          </h2>
          <p className="max-w-xl text-center text-[var(--color-foreground-secondary)]">
            {t("subheading")}
          </p>
        </div>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3 md:gap-6">
        {TECH_STACK.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              data-reveal="scale"

              style={{ transitionDelay: `${(i % 3) * 80}ms` } as React.CSSProperties}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] p-7 [transition:transform_280ms_cubic-bezier(0.22,1,0.36,1),box-shadow_280ms_ease-out,border-color_280ms_ease-out] hover:border-[var(--color-accent)]/40 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-2.5">
                <Icon size={20} className="text-[var(--color-accent)]" strokeWidth={1.8} />
                <h3 className="font-headings text-base font-semibold">{t(`titles.${i}`)}</h3>
              </div>
              <p className="whitespace-pre-line text-[13px] leading-relaxed text-[var(--color-foreground-secondary)]">
                {cat.items}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
