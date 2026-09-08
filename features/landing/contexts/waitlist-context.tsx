"use client";

import { createContext, useCallback, useContext, useMemo } from "react";

import { useCreateOrResendWaitlistUser } from "@/features/landing/hooks/use-create-or-resend-waitlist-user";
import type { WaitlistFormValues } from "@/features/landing/types/landing";

interface WaitlistContextValue {
  submitWaitlist: (values: WaitlistFormValues) => Promise<boolean>;
  isSubmitting: boolean;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { mutateAsync, isPending } = useCreateOrResendWaitlistUser();

  const submitWaitlist = useCallback(
    async (values: WaitlistFormValues) => {
      try {
        await mutateAsync(values);
        return true;
      } catch {
        return false;
      }
    },
    [mutateAsync],
  );

  const value = useMemo<WaitlistContextValue>(
    () => ({ submitWaitlist, isSubmitting: isPending }),
    [submitWaitlist, isPending],
  );

  return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export function useWaitlistContext() {
  const context = useContext(WaitlistContext);

  if (!context) {
    throw new Error("useWaitlistContext deve ser usado dentro de um WaitlistProvider.");
  }

  return context;
}
