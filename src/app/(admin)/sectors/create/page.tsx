import CreateComponent from "@/templates/catalog/sectors/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectores - Crear",
  description: "Sectores - Crear",
};

export default function Create() {
  return <CreateComponent />;
}
