import CategoriesListComponent from "@/templates/catalog/categories/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorías - Listado",
  description: "Categorías - Listado",
};

export default function List() {
  return <CategoriesListComponent />;
}
