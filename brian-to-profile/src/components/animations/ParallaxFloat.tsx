"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type ParallaxFloatProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
};

export function ParallaxFloat({ children, offset = 80, className }: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <m.div ref={ref} style={{ y }} className={className}>
      {children}
    </m.div>
  );
}
