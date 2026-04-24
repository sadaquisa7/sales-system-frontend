"use client";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface IdleWarningModalProps {
  visible: boolean;
  countdownSeconds: number;
  onContinue: () => void;
  onLogout: () => void;
}

export default function IdleWarningModal({
  visible,
  countdownSeconds,
  onContinue,
  onLogout,
}: IdleWarningModalProps) {
  const [remaining, setRemaining] = useState(countdownSeconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!visible) {
      setRemaining(countdownSeconds);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setRemaining(countdownSeconds);
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible, countdownSeconds]);

  const footer = (
    <div className="flex justify-end gap-2">
      <Button
        label="Cerrar sesión"
        icon="pi pi-sign-out"
        severity="danger"
        outlined
        onClick={onLogout}
      />
      <Button
        label="Continuar sesión"
        icon="pi pi-check"
        onClick={onContinue}
        autoFocus
      />
    </div>
  );

  return (
    <Dialog
      visible={visible}
      header="Sesión por expirar"
      footer={footer}
      closable={false}
      draggable={false}
      resizable={false}
      modal
      style={{ width: "420px" }}
      onHide={onContinue}
    >
      <div className="flex flex-col items-center gap-4 py-2">
        <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl" />
        <p className="text-center text-gray-700">
          Tu sesión cerrará por inactividad en
        </p>
        <span className="text-4xl font-bold text-red-500">{remaining}s</span>
        <p className="text-center text-sm text-gray-500">
          ¿Deseas continuar con tu sesión?
        </p>
      </div>
    </Dialog>
  );
}
