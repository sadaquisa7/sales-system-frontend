"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { OpenMenuMobileContextValue } from "@interfaces/components/layouts/admin/vertical/openMenuMobile.interface";

// Crea el contexto con undefined como valor por defecto
const MenuContext = createContext<OpenMenuMobileContextValue | undefined>(
  undefined
);

export function IsOpenMenuMobileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  // Función para alternar el estado
  const toggleMenu = () => setIsOpenMenuMobile((prev) => !prev);

  // Función para establecer el estado explícitamente
  const setMenuOpen = (state: boolean) => setIsOpenMenuMobile(state);

  // Valor del contexto
  const value: OpenMenuMobileContextValue = {
    isOpenMenuMobile,
    toggleMenu,
    setMenuOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

// Hook personalizado para usar el contexto
export function useIsOpenMenuMobile(): OpenMenuMobileContextValue {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
