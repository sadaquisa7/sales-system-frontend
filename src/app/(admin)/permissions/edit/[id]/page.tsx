import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permisos - Editar",
  description: "Permisos - Editar",
};

export default function Edit() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <label htmlFor="s">Permissions edit</label>
    </div>
  );
}
