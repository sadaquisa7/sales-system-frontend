"use client";
import FormComponent from "@components/dynamic/forms/form";
import {
  NewForm,
  FormSchema,
} from "@validations/security/roles/create.validate";
import { ConfigForm } from "@configs/security/roles/create.config";
import { useRouter } from "next/navigation";

export default function CreateRole() {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/roles/list");
  };
  const configForm = ConfigForm;
  if (configForm.info) {
    configForm.info.onSuccess = onSuccess;
  }
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
