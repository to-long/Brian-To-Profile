"use client";

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import { selectLocale, useLanguageStore } from "@/store/useLanguageStore";
import { translations } from "@/lib/i18n/translations";

/**
 * Bridges the locale managed by `useLanguageStore` (Zustand + persist) to
 * next-intl's translation runtime. Switching the locale via `setLocale()`
 * automatically re-renders consumers using `useTranslations()`.
 */
export function IntlProvider({ children }: { children: ReactNode }) {
  const locale = useLanguageStore(selectLocale);
  return (
    <NextIntlClientProvider locale={locale} messages={translations[locale]}>
      {children}
    </NextIntlClientProvider>
  );
}
