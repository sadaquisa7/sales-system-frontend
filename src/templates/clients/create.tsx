"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/clients/create.validate";
import { ConfigForm } from "@configs/clients/create.config";
import { useRouter } from "next/navigation";

export default function CreateClient() {
  const router = useRouter();
  const onSuccess = () => { router.push("/clients/list"); };
  const configForm = ConfigForm;
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
