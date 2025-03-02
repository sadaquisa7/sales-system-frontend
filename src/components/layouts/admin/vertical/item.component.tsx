// components/MenuItemNavVertical.tsx
"use client";

import { useState } from "react";
import MenuListVertical from "./list.component";
import {
  MenuItem,
  MenuItemVerticalProps,
} from "@interfaces/components/layouts/admin/vertical/item.interface";
import { menuItemVariant } from "./variants/item.variants";

const MenuItemNavVertical: React.FC<MenuItemVerticalProps> = ({
  item: initialItem,
  isCollapsed = false,
  onMenuClick,
}) => {
  const [item, setItem] = useState({
    ...initialItem,
    show: initialItem.show || false,
  });

  const handleMenuClick = () => {
    if (item.children && item.children.length > 0) {
      if (!isCollapsed) {
        setItem((prev) => ({ ...prev, show: !prev.show }));
      }
    } else if (onMenuClick) {
      onMenuClick(item);
    }
  };

  const handleSubMenuClick = (subItem: MenuItem) => {
    if (onMenuClick) {
      onMenuClick(subItem);
    }
  };

  const hasChildren = !!item.children && item.children.length > 0;
  const isActive = !hasChildren && item.show;
  const isExpanded = hasChildren && item.show;

  // Generate classes for all slots
  const {
    base: baseClass,
    content: contentClass,
    chevron: chevronClass,
    submenu: submenuClass,
  } = menuItemVariant({
    hasChildren,
    isActive,
    isExpanded,
    isCollapsed,
  });

  return (
    <>
      <li className={baseClass()} onClick={handleMenuClick}>
        <div className={contentClass()}>
          {item.icon && <i className={`${item.icon} !text-base`} />}
          {!isCollapsed && <span>{item.label}</span>}
        </div>
        {!isCollapsed && hasChildren && (
          <i
            className={`${chevronClass}  pi ${
              item.show ? "pi-angle-up" : "pi-angle-down"
            }`}
          />
        )}
      </li>
      {hasChildren && item.show && !isCollapsed && (
        <MenuListVertical
          className={submenuClass()}
          menu={item.children}
          isCollapsed={isCollapsed}
          onMenuClick={handleSubMenuClick}
        />
      )}
    </>
  );
};

export default MenuItemNavVertical;
