import { Permission } from "./permissions.interface";
export interface User {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  first_name: string;
  last_name: string;
  email: string;
  max_active_sessions: number;
  password?: string;
  permissions: Permission[];
  roles: Role[];
}
interface Role {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  code: string;
  description: string;
}

export interface CreateOrUpdateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  roles: number[];
  permissions: number[];
}
