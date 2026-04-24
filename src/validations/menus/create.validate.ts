import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  code: z.string().min(1, "Código requerido"),
  icon: z.string().min(1, "Ícono requerido"),
  route: z.string().min(1, "Ruta requerida"),
  sort_order: z.number({ invalid_type_error: "Orden inválido" }).int().min(0),
  parent_id: z.number().nullable().optional(),
  permissions: z.array(z.number({ invalid_type_error: "Permiso inválido" })).min(1, "Seleccione al menos un permiso"),
});

export type NewForm = z.infer<typeof FormSchema>;
