import type { Metadata } from "next";

import { ConfirmEmailStatus } from "@/features/confirm-email/components/confirm-email-status";
import { LandingBackground } from "@/features/landing/components/landing-background";

export const metadata: Metadata = {
  title: "Confirmação de e-mail | Cartumio",
  description: "Confirme seu e-mail para garantir seu lugar na lista de espera do Cartumio.",
};

export default async function ConfirmEmail({
  searchParams,
}: Readonly<{
  searchParams: Promise<{ token?: string | string[] }>;
}>) {
  const { token } = await searchParams;
  const confirmationToken = Array.isArray(token) ? (token[0] ?? "") : (token ?? "");

  return (
    <div className="relative isolate flex min-h-dvh w-full items-center justify-center bg-[oklch(0.965_0.022_85)] px-4 py-16 dark:bg-[oklch(0.145_0.016_85)] sm:px-6">
      <LandingBackground />
      <main className="w-full max-w-md rounded-xl border border-border/60 bg-card/60 p-8 sm:p-10">
        <ConfirmEmailStatus token={confirmationToken} />
      </main>
    </div>
  );
}
