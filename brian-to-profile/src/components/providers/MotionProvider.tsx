"use client";

import { LazyMotion, domAnimation } from "motion/react";
import type { ReactNode } from "react";

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
  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>;
}
