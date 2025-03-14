import type { Metadata } from "next";
import ProfileComponent from "@/templates/profile";

export const metadata: Metadata = {
  title: "Perfil",
  description: "Perfil",
};
export default function ProfileConfig() {
  return <ProfileComponent />;
}
