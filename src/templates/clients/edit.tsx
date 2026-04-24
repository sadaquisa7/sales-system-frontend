"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Client } from "@interfaces/services/clients/clients.interface";
import { NewForm, FormSchema } from "@validations/clients/create.validate";
import { ConfigForm } from "@configs/clients/edit.config";
import { useRouter } from "next/navigation";

interface Props {
  item: Client;
}
export default function EditClient({ item }: Props) {
  const router = useRouter();
  const onSuccess = () => { router.push("/clients/list"); };
  const configForm = ConfigForm(item);
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
