import CreateComponent from "@/templates/services/create";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios - Crear",
  description: "Servicios - Crear",
};

export default function Create() {
  return <CreateComponent />;
}
