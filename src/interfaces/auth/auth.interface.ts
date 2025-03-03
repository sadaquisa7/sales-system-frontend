import { MenuItem } from "@interfaces/components/layouts/admin/vertical/item.interface";
export interface User {
  username?: string;
  abbreviation?: string;
  email: string;
}

export interface AuthContextValue {
  user: User | null;
  menus: MenuItem[];
  permissions: string[];
  setUser: (user: User | null) => void;
  setMenus: (menus: MenuItem[]) => void;
  setPermissions: (permissions: string[]) => void;
  logout: () => void;
}
