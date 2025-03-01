import React from "react";
import { MenuItemProps } from "@/interfaces/components/layouts/admin/horizontal/item.interface";
import { menuItemVariant } from "./variants/item.variant";

const MenuItemComponent: React.FC<MenuItemProps> = ({
  item,
  selected,
  onMenuClick,
}) => {
  const menuClick = () => onMenuClick(item);

  const { base, iconWrapper, divider } = menuItemVariant({
    selected: !!item.key && selected === item.key,
  });

  if (item.isDivider) {
    return <hr className={divider()} />;
  }

  return item.label ? (
    <li className={base()} onClick={menuClick}>
      <div className="flex items-center">
        {(item.icon || item.component) && (
          <span className={iconWrapper()}>
            {item.icon && <i className={`transition-colors ${item.icon}`} />}
            {item.component &&
              React.createElement(item.component, {
                className: "transition-colors",
              })}
          </span>
        )}
        <span className="px-2 transition-colors">{item.label}</span>
      </div>
    </li>
  ) : null;
};

export default MenuItemComponent;
