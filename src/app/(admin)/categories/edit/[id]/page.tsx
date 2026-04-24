import type { Metadata } from "next";
import { categoriesService } from "@/services/catalog/categories.service";
import EditComponent from "@/templates/catalog/categories/edit";
import { getAllCookies, CookieMap } from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Categorías - Editar",
  description: "Categorías - Editar",
};

interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await categoriesService.edit(parseInt(id), cookieStoreServer.session_token);
  return <EditComponent item={data} />;
}
