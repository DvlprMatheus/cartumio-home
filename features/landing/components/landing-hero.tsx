"use client";

import { useTypewriter } from "@/features/landing/hooks/use-typewriter";

export function LandingHero() {
  const fullTitle = "Cartumio: Palavras que pedem um envelope";
  const { typedText: typedTitle, isTyping } = useTypewriter(fullTitle);

  return (
    <div className="flex min-w-0 max-w-xl flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        Correio digital
      </p>
      <h1
        aria-label={fullTitle}
        className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1]"
      >
        {typedTitle}
        {isTyping ? (
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[0.95em] w-[0.08em] translate-y-[0.2em] bg-foreground align-baseline animate-pulse"
          />
        ) : null}
      </h1>
      <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
        Você escreve, escolhe o selo e manda. Quem recebe sente que não é só mais um ping na
        tela.
      </p>
    </div>
  );
}
