import type { Metadata } from "next";
import CreateComponent from "@/templates/security/roles/create";

export const metadata: Metadata = {
  title: "Roles - Crear",
  description: "Roles - Crear",
};
export default function Create() {
  return <CreateComponent />;
}
