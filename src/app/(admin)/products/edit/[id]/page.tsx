import type { Metadata } from "next";
import { productsService } from "@/services/products/products.service";
import EditComponent from "@/templates/products/edit";
import { getAllCookies, CookieMap } from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Productos - Editar",
  description: "Productos - Editar",
};

interface PropsPages {
  params: { id: string };
}

export default async function Edit({ params }: PropsPages) {
  const { id } = await params;
  const cookieStoreServer: CookieMap = await getAllCookies();
  const { data } = await productsService.edit(parseInt(id), cookieStoreServer.session_token);
  return <EditComponent item={data} />;
}
