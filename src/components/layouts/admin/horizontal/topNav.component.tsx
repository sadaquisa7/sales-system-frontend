"use client";
import { MenuItem } from "@/interfaces/components/layouts/admin/horizontal/item.interface";
import MenuListHorizontal from "./list.component";
import { Avatar } from "primereact/avatar";
import { menuHorizontal } from "@constants/horizontalMenu.constants";
export default function TopNav() {
  const handleUserClick = (item: MenuItem) => {
    console.log("ssss ==>", item);
  };
  return (
    <header className="sticky text-white top-0 z-[1000] flex h-16 flex-shrink-0 bg-black items-center justify-between px-4 sm:px-6 lg:px-8">
      <div>Logo</div>
      <MenuListHorizontal menu={menuHorizontal} onMenuClick={handleUserClick}>
        <Avatar
          label=""
          icon="pi pi-user"
          size="large"
          shape="circle"
          className="bg-black"
        />
        Sandro Quispe
      </MenuListHorizontal>
    </header>
  );
}
