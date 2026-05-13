"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "@/lib/i18n/useTranslations";
import { CONTACT } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function LinkedinIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm1.78 13.02H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations("contact");

  type Column = {
    icon: (props: { size?: number; className?: string }) => React.ReactElement;
    label: string;
    value: string;
    href?: string;
    accent?: boolean;
  };

  const columns: Column[] = [
    {
      icon: ({ size, className }) => <Mail size={size} className={className} />,
      label: t("labels.email"),
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: ({ size, className }) => <Phone size={size} className={className} />,
      label: t("labels.phone"),
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/[^+0-9]/g, "")}`,
    },
    {
      icon: LinkedinIcon,
      label: t("labels.linkedin"),
      value: CONTACT.linkedinLabel,
      href: CONTACT.linkedin,
      accent: true,
    },
    {
      icon: ({ size, className }) => <MapPin size={size} className={className} />,
      label: t("labels.location"),
      value: CONTACT.location,
    },
  ];

  return (
    <footer id="contact" className="flex flex-col items-center gap-10 py-20">
      <div data-reveal>
        <h2 className="gradient-heading px-6 text-center font-headings text-4xl font-bold md:text-5xl">
          {t("heading")}
        </h2>
      </div>

      <div data-reveal style={{ transitionDelay: "100ms" }}>
        <p className="max-w-xl px-6 text-center text-[var(--color-foreground-secondary)] md:text-base">
          {t("subheading")}
        </p>
      </div>

      <div data-reveal style={{ transitionDelay: "200ms" }}>
        <div className="grid w-full max-w-5xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:grid-cols-4">
          {columns.map(({ icon: Icon, label, value, href, accent }) => {
            const mobile = (
              <span className="flex w-full items-center gap-2.5 rounded-xl bg-[color-mix(in_srgb,var(--color-foreground-primary)_4%,transparent)] px-3.5 py-3.5 text-[13px] sm:hidden">
                <Icon
                  size={16}
                  className={
                    accent
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-foreground-secondary)]"
                  }
                />
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate",
                    accent
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-foreground-primary)]",
                  )}
                  title={value}
                >
                  {value}
                </span>
              </span>
            );
            const desktop = (
              <div className="hidden min-w-0 flex-col items-start gap-2 text-left sm:flex">
                <span className="flex items-center gap-1.5 font-captions text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
                  <Icon
                    size={12}
                    className={
                      accent
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-foreground-muted)]"
                    }
                  />
                  {label}
                </span>
                <span
                  title={value}
                  className={cn(
                    "block w-full truncate text-sm",
                    accent
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-foreground-primary)]",
                  )}
                >
                  {value}
                </span>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-hover-lift
                className="block w-full"
              >
                {mobile}
                {desktop}
              </a>
            ) : (
              <div key={label} className="w-full">
                {mobile}
                {desktop}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 w-full max-w-5xl border-t border-[var(--color-border-subtle)] pt-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 font-captions text-xs tracking-wide text-[var(--color-foreground-secondary)]">
          <span>{t("education")}</span>
          <span aria-hidden>·</span>
          <span>{t("award1")}</span>
          <span aria-hidden>·</span>
          <span>{t("award2")}</span>
        </div>
      </div>
    </footer>
  );
}
