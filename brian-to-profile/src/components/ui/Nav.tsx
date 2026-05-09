"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/hooks/useLanguage";
import { NAV_LINKS } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const { scrolled } = useScrollProgress();
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = document.body;
    if (mobileOpen) {
      const previous = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = previous;
      };
    }
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-surface)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 md:gap-4 md:px-6 lg:px-10">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <motion.span
            whileHover={{ scale: 1.06, rotate: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] shadow-[0_4px_12px_rgba(1,102,255,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]"
          >
            <span className="font-headings text-[15px] font-extrabold leading-none tracking-[-0.04em] text-white">
              BT
            </span>
          </motion.span>
          <span className="font-headings text-[18px] font-bold leading-none tracking-[-0.01em] whitespace-nowrap">
            Brian To
          </span>
        </a>

        <ul className="hidden items-center gap-4 md:flex lg:gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-[13px] transition-colors lg:text-sm",
                    isActive
                      ? "font-medium text-[var(--color-foreground-primary)]"
                      : "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground-primary)]",
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-[var(--color-accent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 items-center gap-1.5 md:flex lg:gap-2">
          <LanguageSwitch />
          <ThemeToggle />
          <a
            href="/CV-BrianTo-Principal Fullstack Engineer _ Technical Leader.pdf"
            download="Brian-To-CV.pdf"
            className="ml-0.5 inline-flex h-9 min-w-[100px] items-center justify-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-[var(--color-accent)]/25 lg:ml-1 lg:min-w-[112px] lg:px-4 lg:text-sm"
          >
            <span className="whitespace-nowrap">{t.nav.resume}</span>
            <Download size={13} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] md:hidden"
          aria-label="Open menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm",
                    active === link.id
                      ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      : "text-[var(--color-foreground-secondary)]",
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-3 flex items-center gap-2">
                <LanguageSwitch />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-x-0 bottom-0 top-0 -z-10 cursor-default md:hidden"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 18%, #020617 82%) 0%, color-mix(in srgb, var(--color-accent) 8%, #02050d 92%) 100%)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              opacity: 0.78,
            }}
          />
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
