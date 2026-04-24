"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Sector } from "@interfaces/services/catalog/sectors.interface";
import { NewForm, FormSchema } from "@validations/catalog/sectors/create.validate";
import { ConfigForm } from "@configs/catalog/sectors/edit.config";
import { useRouter } from "next/navigation";

interface Props {
  item: Sector;
}
export default function EditSector({ item }: Props) {
  const router = useRouter();
  const onSuccess = () => { router.push("/sectors/list"); };
  const configForm = ConfigForm(item);
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
