export interface Unit {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  abbreviation: string;
}

export interface CreateOrUpdateUnitDto {
  name: string;
  abbreviation: string;
}
