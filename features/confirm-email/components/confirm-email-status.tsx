"use client";

import { CircleCheckBigIcon, CircleXIcon } from "lucide-react";
import Link from "next/link";

import { useConfirmEmail } from "@/features/confirm-email/hooks/use-confirm-email";
import { Button } from "@/features/shared/components/ui/button";
import { Spinner } from "@/features/shared/components/ui/spinner";

export function ConfirmEmailStatus({ token }: Readonly<{ token: string }>) {
  const { isSuccess, isError } = useConfirmEmail(token);
  const isConfirming = token.length > 0 && !isSuccess && !isError;

  if (isConfirming) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <Spinner className="size-10 text-muted-foreground" />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Confirmando seu e-mail…
        </p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <CircleCheckBigIcon
          aria-hidden
          strokeWidth={1.5}
          className="size-16 text-emerald-600 dark:text-emerald-400"
        />
        <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          E-mail confirmado com sucesso!
        </h1>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <CircleXIcon aria-hidden strokeWidth={1.5} className="size-16 text-destructive" />
      <div className="space-y-3">
        <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Não foi possível confirmar seu e-mail :(
        </h1>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          O token informado está inválido ou já foi utilizado anteriormente
        </p>
      </div>
      <Button asChild size="lg" variant="outline">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </div>
  );
}
