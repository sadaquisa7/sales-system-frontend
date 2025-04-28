// lib/schemas/formSchema.ts
import { z } from "zod";

const nameRegex = /^[A-Za-z\s]+$/;
const codeRegex = /^[a-z_]+$/;

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, "Nombre requerido")
    .regex(nameRegex, "Solo letras y espacios permitidos"),
  code: z
    .string()
    .min(1, "Código requerido")
    .regex(codeRegex, "Solo minúscula y guiones bajos"),
  description: z.string().min(1, "Descripción requerida"),
  permissions: z
    .array(
      z.number({
        invalid_type_error: "Permiso inválido",
      })
    )
    .min(1, "Seleccione un permiso"),
});

export type NewForm = z.infer<typeof FormSchema>;
