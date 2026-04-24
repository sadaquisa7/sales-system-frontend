"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Service } from "@interfaces/services/services/services.interface";
import { NewForm, FormSchema } from "@validations/services/create.validate";
import { ConfigForm } from "@configs/services/edit.config";
import { useRouter } from "next/navigation";

interface Props {
  item: Service;
}
export default function EditService({ item }: Props) {
  const router = useRouter();
  const onSuccess = () => { router.push("/services/list"); };
  const configForm = ConfigForm(item);
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
