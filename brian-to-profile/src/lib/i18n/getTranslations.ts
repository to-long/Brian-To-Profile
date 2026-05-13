/**
 * Build-time translation function for Astro components.
 * Used in .astro files where hooks are not available.
 */
import { translations, type Locale } from "./translations";

function resolve(obj: unknown, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function getTranslations(namespace: string, locale: Locale = "en") {
  const section = resolve(translations[locale], namespace);
  return (key: string): string => {
    const val = resolve(section, key);
    return typeof val === "string" ? val : key;
  };
}
