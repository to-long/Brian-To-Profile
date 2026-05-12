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

export default function HomePage() {
  return (
    <>
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
