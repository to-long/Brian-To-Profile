import Image from "next/image";
import { HeroContent } from "./HeroContent";

/**
 * Server Component — the hero structure (avatar, gradient glow) is rendered
 * on the server for fast LCP. Only the text layer (HeroContent) hydrates
 * on the client for locale switching.
 *
 * The avatar parallax effect is handled by a tiny inline script
 * (`data-parallax`) in layout.tsx — no motion/react needed.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center px-6 pt-32 pb-12 md:pt-40 md:pb-16"
    >
      {/* Background glow */}
      <div
        data-reveal
        className="absolute inset-x-0 top-12 -z-10 mx-auto h-[420px] max-w-3xl"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.16),transparent_60%)] blur-2xl" />
      </div>

      {/* Avatar — server-rendered for LCP, parallax via data-parallax */}
      <div
        data-reveal
        data-parallax
        className="relative mb-6 h-[120px] w-[120px] md:h-[144px] md:w-[144px]"
      >
        <div className="absolute inset-0 rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]" />
        <div className="absolute inset-2 overflow-hidden rounded-full">
          <Image
            src="/avatar.png"
            alt="Brian To"
            fill
            sizes="144px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Client island — locale-aware text + CTA */}
      <HeroContent />
    </section>
  );
}
