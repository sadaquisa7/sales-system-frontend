"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Category } from "@interfaces/services/catalog/categories.interface";
import { NewForm, FormSchema } from "@validations/catalog/categories/create.validate";
import { ConfigForm } from "@configs/catalog/categories/edit.config";
import { useRouter } from "next/navigation";

interface Props {
  item: Category;
}
export default function EditCategory({ item }: Props) {
  const router = useRouter();
  const onSuccess = () => { router.push("/categories/list"); };
  const configForm = ConfigForm(item);
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
