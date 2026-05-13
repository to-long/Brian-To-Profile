import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/ui/Hero";
import { TrustBar } from "@/components/ui/TrustBar";
import { Features } from "@/components/ui/Features";
import { DeviceCascade } from "@/components/ui/DeviceCascade";
import { ImpactMetrics } from "@/components/ui/ImpactMetrics";
import { CareerJourney } from "@/components/ui/CareerJourney";
import { SelectedProjects } from "@/components/ui/SelectedProjects";
import { SideProjects } from "@/components/ui/SideProjects";
import { TechStack } from "@/components/ui/TechStack";
import { Footer } from "@/components/ui/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian To",
  alternateName: "To Hoang Long",
  url: "https://brian-to.dev",
  image: "https://brian-to.dev/avatar.png",
  jobTitle: "Principal Fullstack Engineer",
  worksFor: { "@type": "Organization", name: "Money Forward" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Hanoi University of Science and Technology (HUST)" },
  knowsAbout: ["React", "Node.js", "Go", "Python", "Micro-FE", "AI/ML", "System Architecture"],
  sameAs: ["https://www.linkedin.com/in/to-hoang-long-brian/"],
  address: { "@type": "PostalAddress", addressLocality: "Hanoi", addressCountry: "VN" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Nav />
      <main className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-24">
        <Hero />
        <TrustBar />
        <Features />
        <DeviceCascade />
        <ImpactMetrics />
        <CareerJourney />
        <SelectedProjects />
        <SideProjects />
        <TechStack />
        <Footer />
      </main>
    </>
  );
}
