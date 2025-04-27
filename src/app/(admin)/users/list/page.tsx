import SecurityUsersComponent from "@/templates/security/users/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios - Listado",
  description: "Usuarios - Listado",
};

export default function List() {
  return <SecurityUsersComponent />;
}
