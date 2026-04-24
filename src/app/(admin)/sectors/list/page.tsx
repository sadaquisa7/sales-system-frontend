import SectorsListComponent from "@/templates/catalog/sectors/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectores - Listado",
  description: "Sectores - Listado",
};

export default function List() {
  return <SectorsListComponent />;
}
