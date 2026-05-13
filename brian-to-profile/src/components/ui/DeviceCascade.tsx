"use client";

import { m, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function DeviceCascade() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLaptop = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotPhone = useTransform(scrollYProgress, [0, 1], [-9, -3]);

  return (
    <section ref={ref} className="relative mx-auto hidden h-[520px] w-full max-w-5xl overflow-hidden px-6 sm:block md:h-[640px]">
      <m.div
        style={{ y: yLaptop }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-12 -translate-x-1/2 w-[88%] max-w-[760px] aspect-[760/480]"
      >
        <div className="relative h-full w-full rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] p-3 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.08)]">
          <div className="flex h-full w-full overflow-hidden rounded-lg border border-[var(--color-border-subtle)]">
            <div className="flex w-[180px] flex-col gap-1.5 border-r border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-foreground-primary)_4%,transparent)] p-4">
              <div className="mb-3 flex items-center gap-2 px-1">
                <span className="block h-[18px] w-[18px] rounded-full bg-[var(--color-accent)]" />
                <span className="font-headings text-[13px] font-semibold">MF Suite</span>
              </div>
              {["Dashboard", "Projects", "Analytics", "Reports", "Team", "Settings"].map(
                (label, i) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 rounded px-2.5 py-2 text-[11px] ${
                      i === 0
                        ? "bg-[var(--color-surface-elevated)] font-medium"
                        : "text-[var(--color-foreground-secondary)]"
                    }`}
                  >
                    <span
                      className={`block h-2.5 w-2.5 rounded-sm ${
                        i === 0 ? "bg-[var(--color-accent)]" : "bg-[var(--color-border-subtle)]"
                      }`}
                    />
                    {label}
                  </div>
                ),
              )}
            </div>
            <div className="flex flex-1 flex-col gap-5 p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h4 className="font-headings text-lg font-semibold">Platform Overview</h4>
                  <p className="text-[11px] text-[var(--color-foreground-secondary)]">
                    Performance metrics this month
                  </p>
                </div>
                <button className="rounded bg-[var(--color-accent)] px-3 py-1.5 text-[10px] font-medium text-white">
                  Export
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { l: "Visitors", v: "24,581", t: "+12.4%" },
                  { l: "Conversions", v: "1,294", t: "+4.8%" },
                  { l: "Revenue", v: "$48.2k", t: "+8.1%" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="flex flex-col gap-1.5 rounded border border-[var(--color-border-subtle)] p-3.5"
                  >
                    <span className="font-captions text-[10px] text-[var(--color-foreground-secondary)]">
                      {s.l}
                    </span>
                    <span className="font-headings text-xl font-bold">{s.v}</span>
                    <span className="text-[9px] text-[var(--color-accent)]">{s.t} vs last month</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col gap-2.5 rounded border border-[var(--color-border-subtle)] p-3.5">
                <div className="flex items-center justify-between">
                  <h5 className="font-headings text-[11px] font-semibold">Weekly traffic</h5>
                  <div className="flex items-center gap-1.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-[9px] text-[var(--color-foreground-secondary)]">Visitors</span>
                  </div>
                </div>
                <div className="flex flex-1 items-end gap-2.5 px-1 pb-2">
                  {[48, 72, 60, 96, 80, 54, 68].map((h, i) => (
                    <m.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                      style={{ originY: 1 }}
                      className={`flex-1 rounded ${
                        i === 3 ? "bg-[var(--color-accent)]" : "bg-[var(--color-accent-soft)]"
                      }`}
                      data-h={h}
                    >
                      <div style={{ height: `${h}px` }} />
                    </m.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>

      <m.div
        style={{ y: yPhone, rotate: rotPhone }}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[8%] top-32 w-[260px] aspect-[320/560] md:right-[14%] md:w-[280px]"
      >
        <div className="relative h-full w-full rounded-[28px] bg-[var(--color-surface-elevated)] p-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.12)]">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-[var(--color-border-subtle)]">
            <div className="flex items-center justify-between px-4 pt-2.5 pb-2">
              <span className="font-headings text-[11px] font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <span className="block h-2 w-3 rounded-sm bg-[var(--color-foreground-primary)]" />
                <span className="block h-2 w-3 rounded-sm bg-[var(--color-foreground-primary)]" />
                <span className="block h-2 w-4 rounded-sm bg-[var(--color-foreground-primary)]" />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-2">
              <div className="flex items-center gap-3 rounded bg-[color-mix(in_srgb,var(--color-foreground-primary)_4%,transparent)] p-3">
                <span className="block h-12 w-12 rounded-full bg-[var(--color-accent)]" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-headings text-[13px] font-semibold">Brian To</span>
                  <span className="text-[10px] text-[var(--color-foreground-secondary)]">
                    Engineer · Hanoi
                  </span>
                </div>
              </div>
              <span className="font-captions text-[11px] font-semibold text-[var(--color-foreground-secondary)]">
                Messages
              </span>
              <ul className="flex flex-col gap-3">
                {[
                  { c: "#FFD9B2", n: "Sarah Chen", m: "Loved the prototype ✨", t: "2m" },
                  { c: "#C9D6F0", n: "Marcus Lee", m: "Sending revisions later today", t: "1h" },
                  { c: "#A1E5A1", n: "Priya Patel", m: "Quick sync at 3pm?", t: "3h" },
                  { c: "#FFBFB2", n: "Daniel Cruz", m: "Let's ship it 🚀", t: "yest" },
                ].map((it) => (
                  <li key={it.n} className="flex items-center gap-2.5">
                    <span className="block h-[34px] w-[34px] shrink-0 rounded-full" style={{ backgroundColor: it.c }} />
                    <div className="flex flex-1 flex-col">
                      <span className="font-headings text-xs font-semibold">{it.n}</span>
                      <span className="text-[10px] text-[var(--color-foreground-secondary)]">{it.m}</span>
                    </div>
                    <span className="text-[9px] text-[var(--color-foreground-secondary)]">{it.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
}
