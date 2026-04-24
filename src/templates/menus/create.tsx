"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/menus/create.validate";
import { ConfigForm } from "@configs/menus/create.config";
import { useRouter } from "next/navigation";

export default function CreateMenu() {
  const router = useRouter();
  const onSuccess = () => { router.push("/menus/list"); };
  const configForm = ConfigForm;
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
