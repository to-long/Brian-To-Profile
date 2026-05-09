/**
 * next-intl server-side request config.
 *
 * The actual locale switching happens client-side via `useLanguageStore`
 * (Zustand + persist) and is piped into <NextIntlClientProvider>. The
 * server-rendered HTML always uses the default locale, then the client
 * hydrates and re-renders with the user's persisted choice.
 *
 * This file exists to satisfy next-intl's runtime — without it the lib
 * logs `ENVIRONMENT_FALLBACK` warnings during build (and those become
 * hard errors in some Vercel build pipelines).
 */

import { getRequestConfig } from "next-intl/server";
import { translations, type Locale } from "@/lib/i18n/translations";

const DEFAULT_LOCALE: Locale = "en";

// Pin a deterministic time zone so SSR markup matches client-rendered
// markup. Without this next-intl logs ENVIRONMENT_FALLBACK during build
// (the warning gets surfaced as a hard error in Vercel pipelines).
const DEFAULT_TIME_ZONE = "Asia/Tokyo";

export default getRequestConfig(async () => {
  return {
    locale: DEFAULT_LOCALE,
    messages: translations[DEFAULT_LOCALE],
    timeZone: DEFAULT_TIME_ZONE,
  };
});
