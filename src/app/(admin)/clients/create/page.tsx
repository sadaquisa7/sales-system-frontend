import CreateComponent from "@/templates/clients/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes - Crear",
  description: "Clientes - Crear",
};

export default function Create() {
  return <CreateComponent />;
}
