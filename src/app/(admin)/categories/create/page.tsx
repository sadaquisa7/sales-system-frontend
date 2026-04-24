import CreateComponent from "@/templates/catalog/categories/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorías - Crear",
  description: "Categorías - Crear",
};

export default function Create() {
  return <CreateComponent />;
}
