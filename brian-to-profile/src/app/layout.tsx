import type { Metadata } from "next";
import { Geist, Inter, Funnel_Sans } from "next/font/google";
import { getLocale, getMessages, setRequestLocale } from "next-intl/server";
import { IntlProvider } from "@/components/providers/IntlProvider";
import type { Locale } from "@/lib/i18n/translations";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const funnel = Funnel_Sans({
  variable: "--font-funnel",
  subsets: ["latin"],
});

const siteUrl = "https://brian-to.dev";
const siteTitle = "Brian To — Principal Fullstack Engineer · Technical Leader";
const siteDescription =
  "16+ years building high-scale products, leading cross-border teams, and turning complex systems into clean, performant experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Brian To",
    "Principal Engineer",
    "Fullstack Engineer",
    "Technical Leader",
    "React",
    "Node.js",
    "Go",
    "Micro-FE",
    "AI Integration",
    "Vietnam",
    "Japan",
  ],
  authors: [{ name: "Brian To", url: siteUrl }],
  creator: "Brian To",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Brian To",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/btLogo.webp",
    apple: "/btLogo.webp",
  },
};

// Apply theme class BEFORE React hydrates so there's no flash of wrong theme.
// Also migrates pre-zustand storage format (plain string -> { state: { ... } }).
const themeInitScript = `
(function() {
  try {
    function migrateKey(key, prop) {
      var raw = localStorage.getItem(key);
      if (!raw) return undefined;
      try {
        var parsed = JSON.parse(raw);
        if (parsed && parsed.state && typeof parsed.state[prop] === 'string') return parsed.state[prop];
      } catch (e) {
        if (typeof raw === 'string' && raw.length < 32) {
          try { localStorage.setItem(key, JSON.stringify({ state: { [prop]: raw }, version: 0 })); } catch (e2) {}
          return raw;
        }
      }
      return undefined;
    }
    migrateKey('brian-to-locale', 'locale');
    var theme = migrateKey('brian-to-theme', 'theme');
    if (theme !== 'dark' && theme !== 'light') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();`;

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Resolve the server-side locale + messages via next-intl's getRequestConfig.
  // This populates the request context so static prerender doesn't trigger
  // ENVIRONMENT_FALLBACK during build (Vercel surfaces that as a hard error).
  const locale = (await getLocale()) as Locale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geist.variable} ${inter.variable} ${funnel.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <IntlProvider initialLocale={locale} initialMessages={messages}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
