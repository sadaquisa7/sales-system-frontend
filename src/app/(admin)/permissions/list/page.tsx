import SecurityPermissionsComponent from "@templates/security/permissions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permisos - Listado",
  description: "Permisos - Listado",
};

export default function List() {
  return <SecurityPermissionsComponent />;
}
