"use client";

import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import type { ReactNode } from "react";
import { selectLocale, useLanguageStore } from "@/store/useLanguageStore";
import { type Locale, translations } from "@/lib/i18n/translations";

interface Props {
  children: ReactNode;
  /** Locale resolved on the server during SSG/SSR. Used as the first-paint value. */
  initialLocale: Locale;
  /** Messages resolved on the server. Avoids passing zero-length objects to next-intl. */
  initialMessages: AbstractIntlMessages;
}

/**
 * Bridges the locale managed by `useLanguageStore` (Zustand + persist) to
 * next-intl's translation runtime.
 *
 * On the server / first paint we use the locale that getRequestConfig
 * resolved (so SSG output is valid HTML and next-intl never falls back
 * to `ENVIRONMENT_FALLBACK`). After client hydration the zustand store
 * re-reads localStorage; if the user previously chose a different locale
 * we swap to the matching message bundle.
 */
export function IntlProvider({ children, initialLocale, initialMessages }: Props) {
  const clientLocale = useLanguageStore(selectLocale);
  const locale = clientLocale ?? initialLocale;
  const messages =
    locale === initialLocale
      ? initialMessages
      : (translations[locale] as unknown as AbstractIntlMessages);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Tokyo">
      {children}
    </NextIntlClientProvider>
  );
}
