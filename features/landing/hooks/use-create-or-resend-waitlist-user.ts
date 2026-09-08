"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { createOrResendWaitlistUser } from "@/features/landing/actions/create-or-resend-waitlist-user";
import type { WaitlistFormValues } from "@/features/landing/types/landing";

export function useCreateOrResendWaitlistUser() {
  return useMutation({
    mutationKey: ["waitlist-users", "create-or-resend"],
    mutationFn: async (values: WaitlistFormValues) => {
      const result = await createOrResendWaitlistUser(values);

      if (!result.success) {
        throw new Error(result.error);
      }
    },
    onSuccess: () => {
      toast.success("E-mail de confirmação enviado com sucesso!");
    },
    onError: () => {
      toast.error("Não foi possível enviar o e-mail de confirmação, tente novamente.");
    },
  });
}
