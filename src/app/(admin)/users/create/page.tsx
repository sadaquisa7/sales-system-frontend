import type { Metadata } from "next";
import CreateComponent from "@/templates/security/users/create";

export const metadata: Metadata = {
  title: "Usuarios - Crear",
  description: "Usuarios - Crear",
};

export default function UsersCreate() {
  return <CreateComponent />;
}
