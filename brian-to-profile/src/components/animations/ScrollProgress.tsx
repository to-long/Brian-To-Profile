"use client";

import { m, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <m.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}
