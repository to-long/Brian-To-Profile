"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yAvatar = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex flex-col items-center px-6 pt-32 pb-12 md:pt-40 md:pb-16"
    >
      <motion.div
        className="absolute inset-x-0 top-12 -z-10 mx-auto h-[420px] max-w-3xl"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.16),transparent_60%)] blur-2xl" />
      </motion.div>

      <motion.div
        style={{ y: yAvatar, opacity }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-6 h-[120px] w-[120px] md:h-[144px] md:w-[144px]"
      >
        <div className="absolute inset-0 rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]" />
        <div className="absolute inset-2 overflow-hidden rounded-full">
          <Image
            src="/avatar.png"
            alt="Brian To"
            fill
            sizes="144px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-3 font-captions text-xs font-medium tracking-[0.2em] text-[var(--color-foreground-secondary)] md:text-[13px]"
      >
        {t.hero.caption}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 text-center font-headings text-5xl font-semibold leading-[1.05] md:text-7xl lg:text-8xl"
      >
        Brian To
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mb-8 max-w-[600px] whitespace-pre-line px-4 text-center text-base leading-relaxed text-[var(--color-foreground-secondary)] md:text-lg"
      >
        {t.hero.tagline}
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-shadow hover:shadow-[var(--color-accent)]/40"
      >
        {t.hero.cta}
        <motion.span
          className="inline-block"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
