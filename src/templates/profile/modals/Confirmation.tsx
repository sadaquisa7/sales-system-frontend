"use client";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import ConfirmDialogComponent from "@components/form/modals/confirmDialog.component";

const ConfirmationModal = forwardRef((_props, ref) => {
  const [visible, setVisible] = useState(false);
  const confirmationResolver = useRef<((value: boolean) => void) | null>(null);

  useImperativeHandle(ref, () => ({
    showConfirmation: (): Promise<boolean> => {
      return new Promise((resolve) => {
        confirmationResolver.current = resolve;
        setVisible(true);
      });
    },
  }));

  const accept = () => {
    setVisible(false);
    confirmationResolver.current?.(true);
  };

  const reject = () => {
    setVisible(false);
    confirmationResolver.current?.(false);
  };

  return (
    <ConfirmDialogComponent
      visible={visible}
      header="Confirmación"
      message="¿Estás seguro que quieres modificar?"
      icon="pi pi-exclamation-triangle"
      accept={accept}
      reject={reject}
    />
  );
});

export default ConfirmationModal;
