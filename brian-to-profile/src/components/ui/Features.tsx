"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FEATURES } from "@/data/portfolio";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/Reveal";

export function Features() {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col items-center gap-10 py-12">
      <Reveal>
        <h2 className="text-center font-headings text-4xl font-semibold leading-tight md:text-5xl">
          {t.features.heading}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25"
        >
          {t.features.cta}
          <ArrowRight size={14} />
        </motion.a>
      </Reveal>

      <StaggerGroup className="grid w-full max-w-5xl grid-cols-2 gap-x-8 gap-y-10 px-6 md:grid-cols-4 md:gap-x-12">
        {FEATURES.map((f) => {
          const Icon = f.icon;
          return (
            <StaggerItem key={f.title} className="flex flex-col items-center gap-4 text-center">
              <motion.div
                whileHover={{ y: -4, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-foreground-primary)_5%,transparent)]"
              >
                <Icon size={22} strokeWidth={1.8} />
              </motion.div>
              <h3 className="font-headings text-sm font-semibold">{f.title}</h3>
              <p className="font-captions text-xs leading-relaxed text-[var(--color-foreground-secondary)]">
                {f.description}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
