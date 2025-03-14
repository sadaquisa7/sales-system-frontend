"use client";
import { MenuItem } from "@/interfaces/components/layouts/admin/horizontal/item.interface";
import MenuListHorizontal from "./list.component";
import { Avatar } from "primereact/avatar";
import { menuHorizontal } from "@constants/horizontalMenu.constants";
import { useIsOpenMenuMobile } from "@contexts/menu/isOpenMobile";
import Cookies from "js-cookie";
import { useToast } from "@contexts/toast/toast.context";
import { useLoading } from "@contexts/loading/loading.context";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { authService } from "@/services/auth/auth.service";
import { useAuth } from "@contexts/auth/auth.context";

export default function TopNav() {
  const { isOpenMenuMobile, toggleMenu } = useIsOpenMenuMobile();
  const { success, error } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const router = useRouter();
  const NAME_SESSION =
    process.env.NEXT_PUBLIC_COOKIE_NAME_SESSION || "session_token";
  const { logout, user } = useAuth();

  const handleUserClick = async (item: MenuItem) => {
    console.log("handleUserClick ==>", item);
    if (item.key === "logout") {
      await logoutLayout();
    } else if (item.key === "configuration") {
      router.push("/profile/config");
    } else if (item.key === "profile") {
      router.push("/profile");
    }
  };

  const logoutLayout = async () => {
    showLoading();
    try {
      const response: ApiResponse = await authService.logout();
      const { message, status } = response;
      if (status) {
        Cookies.remove(NAME_SESSION);
        logout();
        success(message);
        router.push("/login");
      } else {
        error(message);
      }
    } catch (e) {
      console.error("Error calling service:", e);
      error("An unexpected error occurred");
    } finally {
      hideLoading();
    }
  };

  return (
    <header className="sticky text-white top-0 z-[1000] flex h-16 flex-shrink-0 bg-black items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center gap-2">
        <div className="lg:block hidden">Logo</div>
        <div onClick={toggleMenu} className="lg:hidden block">
          <i
            className={`pi  ${
              isOpenMenuMobile ? "pi-times" : "pi-align-justify"
            } !text-2xl`}
          ></i>
        </div>
      </div>
      <MenuListHorizontal menu={menuHorizontal} onMenuClick={handleUserClick}>
        <Avatar
          label={(user && user.abbreviation) || ""}
          icon="pi pi-user"
          size="large"
          shape="circle"
          className="bg-black"
        />
        {user && user.username}
      </MenuListHorizontal>
    </header>
  );
}
