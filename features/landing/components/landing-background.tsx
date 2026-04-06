const layer = "pointer-events-none fixed inset-0 -z-10";

const PAPER_GRAIN = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">' +
    '<filter id="paperGrain"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>' +
    '<feColorMatrix type="saturate" values="0"/></filter>' +
    '<rect width="100%" height="100%" filter="url(#paperGrain)" opacity="0.42"/></svg>',
)}")`;

export function LandingBackground() {
  return (
    <>
      <div
        aria-hidden
        className={`${layer} bg-[radial-gradient(ellipse_115%_85%_at_50%_-15%,oklch(0.995_0.01_85_/_0.9),transparent_58%)] dark:bg-[radial-gradient(ellipse_115%_85%_at_50%_-15%,oklch(0.22_0.014_85_/_0.55),transparent_58%)]`}
      />
      <div
        aria-hidden
        className={`${layer} bg-[radial-gradient(ellipse_95%_90%_at_50%_105%,oklch(0.55_0.035_75_/_0.07),transparent_52%)] dark:bg-[radial-gradient(ellipse_95%_90%_at_50%_105%,oklch(0.02_0.01_85_/_0.55),transparent_52%)]`}
      />
      <div
        aria-hidden
        className={`${layer} bg-repeat opacity-[0.28] mix-blend-multiply dark:opacity-[0.14] dark:mix-blend-soft-light`}
        style={{
          backgroundImage: PAPER_GRAIN,
          backgroundSize: "180px 180px",
        }}
      />
      <div
        aria-hidden
        className={`${layer} bg-[repeating-linear-gradient(180deg,transparent,transparent_2px,oklch(0.4_0.02_85_/_0.035)_2px,oklch(0.4_0.02_85_/_0.035)_3px)] opacity-[0.5] mix-blend-multiply dark:bg-[repeating-linear-gradient(180deg,transparent,transparent_2px,oklch(0.88_0.015_85_/_0.04)_2px,oklch(0.88_0.015_85_/_0.04)_3px)] dark:opacity-[0.4] dark:mix-blend-soft-light`}
      />
    </>
  );
}
