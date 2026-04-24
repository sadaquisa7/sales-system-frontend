import MenusListComponent from "@/templates/menus/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menús - Listado",
  description: "Menús - Listado",
};

export default function List() {
  return <MenusListComponent />;
}
