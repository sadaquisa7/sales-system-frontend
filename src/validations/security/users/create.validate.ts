// lib/schemas/formSchema.ts
import { z } from "zod";

const nameRegex = /^[A-Za-z\s]+$/;

export const FormSchema = z
  .object({
    first_name: z
      .string()
      .min(1, "Nombre requerido")
      .regex(nameRegex, "Solo letras y espacios permitidos"),
    last_name: z
      .string()
      .min(1, "Apellido requerido")
      .regex(nameRegex, "Solo letras y espacios permitidos"),
    email: z.string().email("Correo electrónico inválido"),
    password: z
      .string()
      .min(5, "La contraseña debe tener al menos 5 caracteres"),
    roles: z.array(
      z.number({
        invalid_type_error: "Rol inválido",
      })
    ),
    permissions: z.array(
      z.number({
        invalid_type_error: "Permiso inválido",
      })
    ),
  })
  .refine(
    (data) => {
      return data.roles.length > 0 || data.permissions.length > 0;
    },
    {
      message: "Debe seleccionar al menos un rol o un permiso",
      path: ["roles"],
    }
  );

export type NewForm = z.infer<typeof FormSchema>;
