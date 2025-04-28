"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Permission } from "@interfaces/services/security/permissions.interface";
import {
  NewForm,
  FormSchema,
} from "@validations/security/permissions/create.validate";
import { ConfigForm } from "@configs/security/permissions/edit.config";
import { useRouter } from "next/navigation";
interface PropsPagesEdit {
  permission: Permission;
}
export default function EditPermission({ permission }: PropsPagesEdit) {
  const router = useRouter();
  const onSuccess = () => {
    router.push("/permissions/list");
  };
  const configForm = ConfigForm(permission);
  if (configForm.info) {
    configForm.info.onSuccess = onSuccess;
  }
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
