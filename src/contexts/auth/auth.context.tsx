"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Cookies from "js-cookie"; // Librería para manejar cookies en el cliente
import { AuthContextValue, User } from "@interfaces/auth/auth.interface";
import { MenuItem } from "@interfaces/components/layouts/admin/vertical/item.interface";

// Crear contexto con valor inicial undefined
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Función para obtener cookies
  const getCookie = (name: string) => {
    const cookie = Cookies.get(name);
    return cookie ? JSON.parse(cookie) : null;
  };

  const [user, setUser] = useState<User | null>(getCookie("user"));
  const [menus, setMenus] = useState<MenuItem[]>(getCookie("menus") || []);
  const [permissions, setPermissions] = useState<string[]>(
    getCookie("permissions") || []
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
  const value: AuthContextValue = {
    user,
    menus,
    permissions,
    setUser,
    setMenus,
    setPermissions,
    logout,
  };

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
