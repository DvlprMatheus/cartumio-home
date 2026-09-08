"use server";

import { headers } from "next/headers";

import { waitlistSchema } from "@/features/landing/schemas/waitlist";
import type { WaitlistFormValues } from "@/features/landing/types/landing";
import type { ApiResponse } from "@/features/shared/types/action";
import { serverFetch } from "@/lib/server-fetch";

export async function createOrResendWaitlistUser(
  values: WaitlistFormValues,
): Promise<ApiResponse> {
  const parsed = waitlistSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "INVALID_REQUEST" };
  }

  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language");

  return serverFetch({
    path: "/gate/v1/waitlist-users/create-or-resend",
    method: "POST",
    body: parsed.data,
    headers: acceptLanguage ? { "Accept-Language": acceptLanguage } : undefined,
  });
}
