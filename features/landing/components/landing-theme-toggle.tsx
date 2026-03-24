"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/features/shared/components/ui/button";
import { toggleColorScheme } from "@/lib/theme";

export function LandingThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="shrink-0"
      aria-label="Alternar entre tema claro e escuro"
      onClick={() => toggleColorScheme(setTheme)}
    >
      <Sun className="hidden size-5 dark:inline" aria-hidden />
      <Moon className="size-5 dark:hidden" aria-hidden />
    </Button>
  );
}
