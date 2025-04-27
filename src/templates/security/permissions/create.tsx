"use client";
import FormComponent from "@components/dynamic/forms/form";
import {
  NewForm,
  FormSchema,
} from "@validations/security/permissions/create.validate";
import { ConfigForm } from "@configs/security/permissions/create.config";

export default function CreatePermission() {
  return <FormComponent<NewForm> config={ConfigForm} schema={FormSchema} />;
}
