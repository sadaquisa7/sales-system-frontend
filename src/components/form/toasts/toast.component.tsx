"use client";
import { useEffect, useRef, useCallback } from "react";
import { Toast } from "primereact/toast";
import { useToast } from "@contexts/toast/toast.context";
import "@css/toast/toast.css";
export default function ToastComponent() {
  const toastRefs = {
    "top-left": useRef<Toast>(null),
    "top-right": useRef<Toast>(null),
    "bottom-left": useRef<Toast>(null),
    "bottom-right": useRef<Toast>(null),
    "top-center": useRef<Toast>(null),
    "bottom-center": useRef<Toast>(null),
    center: useRef<Toast>(null),
  };

  const { toasts, removeToast } = useToast();
  const handleRemoveToast = useCallback(removeToast, []);

  useEffect(() => {
    if (toasts.length > 0) {
      toasts.forEach((toast) => {
        const { severity, summary, life } = toast;
        const ref = toastRefs[toast.position];
        let detail = "";
        if (typeof toast.detail === "string") {
          detail = toast.detail;
        } else if (typeof toast.detail === "object") {
          detail = JSON.stringify(toast.detail);
        } else if (toast.detail !== undefined && detail !== null) {
          detail = String(toast.detail);
        }
        ref.current?.show({
          severity,
          summary,
          detail,
          life,
          closable: true, // Permitir cerrar manualmente
          sticky: false, // Desaparece automáticamente
          id: `toast-${toast.id}`,
        });
        handleRemoveToast(toast.id);
      });
    }
  }, [toasts, handleRemoveToast, Object.values(toastRefs)]);

  return (
    <>
      {Object.entries(toastRefs).map(([position, ref]) => (
        <Toast
          key={position}
          ref={ref}
          position={
            position as
              | "top-left"
              | "top-right"
              | "bottom-left"
              | "bottom-right"
              | "top-center"
              | "bottom-center"
              | "center"
              | undefined
          }
        />
      ))}
    </>
  );
}
