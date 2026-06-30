"use client";

import { LazyMotion, domAnimation } from "motion/react";
import { useEffect, type ReactNode } from "react";

/**
 * Wraps the app with LazyMotion + domAnimation feature bundle.
 *
 * This loads only the animation features we actually use (animate, viewport,
 * hover, tap, focus) and excludes drag, pan, and layout-projection code that
 * the site never uses — saving ~40 KB parsed JS from the client bundle.
 *
 * All child components must use the `m` component (not `motion`) so features
 * are resolved from this provider instead of being bundled inline.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  // Reveal-on-scroll + hero avatar parallax. Lives in a useEffect (post-hydration)
  // so DOM mutations don't trigger React 19 hydration mismatch warnings.
  useEffect(() => {
    let io: IntersectionObserver | null = null;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.setAttribute("data-revealed", "");
              io!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.05 },
      );
      targets.forEach((el) => io!.observe(el));
    } else {
      targets.forEach((el) => el.setAttribute("data-revealed", ""));
    }

    const section = document.getElementById("home");
    const avatar = section?.querySelector<HTMLElement>("[data-parallax]");
    const reduceMotion = matchMedia("(prefers-reduced-motion:reduce)").matches;
    let rAF = 0;
    let onScroll: (() => void) | null = null;
    if (section && avatar && !reduceMotion) {
      onScroll = () => {
        if (rAF) return;
        rAF = requestAnimationFrame(() => {
          rAF = 0;
          const r = section.getBoundingClientRect();
          const p = Math.max(0, Math.min(1, -r.top / r.height));
          avatar.style.transform = `translateY(${p * -60}px)`;
          avatar.style.opacity = String(1 - p * 0.6);
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      io?.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
      if (rAF) cancelAnimationFrame(rAF);
    };
  }, []);

  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>;
}
