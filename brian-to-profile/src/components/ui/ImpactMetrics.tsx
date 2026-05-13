"use client";

import { m, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";

function CountValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numeric = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(numeric * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric]);

  if (Number.isNaN(numeric)) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function ImpactMetrics() {
  const t = useTranslations("metrics");
  return (
    <section className="flex flex-col items-center gap-12 py-16">
      <Reveal>
        <h2 className="gradient-heading px-6 text-center font-headings text-4xl font-bold md:text-5xl">
          {t("heading")}
        </h2>
      </Reveal>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3 md:gap-6">
        {METRICS.map((metric, i) => (
          <m.div
            key={metric.value}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
            className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] p-8 text-center [transition:box-shadow_280ms_ease-out,border-color_280ms_ease-out] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-black/10 will-change-transform"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="font-headings text-5xl font-bold leading-none text-[var(--color-accent)] md:text-6xl">
              <CountValue value={metric.value} />
            </span>
            <p className="text-sm leading-relaxed text-[var(--color-foreground-secondary)]">
              {t(`items.${i}`)}
            </p>
          </m.div>
        ))}
      </div>
    </section>
  );
}
