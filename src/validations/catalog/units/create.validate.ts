import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  abbreviation: z.string().min(1, "Abreviatura requerida"),
});

export type NewForm = z.infer<typeof FormSchema>;
