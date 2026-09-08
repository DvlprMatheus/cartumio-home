import Image from "next/image";

import { CARTUMIO_DESCRIPTION } from "@/lib/cartumio-meta";

const CREATOR_GITHUB = "https://github.com/DvlprMatheus";

export function LandingAbout() {
  return (
    <section
      id="sobre"
      className="border-t border-border/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 space-y-3 sm:mb-16">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            Sobre o projeto
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            De onde veio a ideia
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {CARTUMIO_DESCRIPTION}
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/60 p-6 sm:p-8">
          <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            Quem faz
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <Image
              src="/profile.jpg"
              alt="Matheus Cruz"
              width={80}
              height={80}
              className="mx-auto size-16 shrink-0 rounded-xl border border-border/60 object-cover sm:mx-0 sm:size-20"
            />
            <div className="min-w-0 space-y-2 text-center sm:text-left">
              <p className="text-base font-semibold text-foreground sm:text-lg">Matheus Cruz</p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                Desenvolvedor full stack focado em aplicações escaláveis e experiência do usuário.
              </p>
              <a
                href={CREATOR_GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/60"
              >
                <svg
                  aria-hidden
                  role="img"
                  viewBox="0 0 24 24"
                  className="size-3.5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
