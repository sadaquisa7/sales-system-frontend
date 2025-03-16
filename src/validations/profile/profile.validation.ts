// lib/schemas/formSchema.ts
import { z } from "zod";
const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

// Define the Zod schema for validation
export const FormSchema = z
  .object({
    first_name: z
      .string()
      .min(1, "Los nombres son obligatorios")
      .regex(nameRegex, "Solo se permiten letras y espacios"),
    last_name: z
      .string()
      .min(1, "Los apellidos son obligatorios")
      .regex(nameRegex, "Solo se permiten letras y espacios"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .optional()
      .or(z.literal("")),
    password_confirm: z
      .string()
      .min(6, "La confirmación de contraseña debe tener al menos 6 caracteres")
      .optional()
      .or(z.literal("")),
    max_active_sessions: z
      .number()
      .min(1, "Debe ser al menos 1")
      .max(10, "No puede ser mayor a 10")
      .int("Debe ser un número entero"),
  })
  .refine(
    (data) => {
      // Solo validar si el usuario ingresó una contraseña
      if (data.password || data.password_confirm) {
        return data.password === data.password_confirm;
      }
      return true;
    },
    {
      message: "Las contraseñas no coinciden",
      path: ["password_confirm"],
    }
  );

// Export the inferred type
export type NewForm = z.infer<typeof FormSchema>;
