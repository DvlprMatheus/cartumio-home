"use server";

import { confirmEmailSchema } from "@/features/confirm-email/schemas/confirm-email";
import type { ApiResponse } from "@/features/shared/types/action";
import { serverFetch } from "@/lib/server-fetch";

export async function confirmWaitlistUser(token: string): Promise<ApiResponse> {
  const parsed = confirmEmailSchema.safeParse({ token });

  if (!parsed.success) {
    return { success: false, error: "INVALID_REQUEST" };
  }

  return serverFetch({
    path: "/gate/v1/waitlist-users/confirm",
    method: "POST",
    body: parsed.data,
  });
}
