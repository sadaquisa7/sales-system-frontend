"use client";
import { useEffect, useRef, useCallback, useMemo } from "react";
import { Toast } from "primereact/toast";
import { useToast } from "@contexts/toast/toast.context";
import "@css/toast/toast.css";
export default function ToastComponent() {
  const toastTopLeft = useRef<Toast>(null);
  const toastTopRight = useRef<Toast>(null);
  const toastBottomLeft = useRef<Toast>(null);
  const toastBottomRight = useRef<Toast>(null);
  const toastTopCenter = useRef<Toast>(null);
  const toastBottomCenter = useRef<Toast>(null);
  const toastCenter = useRef<Toast>(null);

  const toastRefs = useMemo(
    () => ({
      "top-left": toastTopLeft,
      "top-right": toastTopRight,
      "bottom-left": toastBottomLeft,
      "bottom-right": toastBottomRight,
      "top-center": toastTopCenter,
      "bottom-center": toastBottomCenter,
      center: toastCenter,
    }),
    []
  );
  const toastRefsArray = Object.values(toastRefs);

  const { toasts, removeToast } = useToast();
  const handleRemoveToast = useCallback(removeToast, [removeToast]);

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
  }, [toasts, handleRemoveToast, toastRefs, toastRefsArray]);

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
