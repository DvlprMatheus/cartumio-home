import { z } from "zod";

export const confirmEmailSchema = z.object({
  token: z.string().trim().min(1, "Informe o token de confirmação."),
});
