import LoginComponent from "@templates/login/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Pagina para Iniciar Sesión",
};

export default function Login() {
  return <LoginComponent />;
}
