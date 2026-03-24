export function LandingVisual() {
  return (
    <div className="flex min-h-[200px] items-center justify-center sm:min-h-[260px] lg:min-h-0">
      <div
        className="flex aspect-square w-full max-w-[220px] items-center justify-center rounded-lg border-2 border-dashed border-[oklch(0.45_0.03_85_/_0.35)] bg-[oklch(0.45_0.03_85_/_0.06)] text-xs font-medium text-muted-foreground dark:border-[oklch(0.72_0.02_85_/_0.35)] dark:bg-[oklch(0.25_0.02_85_/_0.35)] sm:max-w-[260px] lg:max-w-[280px]"
        aria-label="Área reservada para conteúdo futuro"
      >
        <span className="select-none opacity-70">Em breve</span>
      </div>
    </div>
  );
}
