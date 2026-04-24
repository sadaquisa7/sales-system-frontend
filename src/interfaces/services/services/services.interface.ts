export interface Service {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  description: string;
  price: string;
}

export interface CreateOrUpdateServiceDto {
  name: string;
  description: string;
  price: number;
}
