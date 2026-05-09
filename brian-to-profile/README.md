# Brian To — Personal Portfolio

Personal portfolio website for **To Hoang Long (Brian To)** — Principal Fullstack Engineer · Technical Leader. 15 years of experience building high-scale products and leading cross-border teams.

🌐 **Live demo:** [brian-to.dev](https://brian-to.dev)

---

## Highlights

- **Multi-language**: English / Japanese (next-intl)
- **Theme**: Light / Dark with View Transitions API circular reveal
- **Animations**: Framer Motion — scroll reveal, parallax device cascade, animated count-up metrics, smooth nav indicator
- **Accessibility**: Keyboard nav, semantic landmarks, `prefers-reduced-motion` respected
- **Responsive**: 320px → desktop, mobile-first with explicit fixes for tablet (768px) and mobile menu

## Tech stack

| Layer | Stack |
|---|---|
| Framework | Next.js 16 (App Router) · React 19 · TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first) · CSS variables for theme tokens |
| Animation | Framer Motion 12 (springs, layout, view transitions) |
| State | Zustand + persist middleware (theme, locale) |
| i18n | next-intl 4 (client provider, message-based) |
| Icons | Lucide React + custom SVG (LinkedIn) |
| Build | Turbopack (dev + prod) |

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # RootLayout · IntlProvider · theme init script
│   ├── page.tsx                # Server component composing sections
│   └── globals.css             # Theme tokens, gradient heading, ambient bg
├── components/
│   ├── ui/                     # Section components (Hero, Nav, Footer, …)
│   ├── animations/             # Reveal, StaggerGroup, ScrollProgress
│   └── providers/IntlProvider  # next-intl bridge to Zustand locale
├── store/
│   ├── useThemeStore.ts        # Persist + view-transition toggle
│   └── useLanguageStore.ts     # Persist locale
├── lib/
│   ├── zustand/createStore.ts  # Devtools + persist factory
│   ├── i18n/translations.ts    # Static EN/JA messages (typed)
│   └── utils.ts                # cn() helper
├── hooks/
│   ├── useActiveSection.ts     # rAF-throttled scrollspy
│   ├── useScrollProgress.ts
│   └── useDropdown.ts
└── data/portfolio.ts           # Career, projects, tech, contacts
```

### State management

Zustand stores wrap with `devtools` + `persist` via a tiny `createStore` factory:

```ts
export const useThemeStore = createStore<ThemeState>(
  () => initialState,
  "brian-to-theme",
  { persistKeys: ["theme"] },
);
```

Side-effect actions (`toggleTheme`, `setLocale`) live alongside the store as plain functions — keeps store types narrow and groups DevTools updates by named action (`theme/toggle`, `language/set`).

### Translations

`IntlProvider` reads the locale from `useLanguageStore` and pipes the matching message slice into `NextIntlClientProvider`. Components consume it via the namespaced hook:

```tsx
const t = useTranslations("hero");
<h2>{t("caption")}</h2>
<p>{t("tagline")}</p>
```

Switching via `setLocale("ja")` triggers a re-render of all `useTranslations()` consumers — locale persists to `localStorage` automatically.

### Theme

A pre-React `<script>` in `<head>` reads the persisted theme from `localStorage` (Zustand JSON shape) and applies the `dark` class on `<html>` before hydration → no flash. Toggling uses the View Transitions API for a circular reveal centered on the click coordinates.

### Animations & performance

- `useActiveSection` uses `requestAnimationFrame` throttling — at most one calculation per browser frame
- Active nav underline uses **explicit position measurement** (no `layoutId` FLIP) so it doesn't drift during locale change
- Card hover lifts use tween (not spring) to avoid wobble on settle
- Mobile menu locks body scroll, applies `backdrop-filter: blur(14px) saturate(140%)` overlay
- `text-wrap: balance` for tagline, `text-wrap: pretty` for descriptions

## Local development

```bash
# Install deps
npm install

# Start dev server (Turbopack)
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure decisions

- **Server vs client**: All sections are client components because they consume `useTranslations()` (needs the client provider) and Framer Motion. The root layout stays a server component.
- **Source-of-truth split**: `data/portfolio.ts` holds the static schema (icons, colors, years, tech tags, structure). `lib/i18n/translations.ts` holds locale-specific text. Components combine them by index — translations can be added without touching layout.
- **No CSS-in-JS**: Tailwind v4 with CSS variables for theming. Custom CSS only for global shells (gradient heading, ambient background, view-transition keyframes).

## Deployment

Production runs on **[brian-to.dev](https://brian-to.dev)**. The PDF at `public/CV-BrianTo-Principal Fullstack Engineer _ Technical Leader.pdf` is served directly and downloaded via the Resume button (`<a download>`).

---

Built by **Brian To** · [longth.bka@gmail.com](mailto:longth.bka@gmail.com) · [LinkedIn](https://www.linkedin.com/in/to-hoang-long-brian/)
