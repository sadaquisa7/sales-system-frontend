"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import {
  ToastContextValue,
  Toast,
  TOAST_DETAIL,
} from "@interfaces/components/form/toasts/toast.interface";
import ToastComponent from "@components/form/toasts/toast.component";

// Crear el contexto con un valor por defecto vacío
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Función interna para agregar un toast
  const addToast = ({
    severity,
    summary,
    detail,
    life = 3000,
    position = "top-right", // Valor por defecto
  }: Omit<Toast, "id">) => {
    const id = Date.now(); // ID único para cada toast
    setToasts((prev) => [
      ...prev,
      { id, severity, summary, detail, life, position },
    ]);
    // Eliminar el toast después de su duración
    // setTimeout(() => {
    //   setToasts((prev) => prev.filter((toast) => toast.id !== id));
    // }, life);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Métodos específicos para cada tipo de toast
  const success = (
    detail: TOAST_DETAIL,
    life = 3000,
    position: Toast["position"] = "top-right"
  ) =>
    addToast({
      severity: "success",
      summary: "Success",
      detail,
      life,
      position,
    });

  const info = (
    detail: TOAST_DETAIL,
    life = 3000,
    position: Toast["position"] = "top-right"
  ) => addToast({ severity: "info", summary: "Info", detail, life, position });

  const warn = (
    detail: TOAST_DETAIL,
    life = 3000,
    position: Toast["position"] = "top-right"
  ) =>
    addToast({ severity: "warn", summary: "Warning", detail, life, position });

  const error = (
    detail: TOAST_DETAIL,
    life = 3000,
    position: Toast["position"] = "top-right"
  ) =>
    addToast({ severity: "error", summary: "Error", detail, life, position });

  const secondary = (
    detail: TOAST_DETAIL,
    life = 3000,
    position: Toast["position"] = "top-right"
  ) =>
    addToast({
      severity: "secondary",
      summary: "Secondary",
      detail,
      life,
      position,
    });

  const contrast = (
    detail: TOAST_DETAIL,
    life = 3000,
    position: Toast["position"] = "top-right"
  ) =>
    addToast({
      severity: "contrast",
      summary: "Contrast",
      detail,
      life,
      position,
    });

  // Valor del contexto
  const value: ToastContextValue = useMemo(
    () => ({
      toasts,
      success,
      info,
      warn,
      error,
      secondary,
      contrast,
      removeToast,
    }),
    [toasts, success, info, warn, error, secondary, contrast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      <ToastComponent />
      {children}
    </ToastContext.Provider>
  );
}

// Hook personalizado para usar el toast
export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast debe usarse dentro de un ToastProvider");
  }
  return context;
}
