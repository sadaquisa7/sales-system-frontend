// lib/schemas/formSchema.ts
import { z } from "zod";

// Define the Zod schema for validation
export const FormSchema = z.object({
  password: z.string().min(1, "La contraseña es obligatorio"),
});

// Export the inferred type
export type NewForm = z.infer<typeof FormSchema>;
