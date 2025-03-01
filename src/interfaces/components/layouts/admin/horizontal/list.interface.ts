import { ReactNode } from "react";
import { MenuItem } from "@/interfaces/components/layouts/admin/horizontal/item.interface";

export interface MenuListProps {
  menu: MenuItem[];
  selected?: string;
  onMenuClick?: (item: MenuItem) => void;
  children?: ReactNode;
  title?: string;
}
