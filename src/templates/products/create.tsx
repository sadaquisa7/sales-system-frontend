"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/products/create.validate";
import { ConfigForm } from "@configs/products/create.config";
import { useRouter } from "next/navigation";

export default function CreateProduct() {
  const router = useRouter();
  const onSuccess = () => { router.push("/products/list"); };
  const configForm = ConfigForm;
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
