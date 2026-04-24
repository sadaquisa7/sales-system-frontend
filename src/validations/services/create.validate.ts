import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  description: z.string().min(1, "Descripción requerida"),
  price: z.number({ invalid_type_error: "Precio inválido" }).min(0, "El precio debe ser mayor o igual a 0"),
});

export type NewForm = z.infer<typeof FormSchema>;
