import { LandingAbout } from "@/features/landing/components/landing-about";
import { LandingBackground } from "@/features/landing/components/landing-background";
import { LandingFeatures } from "@/features/landing/components/landing-features";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { LandingNavbar } from "@/features/landing/components/landing-navbar";
import { LandingWaitlist } from "@/features/landing/components/landing-waitlist";

export function LandingGrid() {
  return (
    <div className="relative isolate min-h-dvh w-full bg-[oklch(0.965_0.022_85)] dark:bg-[oklch(0.145_0.016_85)]">
      <div id="page-top" className="absolute top-0 h-px w-full" aria-hidden />
      <LandingBackground />
      <LandingNavbar />
      <main>
        <LandingHero />
        <LandingFeatures />
        <LandingAbout />
        <LandingWaitlist />
      </main>
      <footer className="border-t border-border/40 px-4 py-8 text-center text-xs text-muted-foreground/60 sm:px-6 lg:px-12">
        © {new Date().getFullYear()} Cartumio. Todos os direitos reservados.
      </footer>
    </div>
  );
}
