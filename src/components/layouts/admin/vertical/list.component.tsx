import MenuItemVertical from "./item.component";
import { MenuListVerticalProps } from "@interfaces/components/layouts/admin/vertical/list.interface";
const MenuListVertical: React.FC<MenuListVerticalProps> = ({
  menu = [],
  isCollapsed = false,
  onMenuClick,
  className,
}) => {
  const handleMenuClick = (item: any) => {
    if (onMenuClick) {
      onMenuClick(item);
    }
  };

  return (
    <ul className={`flex flex-1 flex-col gap-y-2 ${className}`}>
      {menu.map((item, index) => (
        <MenuItemVertical
          key={index}
          item={item}
          isCollapsed={isCollapsed}
          onMenuClick={handleMenuClick}
        />
      ))}
    </ul>
  );
};

export default MenuListVertical;
