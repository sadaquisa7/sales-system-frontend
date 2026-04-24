export interface Category {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  description: string;
}

export interface CreateOrUpdateCategoryDto {
  name: string;
  description: string;
}
