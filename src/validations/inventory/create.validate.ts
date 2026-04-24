import { z } from "zod";

const movementTypes = ["IN", "OUT"] as const;

export const FormSchema = z.object({
  product_id: z.number({ invalid_type_error: "Producto requerido" }).min(1, "Seleccione un producto"),
  quantity: z.number({ invalid_type_error: "Cantidad inválida" }).int().min(1, "La cantidad debe ser mayor a 0"),
  movement_type: z.enum(movementTypes, { required_error: "Tipo de movimiento requerido" }),
});

export type NewForm = z.infer<typeof FormSchema>;
