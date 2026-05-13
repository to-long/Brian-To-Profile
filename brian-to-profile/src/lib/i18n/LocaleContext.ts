import { createContext } from "react";
import type { Locale } from "./translations";

/**
 * Shared context so `useTranslations` can read the current locale
 * without subscribing to the zustand store directly (which can cause
 * cascading re-renders with useLayoutEffect in Nav).
 *
 * Value is provided by IntlProvider, which is the single subscriber
 * to the zustand language store.
 */
export const LocaleContext = createContext<Locale>("en");
