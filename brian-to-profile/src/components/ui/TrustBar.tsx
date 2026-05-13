"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { COMPANIES } from "@/data/portfolio";

export function TrustBar() {
  const t = useTranslations("trust");
  return (
    <section className="flex flex-col items-center gap-6 py-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-captions text-[11px] font-medium tracking-[0.25em] text-[var(--color-foreground-secondary)]"
      >
        {t("label")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="flex flex-col items-center gap-y-5"
      >
        {COMPANIES.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 md:gap-x-16"
          >
            {row.map((c) => (
              <motion.span
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ color: "var(--color-foreground-primary)", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                style={{ fontWeight: c.weight, letterSpacing: `${c.spacing}px` }}
                className="cursor-default font-headings text-base text-[var(--color-foreground-secondary)] transition-colors md:text-lg"
              >
                {c.name}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
