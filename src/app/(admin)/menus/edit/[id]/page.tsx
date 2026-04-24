import type { Metadata } from "next";
import { menusService } from "@/services/menus/menus.service";
import EditComponent from "@/templates/menus/edit";
import { getAllCookies, CookieMap } from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Menús - Editar",
  description: "Menús - Editar",
};

interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await menusService.edit(parseInt(id), cookieStoreServer.session_token);
  return <EditComponent item={data} />;
}
