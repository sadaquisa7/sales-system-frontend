import ServicesListComponent from "@/templates/services/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios - Listado",
  description: "Servicios - Listado",
};

export default function List() {
  return <ServicesListComponent />;
}
