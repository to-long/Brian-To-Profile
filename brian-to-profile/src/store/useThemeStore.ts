/**
 * Theme store — light/dark, persisted to localStorage.
 *
 * The pre-hydration script in `app/layout.tsx` reads localStorage and
 * applies the `dark` class to `<html>` BEFORE React mounts, so there is no
 * flash of wrong theme. This store hydrates the React state from the
 * same key after mount.
 *
 * Toggling uses the View Transitions API for a circular reveal animation
 * from the click coordinates.
 */

import { createStore } from "@/lib/zustand/createStore";

export type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  hydrated: boolean;
}

const STORAGE_NAME = "brian-to-theme";

const initialState: ThemeState = {
  theme: "light",
  hydrated: false,
};

const ACTIONS = {
  set: "theme/set",
  toggle: "theme/toggle",
  hydrate: "theme/hydrate",
} as const;

export const useThemeStore = createStore<ThemeState>(
  () => initialState,
  STORAGE_NAME,
  { persistKeys: ["theme"] },
);

// ── Side effects ───────────────────────────────────────────────

function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function startViewTransition(run: () => void, origin?: { x: number; y: number }): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    run();
    return;
  }
  if (origin) {
    document.documentElement.style.setProperty("--theme-x", `${origin.x}px`);
    document.documentElement.style.setProperty("--theme-y", `${origin.y}px`);
  }
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => unknown;
  };
  if (doc.startViewTransition && !reduceMotion) {
    doc.startViewTransition(run);
  } else {
    run();
  }
}

// ── Actions ─────────────────────────────────────────────────────

export function setTheme(theme: Theme, origin?: { x: number; y: number }): void {
  startViewTransition(() => {
    applyTheme(theme);
    useThemeStore.setState({ theme }, false, ACTIONS.set);
  }, origin);
}

export function toggleTheme(origin?: { x: number; y: number }): void {
  const next: Theme = useThemeStore.getState().theme === "dark" ? "light" : "dark";
  setTheme(next, origin);
}

/** Mark store hydrated and re-sync DOM class with persisted state. */
export function markThemeHydrated(): void {
  if (useThemeStore.getState().hydrated) return;
  applyTheme(useThemeStore.getState().theme);
  useThemeStore.setState({ hydrated: true }, false, ACTIONS.hydrate);
}

// ── Selectors ───────────────────────────────────────────────────

export const selectTheme = (s: ThemeState): Theme => s.theme;
export const selectThemeHydrated = (s: ThemeState): boolean => s.hydrated;
