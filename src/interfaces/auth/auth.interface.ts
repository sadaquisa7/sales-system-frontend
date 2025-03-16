import { MenuItem } from "@interfaces/components/layouts/admin/vertical/item.interface";
import { User } from "@interfaces/services/user/user.interface";
export interface AuthContextValue {
  user: User | null;
  menus: MenuItem[];
  permissions: string[];
  setUser: (user: User | null) => void;
  setMenus: (menus: MenuItem[]) => void;
  setPermissions: (permissions: string[]) => void;
  logout: () => void;
}
