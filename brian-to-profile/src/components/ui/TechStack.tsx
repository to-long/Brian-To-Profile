"use client";

import { m } from "motion/react";
import { useTranslations } from "@/lib/i18n/useTranslations";
import { TECH_STACK } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";

export function TechStack() {
  const t = useTranslations("tech");
  return (
    <section id="tech" className="flex flex-col items-center gap-12 py-16">
      <Reveal>
        <div className="flex flex-col items-center gap-3 px-6">
          <h2 className="gradient-heading text-center font-headings text-4xl font-bold md:text-5xl">
            {t("heading")}
          </h2>
          <p className="max-w-xl text-center text-[var(--color-foreground-secondary)]">
            {t("subheading")}
          </p>
        </div>
      </Reveal>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3 md:gap-6">
        {TECH_STACK.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <m.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] p-7 [transition:box-shadow_280ms_ease-out,border-color_280ms_ease-out] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-black/10 will-change-transform"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-2.5">
                <Icon size={20} className="text-[var(--color-accent)]" strokeWidth={1.8} />
                <h3 className="font-headings text-base font-semibold">{t(`titles.${i}`)}</h3>
              </div>
              <p className="whitespace-pre-line text-[13px] leading-relaxed text-[var(--color-foreground-secondary)]">
                {cat.items}
              </p>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
