"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import type { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { waitlistSchema } from "@/features/landing/schemas/waitlist";
import type { WaitlistFormValues } from "@/features/landing/types/landing";

function collectErrorMessages(errors: Record<string, unknown>): string[] {
  const out: string[] = [];
  for (const value of Object.values(errors)) {
    if (!value || typeof value !== "object") continue;
    const err = value as { message?: string };
    if (typeof err.message === "string" && err.message.length > 0) {
      out.push(err.message);
      continue;
    }
    out.push(...collectErrorMessages(value as Record<string, unknown>));
  }
  return out;
}

export function useWaitlistForm() {
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onInvalid = useCallback((errors: FieldErrors<WaitlistFormValues>) => {
    const messages = collectErrorMessages(errors as unknown as Record<string, unknown>);
    for (const message of messages) {
      toast.warning(message);
    }
  }, []);

  const onValid = useCallback(async (_data: WaitlistFormValues) => {
    void _data;
  }, []);

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    onValid,
    onInvalid,
    formState: form.formState,
  };
}
