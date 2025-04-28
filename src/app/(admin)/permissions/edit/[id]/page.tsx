import type { Metadata } from "next";
import { permissionsService } from "@/services/security/permissions.service";
import EditComponent from "@/templates/security/permissions/edit";
import {
  getAllCookies,
  CookieMap,
} from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Permisos - Editar",
  description: "Permisos - Editar",
};

interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await permissionsService.edit(
    parseInt(id),
    cookieStoreServer.session_token
  );
  return <EditComponent permission={data} />;
}
