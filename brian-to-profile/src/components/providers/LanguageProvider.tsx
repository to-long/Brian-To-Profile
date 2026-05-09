"use client";

import { ReactNode } from "react";
import { LanguageContext, useLanguageState } from "@/hooks/useLanguage";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const value = useLanguageState();
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
