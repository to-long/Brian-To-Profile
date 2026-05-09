"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/data/portfolio";
import { useLanguage } from "@/hooks/useLanguage";
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
  const { t } = useLanguage();
  return (
    <section className="flex flex-col items-center gap-12 py-16">
      <Reveal>
        <h2 className="text-center font-headings text-4xl font-semibold md:text-5xl">
          {t.metrics.heading}
        </h2>
      </Reveal>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3 md:gap-6">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.value}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-border-subtle)] p-8 text-center transition-shadow hover:shadow-lg hover:shadow-black/5"
          >
            <span className="font-headings text-5xl font-bold leading-none text-[var(--color-accent)] md:text-6xl">
              <CountValue value={m.value} />
            </span>
            <p className="text-sm leading-relaxed text-[var(--color-foreground-secondary)]">
              {m.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
