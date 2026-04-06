"use client";

import { useTypewriter } from "@/features/landing/hooks/use-typewriter";
import { Button } from "@/features/shared/components/ui/button";

export function LandingHero() {
  const fullTitle = "Palavras que pedem um envelope";
  const { typedText: typedTitle, isTyping } = useTypewriter(fullTitle);

  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100dvh-4rem)] sm:px-6 sm:py-20 lg:px-12"
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-6 sm:gap-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          Correio digital
        </span>

        <h1
          aria-label={`Cartumio: ${fullTitle}`}
          className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.05]"
        >
          Cartumio:{" "}
          <span className="text-foreground/90">
            {typedTitle}
            {isTyping ? (
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[0.85em] w-[0.06em] translate-y-[0.15em] animate-pulse bg-foreground align-baseline"
              />
            ) : null}
          </span>
        </h1>

        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          Resgata a experiência afetiva das cartas de papel — você escreve, escolhe um selo e
          envia com intenção.
        </p>

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[160px]">
            <a href="#inscrever">Entrar na lista</a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
            <a href="#funcionalidades">Como funciona</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
