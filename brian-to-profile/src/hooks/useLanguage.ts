"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { type Locale, type Translations, translations } from "@/lib/i18n/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "brian-to-locale";

export function useLanguageState() {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "en" || stored === "vi" || stored === "ja")) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  }, []);

  return {
    locale,
    setLocale,
    t: translations[locale],
  };
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
