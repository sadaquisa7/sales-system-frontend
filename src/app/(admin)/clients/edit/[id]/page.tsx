import type { Metadata } from "next";
import { clientsService } from "@/services/clients/clients.service";
import EditComponent from "@/templates/clients/edit";
import { getAllCookies, CookieMap } from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Clientes - Editar",
  description: "Clientes - Editar",
};

interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await clientsService.edit(parseInt(id), cookieStoreServer.session_token);
  return <EditComponent item={data} />;
}
