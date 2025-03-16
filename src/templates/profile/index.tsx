"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/profile/profile.validation";
import { ConfigForm } from "@configs/forms/profile/profile.config";
import { useAuth } from "@contexts/auth/auth.context";
import ModalConfirmation from "./modals/Confirmation";
import ModalVerifyPassword from "./modals/VerifyPassword";
import { useRef } from "react";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { UserRequest } from "@interfaces/services/auth/login.interface";
import { generateUsername } from "@utils/auth/user.utils";

export default function ProfileComponent() {
  const { user, setUser } = useAuth();

  const confirmationRef = useRef<{
    showConfirmation: () => Promise<boolean>;
  } | null>(null);
  const verifyRef = useRef<{
    showVerify: () => Promise<boolean>;
  } | null>(null);

  const onAfterValidation = async (): Promise<boolean | undefined | null> => {
    const result = await confirmationRef.current?.showConfirmation();
    if (result) return await verifyRef.current?.showVerify();
    return false;
  };

  const onSuccess = (response: ApiResponse<UserRequest>) => {
    const { data } = response;
    if (data && user) {
      const updatedUser = {
        ...user,
        first_name: data.first_name,
        last_name: data.last_name,
        ...generateUsername(data.first_name, data.last_name),
      };
      setUser(updatedUser);
    }
  };
  const configForm = ConfigForm<UserRequest>(
    user,
    onAfterValidation,
    onSuccess
  );
  return (
    <>
      <FormComponent<NewForm> config={configForm} schema={FormSchema} />
      <ModalConfirmation ref={confirmationRef} />
      <ModalVerifyPassword ref={verifyRef} />
    </>
  );
}
