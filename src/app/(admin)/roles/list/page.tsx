import SecurityRolesComponent from "@/templates/security/roles/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roles - Listado",
  description: "Roles - Listado",
};

export default function List() {
  return <SecurityRolesComponent />;
}
