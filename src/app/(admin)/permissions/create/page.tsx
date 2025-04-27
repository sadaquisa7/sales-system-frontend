import type { Metadata } from "next";
import CreateComponent from "@/templates/security/permissions/create";

export const metadata: Metadata = {
  title: "Permisos - Crear",
  description: "Permisos - Crear",
};
export default function Create() {
  return <CreateComponent />;
}
