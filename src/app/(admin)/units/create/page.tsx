import CreateComponent from "@/templates/catalog/units/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unidades - Crear",
  description: "Unidades - Crear",
};

export default function Create() {
  return <CreateComponent />;
}
