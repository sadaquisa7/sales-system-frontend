import type { Metadata } from "next";
import { usersService } from "@/services/security/users.service";
import EditComponent from "@/templates/security/users/edit";
import {
  getAllCookies,
  CookieMap,
} from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Usuarios - Editar",
  description: "Usuarios - Editar",
};
interface PropsPages {
  params: { id: string };
}
export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await usersService.edit(
    parseInt(id),
    cookieStoreServer.session_token
  );
  return <EditComponent item={data} />;
}
