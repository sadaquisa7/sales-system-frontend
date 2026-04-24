"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Unit } from "@interfaces/services/catalog/units.interface";
import { NewForm, FormSchema } from "@validations/catalog/units/create.validate";
import { ConfigForm } from "@configs/catalog/units/edit.config";
import { useRouter } from "next/navigation";

interface Props {
  item: Unit;
}
export default function EditUnit({ item }: Props) {
  const router = useRouter();
  const onSuccess = () => { router.push("/units/list"); };
  const configForm = ConfigForm(item);
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
