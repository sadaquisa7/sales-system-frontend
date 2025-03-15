"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/profile/profile.validation";
import { ConfigForm } from "@configs/forms/profile/profile.config";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { LoginResponse } from "@/interfaces/services/auth/login.interface";
import { useAuth } from "@contexts/auth/auth.context";
import ModalConfirmation from "./modals/Confirmation";
import ModalVerifyPassword from "./modals/VerifyPassword";
import { useRef } from "react";

export default function ProfileComponent() {
  const { user } = useAuth();
  const configForm = ConfigForm(user);
  const confirmationRef = useRef<{
    showConfirmation: () => Promise<boolean>;
  } | null>(null);
  const verifyRef = useRef<{
    showVerify: () => Promise<boolean>;
  } | null>(null);
  const onAfterValidation = async (
    data: NewForm,
    errors: Record<string, string[]>
  ): Promise<boolean | undefined | null> => {
    const result = await confirmationRef.current?.showConfirmation();
    const verify = await verifyRef.current?.showVerify();

    return result && verify;
  };

  if (configForm.info) {
    configForm.info.onAfterValidation = onAfterValidation;
  }
  return (
    <>
      <FormComponent<NewForm> config={configForm} schema={FormSchema} />
      <ModalConfirmation ref={confirmationRef} />
      <ModalVerifyPassword />
    </>
  );
}
