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

export function LandingWaitlist() {
  const { register, handleSubmit, onValid, onInvalid, formState } = useWaitlistForm();

  return (
    <section
      id="inscrever"
      className="border-t border-border/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-lg">
        <div className="mb-10 space-y-3 text-center sm:mb-12">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          Waitlist
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Inscreva-se
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          O Cartumio está em fase inicial. Se a ideia fizer sentido para você, deixe seus dados e
          entramos na lista de espera.
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/60 p-6 sm:p-8">
          <form
            className="space-y-5"
            onSubmit={handleSubmit(onValid, onInvalid)}
            noValidate
          >
            <FieldGroup className="gap-4">
              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <Field className="min-w-0">
                  <FieldLabel htmlFor="waitlist-firstName">Nome</FieldLabel>
                  <FieldContent>
                    <Input
                      id="waitlist-firstName"
                      autoComplete="given-name"
                      disabled={formState.isSubmitting}
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
                      disabled={formState.isSubmitting}
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
                    disabled={formState.isSubmitting}
                    className={inputBorderVisual}
                    {...register("email")}
                  />
                </FieldContent>
              </Field>
            </FieldGroup>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Enviando…" : "Quero participar"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
