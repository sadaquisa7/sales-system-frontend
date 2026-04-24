import { Product } from "@interfaces/services/products/products.interface";

export type MovementType = "IN" | "OUT";

export interface Inventory {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  product_id: number;
  quantity: number;
  movement_type: MovementType;
  product: Product;
}

export interface CreateInventoryDto {
  product_id: number;
  quantity: number;
  movement_type: MovementType;
}
