import { MenuItem } from "@interfaces/components/layouts/admin/vertical/item.interface";

export interface MenuListVerticalProps {
  menu?: MenuItem[];
  isCollapsed?: boolean;
  onMenuClick?: (item: MenuItem) => void;
  className?: string;
}
