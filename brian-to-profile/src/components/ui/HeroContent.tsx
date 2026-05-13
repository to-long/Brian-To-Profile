"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n/useTranslations";

/**
 * Client island inside the server-rendered Hero.
 * Only this subtree ships JS — for locale-aware text and the CTA button.
 */
export function HeroContent() {
  const t = useTranslations("hero");

  return (
    <>
      <p
        data-reveal
        style={{ transitionDelay: "150ms" }}
        className="mb-3 text-center font-captions text-xs font-medium tracking-[0.2em] text-[var(--color-foreground-secondary)] md:text-[13px]"
      >
        {t("caption")}
      </p>

      <h1
        data-reveal
        style={{ transitionDelay: "200ms" }}
        className="mb-6 text-center font-headings text-5xl font-semibold leading-[1.05] md:text-7xl lg:text-8xl"
      >
        Brian To
      </h1>

      <p
        data-reveal
        style={{ transitionDelay: "300ms" }}
        className="mb-8 max-w-[600px] whitespace-pre-line px-4 text-center text-base leading-relaxed text-[var(--color-foreground-secondary)] [text-wrap:balance] md:text-lg"
      >
        {t("tagline")}
      </p>

      <a
        href="#contact"
        data-reveal
        style={{
          transitionDelay: "400ms",
          backgroundImage:
            "linear-gradient(135deg, #22D3EE 0%, #0EA5E9 25%, #3B82F6 50%, #0066FF 75%, #4F46E5 100%)",
        }}
        className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4F46E5]/30 transition-all duration-200 hover:scale-[1.04] hover:shadow-xl hover:shadow-[#4F46E5]/45 active:scale-[0.97]"
      >
        {t("cta")}
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </a>
    </>
  );
}
