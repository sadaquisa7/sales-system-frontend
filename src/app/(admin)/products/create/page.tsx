import CreateComponent from "@/templates/products/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos - Crear",
  description: "Productos - Crear",
};

export default function Create() {
  return <CreateComponent />;
}
