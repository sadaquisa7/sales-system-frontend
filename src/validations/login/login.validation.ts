// lib/schemas/formSchema.ts
import { z } from "zod";

// Define the Zod schema for validation
export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(50, "El nombre no puede exceder los 50 caracteres"),
  lastName: z
    .string()
    .min(1, "El apellido es obligatorio")
    .max(50, "El apellido no puede exceder los 50 caracteres"),
  birthDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Fecha de nacimiento inválida",
    })
    .nullable()
    .optional(),
});

// Export the inferred type
export type FormData = z.infer<typeof formSchema>;
