"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Permission } from "@interfaces/services/security/permissions.interface";
import {
  NewForm,
  FormSchema,
} from "@validations/security/permissions/create.validate";
import { ConfigForm } from "@configs/security/permissions/edit.config";
interface PropsPagesEdit {
  permission: Permission;
}

export default function EditPermission({ permission }: PropsPagesEdit) {
  const configForm = ConfigForm(permission);
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
