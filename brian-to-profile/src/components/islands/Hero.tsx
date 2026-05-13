import { LazyMotion, domAnimation, m, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-preact";
import { useRef } from "preact/hooks";
import { getTranslations } from "@/lib/i18n/getTranslations";
import type { Locale } from "@/lib/i18n/translations";

interface Props {
  locale: Locale;
}

export function Hero({ locale }: Props) {
  const t = getTranslations("hero", locale);
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <LazyMotion features={domAnimation} strict>
      <section
        ref={ref}
        id="home"
        class="relative flex flex-col items-center px-6 pt-32 pb-12 md:pt-40 md:pb-16"
      >
        <m.div
          class="absolute inset-x-0 top-12 -z-10 mx-auto h-[420px] max-w-3xl"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div class="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.16),transparent_60%)] blur-2xl" />
        </m.div>

        <m.div
          style={{ y: yAvatar, opacity }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          class="relative mb-6 h-[120px] w-[120px] md:h-[144px] md:w-[144px]"
        >
          <div class="absolute inset-0 rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]" />
          <div class="absolute inset-2 overflow-hidden rounded-full">
            <img
              src="/avatar.png"
              alt="Brian To"
              width={144}
              height={144}
              loading="eager"
              decoding="async"
              class="h-full w-full object-cover"
            />
          </div>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          class="mb-3 text-center font-captions text-xs font-medium tracking-[0.2em] text-[var(--color-foreground-secondary)] md:text-[13px]"
        >
          {t("caption")}
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          class="mb-6 text-center font-headings text-5xl font-semibold leading-[1.05] md:text-7xl lg:text-8xl"
        >
          Brian To
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          class="mb-8 max-w-[600px] whitespace-pre-line px-4 text-center text-base leading-relaxed text-[var(--color-foreground-secondary)] [text-wrap:balance] md:text-lg"
        >
          {t("tagline")}
        </m.p>

        <m.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.9, y: 0, transition: { duration: 0.7, delay: 0.6 } }}
          whileHover={{
            scale: 1.04,
            opacity: 1,
            transition: { type: "spring", stiffness: 500, damping: 28 },
          }}
          whileTap={{ scale: 0.97, transition: { duration: 0.08 } }}
          style={{
            backgroundImage:
              "linear-gradient(135deg, #22D3EE 0%, #0EA5E9 25%, #3B82F6 50%, #0066FF 75%, #4F46E5 100%)",
          }}
          class="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4F46E5]/30 [transition:box-shadow_180ms_ease-out] hover:shadow-xl hover:shadow-[#4F46E5]/45"
        >
          {t("cta")}
          <m.span
            class="inline-block"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ArrowRight size={16} />
          </m.span>
        </m.a>
      </section>
    </LazyMotion>
  );
}
