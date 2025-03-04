"use client";
import Cookies from "js-cookie";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { AuthContextValue, User } from "@interfaces/auth/auth.interface";
import { MenuItem } from "@interfaces/components/layouts/admin/vertical/item.interface";
import { CookieMap } from "@helpers/proccessCookie/proccessData.helper";

// Crear contexto con valor inicial undefined
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({
  children,
  cookieStoreServer,
}: Readonly<{
  children: ReactNode;
  cookieStoreServer: CookieMap;
}>) {
  const [user, setUser] = useState<User | null>(cookieStoreServer.user || null);
  const [menus, setMenus] = useState<MenuItem[]>(
    (cookieStoreServer.menus as MenuItem[]) || []
  );
  const [permissions, setPermissions] = useState<string[]>(
    cookieStoreServer.permissions || []
  );

  // Función para cerrar sesión
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("menus");
    Cookies.remove("permissions");
    setUser(null);
    setMenus([]);
    setPermissions([]);
  };

  // Valor del contexto
  const value: AuthContextValue = useMemo(
    () => ({
      user,
      menus,
      permissions,
      setUser,
      setMenus,
      setPermissions,
      logout,
    }),
    [user, menus, permissions, setUser, setMenus, setPermissions, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para usar AuthContext
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
