"use client";

import { useWaitlistForm } from "@/features/landing/hooks/use-waitlist-form";
import { Button } from "@/features/shared/components/ui/button";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/features/shared/components/ui/field";
import { Input } from "@/features/shared/components/ui/input";
import { cn } from "@/lib/utils";

const inputBorderVisual = cn(
  "border-[oklch(0.45_0.03_85_/_0.35)] dark:border-[oklch(0.72_0.02_85_/_0.35)]",
);

export function LandingWaitlistForm() {
  const { register, handleSubmit, onValid, onInvalid, isSubmitting } = useWaitlistForm();

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
      <FieldGroup className="gap-4">
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <Field className="min-w-0">
            <FieldLabel htmlFor="waitlist-firstName">Nome</FieldLabel>
            <FieldContent>
              <Input
                id="waitlist-firstName"
                autoComplete="given-name"
                disabled={isSubmitting}
                className={inputBorderVisual}
                {...register("firstName")}
              />
            </FieldContent>
          </Field>
          <Field className="min-w-0">
            <FieldLabel htmlFor="waitlist-lastName">Sobrenome</FieldLabel>
            <FieldContent>
              <Input
                id="waitlist-lastName"
                autoComplete="family-name"
                disabled={isSubmitting}
                className={inputBorderVisual}
                {...register("lastName")}
              />
            </FieldContent>
          </Field>
        </div>
        <Field className="w-full">
          <FieldLabel htmlFor="waitlist-email">E-mail</FieldLabel>
          <FieldContent>
            <Input
              id="waitlist-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              disabled={isSubmitting}
              className={inputBorderVisual}
              {...register("email")}
            />
          </FieldContent>
        </Field>
      </FieldGroup>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando…" : "Quero participar"}
      </Button>
    </form>
  );
}
