import type { Metadata } from "next";
import TopNav from "@/components/layouts/admin/horizontal/topNav.component";
import SideMenu from "@/components/layouts/admin/vertical/sideMenu.component";
import { IsOpenMenuMobileProvider } from "@contexts/menu/isOpenMobile";
import { AuthProvider } from "@contexts/auth/auth.context";
import {
  getAllCookies,
  CookieMap,
} from "@helpers/proccessCookie/proccessData.helper";

export const metadata: Metadata = {
  title: "Admin",
  description: "Generated Admin",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStoreServer: CookieMap = await getAllCookies();
  return (
    <AuthProvider cookieStoreServer={cookieStoreServer}>
      <IsOpenMenuMobileProvider>
        <TopNav />
        <div className="flex">
          <SideMenu />
          <section className="w-screen">
            <section className="p-2 lg:p-4 overflow-y-auto h-screen-navbar">
              {children}
            </section>
          </section>
        </div>
      </IsOpenMenuMobileProvider>
    </AuthProvider>
  );
}
