export interface Role {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  code: string;
  description: string;
  permissions: Permission[];
}

interface Permission {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  code: string;
  description: string;
  route: string;
}

export interface CreateOrUpdateRoleDto {
  name: string;
  code: string;
  description: string;
  permissions: number[];
}
