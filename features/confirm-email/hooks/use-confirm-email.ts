"use client";

import { useQuery } from "@tanstack/react-query";

import { confirmWaitlistUser } from "@/features/confirm-email/actions/confirm-waitlist-user";

export function useConfirmEmail(token: string) {
  return useQuery({
    queryKey: ["waitlist-users", "confirm", token],
    queryFn: async () => {
      const result = await confirmWaitlistUser(token);

      if (!result.success) {
        throw new Error(result.error);
      }

      return true;
    },
    enabled: token.length > 0,
    retry: false,
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
}
