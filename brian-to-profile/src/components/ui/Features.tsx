"use client";

import { m } from "motion/react";
import { useTranslations } from "next-intl";
import { FEATURES } from "@/data/portfolio";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/Reveal";

export function Features() {
  const t = useTranslations("features");
  return (
    <section className="flex flex-col items-center gap-10 py-12">
      <Reveal>
        <h2 className="gradient-heading px-6 text-center font-headings text-4xl font-bold leading-tight md:text-5xl">
          {t("heading")}
        </h2>
      </Reveal>

      <StaggerGroup className="grid w-full max-w-5xl grid-cols-2 gap-x-8 gap-y-10 px-6 md:grid-cols-4 md:gap-x-12">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <StaggerItem key={f.title} className="flex flex-col items-center gap-4 text-center">
              <m.div
                whileHover={{ y: -4, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${f.bgGradient[0]} 0%, ${f.bgGradient[1]} 100%)`,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-xl"
              >
                <Icon size={22} strokeWidth={1.8} style={{ color: f.iconColor }} />
              </m.div>
              <h3 className="font-headings text-sm font-bold">{t(`items.${i}.title`)}</h3>
              <p className="font-captions text-[13px] leading-relaxed text-[var(--color-foreground-secondary)] [text-wrap:pretty]">
                {t(`items.${i}.description`)}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
