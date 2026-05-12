"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { SIDE_PROJECTS, type SideProjectTagColor } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const TAG_STYLES: Record<SideProjectTagColor, string> = {
  purple: "bg-[var(--color-tag-purple)] text-[var(--color-tag-purple-fg)]",
  blue: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  green: "bg-[var(--color-tag-green)] text-[var(--color-tag-green-fg)]",
};

export function SideProjects() {
  const t = useTranslations("sideProjects");
  return (
    <section className="flex flex-col items-center gap-12 py-16">
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

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {SIDE_PROJECTS.map((p, i) => {
          const Wrapper = p.url ? motion.a : motion.article;
          const linkProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={p.title}
              {...linkProps}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] p-7 [transition:box-shadow_280ms_ease-out,border-color_280ms_ease-out] hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-black/10 will-change-transform"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 font-captions text-[10px] font-semibold tracking-wide",
                    TAG_STYLES[p.tagColor],
                  )}
                >
                  {p.tag}
                </span>
                <span className="font-captions text-[11px] text-[var(--color-foreground-secondary)]">
                  {p.year}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <h3 className="font-headings text-lg font-semibold">
                  {t(`items.${i}.title`)}
                </h3>
                {p.url ? (
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-[var(--color-foreground-secondary)] opacity-0 transition-opacity group-hover:opacity-100"
                  />
                ) : null}
              </div>

              <p className="flex-1 text-[13px] leading-relaxed text-[var(--color-foreground-secondary)]">
                {t(`items.${i}.description`)}
              </p>

              <p className="font-captions text-[11px] font-medium tracking-wide text-[var(--color-foreground-secondary)]">
                {p.tech}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
