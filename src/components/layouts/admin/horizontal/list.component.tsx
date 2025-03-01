"use client";

import { useState, useRef } from "react";
import MenuItemComponent from "./item.component";
import { useClickOutside } from "@/hooks/useClickOutside";
import { MenuListProps } from "@interfaces/components/layouts/admin/horizontal/list.interface";
import { menuListVariant } from "./variants/list.variant";
import { MenuItem } from "@/interfaces/components/layouts/admin/horizontal/item.interface";

const MenuListHorizontal: React.FC<MenuListProps> = ({
  menu,
  selected,
  onMenuClick,
  children,
  title,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const hideOrShowMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const handleMenuClick = (item: MenuItem) => {
    onMenuClick?.(item);
  };

  useClickOutside(menuRef, () => {
    setIsOpenMenu(false);
  });

  const { wrapper, trigger, menuList } = menuListVariant({
    isOpen: isOpenMenu,
  });

  return (
    <div ref={menuRef} onClick={hideOrShowMenu} className={wrapper()}>
      <div className={trigger()}>{children ?? title ?? ""}</div>
      <ul className={menuList()}>
        {menu.map((item, index) => (
          <MenuItemComponent
            key={index}
            item={item}
            selected={selected}
            onMenuClick={handleMenuClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuListHorizontal;
