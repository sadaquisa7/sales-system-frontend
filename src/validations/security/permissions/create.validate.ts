// lib/schemas/formSchema.ts
import { z } from "zod";

const nameRegex = /^[A-Za-z0-9\s]+$/;
const codeRegex = /^[A-Z_]+$/;
const routeRegex = /^\/(\*|.*)?$|^\*$/;

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, "Nombre requerido")
    .regex(nameRegex, "Solo letras, números y espacios"),
  code: z
    .string()
    .min(1, "Código requerido")
    .regex(codeRegex, "Solo mayúsculas y guiones bajos"),
  description: z.string().min(1, "Descripción requerida"),
  route: z.string().min(1, "Ruta requerida").regex(routeRegex, "Ruta inválida"),
  methods: z
    .array(
      z.number({
        invalid_type_error: "Método inválido",
      })
    )
    .min(1, "Seleccione un método"),
});

export type NewForm = z.infer<typeof FormSchema>;
