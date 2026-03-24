import { LandingBackground } from "@/features/landing/components/landing-background";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { LandingNavbar } from "@/features/landing/components/landing-navbar";
import { LandingVisual } from "@/features/landing/components/landing-visual";

export function LandingGrid() {
  return (
    <main
      id="inicio"
      className="relative isolate flex min-h-dvh w-full flex-col overflow-x-hidden overflow-y-auto bg-[oklch(0.965_0.022_85)] pb-6 dark:bg-[oklch(0.145_0.016_85)] sm:pb-8"
    >
      <LandingBackground />
      <LandingNavbar />
      <div className="grid flex-1 grid-cols-1 items-center gap-6 px-4 pt-4 sm:gap-8 sm:px-6 sm:pt-6 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:pb-10 lg:pt-8">
        <LandingHero />
        <LandingVisual />
      </div>
    </main>
  );
}
