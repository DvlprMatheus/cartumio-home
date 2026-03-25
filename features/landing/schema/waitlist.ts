import { z } from "zod";

export const waitlistSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Informe o nome.")
    .max(50, "Nome deve ter no máximo 50 caracteres."),
  lastName: z
    .string()
    .trim()
    .min(1, "Informe o sobrenome.")
    .max(50, "Sobrenome deve ter no máximo 50 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Informe o e-mail.")
    .max(255, "E-mail deve ter no máximo 255 caracteres.")
    .email("Informe um e-mail válido."),
});
