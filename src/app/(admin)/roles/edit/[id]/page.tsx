import type { Metadata } from "next";
import { rolesService } from "@/services/security/roles.service";
import EditComponent from "@/templates/security/roles/edit";
import {
  getAllCookies,
  CookieMap,
} from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Roles - Editar",
  description: "Roles - Editar",
};
interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await rolesService.edit(
    parseInt(id),
    cookieStoreServer.session_token
  );
  return <EditComponent item={data} />;
}
