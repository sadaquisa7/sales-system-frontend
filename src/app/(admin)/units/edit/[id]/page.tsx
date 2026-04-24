import type { Metadata } from "next";
import { unitsService } from "@/services/catalog/units.service";
import EditComponent from "@/templates/catalog/units/edit";
import { getAllCookies, CookieMap } from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Unidades - Editar",
  description: "Unidades - Editar",
};

interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await unitsService.edit(parseInt(id), cookieStoreServer.session_token);
  return <EditComponent item={data} />;
}
