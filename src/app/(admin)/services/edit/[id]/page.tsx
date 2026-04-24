import type { Metadata } from "next";
import { servicesService } from "@/services/services/services.service";
import EditComponent from "@/templates/services/edit";
import { getAllCookies, CookieMap } from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Servicios - Editar",
  description: "Servicios - Editar",
};

interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await servicesService.edit(parseInt(id), cookieStoreServer.session_token);
  return <EditComponent item={data} />;
}
