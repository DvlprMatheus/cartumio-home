"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "@/features/shared/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster richColors closeButton position="top-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
