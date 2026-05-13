import { useContext } from "react";
import { translations } from "./translations";
import { LocaleContext } from "./LocaleContext";
import type { Locale } from "./translations";

/**
 * Walk a nested object by dot-path, returning whatever is found
 * (object for namespaces, string for leaf keys, undefined on miss).
 */
function resolve(obj: unknown, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

/** Pre-resolved namespace sections keyed by "locale:namespace". */
const sectionCache = new Map<string, unknown>();

function getSection(locale: Locale, namespace: string): unknown {
  const cacheKey = `${locale}:${namespace}`;
  let section = sectionCache.get(cacheKey);
  if (section === undefined) {
    section = resolve(translations[locale], namespace);
    sectionCache.set(cacheKey, section);
  }
  return section;
}

/**
 * Drop-in replacement for next-intl's `useTranslations`.
 *
 * Reads the current locale from React context (provided by IntlProvider)
 * instead of subscribing to the zustand store directly — this avoids
 * cascading re-renders when zustand persist rehydrates.
 */
export function useTranslations(namespace: string) {
  const locale = useContext(LocaleContext);
  const section = getSection(locale, namespace);
  return (key: string): string => {
    const val = resolve(section, key);
    return typeof val === "string" ? val : key;
  };
}
