export function toggleColorScheme(setTheme: (theme: string) => void): void {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
}
