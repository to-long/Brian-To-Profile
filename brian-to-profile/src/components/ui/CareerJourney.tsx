"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CAREER } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";

export function CareerJourney() {
  const t = useTranslations("career");
  return (
    <section id="experience" className="flex flex-col items-center gap-12 py-16">
      <Reveal>
        <h2 className="gradient-heading px-6 text-center font-headings text-4xl font-bold md:text-5xl">
          {t("heading")}
        </h2>
      </Reveal>

      <div className="flex w-full max-w-5xl flex-col gap-4 px-6">
        {CAREER.map((entry, i) => (
          <motion.article
            key={entry.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] p-6 [transition:box-shadow_280ms_ease-out,border-color_280ms_ease-out] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-black/10 will-change-transform md:flex-row md:gap-8 md:p-7"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex shrink-0 flex-col gap-1 md:w-40">
              <span className="font-captions text-xs font-semibold tracking-wide text-[var(--color-accent)]">
                {entry.period}
              </span>
              <span className="font-captions text-[11px] text-[var(--color-foreground-secondary)]">
                {t(`durations.${i}`)}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-headings text-xl font-semibold">{entry.company}</h3>
              <p className="text-sm font-medium text-[var(--color-foreground-secondary)]">
                {t(`entries.${i}.role`)}
              </p>
              <p className="text-[13px] leading-relaxed text-[var(--color-foreground-secondary)]">
                {t(`entries.${i}.description`)}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
