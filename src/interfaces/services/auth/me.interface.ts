interface User {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  first_name: string;
  last_name: string;
  email: string;
  permissions: string[];
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

interface Menu {
  label: string;
  route: string | null;
  icon: string | null;
  sort_order: number;
  children: MenuChild[];
  permissions: number[] | string[];
}

interface MenuChild {
  label: string;
  route: string | null;
  icon: string | null;
  sort_order: number;
  children: MenuChild[];
  permissions: number[];
}

// Main interface combining everything
export interface MeResponse {
  user: User;
  menus: Menu[];
  permissions: string[];
}
