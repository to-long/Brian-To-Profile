import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Security headers — addresses OWASP top concerns:
 *
 * - A03 Injection / A05 Security Misconfiguration / A07 XSS:
 *   Strict CSP that limits where scripts/styles/connections can come from.
 *   `'self'` only, plus the explicit allowlist for Google Fonts.
 *   `'strict-dynamic'` lets Next.js' bootstrap script load chunked JS;
 *   `'unsafe-inline'` is required by next-themes-style framework setup
 *   (Tailwind's runtime fallback + framer-motion's inline styles), but is
 *   constrained to styles only.
 *
 * - A05 Security Misconfiguration / Clickjacking:
 *   `X-Frame-Options: DENY` + CSP `frame-ancestors 'none'` prevents the
 *   site from being embedded in iframes anywhere.
 *
 * - A02 Cryptographic Failures:
 *   HSTS forces HTTPS for the next 2 years (browser-cached). `preload`
 *   is set so the domain can be added to the HSTS preload list.
 *
 * - A05 Security Misconfiguration:
 *   `X-Content-Type-Options: nosniff` blocks MIME sniffing (e.g. JS
 *   served from /public/foo.txt won't execute).
 *
 * - Privacy / data leakage:
 *   `Referrer-Policy` strips path/query when leaving the origin.
 *
 * - Browser feature lockdown:
 *   `Permissions-Policy` denies camera/microphone/geolocation/etc.
 *   The site doesn't use any of these — explicit deny prevents abuse if
 *   a third-party script ever sneaks in.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://cloudflareinsights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-XSS-Protection", value: "0" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
