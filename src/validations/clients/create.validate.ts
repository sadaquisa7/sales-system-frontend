import { z } from "zod";

const documentTypes = ["DNI", "RUC", "CE", "PASS"] as const;

export const FormSchema = z.object({
  first_name: z.string().min(1, "Nombre requerido"),
  last_name: z.string().min(1, "Apellido requerido"),
  business_name: z.string().optional(),
  document_type: z.enum(documentTypes, { required_error: "Tipo de documento requerido" }),
  document_number: z.string().min(1, "Número de documento requerido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export type NewForm = z.infer<typeof FormSchema>;
