"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Role } from "@interfaces/services/security/roles.interface";
import {
  NewForm,
  FormSchema,
} from "@validations/security/roles/create.validate";
import { ConfigForm } from "@configs/security/roles/edit.config";
import { useRouter } from "next/navigation";
interface PropsPagesEdit {
  item: Role;
}
export default function EditPermission({ item }: PropsPagesEdit) {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/roles/list");
  };
  const configForm = ConfigForm(item);
  if (configForm.info) {
    configForm.info.onSuccess = onSuccess;
  }
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
