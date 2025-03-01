import type { Metadata } from "next";
import TopNav from "@/components/layouts/admin/horizontal/topNav.component";
import SideMenu from "@/components/layouts/admin/vertical/sideMenu.component";

export const metadata: Metadata = {
  title: "Admin",
  description: "Generated Admin",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      <div className="flex">
        <SideMenu />
        <section className="w-screen">
          <section className="p-2 lg:p-4 overflow-y-auto h-screen-navbar-section">
            {children}
          </section>
        </section>
      </div>
    </>
  );
}
