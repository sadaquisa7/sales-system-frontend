export type DocumentType = "DNI" | "RUC" | "CE" | "PASS";

export interface Client {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  first_name: string;
  last_name: string;
  business_name: string | null;
  document_type: DocumentType;
  document_number: string;
  email: string | null;
  phone: string | null;
  address: string | null;
}

export interface CreateOrUpdateClientDto {
  first_name: string;
  last_name: string;
  business_name?: string;
  document_type: DocumentType;
  document_number: string;
  email?: string;
  phone?: string;
  address?: string;
}
