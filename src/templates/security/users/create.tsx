"use client";
import FormComponent from "@components/dynamic/forms/form";
import {
  NewForm,
  FormSchema,
} from "@validations/security/users/create.validate";
import { ConfigForm } from "@configs/security/users/create.config";
import { useRouter } from "next/navigation";

export default function CreateUser() {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/users/list");
  };
  const configForm = ConfigForm;
  if (configForm.info) {
    configForm.info.onSuccess = onSuccess;
  }
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
