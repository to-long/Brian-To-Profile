/**
 * Language store — locale + translations, persisted to localStorage.
 *
 * The translation table is static (imported), so we don't store it.
 * Components read the current locale from the store and look up the
 * translation slice via `useTranslations()` selector.
 */

import { createStore } from "@/lib/zustand/createStore";
import type { Locale } from "@/lib/i18n/translations";

interface LanguageState {
  locale: Locale;
}

const STORAGE_NAME = "brian-to-locale";

const initialState: LanguageState = {
  locale: "en",
};

const ACTIONS = {
  set: "language/set",
} as const;

export const useLanguageStore = createStore<LanguageState>(
  () => initialState,
  STORAGE_NAME,
  { persistKeys: ["locale"] },
);

// ── Actions ─────────────────────────────────────────────────────

export function setLocale(locale: Locale): void {
  useLanguageStore.setState({ locale }, false, ACTIONS.set);
}

// ── Selectors ───────────────────────────────────────────────────

export const selectLocale = (s: LanguageState): Locale => s.locale;
