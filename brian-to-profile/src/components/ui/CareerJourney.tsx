"use client";

import { motion } from "framer-motion";
import { CAREER } from "@/data/portfolio";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal } from "@/components/animations/Reveal";

export function CareerJourney() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="flex flex-col items-center gap-12 py-16">
      <Reveal>
        <h2 className="text-center font-headings text-4xl font-semibold md:text-5xl">
          {t.career.heading}
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
            whileHover={{ borderColor: "var(--color-accent)" }}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border-subtle)] p-6 transition-colors md:flex-row md:gap-8 md:p-7"
          >
            <div className="flex shrink-0 flex-col gap-1 md:w-40">
              <span className="font-captions text-xs font-semibold tracking-wide text-[var(--color-accent)]">
                {entry.period}
              </span>
              <span className="font-captions text-[11px] text-[var(--color-foreground-secondary)]">
                {entry.duration}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-headings text-xl font-semibold">{entry.company}</h3>
              <p className="text-sm font-medium text-[var(--color-foreground-secondary)]">
                {entry.role}
              </p>
              <p className="text-[13px] leading-relaxed text-[var(--color-foreground-secondary)]">
                {entry.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
