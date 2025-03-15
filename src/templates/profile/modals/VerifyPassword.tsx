"use client";
import {
  NewForm,
  FormSchema,
} from "@validations/profile/verifyPassword/verifyPassword.validation";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { useAuth } from "@contexts/auth/auth.context";
import DialogComponent from "@components/form/modals/dialog.component";
import { useState, useRef } from "react";
import ButtonFormComponent from "@/components/form/buttons/button.component";
import FormComponent from "@components/dynamic/forms/form";
import { ConfigForm } from "@configs/forms/profile/verifyPassword.config";

export default function ProfileComponent() {
  const [visible, setVisible] = useState(true);
  const verifyResolver = useRef<((value: boolean) => void) | null>(null);
  // const formRef = useRef<FormHandle | null>(null);

  const showVerify = (): Promise<boolean> => {
    return new Promise((resolve) => {
      verifyResolver.current = resolve;
      setVisible(true);
    });
  };

  const accept = () => {
    setVisible(false);
    verifyResolver.current?.(true);
  };

  const reject = () => {
    setVisible(false);
    // verifyResolver.current?.(false);
  };

  const footerContent = (
    <div>
      <ButtonFormComponent
        label="Cancelar"
        icon="pi pi-times"
        onClick={() => reject()}
        className="p-button-text"
      />
      <ButtonFormComponent
        label="Verificar"
        icon="pi pi-check"
        onClick={() => accept()}
      />
    </div>
  );

  return (
    <DialogComponent
      visible={visible}
      header="Introduce tu contraseña para continuar"
      style={{ width: "30vw" }}
      footer={footerContent}
    >
      <FormComponent<NewForm> config={ConfigForm} schema={FormSchema} />
    </DialogComponent>
  );
}
