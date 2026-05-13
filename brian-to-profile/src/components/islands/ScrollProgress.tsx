import { LazyMotion, domAnimation, m, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        class="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] origin-left z-[60]"
        style={{ scaleX }}
      />
    </LazyMotion>
  );
}
