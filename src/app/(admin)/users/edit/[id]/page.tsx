import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios - Editar",
  description: "Usuarios - Editar",
};

export default function Edit() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <label htmlFor="s">User edit</label>
    </div>
  );
}
