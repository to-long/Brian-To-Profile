"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { LocaleContext } from "@/lib/i18n/LocaleContext";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { Locale } from "@/lib/i18n/translations";

// ── Stable references for useSyncExternalStore ──────────────────
const subscribe = useLanguageStore.subscribe;
const getSnapshot = (): Locale => useLanguageStore.getState().locale;
const getServerSnapshot = (): Locale => "en";

/**
 * Single point of zustand → React bridging for the locale.
 *
 * Every component that calls `useTranslations` reads from this
 * context instead of subscribing to the store individually.
 * This prevents cascading re-renders when zustand persist
 * rehydrates (the `useSyncExternalStore` snapshot comparison
 * short-circuits if the locale hasn't actually changed).
 */
export function IntlProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
