"use client";
import {
  NewForm,
  FormSchema,
} from "@validations/profile/verifyPassword/verifyPassword.validation";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { useAuth } from "@contexts/auth/auth.context";
import DialogComponent from "@components/form/modals/dialog.component";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import FormComponent from "@components/dynamic/forms/form";
import { ConfigForm } from "@configs/forms/profile/verifyPassword.config";

const VerifyPasswordModal = forwardRef((_props, ref) => {
  const [visible, setVisible] = useState(false);
  const verifyResolver = useRef<((value: boolean) => void) | null>(null);

  const accept = () => {
    setVisible(false);
    verifyResolver.current?.(true);
  };

  const onCancel = () => {
    setVisible(false);
    verifyResolver.current?.(false);
  };

  const configForm = ConfigForm(onCancel, accept);

  useImperativeHandle(ref, () => ({
    showVerify: (): Promise<boolean> => {
      return new Promise((resolve) => {
        verifyResolver.current = resolve;
        setVisible(true);
      });
    },
  }));

  return (
    <DialogComponent
      visible={visible}
      header="Introduce tu contraseña para continuar"
      style={{ width: "30vw" }}
      onHide={() => setVisible(false)}
    >
      <FormComponent<NewForm> config={configForm} schema={FormSchema} />
    </DialogComponent>
  );
});

export default VerifyPasswordModal;
