import CreateComponent from "@/templates/menus/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menús - Crear",
  description: "Menús - Crear",
};

export default function Create() {
  return <CreateComponent />;
}
