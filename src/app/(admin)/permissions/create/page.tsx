import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permisos - Crear",
  description: "Permisos - Crear",
};
export default function Create() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <label htmlFor="s">Permissions create</label>
    </div>
  );
}
