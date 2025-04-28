"use client";
import FormComponent from "@components/dynamic/forms/form";
import {
  NewForm,
  FormSchema,
} from "@validations/security/permissions/create.validate";
import { ConfigForm } from "@configs/security/permissions/create.config";
import { useRouter } from "next/navigation";

export default function CreatePermission() {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/permissions/list");
  };
  const configForm = ConfigForm;
  if (configForm.info) {
    configForm.info.onSuccess = onSuccess;
  }
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
