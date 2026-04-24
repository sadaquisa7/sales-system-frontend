import ProductsListComponent from "@/templates/products/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos - Listado",
  description: "Productos - Listado",
};

export default function List() {
  return <ProductsListComponent />;
}
