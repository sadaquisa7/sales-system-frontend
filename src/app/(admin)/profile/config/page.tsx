import type { Metadata } from "next";
import ProfileConfigComponent from "@templates/profile/config";
export const metadata: Metadata = {
  title: "Perfil - Configuraciones",
  description: "Perfil - Configuraciones",
};
export default function ProfileConfig() {
  return <ProfileConfigComponent />;
}
