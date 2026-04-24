"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/inventory/create.validate";
import { ConfigForm } from "@configs/inventory/create.config";
import { useRouter } from "next/navigation";

export default function CreateInventory() {
  const router = useRouter();
  const onSuccess = () => { router.push("/inventory/list"); };
  const configForm = ConfigForm;
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
