"use client";

import { LandingWaitlistForm } from "@/features/landing/components/landing-waitlist-form";
import { WaitlistProvider } from "@/features/landing/contexts/waitlist-context";

export function LandingWaitlist() {
  return (
    <section
      id="inscrever"
      className="border-t border-border/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-lg">
        <div className="mb-10 space-y-3 text-center sm:mb-12">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            Waitlist
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Inscreva-se
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            O Cartumio está em fase inicial. Se a ideia fizer sentido para você, deixe seus dados e
            entramos na lista de espera.
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/60 p-6 sm:p-8">
          <WaitlistProvider>
            <LandingWaitlistForm />
          </WaitlistProvider>
        </div>
      </div>
    </section>
  );
}
