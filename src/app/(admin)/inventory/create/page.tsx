import CreateComponent from "@/templates/inventory/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventario - Registrar Movimiento",
  description: "Inventario - Registrar Movimiento",
};

export default function Create() {
  return <CreateComponent />;
}
