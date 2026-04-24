"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Menu } from "@interfaces/services/menus/menus.interface";
import { NewForm, FormSchema } from "@validations/menus/create.validate";
import { ConfigForm } from "@configs/menus/edit.config";
import { useRouter } from "next/navigation";

interface Props {
  item: Menu;
}
export default function EditMenu({ item }: Props) {
  const router = useRouter();
  const onSuccess = () => { router.push("/menus/list"); };
  const configForm = ConfigForm(item);
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
