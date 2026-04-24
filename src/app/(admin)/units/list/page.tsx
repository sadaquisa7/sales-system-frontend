import UnitsListComponent from "@/templates/catalog/units/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unidades - Listado",
  description: "Unidades - Listado",
};

export default function List() {
  return <UnitsListComponent />;
}
