import { User } from "@/interfaces/services/security/users.interface";
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
