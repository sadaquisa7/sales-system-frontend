export interface User {
  username?: string;
  abbreviation?: string;
  email: string;
}

export interface AuthContextValue {
  user: User | null;
  menus: string[];
  permissions: string[];
  setUser: (user: User | null) => void;
  setMenus: (menus: string[]) => void;
  setPermissions: (permissions: string[]) => void;
  logout: () => void;
}
