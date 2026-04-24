"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/catalog/categories/create.validate";
import { ConfigForm } from "@configs/catalog/categories/create.config";
import { useRouter } from "next/navigation";

export default function CreateCategory() {
  const router = useRouter();
  const onSuccess = () => { router.push("/categories/list"); };
  const configForm = ConfigForm;
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
