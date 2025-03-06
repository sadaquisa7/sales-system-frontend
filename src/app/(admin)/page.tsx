import HomeTemplate from "@/templates/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Home",
  description: "Pagina home",
};
export default function Home() {
  return <HomeTemplate />;
}
