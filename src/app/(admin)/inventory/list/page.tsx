import InventoryListComponent from "@/templates/inventory/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventario - Movimientos",
  description: "Inventario - Movimientos",
};

export default function List() {
  return <InventoryListComponent />;
}
