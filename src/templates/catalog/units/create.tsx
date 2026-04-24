"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/catalog/units/create.validate";
import { ConfigForm } from "@configs/catalog/units/create.config";
import { useRouter } from "next/navigation";

export default function CreateUnit() {
  const router = useRouter();
  const onSuccess = () => { router.push("/units/list"); };
  const configForm = ConfigForm;
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
