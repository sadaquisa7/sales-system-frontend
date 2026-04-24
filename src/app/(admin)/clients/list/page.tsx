import ClientsListComponent from "@/templates/clients/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes - Listado",
  description: "Clientes - Listado",
};

export default function List() {
  return <ClientsListComponent />;
}
