import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  description: z.string().min(1, "Descripción requerida"),
});

export type NewForm = z.infer<typeof FormSchema>;
