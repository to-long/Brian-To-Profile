"use client";

import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTranslations } from "next-intl";
import { NAV_LINKS } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const { scrolled } = useScrollProgress();
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clickedTarget, setClickedTarget] = useState<string | null>(null);
  const [pendingMobileClose, setPendingMobileClose] = useState(false);

  useEffect(() => {
    if (!clickedTarget) return;
    if (active === clickedTarget) {
      setClickedTarget(null);
      return;
    }
    const safety = window.setTimeout(() => setClickedTarget(null), 2000);
    return () => window.clearTimeout(safety);
  }, [clickedTarget, active]);

  // After scroll lands on the clicked target, close the mobile menu gracefully.
  useEffect(() => {
    if (!pendingMobileClose) return;
    if (clickedTarget !== null) return;
    const t = window.setTimeout(() => {
      setMobileOpen(false);
      setPendingMobileClose(false);
    }, 250);
    return () => window.clearTimeout(t);
  }, [pendingMobileClose, clickedTarget]);

  const visualActive = clickedTarget ?? active;

  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);

  const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIso(() => {
    const idx = NAV_LINKS.findIndex((l) => l.id === visualActive);
    const el = linksRef.current[idx];
    if (el) setIndicator({ x: el.offsetLeft, w: el.offsetWidth });
  }, [visualActive, t]);

  useEffect(() => {
    const onResize = () => {
      const idx = NAV_LINKS.findIndex((l) => l.id === visualActive);
      const el = linksRef.current[idx];
      if (el) setIndicator({ x: el.offsetLeft, w: el.offsetWidth });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [visualActive]);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      const idx = NAV_LINKS.findIndex((l) => l.id === visualActive);
      const el = linksRef.current[idx];
      if (el) setIndicator({ x: el.offsetLeft, w: el.offsetWidth });
    });
    linksRef.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [visualActive]);

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
    <>
      {mobileOpen ? (
        <motion.button
          type="button"
          aria-label="Close menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-transparent md:hidden"
          style={{
            backdropFilter: "blur(14px) saturate(140%)",
            WebkitBackdropFilter: "blur(14px) saturate(140%)",
          }}
        />
      ) : null}

      <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 [transition:border-color_300ms_ease,background-color_300ms_ease,backdrop-filter_300ms_ease]",
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
            style={{
              backgroundImage:
                "linear-gradient(135deg, #22D3EE 0%, #0EA5E9 25%, #3B82F6 50%, #0066FF 75%, #4F46E5 100%)",
            }}
            className="relative flex h-8 w-8 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,102,255,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]"
          >
            <span className="font-headings text-[15px] font-bold leading-none tracking-[-0.04em] text-white">
              BT
            </span>
          </motion.span>
          <span className="font-headings text-[18px] font-bold leading-none tracking-[-0.01em] whitespace-nowrap">
            Brian To
          </span>
        </a>

        <ul className="relative hidden items-center gap-4 md:flex lg:gap-7">
          {indicator ? (
            <motion.span
              aria-hidden
              className="absolute -bottom-1.5 h-[2px] rounded-full bg-[var(--color-accent)] pointer-events-none"
              initial={false}
              animate={{ x: indicator.x, width: indicator.w }}
              transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.5 }}
            />
          ) : null}
          {NAV_LINKS.map((link, i) => {
            const isActive = visualActive === link.id;
            return (
              <li key={link.id}>
                <a
                  ref={(el) => {
                    linksRef.current[i] = el;
                  }}
                  href={link.href}
                  onClick={() => setClickedTarget(link.id)}
                  className={cn(
                    "relative whitespace-nowrap text-[13px] transition-colors lg:text-sm",
                    isActive
                      ? "font-medium text-[var(--color-foreground-primary)]"
                      : "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground-primary)]",
                  )}
                >
                  {t(`links.${link.id}`)}
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
            <span className="whitespace-nowrap">{t("resume")}</span>
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
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)] shadow-[0_24px_48px_-12px_rgba(2,6,23,0.45),0_8px_16px_-8px_rgba(2,6,23,0.25)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setClickedTarget(link.id);
                    setPendingMobileClose(true);
                  }}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm",
                    visualActive === link.id
                      ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      : "text-[var(--color-foreground-secondary)]",
                  )}
                >
                  {t(`links.${link.id}`)}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-2">
                <LanguageSwitch />
                <ThemeToggle />
                <a
                  href="/CV-BrianTo-Principal Fullstack Engineer _ Technical Leader.pdf"
                  download="Brian-To-CV.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="ml-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 text-[13px] font-semibold text-white shadow-md shadow-[var(--color-accent)]/25"
                >
                  <span className="whitespace-nowrap">{t("resume")}</span>
                  <Download size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

    </motion.nav>
    </>
  );
}
