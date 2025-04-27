import SecuritySessionsComponent from "@/templates/security/sessions/list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions - Listado",
  description: "Sessions - Listado",
};

export default function List() {
  return <SecuritySessionsComponent />;
}
