import { MailOpen, PenLine, Stamp } from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Escreva como antigamente",
    description:
      "Componha sua mensagem com alma de carta. Sem templates frios, sem limite de caracteres — só você e o que quer dizer.",
  },
  {
    icon: Stamp,
    title: "Personalize com seu selo",
    description:
      "Cada envio tem um toque único. Escolha o selo que melhor representa o que sente e deixe sua marca antes mesmo de abrir.",
  },
  {
    icon: MailOpen,
    title: "Quem recebe, sente",
    description:
      "Abrir o Cartumio tem o peso de uma carta de verdade. É um gesto que se guarda, não uma notificação que some.",
  },
] as const;

export function LandingFeatures() {
  return (
    <section
      id="funcionalidades"
      className="border-t border-border/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 space-y-3 text-center sm:mb-16">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            Como funciona
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Simples como escrever uma carta
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Três passos que devolvem o prazer de se comunicar com intenção.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col gap-4 rounded-xl border border-border/60 bg-card/60 p-6 transition-colors hover:border-border hover:bg-card sm:p-7"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-muted/50 transition-colors group-hover:border-border">
                  <Icon className="size-5 text-foreground/70" aria-hidden />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
