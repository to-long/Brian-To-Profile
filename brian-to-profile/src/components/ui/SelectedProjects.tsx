"use client";

import { useTranslations } from "@/lib/i18n/useTranslations";
import { PROJECTS, type ProjectTagColor } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const TAG_STYLES: Record<ProjectTagColor, string> = {
  blue: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  orange: "bg-[var(--color-tag-orange)] text-[var(--color-tag-orange-fg)]",
  green: "bg-[var(--color-tag-green)] text-[var(--color-tag-green-fg)]",
};

export function SelectedProjects() {
  const t = useTranslations("projects");
  return (
    <section id="projects" className="flex flex-col items-center gap-12 py-16">
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
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            data-reveal
            data-hover-lift
            style={{ transitionDelay: `${(i % 3) * 100}ms` } as React.CSSProperties}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] p-7 [transition:transform_280ms_cubic-bezier(0.22,1,0.36,1),box-shadow_280ms_ease-out,border-color_280ms_ease-out] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-black/10"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 font-captions text-[10px] font-semibold tracking-wide",
                  TAG_STYLES[p.tagColor],
                )}
              >
                {p.company}
              </span>
              <span className="font-captions text-[11px] text-[var(--color-foreground-secondary)]">
                {p.year}
              </span>
            </div>

            <h3 className="font-headings text-lg font-semibold">{t(`items.${i}.title`)}</h3>

            <p className="flex-1 text-[13px] leading-relaxed text-[var(--color-foreground-secondary)]">
              {t(`items.${i}.description`)}
            </p>

            <p className="font-captions text-[11px] font-medium tracking-wide text-[var(--color-foreground-secondary)]">
              {p.tech}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
