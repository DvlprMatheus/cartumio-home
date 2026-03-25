export function LandingHero() {
  return (
    <div className="flex min-w-0 max-w-xl flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        Correio digital
      </p>
      <h1 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1]">
        Cartumio: Palavras que pedem um envelope
      </h1>
      <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
        Você escreve, escolhe o selo e manda. Quem recebe sente que não é só mais um ping na
        tela.
      </p>
    </div>
  );
}
