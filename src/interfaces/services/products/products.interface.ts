import { Category } from "@interfaces/services/catalog/categories.interface";
import { Unit } from "@interfaces/services/catalog/units.interface";

export interface Product {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  description: string | null;
  price: string;
  stock: number;
  category_id: number;
  unit_id: number;
  category: Category;
  unit: Unit;
}

export interface CreateOrUpdateProductDto {
  name: string;
  description?: string;
  price: number;
  stock: number;
  category_id: number;
  unit_id: number;
}
