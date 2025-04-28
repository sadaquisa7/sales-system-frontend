"use client";
import FormComponent from "@components/dynamic/forms/form";
import { User } from "@interfaces/services/security/users.interface";
import { NewForm, FormSchema } from "@validations/security/users/edit.validate";
import { ConfigForm } from "@configs/security/users/edit.config";
import { useRouter } from "next/navigation";

interface PropsPagesEdit {
  item: User;
}

export default function EditUser({ item }: PropsPagesEdit) {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/users/list");
  };
  const configForm = ConfigForm(item);
  if (configForm.info) {
    configForm.info.onSuccess = onSuccess;
  }
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
