"use client";
import FormComponent from "@components/dynamic/forms/form";
import { Product } from "@interfaces/services/products/products.interface";
import { NewForm, FormSchema } from "@validations/products/create.validate";
import { ConfigForm } from "@configs/products/edit.config";
import { useRouter } from "next/navigation";

interface Props {
  item: Product;
}
export default function EditProduct({ item }: Props) {
  const router = useRouter();
  const onSuccess = () => { router.push("/products/list"); };
  const configForm = ConfigForm(item);
  if (configForm.info) configForm.info.onSuccess = onSuccess;
  return <FormComponent<NewForm> config={configForm} schema={FormSchema} />;
}
