"use client";
import FormComponent from "@components/dynamic/forms/form";
import { NewForm, FormSchema } from "@validations/services/create.validate";
import { ConfigForm } from "@configs/services/create.config";
import { useRouter } from "next/navigation";

export default function CreateService() {
  const router = useRouter();
  const onSuccess = () => { router.push("/services/list"); };
  const configForm = ConfigForm;
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
