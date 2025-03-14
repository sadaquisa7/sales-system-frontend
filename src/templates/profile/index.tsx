"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/profile/profile.validation";
import { ConfigForm } from "@configs/forms/profile/profile.config";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { LoginResponse } from "@/interfaces/services/auth/login.interface";
import { useAuth } from "@contexts/auth/auth.context";

export default function ProfileComponent() {
  const { user } = useAuth();
  const configForm = ConfigForm(user);
  const onAfterValidation = async (
    data: NewForm,
    errors: Record<string, string[]>
  ): Promise<boolean | undefined | null> => {
    console.log("data", data);
    console.log("errors", errors);
    return false;
  };
  configForm.info.onAfterValidation = onAfterValidation;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
