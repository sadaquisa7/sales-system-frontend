import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  description: z.string().optional(),
  price: z.number({ invalid_type_error: "Precio inválido" }).min(0, "El precio debe ser mayor o igual a 0"),
  stock: z.number({ invalid_type_error: "Stock inválido" }).int().min(0, "El stock debe ser mayor o igual a 0"),
  category_id: z.number({ invalid_type_error: "Categoría requerida" }).min(1, "Seleccione una categoría"),
  unit_id: z.number({ invalid_type_error: "Unidad requerida" }).min(1, "Seleccione una unidad"),
});

export type NewForm = z.infer<typeof FormSchema>;
