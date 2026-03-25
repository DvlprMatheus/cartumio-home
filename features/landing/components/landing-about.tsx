import { CARTUMIO_DESCRIPTION } from "@/lib/cartumio-meta";

const CREATOR_GITHUB = "https://github.com/DvlprMatheus";

export function LandingAbout() {
  return (
    <div className="flex min-w-0 max-w-xl flex-col justify-center space-y-5 sm:space-y-6">
      <div className="space-y-2">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          Sobre o projeto
        </p>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {CARTUMIO_DESCRIPTION}
        </p>
      </div>
      <div className="space-y-3 border-t border-border/60 pt-5 sm:pt-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          Quem faz
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div
            className="mx-auto flex size-24 shrink-0 items-center justify-center rounded-xl border border-dashed border-muted-foreground/35 bg-muted/30 text-[0.65rem] text-muted-foreground sm:mx-0 sm:size-28"
            aria-hidden
          >
            Foto em breve
          </div>
          <div className="min-w-0 space-y-2 text-center sm:text-left">
            <p className="text-base font-medium text-foreground sm:text-lg">Matheus Cruz</p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Desenvolvedor full stack focado em aplicações escaláveis e experiência do usuário.
            </p>
            <a
              href={CREATOR_GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground/60"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
